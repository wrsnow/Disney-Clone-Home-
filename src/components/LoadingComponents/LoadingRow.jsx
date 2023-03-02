import React from "react";
import LoadingCard from "./LoadingCard";

function LoadingRow() {
  return (
    <section className="flex flex-col w-full my-6 relative">
      <div className="row-title w-full pl-[3%] min-h-[20px]"></div>
      <div className="flex items-center justify-center w-full relative">
        <div className="flex min-w-[95%] max-w-[95%] overflow-hidden">
          <div className="flex min-w-[100%] ">
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoadingRow;
