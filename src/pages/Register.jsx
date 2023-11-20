import React, { useState } from "react";
import Participant from "./Participant";
import Volunteer from "./Volunteer";

function AdvanceRegistration() {
  const [activeTab, setActiveTab] = useState(1);
  const [showTabContent, setShowTabContent] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowTabContent(true);
  };

  return (
    <div className="mt-5 " id='register'>
    <button
      className="bg-[#117C1A] hover:bg-[#68d571] rounded text-white w-[100px] h-10 transition duration-300 ease-in-out"
      onClick={() => setShowTabContent(!showTabContent)}
    >
      Register
    </button>
    {showTabContent && (
      <div className="w-[40%] mx-auto flex gap-10">
        <button
          className={`focus:outline-none relative ${
            activeTab === 1
              ? "font-medium text-[18px] after:border-b-2 w-[290px] after:border-[#68d571] after:absolute after:w-full after:block after:bottom-[-10px]"
              : "text-[18px]  w-[290px]  after:absolute after:w-full after:block after:bottom-[-10px]"
          }`}
          onClick={() => handleTabClick(1)}
        >
          Participant
        </button>
        <button
          className={`focus:outline-none relative ${
            activeTab === 2
              ? "font-medium text-[18px] after:border-b-2 w-[290px] after:border-[#68d571] after:absolute after:w-full after:block after:bottom-[-5px]"
              : "text-[18px]  w-[290px]  after:absolute after:w-full after:block after:bottom-[-10px]"
          }`}
          onClick={() => handleTabClick(2)}
        >
          Volunteer
        </button>
      </div>
    )}
    {showTabContent && (
      <div className="tab-content">
        {activeTab === 1 && <Participant />}
        {activeTab === 2 && <Volunteer />}
      </div>
    )}
  </div>
  );
}

export default AdvanceRegistration;
