"use client"
import Input from "components/input";
import { Head } from "next/document";
import ReactDatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import id from "date-fns/locale/id";
import React, { useState } from "react";
import Candidate from "components/Candidate";
import {BsPersonPlus} from  "react-icons/bs";
import Button from "components/button";

registerLocale("id", id);

export const metadata = {
    title: 'Create Vote',
}

export default function page() {
    const [startDate, setStartDate ] = useState(new Date());
    const [endDate, setEndDate ] = useState(new Date());
    const [candidates, setCandidates] = useState<Candidate[]>([])

    const submitCandidate = (candidate:Candidate) => {
        setCandidates(
            candidates.map((c)=> (c.key === candidate.key ? candidate : c))
        )
    }

    const addCandidateForm =() => {
        const newCandidate:Candidate={
            name:"",
            message:"",
            key: candidates.length+1,
            title:"",
        }
        setCandidates([...candidates, newCandidate]);
    };

    const removeCandidateForm = (key:number) => {
        // list kandidat baru kecuali dngan key diatas
        const newCandidates=candidates.filter(
            (candidate)=>candidate.key !==key
        );
        //nomor id key di urut kembali
        newCandidates.forEach((candidate, index)=> {
            candidate.key=index+1;
        });

        setCandidates(newCandidates);
    };

    return(
        <div className="mt-[4%] mb-20 mx-auto">
            <div className="">
                <div className="text-2xl md:text-4xl font-semibold uppercase ">
                    create a new vote
                </div>
                <div className="text-lg md:text-2xl text-slate-400">
                    Please enter the required data before making an online vote
                </div>
            </div>
            <form action="" className="mt-10 flex flex-col gap-4 md:gap-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-2xl pl-4">Title Vote</label>
                    <Input value={""} placeholder={"example: vote the most handsome person"} onChange={""} className="md:w-2/5" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-2xl pl-4">  Start Time  </label>
                        <div className="flex md:w-2/5">
                            <ReactDatePicker 
                                locale={"id"}
                                showTimeSelect
                                selected={startDate}
                                onChange={(date)=> date && setStartDate(date)}
                                dateFormat={"Pp"} 
                                minDate={new Date()} 
                                className={"bg-zinc-100 py-2 px-8 w-full rounded-2xl"} 
                            />
                            <div className="divider divider-horizontal -mt-2"> s/d </div>
                            <ReactDatePicker 
                                locale={"id"}
                                showTimeSelect
                                selected={endDate}
                                onChange={(date)=> date && setEndDate(date)}
                                dateFormat={"Pp"} 
                                minDate={startDate} 
                                className={"bg-zinc-100 py-2 px-8 w-full rounded-2xl"} 
                            />
                        </div>
                </div>
                <h1 className="text-2xl pl-4">
                    Candidate 
                </h1>
                <div className="grid gap-4 md:gap-10 grid-cols-1 px-10 md:grid-cols-4 mt-5 ">
                    {candidates.map((candidate:Candidate, index:number) => (
                            <Candidate 
                                key={index} 
                                candidate={candidate} 
                                submitCandidate={ submitCandidate}
                                removeCandidateForm={removeCandidateForm}
                            />
                    ))}
                    <div className={`border-2 w-full h-10 rounded-3xl text-3xl cursor-pointer   border-slate-900/50 aspect-square  flex items-center justify-center  py-2 ${ candidates.length ? " md:w-20 md:h-20 md:rounded-full " : " md:-mt-8 -ml-10 md:w-full md:h-14 md:rounded-full"}` } 
                        onClick={()=> addCandidateForm() } >
                        <BsPersonPlus  />
                    </div>
                </div>
                <div className="text-right mt-10">
                    <Button text="Submit" />
                </div>
            </form>
        </div>
    )
};
