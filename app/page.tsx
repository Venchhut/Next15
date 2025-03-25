import Welcome from "./components/welcome";

export default function Home() {
  console.log("i'm a client component ");
  return (
    <>
      <h1 className="text-3xl ">welcome</h1>
      <Welcome />
    </>
  );
}
