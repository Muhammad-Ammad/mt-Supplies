import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const BigChartBox = () => {
    const data = [
        {
            name: 'Sun',
            pencils: 4000,
            pens: 2400,
            brushes: 2400,
        },
        {
            name: 'Mon',
            pencils: 2000,
            pens: 1400,
            brushes: 1400,
        },
        {
            name: 'Tues',
            pencils: 3000,
            pens: 3400,
            brushes: 3400,
        },
        {
            name: 'Wed',
            pencils: 500,
            pens: 400,
            brushes: 400,
        },
        {
            name: 'Thur',
            pencils: 14000,
            pens: 12400,
            brushes: 12400,
        },
        {
            name: 'Fri',
            pencils: 4000,
            pens: 2400,
            brushes: 2400,
        },
        {
            name: 'Sat',
            pencils: 5000,
            pens: 1400,
            brushes: 2400,
        },
        
    ];
    return (
        <div className="bigChartBox h-full w-full flex flex-col justify-between" >
            <div className="text-4xl font-bold" >Revenue Analytics</div>
            <div className="chart w-full h-80">
                <ResponsiveContainer width="99%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="pencils" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="pens" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="brushes" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BigChartBox;