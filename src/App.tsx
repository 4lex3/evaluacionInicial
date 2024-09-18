import CardsImage from "./components/cards/CardsImage";
import NavBar from "./components/navbar/NavBar";
import NormalCard from "./components/NormalCard";

function App() {
  return (
    <div className="bg-slate-300">
      <NavBar />

      <main className="p-1">
        <div className="grid grid-rows-1 grid-cols-3 mb-2">
          <CardsImage
            ImageUrl="https://www.txirula.com/modules/dbblog/views/img/post/Best-Electric-Guitar-Brands-Featured-Image.jpg"
            PrincipalText="Texto Random"
            SecondaryText="Texto Random"
          />
          <CardsImage
            ImageUrl="https://hinves.com/wp-content/uploads/2023/06/como-mantener-tu-piano-en-perfectas-condiciones-768x512.jpg"
            PrincipalText="Texto Random"
            SecondaryText="Texto Random"
          />
          <CardsImage
            ImageUrl="https://www.piano-composer-teacher-london.co.uk/wp-content/uploads/2024/02/How-Long-is-a-Concert-Grand-Piano.png"
            PrincipalText="Texto"
            SecondaryText="Texto Random"
          />
        </div>


        <NormalCard imageURL="https://www.piano-composer-teacher-london.co.uk/wp-content/uploads/2024/02/How-Long-is-a-Concert-Grand-Piano.png" principalText="Texto Principal" secondaryText="Texto aosdkalsdkasdlasdaskl"/>
        <NormalCard imageURL="https://www.piano-composer-teacher-london.co.uk/wp-content/uploads/2024/02/How-Long-is-a-Concert-Grand-Piano.png" principalText="Texto Principal" secondaryText="Texto aosdkalsdkasdlasdaskl"/>
        <NormalCard imageURL="https://www.piano-composer-teacher-london.co.uk/wp-content/uploads/2024/02/How-Long-is-a-Concert-Grand-Piano.png" principalText="Texto Principal" secondaryText="Texto aosdkalsdkasdlasdaskl"/>
        <NormalCard imageURL="https://www.piano-composer-teacher-london.co.uk/wp-content/uploads/2024/02/How-Long-is-a-Concert-Grand-Piano.png" principalText="Texto Principal" secondaryText="Texto aosdkalsdkasdlasdaskl"/>



      </main>
    </div>
  );
}

export default App;
