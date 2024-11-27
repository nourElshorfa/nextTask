
import React from 'react'
 import Link from 'next/link'
export default async function page({params}) {

  const {id} = await params
 
  
  // <time datetime="2016-10-25" suppressHydrationWarning />


 async function getStaticProps(){
 const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
 const res = await data.json()
 return res
 }

async function getServerSideProps(){
  const data = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  const res = await data.json()
  return res
}

 const post= await getStaticProps()
//  console.log("specfic post" , post);

const comments= await getServerSideProps()
//  console.log("comments" , comments);  

  return <>
  
  <div className="container mx-auto p-4 mb-20 mt-10">
      
        
      <div className="mt-10 flex justify-center items-center p-10">
          <div
            key={post.id}
            className="p-10 post-card rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:border-red-500 hover:border-2"
          >
            <div className="p-6 flex flex-col">
              <h2 className=" my-4 text-center font-extrabold text-4xl">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </div>
            
    <div className='text-slate-600 font-extralight mb-10'>{comments.map((comment) => <div key={comment.id}>{comment.body}</div>)}
          </div>
              <Link className="text-blue-500 hover:underline w-full text-center" href={`/` }>Go Home</Link>
      </div>
    </div>
  </div>
  </>
}
