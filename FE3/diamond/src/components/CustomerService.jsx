import React from "react";

const CustomerService = () => {
  return (
    <section className="mt-20 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1044d13d5783b047033edfe150b959ecbb3e71611ea9df1acc68134509284580?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
        alt="Customer Service"
        className="w-full aspect-[2.27] max-w-[1440px] max-md:max-w-full"
      />
      <h2 className="self-start mt-6 ml-60 text-3xl font-medium leading-10 text-zinc-800 max-md:max-w-full">
        We're Here For You
      </h2>
      <p className="self-start mt-2.5 ml-60 text-base text-zinc-800 w-[600px] max-md:max-w-full">
        Appointments curated just for you. Start your stack, find your fit,
        design the perfect
        <br />
        piece.
      </p>
      <div className="flex gap-4 justify-center self-start pt-4 mt-2.5 ml-60 max-w-full text-sm font-medium text-center text-zinc-800 w-[600px] max-md:flex-wrap">
        <button className="justify-center items-center px-16 py-3.5 border border-solid border-zinc-800 leading-[122%] max-w-[480px] max-md:px-5">
          Visit a Showroom
        </button>
        <button className="justify-center px-14 py-3.5 border border-solid border-zinc-800 leading-[119%] max-md:px-5">
          Book a Virtual Appointment
        </button>
      </div>
    </section>
  );
};

export default CustomerService;
