import Button from "components/button";
import Image from "next/image";
import Home from 'public/images/home.svg'


export default function Voting() {
    return(
        <div className="">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image alt={"Header"} src={Home} className=" w-[400px] md:w-[500px] h-[400px] md:h-[500px] items-center" />
                    <div className="text-center capitalize">
                        <h1 className="text-[32px] md:text-[52px] font-extrabold ">let's start voting</h1>
                        <p className="text-[18px] md:text-[32px] text-slate-900/50 font-semibold">make your choice on a trusted voting web</p>
                        <div className=" uppercase mt-8 justify-center flex gap-8">
                            <Button text="Create a vote" className="text-lg md:text-2xl" />
                            <Button text="follow the vote" className="text-lg  md:text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto my-10">
                <table className="table w-full rounded-3xl">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Judul</th>
                            <th>Kandidat</th>
                            <th>Kode</th>
                            <th>Mulai</th>
                            <th>Selesai</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};
