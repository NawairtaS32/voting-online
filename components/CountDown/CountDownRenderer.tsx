import CountDownItem from "./CountDownItem";

interface Props{
    days:number;
    hours:number;
    minutes:number;
    seconds:number;
}

export default function CountDownRenderer(props: Props) {
    return(
        <div className="flex flex-row mx-auto justify-center">
            <CountDownItem label="Day" value={props.days} />
            <CountDownItem label="Hour" value={props.hours} />
            <CountDownItem label="Minute" value={props.minutes} />
            <CountDownItem label="Second" value={props.seconds} />
        </div>
    )
};
