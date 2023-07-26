import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-24">
      <h1 className="font-bold mb-3 text-2xl">Please choose a topic.</h1>
      <ul className="flex flex-col justify-center items-center">
        <li className="mb-3 text-2xl">
          <Link href="/history">History</Link>
        </li>
        <li className="mb-3 text-2xl">
          <Link href="/anime">Anime</Link>
        </li>
      </ul>
    </main>
  );
}
