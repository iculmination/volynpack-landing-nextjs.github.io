'use client'

import useEmblaCarousel from "embla-carousel-react";

const comments = [
  {
    name: "Ім'я Прізвище",
    comment:
      "Коментар коментар коментар коментар коментар коментар коментар коментар коментар коментар коментар коментар коментар",
    date: "03-12-2021",
    rating: 4,
  },
  { name: "name", comment: "comment", date: "03-12-2021", rating: 4 },
  { name: "name", comment: "comment", date: "03-12-2021", rating: 4 },
  { name: "name", comment: "comment", date: "03-12-2021", rating: 4 },
  { name: "name", comment: "comment", date: "03-12-2021", rating: 4 },
  { name: "name", comment: "comment", date: "03-12-2021", rating: 4 },
];

const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const goToPrev = () => emblaApi.scrollPrev();
  const goToNext = () => emblaApi.scrollNext();

  return (
    <section className="pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 md:pr-16 lg:pr-24 xl:pr-32 pt-8 md:pt-16 lg:pt-24 xl:pt-32 w-full bg-main-color">
      <div className="flex justify-between w-full">
        <h2 className="mx-auto lg:mx-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Відгуки
        </h2>
        <p className="hidden xl:block text-xl md:text-2xl self-center flex flex-row">
          Найважливіше для нас - довіра наших покупців
        </p>
      </div>
      <div className="flex w-full justify-center mt-8 md:mt-12 lg:mt-16 xl:mt-20">
        <button
          className="mr-4 md:mr-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={goToPrev}
        >
          ◁
        </button>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-4">
            {comments.map((el, i) => (
              <div
  key={i}
  className="border-secondary-img embla__slide w-full md:w-32 bg-[#e9d9c6] rounded-xl p-4 md:p-6 lg:p-8 xl:p-10"
>
  <div className="flex flex-col items-center">
    <div className="border-secondary-img rounded-full w-16 h-16 bg-main-color flex justify-center p-2 mb-4 md:mb-8">
      <img src='/Tilda_Icons_5ev_smile.svg' alt="" className="w-12" />
    </div>
    <div className="text-center">
      <p className="mb-1 text-base md:text-xl lg:text-2xl flex items-center">
        {el.name}{" "}
        <img
          src='/Tilda_Icons_10cw_bubbles.svg'
          alt=""
          className="ml-2 w-6 md:w-8 lg:w-10"
        />
      </p>
      <p className="text-sm md:text-base lg:text-lg">
        Оцінка: {el.rating}/5
      </p>
    </div>
  </div>
  <div className="text-left mt-4">
    <p className="text-xs md:text-sm lg:text-base">
      {el.comment}
    </p>
    <p className="text-xs md:text-sm lg:text-base mt-2">
      {el.date}
    </p>
  </div>
</div>

            ))}
          </div>
        </div>

        <button
          className="ml-4 md:ml-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          onClick={goToNext}
        >
          ▷
        </button>
      </div>
    </section>
  );
};

export default Reviews;


{/* <div
  key={i}
  className={`border-secondary-img embla__slide w-full md:w-32 lg:w-20 xl:w-24 bg-[#e9d9c6] rounded-xl p-4 md:p-6 lg:p-8 xl:p-10`}
>
  <div className="flex items-center lg:items-start">
    <div className="border-secondary-img rounded-full w-12 h-12 lg:w-16 lg:h-16 bg-main-color flex justify-center p-2 ml-4 md:ml-8">
      <img src={smile} alt="" className="w-10" />
    </div>
    <div className="ml-4 md:ml-8 lg:ml-0 lg:mt-2">
      <p className="mb-1 text-xl md:text-2xl lg:text-3xl flex items-center">
        {el.name}{" "}
        <img
          src={bubbles}
          alt=""
          className="ml-2 w-8 lg:w-10"
        />
      </p>
      <p className="text-lg md:text-xl lg:text-lg">
        Оцінка: {el.rating}/5
      </p>
    </div>
  </div>
  <div className="text-left mt-4">
    <p className="text-base md:text-sm lg:text-base">
      {el.comment}
    </p>
    <p className="text-base md:text-sm lg:text-base mt-2">
      {el.date}
    </p>
  </div>
</div> */}
