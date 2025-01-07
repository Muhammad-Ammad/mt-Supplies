import { GridColDef } from "@mui/x-data-grid";
// import { useState } from "react";

type Props = {
    slug: string;
    columns: GridColDef[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
    setFormField: React.Dispatch<React.SetStateAction<formDataInterface[]>>;
    formField: formDataInterface[];
    isAddEdit: string,
};

type formDataInterface = {
    type: string;
    id: number;
    headerName: string;
    value: string;
};

const Add = (props: Props) => {

    const handleChange = (id: number, value: string) => {
        const updatedFormData = props.formField.map(item =>
            item.id === id ? { ...item, value: value } : item
        );
        props.setFormField(updatedFormData);
    };

    return (
        <div className="add w-screen h-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.724)] flex items-center justify-center" >
            <div className="modal p-12 rounded-xl bg-mainBg relative">
                <span className="close absolute top-3 right-3 cursor-pointer" onClick={() => props?.setOpen(false)} >X</span>
                <div className="text-3xl font-bold mb-10 text-softColor" >{props?.isAddEdit} {props?.isAddEdit === 'Add' ? 'New' : ''} {props?.slug}</div>
                <form
                    className="flex flex-wrap max-w-lg justify-between gap-2"
                    onSubmit={props?.handleSubmit} >
                    {props?.formField && props?.formField.map(item => (
                        <div key={item?.id} className="item flex flex-col gap-3 mb-5 w-2/5">
                            <label className="text-sm font-medium">{item?.headerName}</label>
                            <input
                                id={String(item?.id)}
                                className="p-3 bg-transparent text-white outline-none border border-solid border-softColor rounded-md"
                                type={item?.type}
                                placeholder={item?.headerName}
                                value={item?.value}
                                onChange={(event) => handleChange(item.id, event.target.value)}
                            />
                        </div>
                    ))}
                    <button className="w-full p-3 cursor-pointer bg-softColor rounded-md text-mainBg font-semibold ">{props?.isAddEdit}</button>
                </form>
            </div>
        </div>
    );
};

export default Add;