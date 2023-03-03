interface Props {
    text : string;
    className?:string;
    onClick?:()=> void;
}

export default function Button(props:Props) {
    return(
        <button 
            className={`bg-black px-4 py-2 text-white rounded-2xl border-2 border-double border-black hover:bg-slate-400 hover:text-black ${props.className}`}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
};
