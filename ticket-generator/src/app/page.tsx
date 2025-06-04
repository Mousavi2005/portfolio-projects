'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  function homePage() {
    router.push("/home")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgb(1_9_99)]">
      <button onClick={homePage} className="cursor-pointer w-50 h-16 bg-[rgb(242_109_90)] rounded-xl">Go To Home Page</button>
    </div>
  );
}
