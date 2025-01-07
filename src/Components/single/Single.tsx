import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string; }[];
    data: object[];
  };
  activities?: { time: string; text: string; }[];
};

const Single = (props: Props) => {
  return (
    <div className="single flex xl:flex-row xl:gap-0 lg:gap-0 lg:flex-row md:gap-[50px] md:flex-col sm:gap-[50px] sm:flex-col">
      <div className="view basis-1/2">
        <div className="info">
          <div className="topInfo flex items-center gap-5">
            {props?.img && <img src={props?.img} alt="" className="w-[100px] h-[100px] rounded-[20px] object-cover" />}
            <h1 className="text-2xl font-semibold" >{props?.title}</h1>
            <button className="bg-softColor text-darkColor p-1 rounded-md font-medium" >Update</button>
          </div>
          <div className="details text-lg">
            {Object.entries(props?.info).map(item => (
              <div className="item my-[30px] mx-[0px]" key={item[0]}>
                <span className="itemTitle font-semibold mr-[10px] capitalize">{item[0]}:</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-[90%] h-0 border-1 border-solid border-gray-600 my-5 mx-0 xl:block lg:block md:hidden sm:hidden" />
        <div className="chart xl:block lg:block md:hidden sm:hidden mt-[50px] w-[80%] h-[400px]">
          {props?.chart && <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={props?.chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {props?.chart?.dataKeys.map(dataKey => (
                <Line type="monotone" dataKey={dataKey?.name} stroke={dataKey?.color} />
              ))}
            </LineChart>
          </ResponsiveContainer>}
        </div>
      </div>
      <div className="activities basis-1/2">
        <div className="text-xl font-semibold mb-5">Latest Activities</div>
        {props?.activities && <ul>
          {props?.activities.map(activity => (

            <li
              key={activity?.text}
              className="list-none relative w-[1px] pt-[50px] after:-translate-x-1/2 bg-[#f45b69] after:bg-[#f45b69] after:bottom-0 after:content-[''] after:absolute after:left-1/2 after:w-[10px] after:h-[10px] after:rounded-full"
            >
              <div className="xl:min-w-[480px] lg:min-w-[480px] md:min-w-[300px] sm:min-w-[300px]  p-[15px] bg-[#f45b6810]" >
                <p className="mb-[5px]" >{activity?.text}</p>
                <time className="text-xs" >{activity?.time}</time>
              </div>
            </li>
          ))
          }
        </ul>}
      </div>
    </div>
  );
};

export default Single;