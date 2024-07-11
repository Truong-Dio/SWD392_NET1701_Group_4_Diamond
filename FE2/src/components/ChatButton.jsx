import React from "react";

const ChatButton = () => {
  return (
    <button className="flex justify-center items-center self-end px-3.5 py-3 mt-96 w-14 h-14 bg-teal-900 rounded-3xl shadow-sm max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fb94c9ddd55a2f954656e15a05ff0ec6039b4315c22545601bbd2de77a40137?apiKey=04f0f0d41c7d4ab7868ce7f579c0596c&"
        alt="Chat"
        className="aspect-square w-[30px]"
      />
    </button>
  );
};

export default ChatButton;
