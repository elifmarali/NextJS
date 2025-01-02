import React from 'react'

async function Delay (ms:number){
  return new Promise((resolve)=> setTimeout(resolve,ms))
}

async function BlogPage() {
  await Delay(3000)
  return (
    <div>
      BlogPage
    </div>
  )
}

export default BlogPage
