import React from 'react';

const UserDetailsCard = () => {
  return (
   
    <div className="max-w-4/12 mx-auto p-6 ">
      <div className=" g-x-6 g-y-6">
        
        <div className="space-y-1 ">
          <label className="block text-sm text-[#10002B] uppercase">NAME</label>
          <div className="flex">
            <input 
              type="text"
              value="John Doe"
              className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
              readOnly
            />
            
          </div>
        </div>
        
        
        <div className="space-y-1">
          <label className="block text-sm text-[#10002B] uppercase">PAN</label>
          <input 
            type="text"
            value="*******3434"
            className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
            readOnly
          />
        </div>
        
        
        <div className="space-y-1">
          <label className="block text-sm text-[#10002B] uppercase">DATE OF BIRTH (DD/MM/YYYY)</label>
          <input 
            type="text"
            value="29/02/1996"
            className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
            readOnly
          />
        </div>
        
        
        <div className="space-y-1">
          <label className="block text-sm text-[#10002B] uppercase">GENDER</label>
          <input 
            type="text"
            value="Male"
            className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
            readOnly
          />
        </div>
        
       
        <div className="space-y-1">
          <label className="block text-sm text-[#10002B] uppercase">MOBILE NUMBER</label>
          <div className="flex">
            <input 
              type="text"
              value="******6960"
              className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
              readOnly
            />
            
          </div>
        </div>
        
       
        
        
        
        <div className="space-y-1">
          <label className="block text-sm text-[#10002B] uppercase">EMAIL</label>
          <div className="flex">
            <input 
              type="text"
              value="sdfghj@gmail.com"
              className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
              readOnly
            />
            
          </div>
        </div>
        
        
        
        
        <div className="space-y-1 md:col-span-2">
          <label className="block text-sm text-#10002B uppercase">Demat Acc Number / BOID</label>
          <div className="flex">
            <input 
              type="text"
              value="1208870248208170"
              className="w-full px-3 py-2 border-b border-gray-200 focus:outline-none focus:border-blue-500"
              readOnly
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;