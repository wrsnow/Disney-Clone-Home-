import React from "react";

function ProfileIcon({ className }) {
  return (
    <div className={`ml-auto flex items-center gap-4 mr-5 ${className}`}>
      <span>Profile</span>
      <div className="circle w-12 h-12 bg-white rounded-full flex overflow-hidden">
        <img
          className="w-full object-cover "
          src="https://www.independent.ie/life/54858/34585031.ece/AUTOCROP/w1240h700/2016-03-31_lif_19153952_I1.JPG"
          alt=""
        />
      </div>
    </div>
  );
}

export default ProfileIcon;
