'use client'
import { useSearchParams } from "next/navigation";

export default function Ticket() {
    
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    const username = searchParams.get('username');
    console.log(name, email, username)
    return (
        <>
        <img src="images/background-mobile.png" alt="" className='w-full h-full z-0 absolute'/>

        <div className="h-screen w-screen z-10 relative text-white">

            <header className="w-full h-[12%] flex justify-center items-center">
                <div>
                    <img src="images/logo-full.svg" alt="" />
                </div>
            </header>

            <main className="w-full h-full flex flex-col items-center">
                <header className="w-full h-[15%] flex flex-col items-center justify-center gap-1.5 mb-3">
                    <h2 className='text-4xl text-center'>Your Journey to Coding 2025 Starts Here!</h2>
                    <p>Secure your spot at next years biggest coding conference</p>
                </header>


            </main>

        </div>
        </>
    )
}