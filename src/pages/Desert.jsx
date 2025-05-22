function Desert() {
  return (
    <div className="h-screen bg-cover bg-center bg-[url(https://images.pexels.com/photos/1352196/pexels-photo-1352196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
      <div className="p-10 flex items-center ">
        <div className="flex flex-col items-start justify-center bg-black/35 p-5">
          <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-amber-400">
            Desert
          </p>
          <p className="text-2xl font-medium">
            Deserts are dry, arid regions with minimal rainfall, extreme
            temperatures, and unique plants and animals adapted to survive harsh
            conditions. Examples include the Sahara, Gobi, and Arabian deserts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Desert;
