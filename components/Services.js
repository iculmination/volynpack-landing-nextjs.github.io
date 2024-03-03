const Services = () => {
  return (
    <section className="pt-12 md:pt-24 bgc-main flex flex-col pl-8 md:pl-16 lg:pl-32 pr-8 md:pr-16 lg:pr-32 lg:pt-36 lg:pb-24">
      <p className="mx-auto text-secondary-color mb-4 text-lg md:text-xl">
        Наші товари
      </p>
      <h2 className="mx-auto text-4xl md:text-6xl mb-6">Товари</h2>
      <h2 className="text-xl md:text-3xl mx-auto text-center md:text-left">
        Ми виготовляємо нашу продукцію дуже{" "}
        <span className="text-secondary-color">швидко</span> та{" "}
        <span className="text-secondary-color">якісно</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-x-8 md:gap-x-16 mt-8 md:mt-16">
        <div className="relative transition ease-in-out delay-150 hover:scale-110 duration-300 mb-8 md:mb-0">
          <img src="/bag.png" alt="" className="w-full md:w-64 rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-full"></div>
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg md:text-2xl text-center">
            Товар 1
          </p>
        </div>
        <div className="relative transition ease-in-out delay-150 hover:scale-110 duration-300 mb-8 md:mb-0">
          <img src="/bag.png" alt="" className="w-full md:w-64 rounded-md" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-md"></div>
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg md:text-2xl text-center">
            Товар 2
          </p>
        </div>
        <div className="relative transition ease-in-out delay-150 hover:scale-110 duration-300">
          <img src="/bag.png" alt="" className="w-full md:w-64 rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-full"></div>
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg md:text-2xl text-center">
            Товар 3
          </p>
        </div>
        <div className="relative transition ease-in-out delay-150 hover:scale-110 duration-300 mb-8 md:mb-0">
          <img src="/bag.png" alt="" className="w-full md:w-64 rounded-md" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-md"></div>
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg md:text-2xl text-center">
            Товар 2
          </p>
        </div>
        <div className="relative transition ease-in-out delay-150 hover:scale-110 duration-300">
          <img src="/bag.png" alt="" className="w-full md:w-64 rounded-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-full"></div>
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg md:text-2xl text-center">
            Товар 3
          </p>
        </div>
      </div>
      <h2 className="text-xl md:text-3xl mx-auto mt-8 md:mt-16 mb-8 md:mb-24">
        При замовленні <span className="text-secondary-color">зараз</span> ви
        отримаєте приємну <span className="text-secondary-color">знижку</span>
      </h2>
    </section>
  );
};

export default Services;
