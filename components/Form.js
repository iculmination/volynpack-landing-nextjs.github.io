"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
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
  const [sending, setSending] = useState(false);
  const [popup, setPopup] = useState(false);

  const openPopup = (string) => {
    setPopup(string);
    setTimeout(() => {
      setPopup(null);
    }, 3000);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setSending(true);
    var date = new Date();
    data.formattedDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    try {
      const res = await fetch("https://volynpack-landing-nextjs-github-io.vercel.app/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        openPopup("Не вдалося надіслати. Спробуйте ще раз...");
        setSending(false);
        throw new Error("failed to fetch");
      }

      setSending(false);
      openPopup(
        "Ваші дані успішно надіслано!"
      );
      return res.text();
    } catch (error) {
      openPopup("Не вдалося надіслати. Спробуйте ще раз...");
      setSending(false);
    }
  };

  const dynamicStyles = popup
  ? "fixed top-40 bg-[#e9d9c6] left-1/3 rounded-full w-1/3 h-12 items-center flex justify-center shadow-lg transition-all duration-300 translate-y-10 opacity-100"
  : "fixed top-40 bg-[#e9d9c6] left-1/3 rounded-full w-1/3 h-12 items-center flex justify-center shadow-lg transition-all duration-300 translate-y-0 opacity-0";

  return (
    <section
      id="form"
      className="flex w-full justify-evenly gap-8 lg:gap-12 items-center bg-main-color pt-32 pb-16 xl:pb-32 pl-4 pr-4 md:pl-32 md:pr-32 lg:pt-56"
    >
      <div className={dynamicStyles}>
        <div className="flex text-center items-center">
          <img
            src="Tilda_Icons_7cafe_letter.svg"
            alt=""
            className="mr-2 w-6 h-6"
          />
          <p>{popup}</p>
        </div>
      </div>
      <div className="text-gray-800 text-center min-w-1/2">
        <h2 className="text-3xl md:text-4xl mb-4">Оформлення замовлення</h2>
        <p className="text-base mt-2 mb-8">Бажаєте зробити замовлення?</p>
        <p className="text-base mt-2 mb-8">
          Залиште свої контактні дані, і наш менеджер зв{`'`}яжеться з вами!
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
              Ім{`'`}я
            </label>
            <input
              maxLength="30"
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
              maxLength="45"
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
              maxLength="112"
              id="comment"
              {...register("comment")}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className={sending?"w-full h-16 bgc-secondary rounded-full flex items-center justify-center text-white text-base flex transition ease-in-out delay-150 opacity-80 duration-300":"w-full h-16 bgc-secondary rounded-full flex items-center justify-center text-white text-base cursor-pointer flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"}
          >
            <p>{sending ? "Надсилаємо..." : "Надіслати"}</p>
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
