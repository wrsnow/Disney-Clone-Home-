import React from "react";

function BrandRowCard(props) {
  return (
    <div className="w-[20%] p-1">
      <div className="bg-card-color p-2 border-card-border border-2 cursor-pointer hover:scale-105 duration-200">
        <img className="w-full aspect-video" src={props.logo} alt="" />
      </div>
    </div>
  );
}

export default BrandRowCard;
