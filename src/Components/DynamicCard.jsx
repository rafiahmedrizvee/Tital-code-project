import React from 'react';

const DynamicCard = ({ title, image, type }) => {
        return (
                <div className="rounded-xl overflow-hidden shadow-lg bg-[#F6F6F6]">
      <img src={image} alt={title} className=" md:w-[586.794921875] md:h-[440.6806640625] rounded-[18.19px] object-cover" />
      <div className="p-4">
        <p className="text-sm text-blue-600">{type}</p>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </div>
        );
};

export default DynamicCard;