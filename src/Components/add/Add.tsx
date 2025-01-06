import { GridColDef } from "@mui/x-data-grid";

type Props = {
    slug: string;
    columns: GridColDef[],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Add = (props: Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //add new item
        //axios.post(`/api/${slug}s`, {})
    };
    return (
        <div className="add w-screen h-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.724)] flex items-center justify-center" >
            <div className="modal p-12 rounded-xl bg-mainBg relative">
                <span className="close absolute top-3 right-3 cursor-pointer" onClick={() => props?.setOpen(false)} >X</span>
                <div className="text-3xl font-bold mb-10 text-softColor" >Add New {props?.slug}</div>
                <form
                    className="flex flex-wrap max-w-lg justify-between gap-2"
                    onSubmit={handleSubmit} >
                    {props?.columns && props?.columns.filter(item => item?.field !== 'id' && item?.field !== 'img').map(column => (
                        <div className="item flex flex-col gap-3 mb-5 w-2/5">
                            <label className="text-sm font-medium">{column?.headerName}</label>
                            <input
                                type={column?.type}
                                placeholder={column?.field}
                                className="p-3 bg-transparent text-white outline-none border border-solid border-softColor rounded-md"
                            />
                        </div>
                    ))}
                    <button className="w-full p-3 cursor-pointer bg-softColor rounded-md text-mainBg font-semibold ">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Add;