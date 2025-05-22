import React from "react";

function Ocean() {
  return (
    <div className="h-screen bg-cover bg-center bg-[url(https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
      <div className="p-5 flex items-center ">
        <div className="flex flex-col items-start justify-center bg-black/35 p-5">
          <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-cyan-900">
            Ocean
          </p>
          <p className="text-2xl font-medium text-[#DCDCDC]">
            Oceans are vast bodies of saltwater that cover about 71% of Earth's
            surface. They regulate the planet's climate, support diverse marine
            life, and are essential for global ecosystems. Major oceans include
            the Pacific, Atlantic, Indian, Arctic, and Southern Oceans.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ocean;
