import React from 'react';

const getItem = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch item");
  return await res.json();
};

async function ProductItem({ params }: { params: Promise<{ id: number }>  }) {
  const {id} = await params; // `id`'yi sayıya çevir
  console.log("Inside the page:", id);

  const data = await getItem(id);

  return (
    <div>
      <h1>{data?.title || "Loading..."}</h1>
      <p>{data?.body}</p>
    </div>
  );
}

export default ProductItem;

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return posts.map((post: IPost) => ({
    params: { id: post.id.toString() }, // `params` burada doğru şekilde oluşturuluyor
  }));
}

interface IPost{
  id:number,
  userId: number,
  title:string,
  body:string
}