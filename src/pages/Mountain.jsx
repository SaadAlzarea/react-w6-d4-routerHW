

function Mountain() {
  return (
    <div className="h-screen bg-cover bg-center bg-[url(https://images.pexels.com/photos/2618804/pexels-photo-2618804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
      <div className="p-5 flex items-center ">
        <div className="flex flex-col items-start justify-center bg-black/35 p-5">
          <p className="text-5xl md:text-7xl lg:text-8xl font-bold text-amber-700">
            Mountain
          </p>
          <p className="text-2xl font-medium text-white">
            Mountains are large landforms that rise prominently above the
            surrounding terrain, often with steep slopes and peaks. They are
            formed by tectonic forces or volcanic activity and serve as sources
            of rivers and habitats for diverse wildlife. Examples include the
            Himalayas, the Alps, and the Rocky Mountains.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mountain;
