import CookiesClientRendering from '@/components/CookiesClientRendering'
import { cookies } from 'next/headers'
import React from 'react'

async function Cookies() {
    const cookie= await cookies();
  return (
    <div className='flex flex-col p-10 gap-10'>
      <h1 className='text-yellow-400 font-black text-3xl'>Cookies</h1>
      <CookiesClientRendering allCookies={cookie.getAll()} armutVarMı={cookie.has("Armut")} cookieElma={cookie.get("Elma")}/>
    </div>
  )
}

export default Cookies
