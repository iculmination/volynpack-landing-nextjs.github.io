
const Process = () => {
  const data = [
    { h1: "Друк логотипів", p: "Вміст пункту у вигляді тексту" },
    {
      h1: "Опт та роздріб",
      p: "Вміст пункту у вигляді тексту довгий вміст пункту у вигляді тексту довгий",
    },
    { h1: "Вигідні умови для b2b", p: "Вміст пункту у вигляді тексту" },
    {
      h1: "Відправка пн-пт",
      p: "Вміст пункту у вигляді тексту довгий вміст пункту у вигляді тексту довгий",
    },
    {
      h1: "Еко-товари",
      p: "Вміст пункту у вигляді тексту довгий вміст пункту у вигляді тексту довгий вміст пункту у вигляді тексту довгий",
    },
    { h1: "Безкоштовна консультація", p: "Вміст пункту у вигляді тексту" },
  ];

  return (
    <section className="w-full pl-4 md:pl-32 pr-4 md:pr-32 bg-main-color xl:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-16 md:pt-36 pb-12 md:pb-24">
      <h2 className="col-span-3 text-3xl md:text-5xl self-center mx-auto  text-gray-700 mb-6">
        Які послуги ми надаємо?
      </h2>

      <Elements data={data} />
    </section>
  );
};

const Elements = ({ data }) => {
  return (
    <>
      {data.map((el, i) => {
        return (
          <div
            className="flex flex-col md:flex-row mt-4 md:mt-16 ml-4 md:ml-16"
            key={i}
          >
            <div className="text-xl md:text-6xl text-secondary-color font-bold mb-4 md:mr-12 ">
              {i + 1}
            </div>
            <div className="md:w-2/3">
              <div className="text-2xl md:text-3xl mb-4">{el.h1}</div>
              <div className="text-lg">{el.p}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Process;
