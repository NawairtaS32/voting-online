"use client"
import Button from "components/button";
import { url } from "inspector";
import Image from "next/image";
import {useRouter} from "next/navigation";
import navbarImage from 'public/images/navbar.svg'


export default function Navbar() {
    const router = useRouter();
    
    return(
        <div className="flex place-content-between py-8">
            <h1 className="text-2xl md:text-3xl" onClick={()=>router.push("/voting")}>
                {/* <Image alt={"navbar"} src={navbarImage} className={" w-[200px] mt-[-20%] "} /> */}
                NawaVotE
            </h1>
            <div className="">
                <Button text="Logout" className="text-sm md:text-xl" />
            </div>
        </div>
    )
};
