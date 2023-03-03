"use client"
import Navbar from "@/app/voting/navbar"
import { showAlert } from "components/Alert"
import Button from "components/button"
import CandidateItem from "components/CandidateItem"
import CountDown from "components/CountDown/CountDown"


interface Params{
    code:string
}


export default function DetailParticipant( {params}:{params:Params} ) {

    return (
        <div className="container mx-auto w-screen min-h-screen px-2  ">
            <Navbar />
            <div className="flex flex-col mt-10 mb-20 gap-8">
                <h1 className="text-4xl uppercase">
                    Judul Voting
                </h1>
                <CountDown />

                <div className="mt-10 space-y-3 md:mx-auto md:w-2/3 ">
                    <CandidateItem />
                </div>
                <div className="text-center mt-10">
                    <Button text="Send my vote 🙂"  
                    onClick={()=>showAlert({
                        title: "Yeay!", message:"kamu behasil melakukan vote!",
                        positiveBtnText:"Yes", onPositiveClick(){},
                        
                    })}/>
                </div>
            </div>
        </div>
    )
};