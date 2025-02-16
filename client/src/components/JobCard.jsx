import React from "react";
import { assets } from "../assets/assets";

const JobCard = ({ job }) => {
  return (
    <div className="border p-4 shadow-md rounded w-full max-w-sm mx-auto overflow-hidden">
      <div className="flex justify-between items-center">
        <img className="h-8" src={assets.company_icon} alt="Company Icon" />
      </div>
      <h4 className="font-medium text-xl mt-2">{job.title}</h4>
      <div className="flex items-center mt-2 gap-3 text-xs">
        <span className="bg-blue-100 border border-blue-400 px-4 py-1.5 rounded">
          {job.location}
        </span>
        <span className="bg-lime-100 border border-blue-400 px-4 py-1.5 rounded">
          {job.level}
        </span>
      </div>
      <p
        className="text-gray-600 text-sm mt-4"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>
      <div className="mt-4 flex gap-4 text-sm">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Apply Now
        </button>
        <button className="text-gray-500 border border-gray-800 rounded px-4 py-2">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
