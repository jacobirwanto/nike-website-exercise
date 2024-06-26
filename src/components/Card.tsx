import React from "react";

interface CardProps {
  item: {
    className: string;
    title: string;
    src: string;
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div
      className={`${item.className} max-w-xl transform cursor-pointer transition hover:scale-105`}
    >
      <div className="p-8">
        <div className="text-2xl font-bold">{item.title}</div>
        <div className="mt-10 font-semibold underline underline-offset-4">
          SHOP NOW +
        </div>
      </div>
      <img
        className="absolute left-[50%] top-5 h-40"
        src={item.src}
        alt={item.title}
      />
    </div>
  );
};

export default Card;
