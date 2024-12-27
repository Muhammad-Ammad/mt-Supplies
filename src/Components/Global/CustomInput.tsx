interface inputProps {
    type: string,
    label?: string,
    id: string,
    className?: string,
    checked?: boolean,
    onClick?(): void,
    onChange?(): void,
}
const CustomInput: React.FC<inputProps> = ({ type, label, id, className, checked, onClick, onChange }) => {
    return (
        <div className="flex gap-2">
            <input className={`${className} cursor-pointer`} type={type} checked={checked} id={id} onClick={onClick} onChange={onChange} />
            <label className="text-lg text-gray-700 cursor-pointer " htmlFor={id}>{label}</label>
        </div>
    )
}

export default CustomInput