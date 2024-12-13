const Demo = () => {
    return (
        <div className='flex bg-[#03bfcc] justify-between'>
            <div className='flex gap-10 bg-[#ffffff] p-5 items-center rounded-br-xl' >
                <div className='ml-40' >
                    <select className='outline-none border-2 rounded-lg p-2 text-xs font-semibold' >
                        <option >GBP</option>
                    </select>
                </div>
                <div><label className='text-gray-500 text-xs' >Amount</label></div>
                <div><label className='text-[#01a2fc] cursor-pointer text-xs font-semibold' >$100 USD</label></div>
                <div><label className='text-[#01a2fc] cursor-pointer text-xs font-semibold'>$150 USD</label></div>
                <div>
                    <select className='outline-none border-2 rounded-lg p-2 text-xs font-semibold' >
                        <option value={'1'}>Lebanon Emergency Appeal</option>
                    </select>
                </div>
                <div>
                    <button className='rounded-lg p-2 bg-[#f60362] text-white' >
                        <button>Quick Donate</button>
                    </button>
                </div>
            </div>
            <div className='flex gap-10 bg-[#ffffff] p-5 items-center rounded-bl-xl' >
                <div>
                    <div><label className='line font-medium text-sm' >Prosthetic<br /> Limbs</label></div>
                </div>
                <div><label className='font-medium text-sm' >Tents<br /> houses</label></div>
                <div><label className='font-medium text-sm' >Food<br /> Supplies</label></div>
                <div className='mr-96' ><label className='font-medium text-sm' >Prosthetic<br /> Limbs</label></div>
            </div>
        </div>
    )
}

export default Demo