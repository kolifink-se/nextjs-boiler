import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-indigo-950 text-center">
        <Image
          src="/assets/kolifink.svg"
          alt="The Kolifink."
          height="120"
          width="120"
          priority
          className="animate-bounce"
        />
        <h1 className="font-heading text-3xl mb-4 text-fuchsia-400">
          Welcome to the Kolifink boiler.
        </h1>
        <p className="text-gray-50 w-60">
          The Kolifink hereby confirms that everything is working.
        </p>
      </div>
    </main>
  );
}
