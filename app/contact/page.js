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
            <h1 className="text-2xl mb-10">You can reach me by email or LinkedIn!</h1>
            <div className="flex flex-wrap w-100 items-center">
                <Image className="m-5" src="/email.png" width={50} height={50} alt="Email Symbol"></Image>
                <h1 className="m-5 text-xl">nikkitjiputra5@gmail.com</h1>
                <Image className="m-5" src="/linkedin.png" width={50} height={50} alt="Email Symbol"></Image>
                <Link className="m-5 text-xl" href="https://www.linkedin.com/in/lauren-tjiputra/">lauren-tjiputra</Link>
            </div>
            

        </div>
    </div>
  ) // password mongodb: Dlx8Pch1MbT6pHAl
  // username: nikkitjiputra5_db_user
  // mongodb+srv://nikkitjiputra5_db_user:<db_password>@personal-site-cluster.2mhvgog.mongodb.net/?appName=personal-site-cluster
}

export default Contact;