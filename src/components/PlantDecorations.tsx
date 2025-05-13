
import React from 'react';

const PlantDecorations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top left creeper vine */}
      <div className="absolute top-0 left-0 w-40 h-[80vh] opacity-20 creeper-animation">
        <img src="/vine1.png" alt="" className="w-full h-full object-contain object-top" />
      </div>
      
      {/* Top right leaves */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-15 leaf-animation">
        <img src="/leaf1.png" alt="" className="w-full" />
      </div>
      
      {/* Bottom left floating leaf */}
      <div className="absolute bottom-20 left-10 w-32 h-32 opacity-20 leaf-float">
        <img src="/leaf2.png" alt="" className="w-full" />
      </div>
      
      {/* Bottom right rotating leaf */}
      <div className="absolute bottom-40 right-10 w-24 h-24 opacity-15 leaf-rotate">
        <img src="/leaf1.png" alt="" className="w-full" />
      </div>
      
      {/* Mid-right floating leaf */}
      <div className="absolute top-1/3 right-20 w-28 h-28 opacity-20 leaf-float" style={{ animationDelay: '2.5s' }}>
        <img src="/leaf2.png" alt="" className="w-full" />
      </div>
      
      {/* Mid-left rotating leaf */}
      <div className="absolute top-2/3 left-10 w-20 h-20 opacity-15 leaf-rotate" style={{ animationDelay: '1.5s' }}>
        <img src="/leaf1.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default PlantDecorations;
