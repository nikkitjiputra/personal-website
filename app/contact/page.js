import React from 'react'
import NavBar from '../components/NavBar';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
  return (
    <div>
        <NavBar />
        <div className="mt-5 p-5 mx-5 md:mt-10 md:mx-20">
            <h1 className="text-5xl mb-10">Contact</h1>
            <h1 className="text-2xl md:text-3xl text-amber-900 mb-10">You can reach me by email or LinkedIn!</h1>
            <div className="flex flex-wrap w-full md:w-100 items-center">
                <Image className="mr-1 mb-5 md:m-5" src="/email.png" width={50} height={50} alt="Email Symbol"></Image>
                
                <a href="mailto:nikkitjiputra5@gmail.com" className="underline hover:text-amber-900 ml-1 mb-5 md:m-5 text-lg md:text-xl">nikkitjiputra5@gmail.com</a>
                <Image className="mr-1 md:m-5" src="/linkedin.png" width={50} height={50} alt="Email Symbol"></Image>
                <Link className="underline hover:text-amber-900 ml-1 md:m-5 text-lg md:text-xl" href="https://www.linkedin.com/in/lauren-tjiputra/">lauren-tjiputra</Link>
            </div>
            

        </div>
    </div>
  ) // password mongodb: Dlx8Pch1MbT6pHAl
  // username: nikkitjiputra5_db_user
  // mongodb+srv://nikkitjiputra5_db_user:<db_password>@personal-site-cluster.2mhvgog.mongodb.net/?appName=personal-site-cluster
}

export default Contact;