import Cards from "../components/atoms/Cards";
import Portcard from "../components/atoms/Portcard";

export default function Portfolio() {
  return (
    <main className="">
      <div className="ml-4 mt-14">
        <h4 style={hello} className="text-2xl">
          PROJECTS<br></br>
          <span style={helloSpan} className="">
            HOLMESTUDIO
          </span>
        </h4>

        <p className="pt-10 text-xs">
          lorem ipsum lorem ipsum lorem ipsum lorem ip
        </p>
      </div>
      <div className="border-b-2 w-24 ml-44 mt-10 mr-4  ">
        <h6 className="text-right text-xs">webApplication</h6>
      </div>
     <Portcard/>
     <Portcard/>
     <Portcard/>
     <div className="mt-20 mx-4 flex justify-between">
      <div className="">
        <h6 className="text-xs">lets connect</h6>
      </div>
      <div className="">
        <h6 className="">twitter</h6>
        <h6 className="">instagram</h6>
        <h6 className="">github</h6>
        <h6 className="">linkedin</h6>
      </div>
     </div>
    </main>
  );
}

const hello = {
  color: '#180859',
};

const helloSpan = {
  color: '#A9A3A3',
};


