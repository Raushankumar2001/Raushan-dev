import React from 'react';

const ServiceCard = ({ title, items }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full">
      <h3 className="text-xl font-bold text-primary mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-gray-600 text-sm">
            <span className="mr-3 text-accent mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
