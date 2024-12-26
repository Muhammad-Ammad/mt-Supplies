import { Link } from "react-router";
import logoblack from '../../assets/logoblack.png';

const SignUp = () => {
    return (
        <>
            <div className="flex justify-between selection:bg-[#0082E7] selection:text-[#FFF]" >
                <div className="p-10 w-[20em]">
                    <Link to={'/'}>
                        <img src={logoblack} alt="MTSUPPLIES LOGO" />
                    </Link>
                </div>
            </div>
            <div className='flex justify-center items-center selection:bg-[#0082E7] selection:text-[#FFF]' >
                <div className='w-[30em] h-[28em] p-10 rounded-3xl' >
                    <div className='text-4xl font-semibold text-center' >Sign Up</div>

                    <div className="flex justify-center items-center gap-3" >

                        <div className='mt-10 text-xl font-medium' >
                            <div>
                                <div>First Name</div>
                                <input className='mt-2 w-[12em] text-base border border-[#0082E7] border-r-0 border-t-0 border-l-0 p-2 font-medium outline-none' type='text' placeholder='Enter First Name' />
                            </div>
                        </div>

                        <div className='mt-10 text-xl font-medium' >
                            <div>
                                <div>Last Name</div>
                                <input className='mt-2 w-[12em] text-base border border-[#0082E7] border-r-0 border-t-0 border-l-0 p-2 font-medium outline-none' type='text' placeholder='Enter Last Name' />
                            </div>
                        </div>
                    </div>

                    <div className='mt-5 text-xl font-medium' >Email</div>
                    <div className='mt-2' >
                        <input className='w-[25em] border border-[#0082E7] border-r-0 border-t-0 border-l-0 p-2 font-medium outline-none' type='text' placeholder='Enter Email Address' />
                    </div>
                    
                    <div className='mt-5 flex justify-between items-center' >
                        <div className="text-xl font-medium" >Password</div>
                    </div>

                    <div className='mt-2' >
                        <input className='w-[25em] border border-[#0082E7] border-r-0 border-t-0 border-l-0 p-2 outline-none' type='password' placeholder='Enter Password' />
                    </div>
                    
                    <div className='mt-5 flex justify-between items-center' >
                        <div className="text-xl font-medium" >Confirm Password</div>
                    </div>

                    <div className='mt-2' >
                        <input className='w-[25em] p-2 border border-[#0082E7] border-r-0 border-t-0 border-l-0 outline-none' type='password' placeholder='Enter Confirm Password' />
                    </div>
                    <div className='mt-20' >
                        <button className='w-[25em] bg-[#0082E7] hover:bg-[#0082E7] p-4 text-[#FFF] hover:text-[#FFF] font-semibold rounded-md' >Sign Up</button>
                    </div>
                    <div className="mt-5 font-medium text-center" >Don't Have an Account ? <span className="text-[#0082E7] cursor-pointer"><Link to={'/Login'} >Create New Account</Link></span></div>
                </div>
            </div>
        </>
    );
};

export default SignUp;