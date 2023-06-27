import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between m-4 text-xs">
      <div>
       <Link href="/"><h4>klvn</h4></Link> 
      </div>
      <div className="flex w-32 justify-between">
        <div >
          <Link href="/about"><h4>about</h4></Link>
        </div>
        <div>
          <Link href="/works"><h4>works</h4></Link>
        </div>
        <div>
         <Link href="/contact"><h4>sayHi</h4></Link> 
        </div>
      </div>
    </div>
  );
}
