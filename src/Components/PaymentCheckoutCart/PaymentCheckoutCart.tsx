const PaymentCheckoutCart = ({ imgSrc, quantity, Name, price, id }) => {
    return (
        <div id={id} className="flex justify-between items-center mt-5" >
            <div className="flex items-center relative" >
                <img className="w-20 h-20 object-contain" src={imgSrc} alt={'product1'} />
                <div className='absolute -top-1 left-16 w-4 h-4 flex bg-gradient-to-r from-[#0082E7] to-[#0053A5] rounded-xl text-white items-center justify-center text-sm font-medium' >
                    {quantity}
                </div>
                
                <div className="ml-2 font-medium text-base" >{Name}</div>
            </div>
            <div className="font-medium text-base" >£ {price}</div>
        </div>
    );
};

export default PaymentCheckoutCart;