import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <Product id={id} />
    </div>
  );
};

export default page;

function Product({ id }: { id: string }) {
  return (
    <div className="p-10">
      <div className="flex justify-center">
        <h1> User ID {id}</h1>
        <p>{}</p>
      </div>
      <Link href={"/"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
          Go back
        </button>
      </Link>
    </div>
  );
}
