import React from 'react'

async function delay(ms:number) {
    return new Promise((resolve)=> setTimeout(resolve,ms))
}


async function Iletisim() {
    await delay(3000);
    return (
        <div>
            İletişim
        </div>
    )
}

export default Iletisim
