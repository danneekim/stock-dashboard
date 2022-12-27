import React from "react";
import Card from "./Card";
import Header from "./Header";
import Details from "./Details";
import { mockCompanyDetails } from "../constants/mock";
import Overview from "./Overview";
import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div
      className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr 
                gap-6 p-10 font-quicksand bg-neutral-200"
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={mockCompanyDetails.name}></Header>
      </div>
      <div className="md:col-span-2 row-span-4">
        {/* <Card>Chart</Card> */}
        <Chart></Chart>
      </div>
      <div>
        {/* <Card>Overview</Card> */}
        <Overview
          symbol={mockCompanyDetails.ticker}
          price={300}
          change={30}
          changePercent={10.0}
          currency={"USD"}
        ></Overview>
      </div>
      <div className="row-span-2 xl:row-span-3">
        {/* <Card>Details</Card> */}
        <Details details={mockCompanyDetails} />
      </div>
    </div>
  );
};

export default Dashboard;
