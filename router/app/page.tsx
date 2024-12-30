import Link from "next/link";

 export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href="/hakkimizda">Hakkımızda</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/blog/1">Blog/1</Link>
      <Link href="/blog/1/abc">Blog/1/abc</Link>
    </div>
  )
}