import Link from 'next/link';
import Cards from './Cards';

export default function Welcome() {
  return (
    <div className="mt-14 ml-4">
      <h6 className="text-xs" style={hello}>
        hello world! <span style={helloSpan}>nice to meet you</span>
      </h6>
      <p className=" mr-4 text-xs text-justify pt-2">
        lorem ipsum lorem ipsum lorem ipsum lorem ip lorem ipsum lorem ipsum
        lorem ipsum lorem ip lorem ipsum lorem ipsum lorem ipsum lorem ip lorem
        ipsum lorem ipsum lorem ipsum lorem ip lorem ipsum lorem ipsum lorem
        ipsum lorem ip lorem ipsum lorem ipsum lorem ipsum lorem ip lorem ipsum
        lorem ipsum lorem ipsum lorem ip lorem ipsum lorem ipsum lorem ipsum
        lorem ip lorem ipsum lorem ipsum lorem ipsum lorem ip lorem ipsum lorem
        ipsum lorem ipsum lorem ip
      </p>
      <Link href="/contact"><div className="mt-3 flex">
        <span className="pr-2 text-xs">&#8594;</span>
        <h6 className="text-xs border-b-2">get in touch</h6>
      </div></Link>

      <div className="mt-14">
        <h6 className="text-xs" style={hello}>
          PROJECTS.{' '}
          <span style={helloSpan}>Take a look at my recent projects</span>
        </h6>
      </div>
      <div className=" mt-8 min-h-64  overflow-x-auto flex ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
       
      </div>
      <div className="mt-14  min-w-min">
        <h6 className="text-xs" style={hello}>
          QUESTION? <span style={helloSpan}>Say hi!</span>
        </h6>
        <div className='mr-4 mt-4 flex justify-between'>
          <div style={contactPill}>lorem</div>
          <div style={contactPill}>lorem</div>
          <div style={contactPill}>lorem</div>
        </div>
      </div>
    </div>
  );
}

const hello = {
  color: '#180859',
};

const helloSpan = {
  color: '#A9A3A3',
};


const contactPill={
  backgroundColor:"#D9D9D9",
  color:"#278AE4",
  paddingTop: "4px",
  paddingLeft: "25px",
  fontSize:"12px",
  borderRadius: "50px",
  width:"80px",
  height: "25px"
}