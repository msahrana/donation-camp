/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { useState } from "react";
import { Pie, PieChart } from "recharts";

const Statistics = () => {

  const [donate, setDonate] = useState()

  useEffect(()=> {
    const donationItem = JSON.stringify(localStorage.getItem('donation'))
    setDonate(donationItem)
    console.log(donate)
  },[])

  const myDonate = (setDonate /12)*100;
  const remaning = 100 - myDonate;

  const data = [
    { name: 'myDonation', value: 'myDonate' },
    { name: 'totalDonation', value: 'remaning' },
  ]

  return (
    <div>
      Statistics 
    </div>
  );
};

export default Statistics;