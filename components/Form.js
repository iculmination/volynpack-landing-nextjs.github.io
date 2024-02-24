"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Ім'я має містити щонайменше 3 символи" }),
  contacts: z
    .string()
    .min(6, { message: "Контакти мають містити щонайменше 6 символів" }),
  comment: z.string().optional(),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section
      id="form"
      className="flex w-full justify-evenly gap-8 lg:gap-12 items-center bg-main-color pt-32 pb-16 xl:pb-32 pl-4 pr-4 md:pl-32 md:pr-32 lg:pt-56"
    >
      <div className="text-gray-800 text-center min-w-1/2">
        <h2 className="text-3xl md:text-4xl mb-4">Оформлення замовлення</h2>
        <p className="text-base mt-2 mb-8">Бажаєте зробити замовлення?</p>
        <p className="text-base mt-2 mb-8">
          Залиште свої контактні дані, і наш менеджер зв'яжеться з вами!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto bg-[#e9d9c6] p-8 rounded-md shadow-md border-secondary-img w-96 md:w-full focus:outline-none"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Ім'я
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-primary"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="contacts"
              className="block text-sm font-medium text-gray-600"
            >
              Контакти (пошта/телефон/месенджер)
            </label>
            <input
              type="text"
              id="contacts"
              {...register("contacts")}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-primary"
            />
            {errors.contacts && (
              <p className="text-red-500 text-sm">{errors.contacts.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-600"
            >
              Що бажаєте замовити/дізнатись?
            </label>
            <textarea
              id="comment"
              {...register("comment")}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full h-16 bgc-secondary rounded-full flex items-center justify-center text-white text-base cursor-pointer flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <p>Надіслати</p>
          </button>
        </form>
      </div>
      <div className="hidden max-w-1/2 flex-shrink-0 xl:block">
        <img
          src="/bag.png"
          alt="Паперовий пакет"
          className="hidden max-w-2xl border-secondary-img xl:block"
        />
      </div>
    </section>
  );
};

export default Form;
