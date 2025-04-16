import React from 'react'

const FeatureCard = ({ title, desc }) => (
  <div className=" inset-shadow-sm  border border-[#ccd5ff] shadow-inner shadow-[#ccd5ff]  p-6 rounded-xl ">
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p>{desc}</p>
  </div>
);

export default FeatureCard