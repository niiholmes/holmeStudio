import Link from "next/link";
import Service from "../components/atoms/Service";

export default function About() {
  return (
    <main className="">
      <div style={hello} className="mt-14 ml-4">
        <h6 className="text-xs">developer + designer</h6>
      </div>
      <div style={helloSpan} className="w-20 ml-4">
        <h4 className="text-base">
          BASED IN <span className="text-2xl">ACCRA</span>
        </h4>
      </div>
      <div className="ml-4">
        <p className="mr-4 text-xs text-justify pt-2">
          lorem ipsum lorem ipsum lorem ipsum lorem ip lorem ipsum lorem ipsum
          lorem ipsum lorem ip lorem ipsum lorem ipsum lorem ipsum lorem ip
          lorem ipsum lorem ipsum lorem ipsum lorem ip lorem ipsum lorem ipsum
        </p>
        <p className="mr-4 text-xs text-justify pt-4">
          tech stacks: <br></br>
          lorem ipsum lorem ipsum lorem ipsum lorem ip lorem ipsum lorem ipsum
          lorem ipsum lorem ip lorem ipsum lorem ipsum lorem ipsum lorem ip
        </p>
      </div>
      <div className="ml-4 mt-6">
        <h6 className="text-xs" style={hello}>
          SERVICES. <span style={helloSpan}>what i can do for you</span>
        </h6>
        <Service/>
        <Service/>
        <Service/>
        <div className="border mt-5 w-72"></div>
      </div>
      <div className=" mt-12 ml-4">
        <h6 className="text-xs"> PERSONAL <span style={helloSpan}>INTERESTS</span></h6>
        <div className="mt-4">
          <h6 className="">LOREM</h6>
          <h6 style={helloSpan}>LOREM</h6>
          <h6 style={helloSpan}>LOREM</h6>
        </div>
      </div>
      <div className=" mt-10 mx-4 flex justify-between">
     <Link href="/"> <div className="">
        <h6><span className="">&#8592;</span> HOME</h6>
      </div></Link>
     <Link href="/works"> <div className="">
        <h6> WORKS <span className="">&#8594;</span></h6>
      </div></Link>
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
