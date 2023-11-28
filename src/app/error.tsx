"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-indigo-950 text-center">
      <h2 className="font-heading text-3xl mb-4 text-fuchsia-400">
        Something has gone sideways.
      </h2>
      <p className="text-gray-50 w-60">Try again, or reload the page.</p>
      <div
        className="text-indigo-950 px-5 py-3 bg-cyan-500 my-4"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </div>
    </div>
  );
}
