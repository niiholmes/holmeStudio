export default function Footer(){
    return(
        <div style={footerFont} className="mt-8 mb-8  mx-4">
           <div  className="border-t-2">about</div>
           <div className="border-t-2">lorem ipsum</div>
           <div className="border-t-2">lorem ipsum</div>
           <div style={footerFont} className="flex">
           <div className=" pr-2 border-t-2">lorem ipsum</div>
           <div className=" pr-2 border-t-2">lorem ipsum</div>
           <div className=" pr-2 border-t-2">lorem ipsum</div>
           <div className=" pr-2 border-t-2">lorem ipsum</div>
           <div className=" pr-2 border-t-2">lorem ipsum</div>
          
           </div>
        </div>
    )
}

const footerFont ={
    fontSize:"8px"
}