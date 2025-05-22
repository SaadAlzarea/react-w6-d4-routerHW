function Forest() {
  return (
    <div className="h-screen bg-cover bg-center bg-[url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
      <div className="p-10 flex items-center ">
        <div className="flex flex-col items-start justify-center bg-black/35 p-5">
          <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-green-500">
            Forests
          </p>
          <p className="text-2xl font-medium text-green-100">
            Forests are large areas covered with dense trees, plants, and
            wildlife, forming a vital part of Earth's ecosystem. They provide
            oxygen, regulate climate, and serve as habitats for diverse species.
            Examples include the Amazon Rainforest, the Black Forest, and the
            Taiga.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Forest;
