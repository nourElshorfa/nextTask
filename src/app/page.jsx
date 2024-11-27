"use client";

import { table } from "console";
import Link from "next/link";
import { useEffect, useState } from "react"; 

export default function Home() {
const [post,setPost] = useState([])
const [searchTerm, setSearchTerm] = useState('');
const [filteredPosts, setFilteredPosts] = useState([]);
<time datetime="2016-10-25" suppressHydrationWarning />
  
 async function getStaticProps(){
  
  const data = await  fetch('https://jsonplaceholder.typicode.com/posts' )
  const res = await data.json()
  setPost(res)
  return res
  }
  
 
useEffect(() => {

    
    getStaticProps()
  
  }, []);

  useEffect(()  => {
    table
    const filtered = post.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredPosts(filtered);
 
  }, [searchTerm, post]); 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); 

  };
 


  return <>
      <div className="container mx-auto p-4 mb-20 mt-10">
        <input type="text" placeholder="Search by title" className="border border-gray-300 rounded-md p-2 mb-16 w-full"  value={searchTerm}
        onChange={handleSearch}/>


     

<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="post-card rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:border-blue-500 hover:border-2"
              >
                <div className="p-6 flex flex-col">
                  <h2 className="text-xl font-medium mb-2">{post.title.slice(0, 20)}</h2>
                  <Link
                    className="text-blue-500 hover:underline self-end"
                    href={`/ProductDetails/${post.id}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No results found.</p>
          )}
        </div>
      </div>
   
  </>
  
}





