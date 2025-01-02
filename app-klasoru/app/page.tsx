import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home Head',
  description: "home desc"
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function Home() { 
  await delay(30000)
  return (
    <div>Home Page</div>
  );
}
