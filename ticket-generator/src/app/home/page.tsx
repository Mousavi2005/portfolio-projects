'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useEmailStore } from '../../lib/store'
import { useShallow } from 'zustand/react/shallow'
import { useImageStore } from '../../lib/imageStore'
import { useNameStore } from '../../lib/name-username-store'


export default function HomePage() {

    const router = useRouter()
    // const [name, setName] = useState(() => '')
    // const[username, setUsername] = useState(() => '')

    const [selectedFile, setSelectedFile] = useState(null)
    // const [preview, setPreview] = useState(null)

    const { name, setName, username, setUsername } = useNameStore(
        useShallow((state) => ({
            name: state.name,
            setName: state.setName,
            username: state.username,
            setUsername: state.setUsername,
        }))
    )

    const { email, setEmail } = useEmailStore(
    useShallow((state) => ({
        email: state.email,
        setEmail: state.setEmail,
    }))
    );

    const { preview, setPreview} = useImageStore(
        useShallow((state) => ({
            preview: state.preview,
            setPreview: state.setPreview
        }))
    )

    // const[username, setUsername] = useState(() => '')

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };

    function formHandler(formData) {
        const name = formData.get('fullName')
        const email = formData.get('email')
        const username = formData.get('username')
        const photo = formData.get('photo')
        if (validateEmail(email)) {
            router.push(`/ticket?name=${name}&email=${email}&username=${username}`)

        }
        else {
            alert('Please Enter Valid Email')
        }
        // router.push(`/ticket?name=${name}&email=${email}&username=${username}`)

    }

    function handleFileChange(e) {
        const file = e.target.files[0]
        if (!file) {
            return
        }
        const validTypes = ['image/jpeg', 'image/png'];
        if (!validTypes.includes(file.type)) {
            alert('Please select a JPEG or PNG image');
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            alert('File size must be less than 2MB');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);

        setSelectedFile(file)

    }
    // console.log(preview)

    function nameChanger(a) {
        const name = a.target.value
        setName(name)
    }

    function emailChanger(a) {
        const email = a.target.value
        setEmail(email)

        // if (validateEmail(email)) {
        //     alert("Please enter valid email")
        // }
        // else {
        //     setEmail(email)
        // }
        // setEmail(email)
    }

    function usernameChanger(a) {
        const username = a.target.value
        setUsername(username)
    }

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

                <form action={formHandler} className='w-[90%]'>

                    <label htmlFor="photoUpload" className="w-full h-32 flex flex-col justify-center gap-2 items-center border-dashed border-2 rounded-2x bg-[rgba(255,255,255,0.12)] cursor-pointer">
                    {preview ? (
                        <img src={preview} alt="Preview" className="h-24 object-contain rounded-md" />
                    ) : (
                        <>
                            <img src="images/icon-upload.svg" alt="Upload Icon" />
                            <p className='text-[12px]'>Upload your photo (JPG or PNG, max size: 2 MB)</p>
                        </>
                    )}
                    <input
                        id="photoUpload"
                        type="file"
                        onChange={handleFileChange}
                        name="photo"
                        className="hidden"
                        accept="image/png, image/jpeg"
                    />
                </label>


                    {/* <div className="w-full h-32 flex flex-col justify-center gap-5 items-center border-dashed border-2 rounded-2x bg-[rgba(255,255,255,0.12)]">
                        {preview === null && <img src="images/icon-upload.svg" alt="" />}
                        <p className='text-[12px]'>Upload your photo (JPG or PNG, max sixe: 500 KB) </p>
                        <input type="file" onChange={handleFileChange} name='photo' className="hidden"/>
                    </div> */}

                    <div className='w-full h-20 flex flex-col my-4'>
                        <label htmlFor="fullName">Full Name</label>
                        <input value={name} onChange={nameChanger} type="text" name="fullName" id="fullName" className='w-full h-12 border-white border-2 rounded-2x bg-[rgba(255,255,255,0.12)]'/>
                    </div>


                    <div className='w-full h-20 flex flex-col my-4'>
                        <label htmlFor="emailAddress">Email Address</label>
                        <input value={email} onChange={emailChanger} placeholder="example@email.com" type="text" name="email" id="emailAddress" className='w-full h-12 border-white border-2 pl-1.5 rounded-2x bg-[rgba(255,255,255,0.12)]'/>
                    </div>

                    <div className='w-full h-20 flex flex-col my-4'>
                        <label htmlFor="username">Github Username</label>
                        <input value={username} onChange={usernameChanger} placeholder="@yourusername" type="text" name="username" id="username" className='w-full h-12 border-white border-2 pl-1.5 rounded-2x bg-[rgba(255,255,255,0.12)]'/>
                    </div>
                    <button type='submit' className='my-2 w-full h-12 bg-[rgb(242_109_90)] cursor-pointer'>Create My Ticket</button>
                </form>

            </main>

        </div>
        </>
    )
}