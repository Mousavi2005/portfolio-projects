'use client'
import { useSearchParams } from "next/navigation";
import bg from '../../../public/images/pattern-ticket.svg'
import {v4 as uuidv4} from 'uuid'
import { useEffect, useState } from "react";

export default function Ticket() {
    
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    const username = searchParams.get('username');
    console.log(name, email, username)

    const [id, setId] = useState('')

    useEffect(()=>{
        setId(`#${uuidv4().slice(0,6)}`)
        console.log('changed')
    },[email])

    return (
        <>
        <img src="images/background-mobile.png" alt="" className='w-full h-full z-0 absolute'/>

        <div className="h-screen w-screen z-10 relative text-white">

            <header className="w-full h-[18%] flex justify-center items-center">
                <div>
                    <img src="images/logo-full.svg" alt="" />
                </div>
            </header>

            <main className="w-full h-full flex flex-col items-center">
                <header className="w-[80%] min-h-10 mb-20 flex flex-col items-center justify-center gap-1.5">
                    <h2 className='text-[30px] text-center mb-5'>Congrats, {name}! Your tocket is ready</h2>
                    <p className="text-center text-[18px]">We've emailed your ticket to {email} and will send updates in the run up to the event</p>
                </header>

                <div className="w-[86%] h-52 border-2 flex justify-end"
                style={{
                    backgroundImage: `url(${bg.src})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                    <div id="info" className="w-[82%] h-full flex flex-col justify-between">
                        <header className="w-full h-18 p-4 flex flex-col justify-between">
                            <img className="flex-none w-full" src="images/logo-full.svg" alt="" />
                            <span className="mx-auto">jan 31, 2025 / Austin, TX</span>
                        </header>
                        <div className="w-full h-full flex items-center px-4">
                            <img className="h-[50%] rounded-[18px]" src="images/image-avatar.jpg" alt="" />
                            <div className="h-full w-full flex flex-col gap-2 justify-center">
                                <p className="px-3 text-2xl">{name}</p>
                                <div className="flex gap-2 px-2">
                                    <img className="w-6" src="images/icon-github.svg" alt="" />
                                    <p>{username}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="id" className="w-[18%] flex justify-center items-center" 
                        style={{writingMode:'vertical-lr'}}>
                        {id}
                    </div>
                </div>


            </main>

        </div>
        </>
    )
}