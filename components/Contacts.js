const Contacts = () => {
  return (
    <section
      id="contacts"
      className="h-[80vh] lg:h-screen flex items-center justify-center"
    >
      <div
        className="bg-cover bg-center relative"
        style={{
          backgroundImage: `url('/bag.png')`,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="bg-gradient-to-r to-transparent from-black absolute inset-0"></div>
        <div
          id="contacts"
          className="text-white z-10 relative pl-8 md:pl-32 pr-8 md:pr-32 pt-16 md:pt-48 text-center h-full"
        >
          <h2 className="text-4xl mb-4">Контактна інформація</h2>
          <p className="text-lg mb-2">
            <a
              href="mailto:example@gmail.com"
              className="text-white hover:underline"
            >
              Електронна пошта: example@gmail.com
            </a>
          </p>
          <p className="text-lg mb-2">
            <a href="tel:1234567890" className="text-white hover:underline">
              Телефон: +1-234-5677-890
            </a>
          </p>
          <p className="text-lg mb-2">
            Адреса складу: вул. Приклад, м. Приклад
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="">
              <img
                src="/instagram-white-icon.webp"
                className="w-7 h-7 cursor-pointer hover:scale-110 transition duration-300"
                alt="Instagram"
              />
            </a>
            <a href="">
              <img
                src="/viber-white-icon.webp"
                className="w-7 h-7 cursor-pointer hover:scale-110 transition duration-300"
                alt="Instagram"
              />
            </a>
            <a href="">
              <img
                src="/telegram-white-icon.webp"
                className="w-7 h-7 cursor-pointer hover:scale-110 transition duration-300"
                alt="Instagram"
              />
            </a>
          </div>
          <p className="text-lg mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            perspiciatis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
