export default function Portcard() {
  return (
    <div className="ml-4 mt-14">
      <h4 style={hello} className="text-2xl">
        LOREM<br></br>
        <span style={helloSpan} className="">
          IPSUM
        </span>
      </h4>
      <p className="pt-8 text-xs">
        lorem ipsum lorem ipsum lorem<br></br> ipsum lorem ip
      </p>
      <div style={card} className="rounded-xl mt-10 h-52 w-52 mx-10"></div>
      <p className="pt-4 text-xs">
        lorem ipsum lorem ...
      </p>
    </div>
  );
}

const hello = {
    color: '#180859',
  };
  
  const helloSpan = {
    color: '#A9A3A3',
  };
  
  
  const card = {
    backgroundColor: '#D9D9D9',
    minWidth: '200px'
  };
