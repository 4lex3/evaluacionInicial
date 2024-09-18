import React from "react";

interface Props {
  imageURL: string;
  principalText: string;
  secondaryText: string;
}

function NormalCard(props: Props) {
  return (
    <div
      className="flex bg-white justify-between items-center p-2 gap-2 rounded-sm mb-2"
      style={{ backgroundImage: `url(${props.imageURL})`, backgroundSize: 'cover' }}
    >

      <img className="min-h-[10px] min-w-0 " src={props.imageURL}/>

      <div className="text-white min-w-[450px]">
        <h1 className=" text-2xl font-bold">{props.principalText}</h1>
        <p className="">{props.secondaryText}</p>
      </div>
    </div>
    
  );
}

export default NormalCard;
