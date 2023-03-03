interface Props {
    value: string;
    placeholder : string;
    className?: string;
    onChange: (value:string)=>void;
}

export default function TextArea(props:Props) {
    return(
        <textarea
            placeholder={props.placeholder}
            className={`textarea border-2 border-zinc-200 w-full ${props.className}`} 
            onChange={ (e) => props.onChange(e.target.value) }
            value={props.value}
        />
    )
};