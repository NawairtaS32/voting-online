interface Props {
    value: string;
    placeholder : string;
    type?: string;
    className?: string;
    onChange: (value:string)=>void;
}

export default function Input(props:Props) {
    return(
        <input 
            type={props.type ? props.type : "text"} 
            placeholder={props.placeholder}
            className={`input input-bordered w-full ${props.className}`} 
            onChange={ (e) => props.onChange(e.target.value) }
            value={props.value}
        />
    )
};
