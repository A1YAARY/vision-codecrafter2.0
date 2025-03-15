import React from 'react';

const UserIcon = ({ name = "John Doe" }) => {
 
  const firstLetter = name.charAt(0);
  
  return (
    <div className='max-w-2/12'>
    <div className="flex flex-col items-center">
      
      <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mb-3">
        <span className="text-white text-4xl font-medium">{firstLetter}</span>
      </div>
      
      
      <h2 className="text-gray-700 text-lg font-medium">{name}</h2>
    </div>
    </div>
  );
};

export default UserIcon;