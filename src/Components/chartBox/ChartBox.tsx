// import { Link } from "react-router";
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string,
    number: number | string;
    percentage: number;
    chartData: object[]
}
const ChartBox = (props: Props) => {
    return (
        <div className="chartBox flex lgl:flex-row mdl:flex-row sml:flex-col h-full" >
            <div className="boxInfo flex flex-col basis-3/5 justify-between ldl:gap-0 mdl:gap-0 sml:gap-5">
                <div className="title flex items-center gap-3 lgl:text-[16px] mdl:text-[14px]">
                    <span>{props?.title}</span>
                </div>
                <div className="xl:text-4xl lg:text-xl md:text-xl font-semibold" >{props?.number}</div>
                {/* <Link to={"/"} style={{ color: props?.color }}>View all</Link> */}
            </div>
            <div className="chartInfo flex flex-col basis-2/5 justify-between">
                <div className="chart h-full w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={props?.chartData}>
                            <Tooltip
                                contentStyle={{ background: 'transparent', border: 'none' }}
                                labelStyle={{ display: 'none' }}
                                position={{ x: 10, y: 50 }}
                            />
                            <Line type="monotone" dataKey={props?.dataKey} stroke={props?.color} strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts flex flex-col text-right">
                    <div className="percentage font-bold text-xl" style={{ color: props?.percentage < 0 ? 'tomato' : 'limegreen' }} >{props?.percentage}%</div>
                    <div className="duration text-sm">this month</div>
                </div>
            </div>
        </div>
    );
};

export default ChartBox;