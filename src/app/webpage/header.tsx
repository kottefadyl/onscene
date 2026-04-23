import Link from 'next/link'
import React from 'react'
import Onscene from "./images/Lo.png"
import Image from 'next/image'

const header: React.FC = () => {
    return (
        <header className='w-full px-8 pt-6 text-white' id="header" >
            <div className='flex justify-between items-center text-center'>
                <div className='w-full'>
                    <Image src={Onscene} alt='onscene'/>
                </div>
                <div className='flex justify-between w-full '>
                    <Link href="">About</Link>
                    <Link href="">Famous artists</Link>
                    <Link href="">How it works</Link>
                    <Link href="">About</Link>
                </div>
                <div className='w-full flex justify-end'>
                    <div className='mx-4'>Language -</div>
                    <div className='mx-4'><button className='bg-blue-900 rounded-2xl px-3 py-1'>Sign in</button></div>
                </div>
            </div>
        </header>
    )
}

export default header