import { topDealUsers } from "../../data";
const TopBox = () => {
    return (
        <div className="topBox">
            <div className="text-3xl font-bold mb-5" >Top Deals</div>
            <div className="list ">
                {topDealUsers && topDealUsers.map((user) => (
                    <div className="listItem flex items-center justify-between mb-8" key={user.id} >
                        <div className="user flex gap-5">
                            <img src={user.img} alt="" className="w-10 h-10 object-cover rounded-full xl:block lg:hidden md:block" />
                            <div className="userTexts flex flex-col gap-1">
                                <span className="username text-sm font-medium">{user.username}</span>
                                <span className="email text-xs xl:block lg:hidden md:block">{user.email}</span>
                            </div>
                        </div>
                        <span className="amount font-medium">${user.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBox;