import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend, ResponsiveContainer} from "recharts";
import React from "react";

const Suhuchart = () => {
    const data = [
      {
          name: "07/02/24",
          suhu: 23,
      },
      {
          name: "08/02/24",
          suhu: 22,
      },
      {
          name: "09/02/24",
          suhu: 24,
      },
      {
          name: "10/02/24",
          suhu: 23,
      },
      {
          name: "11/02/24",
          suhu: 24,
      },
      {
          name: "12/02/24",
          suhu: 22,
      },
      {
          name: "13/02/24",
          suhu: 22,
      },
    ];

    return (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={730} height={250} data={data}>
              <XAxis dataKey="name" />
              <YAxis/>
              <Tooltip />
              <Legend />
              <Bar dataKey="suhu" fill="#326f32" />
            </BarChart>
          </ResponsiveContainer>
        </>
      );

    };

export default Suhuchart;

