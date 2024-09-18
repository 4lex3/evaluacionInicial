interface Props {
    ImageUrl: string;
    title: string;
}




function VerticalCard(props: Props) {
  return (
    <div className="bg-red-400 grid grid-rows-2 grid-cols-1">
        <img src={props.ImageUrl} 
            className="row-start-1 col-start-1 bg-slate-500" 
        />
        <a href="" className="text-blue-500 font-bold">{props.title}</a>
    </div>
  )
}

export default VerticalCard
