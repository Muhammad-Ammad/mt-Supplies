import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const PieChartBox = () => {
    const data = [
        { name: 'Mobile', value: 400, color: '#0088FE' },
        { name: 'Desktop', value: 300, color: '#00C49F' },
        { name: 'Laptop', value: 300, color: '#FFBB28' },
        { name: 'Tablet', value: 200, color: '#FF8042' },
    ];
    return (
        <div className="pieChartBox h-full flex flex-col justify-between" >
            <div className="text-3xl font-bold" >Leads by Source</div>
            <div className="chart flex items-center justify-center w-full h-full">
                <ResponsiveContainer width={'99%'} height={300} >
                    <PieChart>
                        <Tooltip
                            contentStyle={{ background: 'white', borderRadius: '5px' }}
                        />
                        <Pie
                            data={data}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((item) => (
                                <Cell
                                    key={item.name}
                                    fill={item.color}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options flex justify-between gap-3 text-sm">
                {data && data.map(item => (
                    <div className="option flex flex-col gap-1 items-center" key={item?.name} >
                        <div className="title flex gap-3 items-center">
                            <div className="dot w-3 h-3 rounded-full" style={{ backgroundColor: item?.color }} />
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PieChartBox