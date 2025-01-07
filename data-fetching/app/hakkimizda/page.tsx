import React from 'react'
import axios from "axios";

async function Hakkımızda() {

    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1",{
      adapter:"fetch",
      fetchOptions:{
        cache:"no-store"
      }
    });
  
    const data =  res.data;
    console.log("data : ", data);
  return (
    <div>
      Hakkımızda 321
    </div>
  )
}

export default Hakkımızda
