import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export  const metadata : Metadata = {
  title:"Slug",
  description:"Slug desc"
}

function SlugPage({searchParams}) {
  console.log(JSON.stringify(searchParams,null,2))
  if(searchParams.test==="true"){
    notFound()
  }
  return (
    <div>
      SlugPage
    </div>
  )
}

export default SlugPage
