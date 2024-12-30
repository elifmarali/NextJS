import React from 'react'

interface ISlug{
    params:{
        slug:any
    }
}

function Slug({params}:ISlug) {
  return (
    <div>
      Optional Catch All Router : {params?.slug}
    </div>
  )
}

export default Slug
