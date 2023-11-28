import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-indigo-950 text-center">
        <h1 className="font-heading text-3xl mb-4 text-fuchsia-400">Oh no!</h1>
        <p className="text-gray-50 w-60">
          You have flown to unknown territory.
        </p>
        <Link href="/">
          <div className="text-indigo-950 px-5 py-3 bg-cyan-500 my-4">
            Take me to safety
          </div>
        </Link>
      </div>
    </main>
  );
}
