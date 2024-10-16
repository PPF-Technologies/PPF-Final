import React from "react";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
      <div className="bg-red-500 h-40 md:col-span-2">Box 1 - Large</div>
      <div className="bg-blue-500 h-40">Box 2 - Medium</div>
      <div className="bg-green-500 h-40">Box 3 - Medium</div>
      <div className="bg-purple-500 h-92 md:row-span-2">Box 4 - Tall</div>
      <div className="bg-yellow-500 h-40">Box 5 - Medium</div>
      <div className="bg-yellow-500 h-40">Box 5 - Medium</div>
      <div className="bg-pink-500 h-40">Box 6 - Medium</div>
    </div>
  );
};

export default BentoGrid;
