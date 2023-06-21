import Cards from './Cards';

export default function Welcome() {
  return (
    <div className="mt-14 ml-4">
      <h6 className="text-xs" style={hello}>
        hello world! <span style={helloSpan}>nice to meet you</span>
      </h6>
      <p className="text-xs text-justify pt-2">
        lorem ipsum lorem ipsum lorem ipsum lorem ip lorem ipsum lorem ipsum
        lorem ipsum lorem ip lorem ipsum lorem ipsum lorem ipsum lorem ip lorem
        ipsum lorem ipsum lorem ipsum lorem ip lorem ipsum lorem ipsum lorem
        ipsum lorem ip lorem ipsum lorem ipsum lorem ipsum lorem ip lorem ipsum
        lorem ipsum lorem ipsum lorem ip lorem ipsum lorem ipsum lorem ipsum
        lorem ip lorem ipsum lorem ipsum lorem ipsum lorem ip lorem ipsum lorem
        ipsum lorem ipsum lorem ip
      </p>
      <div className="mt-3 flex">
        <span className="pr-2 text-xs">-&gt;</span>
        <h6 className="text-xs border-b-2">get in touch</h6>
      </div>

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
      <div className="mt-14 mx-4 min-w-min">
        <h6 className="text-xs" style={hello}>
          QUESTION? <span style={helloSpan}>Say hi!</span>
        </h6>
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
