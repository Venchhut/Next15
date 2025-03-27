import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Person = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default async function Home() {
  const respone = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!respone.ok) throw new Error("Something went wrong");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await respone.json();

  return (
    <main className="flex min-h-screen flex-col p-6 gap-4">
      <div className="flex justify-between">
        <p className="text-xl font-semibold">Welcome to next js 👋</p>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
      <div className="flex h-20 shrink-0 items-end rounded-xl bg-blue-400 p-6 md:h-32"></div>

      <div className="justify-between space-x-10">
        <div className="flex gap-2 mb-2 ">
          <Image
            src="https://plus.unsplash.com/premium_photo-1742404281241-79bbcd1f8dab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Picture of the author"
            width={200}
            height={200}
            className="object-cover rounded-xl mt-5"
          />
          <Image
            src="https://plus.unsplash.com/premium_photo-1742404280631-fc42d69b605c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Picture of the author"
            width={200}
            height={200}
            className="object-cover rounded-xl mt-5"
          />
          <Image
            src="https://images.unsplash.com/photo-1742268350465-35d7baae61fa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Picture of the author"
            width={200}
            height={200}
            className="object-cover rounded-xl mt-5"
          />
        </div>

        <ul>
          <div className="grid grid-cols-3 gap-4">
            {data.map((person: Person) => (
              <Link key={person.id} href={`/product/${person.id}`}>
                <li key={person.id}>
                  <h2 className="text-lg font-semibold">{person.name}</h2>
                </li>
              </Link>
            ))}
          </div>
        </ul>
      </div>
    </main>
  );
}
