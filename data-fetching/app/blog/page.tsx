import React from 'react'
async function Blog() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/3",{
        next: {revalidate:50}
    }).then((res)=> res.json());
    console.log("data3 : ", res);
  return (
    <div>
      Blog
    </div>
  )
}

export default Blog
