import Button from "components/button";
import Image from "next/image";
import navbarImage from 'public/images/navbar.svg'


export default function Navbar() {
    return(
        <div className="flex place-content-between py-8">
            <div className="text-2xl md:text-3xl">
                {/* <Image alt={"navbar"} src={navbarImage} className={" w-[200px] mt-[-20%] "} /> */}
                NawaVotE
            </div>
            <div className="">
                <Button text="Logout" className="text-sm md:text-xl" />
            </div>
        </div>
    )
};
