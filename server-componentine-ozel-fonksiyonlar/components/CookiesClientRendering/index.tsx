"use client";
import React, { useEffect, useState } from 'react';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';

function CookiesClientRendering({ cookieElma,allCookies, armutVarMı }: any) {
    
    const [key, setKey] = useState();
    const [value, setValue] = useState();

/*     const addCookies = () => {
        if (key && value) {
            setCookie(key, value, {
                maxAge: 60 * 2 // 2 minute
            })
        }
    } */

        
  const addCookies = async () => {
    if (!key || !value) {
      alert("Lütfen bir key ve value girin!");
      return;
    }

    const res = await fetch("/api/cookies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key, value }),
    });

    if (res.ok) {
      alert("Cookie başarıyla eklendi!");
    } else {
      alert("Hata oluştu!");
    }
  };

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-yellow-400 font-black text-xl'>Cookies Client Rendering</h1>
            <div>
                <h6 className='text-orange-800'>All Cokkie List : </h6>
                <ul>
                    {
                        allCookies.map((cookie: any) => (
                            <li key={cookie.name} className='text-white'>{cookie.name} - {cookie.value}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h6 className='text-blue-400'>Armut Cookie Var Mı : {armutVarMı ? "Var" : "Yok"}</h6>
            </div>
            <div>
                <h6 className='text-green-400'>Elma cokkiesinin değeri: {cookieElma?.value}</h6>
            </div>
            <div className='flex gap-2 text-white'>
                <label htmlFor="key">Key</label>
                <input type="text" name='key' onChange={(e: any) => setKey(e.target.value)} value={key} className='text-black' />
                <label htmlFor="value">Value</label>
                <input type="text" name='value' onChange={(e: any) => setValue(e.target.value)} value={value} className='text-black' />
                <button className='border' onClick={addCookies}>Client Cookies Add</button>
            </div>
        </div>
    )
}

export default CookiesClientRendering
