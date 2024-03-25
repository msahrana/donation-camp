import {PieChart, Pie, Cell, Tooltip, Legend} from "recharts";
import {useEffect} from "react";
import {useState} from "react";

const Statistics = () => {
  const [donate, setDonate] = useState([]);

  useEffect(() => {
    const donationItem = JSON.parse(localStorage.getItem("donation")) || "";
    setDonate(donationItem);
  }, [donate]);

  const data = [
    {name: "Your Donation", value: donate.length},
    {name: "Total Duration", value: 12 - donate.length},
  ];

  const COLORS = ["#00C49F", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-white border p-1">
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="mb-36 flex justify-center items-center">
      <PieChart width={800} height={500}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Statistics;
