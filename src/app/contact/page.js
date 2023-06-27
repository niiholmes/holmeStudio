export default function About() {
  return (
    <main className="">
      <div className="ml-4 mt-14">
        <h6 style={helloSpan} className="text-xs text-center">send a message</h6>
        <h4 className="text-center pt-7">
          NII.ASHONG.CAESAR<br></br>@GMAIL.COM
        </h4>
      </div>
      <div className="mt-10">
        <h6 style={helloSpan} className="text-center text-xs">Or say hi on<br></br> social media</h6>
      </div>
      <div className="mt-10">
        <h4 className="text-center">TWITTER</h4>
        <h4 className="text-center">LINKEDIN</h4>
        <h4 className="text-center">GITHUB</h4>
      </div>
    </main>
  );
}
const helloSpan = {
  color: '#A9A3A3',
};