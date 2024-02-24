const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col xl:flex-row pr-4 md:pr-32 pl-4 md:pl-32 pt-32 md:pt-48 pb-12 md:pb-36 xl:pt-56 w-full bg-main-color"
    >
      <div className="relative w-full md:w-1/2 flex-shrink-0">
        <img
          src="/bags.png"
          alt=""
          className="hidden w-full md:max-w-md mx-auto xl:block absolute top-0 left-0 right-0 md:top-0 md:left-0 border-secondary-img"
        />
        <img
          src="/bag.png"
          alt=""
          className="hidden w-full md:max-w-md mx-auto xl:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-72 md:left-80 border-secondary-img"
        />
      </div>
      <div className="p-4 md:p-12 w-full xl:w-1/2 flex-shrink">
        <p className="mx-auto text-secondary-color mb-4 text-xl">
          Про компанію
        </p>
        <h2 className="mx-auto text-3xl md:text-6xl mb-6 text-gray-800">
          Про нашу компанію
        </h2>
        <h2 className="text-base md:text-xl mx-auto text-gray-700">
          Наша компанія була заснована в{" "}
          <span className="text-secondary-color">Рік</span> році та розміщена в
          прекрасному місті <span className="text-secondary-color">Місто</span>.
          Ми спеціалізуємось не лише на виготовленні паперових пакетів, але й на{" "}
          <span className="text-secondary-color">Товар</span> товарі.
          <p className="mt-6 text-gray-700">
            Наша компанія була заснована в{" "}
            <span className="text-secondary-color">Рік</span> році та розміщена
            в прекрасному місті{" "}
            <span className="text-secondary-color">Місто</span>. Ми
            спеціалізуємось не лише на виготовленні паперових пакетів, але й на{" "}
            <span className="text-secondary-color">Товар</span> товарі.
          </p>
        </h2>
      </div>
    </section>
  );
};

export default About;
