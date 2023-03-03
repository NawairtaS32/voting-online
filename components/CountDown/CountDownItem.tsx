import {zeroPad} from "react-countdown"

interface ItemProps {
    value:number;
    label:string;
}
export default function CountDownItem (props: ItemProps) {
    return <div className="flex item-center">
        <div className="flex flex-col text-center">
            <span className="text-5xl font-bold ">{zeroPad(props.value)}</span>
            <span className="text-xl font-light ">{zeroPad(props.label)}</span>
        </div>
        {props.label !== "Second" && <span className="mx-5 text-4xl">:</span>} 
    </div>
};

