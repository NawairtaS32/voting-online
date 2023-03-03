"use client"
import Button from "components/button";
import Input from "components/input";
import Image from "next/image";
import ImageParticipant from 'public/images/participant.svg';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Participant() {
    const [code, setCode] = useState("");

    const router = useRouter();

    const handleSubmit =()=>{
        router.push("/participant/kode");
    }

    return(
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col text-center">
                <Image alt="participant" src={ImageParticipant} className=" w-[400px] md:w-[500px] h-[400px] md:h-[500px]"  />
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold">participate in voting</h1>
                    <p className="py-2">To participate in voting, you must enter the voting code that has been given by the committee</p>
                </div>
                <Input placeholder="Enter voting code" value={code} className="w-1/2"  onChange={setCode} />
                <div className=" flex gap-4">
                    <Button text="Back" className="w-1/2" onClick={()=>router.push("/voting")}  />
                    <Button text="Next" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
};
