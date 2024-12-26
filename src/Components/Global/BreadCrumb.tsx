import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router"
import { RootState } from "../../store"
import { setBreadCrumb } from "../../redux/mtSupplies";

const BreadCrumb = () => {
    const BreadCrumbValue = useSelector((state: RootState) => state?.mtSupplies?.BreadValue);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleNavigation = (value: string) => {
        const breadArray = [value];
        dispatch(setBreadCrumb(breadArray));
        navigate(-1);
    };
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <Link to={'/'} className="inline-flex items-center text-sm font-medium text-black hover:text-[#0082E7] dark:text-gray-400 dark:hover:text-[#0082E7]">
                        Home
                    </Link>
                </li>
                {BreadCrumbValue && BreadCrumbValue.map((item, index) => (
                    <li key={index} >
                        <div className="flex items-center">
                            <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            {index + 1 === BreadCrumbValue.length ? (
                                <div
                                    className="ms-1 text-sm font-medium text-gray-700 dark:text-gray-400">
                                    {item}
                                </div>
                            ) : (

                                <div onClick={() => handleNavigation(`${item}`)}
                                    className="cursor-pointer ms-1 text-sm font-medium text-black hover:text-[#0082E7] md:ms-2 dark:text-gray-400 dark:hover:text-[#0082E7]">
                                    {item}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default BreadCrumb