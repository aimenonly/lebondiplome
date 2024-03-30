"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type Props = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
};

const BarChartBox = (props: Props) => {
    return (
        <div className="w-full h-full ">
            <h1 className="text-center p-2 font-bold">{props.title}</h1>
            <div className="h-full">
                <ResponsiveContainer width="99%" height="99%">
                <BarChart
          width={500}
          height={300}
          data={props.chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <YAxis />
                    <XAxis dataKey="name" />
                    <Tooltip />
                        <Bar dataKey={props.dataKey} fill={props.color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarChartBox;