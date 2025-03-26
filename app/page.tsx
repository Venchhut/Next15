import Link from "next/link";
const products = [
  {
    id: 1,
    name: "Laptop Pro",
    price: 999,
    description: "High-performance laptop",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199,
    description: "Fitness tracking watch",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 149,
    description: "Premium audio quality",
  },
  {
    id: 4,
    name: "Tablet XL",
    price: 499,
    description: "12-inch display tablet",
  },
  {
    id: 5,
    name: "Phone Max",
    price: 799,
    description: "6.7-inch smartphone",
  },
  {
    id: 6,
    name: "Gaming Console",
    price: 399,
    description: "4K gaming system",
  },
];

export default function Home() {
  console.log("i'm a client component ");
  return (
    <main className="flex min-h-screen flex-col p-6 gap-4">
      <div className="flex h-20 shrink-0 items-end rounded-xl bg-blue-400 p-6 md:h-32"></div>
      <p className="text-xl font-semibold">Welcome to next js 👋</p>
      <Link href="/login">
        <button className=" px-6 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Log in
        </button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md ">
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <div className="flex justify-between">
              <p className="text-blue-600 font-semibold mt-2">
                ${product.price}
              </p>
              <Link href={`/product/${product.id}`}>
                <button className="px-4  bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
