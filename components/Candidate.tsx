"use client"
import { useState,useEffect } from "react";
import Input from "./input";
import {FaWindowClose} from "react-icons/fa";
import TextArea from "./TextArea";

interface Props {
    candidate: Candidate;
    submitCandidate:(candidate:Candidate)=>void;
    removeCandidateForm:(key: number )=>void;

}

export default function Candidate(props:Props) {
    const [candidate, setCandidate] = useState<Candidate>({
        key:0,
        name:"",
        message:"",
        title:"",
    });

    useEffect(() => {
        setCandidate(props.candidate)
    }, [props.candidate])

    useEffect(() => {
        props.submitCandidate(candidate)
    }, [candidate])
    return(
        <div className="card border-2 border-black w-full md:w-80 bg-base-100 shadow-xl">
            <div className="self-end ">
                <FaWindowClose className="text-4xl mt-4 mr-4 cursor-pointer" onClick={()=> props.removeCandidateForm(candidate.key)}/>
            </div>
            <div className="flex h-40 justify-center items-center ">
                <div className=" bg-slate-900/50 p-8 aspect-square rounded-full text-white font-mono font-extrabold text-6xl ">
                    {props.candidate.key}
                </div>
            </div>
            <div className="card-body">
                <label htmlFor="" className="text-xl font-semibold">Name Candidate</label>
                <Input placeholder="Input Name Candidate" value={candidate.name} onChange={(e)=>setCandidate({ ...candidate, name: e})} />
                <label htmlFor="" className="text-xl font-semibold">Message</label>
                <TextArea  placeholder="Input Name Candidate" value={candidate.message} onChange={(e)=>setCandidate({ ...candidate, message: e})} />
            </div>
        </div>
    )
};
