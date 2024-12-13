interface inputProps {
    type: string,
    label?: string,
    id: string,
    htmlFor: string,
    className?: string,
    checked?: boolean,
    onClick?(): void,
    onChange?(): void,
}
const CustomInput: React.FC<inputProps> = ({ type, label, id, htmlFor, className, checked }) => {
    return (
        <div className="flex gap-2">
            <input className={className} type={type} checked={checked} id={id} about="" />
            <label className="text-lg text-slate-600" htmlFor={htmlFor}>{label}</label>
        </div>
    )
}

export default CustomInput