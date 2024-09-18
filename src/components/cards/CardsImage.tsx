import React from "react";

interface Props {
  ImageUrl: string;
  PrincipalText: string;
  SecondaryText: string;
}

function CardsImage(Props: Props) {
  return (
    <div
      className={`p-2 grid grid-cols-1 grid-rows-4 gap-2 bg-black bg-opacity-30 bg-cover bg-blend-multiply`}
      style={{ backgroundImage: `url(${Props.ImageUrl})` }}
    >
      <div className=" col-span-1 row-start-3  rounded-sm flex justify-start items-end">
        <p className="text-white bg-sky-600 text-sm">{Props.SecondaryText}</p>
      </div>
      <h3 className="text-white text-3xl col-span-4 row-start-4 ">
        {Props.PrincipalText}
      </h3>
    </div>
  );
}

export default CardsImage;
