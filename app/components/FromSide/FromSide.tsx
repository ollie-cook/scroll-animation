import "./from-side.css"

export default function FromSide() {
  return (
    <div className="relative h-[100vh] w-full bg-[#abd1c6]">
      <div className="top-left absolute top-[10%] left-0 h-[35%] bg-[#001e1d]">
        <p className="absolute text-white right-1 top-1/2 -translate-y-1/2 text-5xl">
          THEN <br/> BLOCKS <br/> COME <br/> FROM <br/> THE <br/> SIDES
        </p>
      </div>
      <div className="top-right absolute top-[10%] right-0 h-[35%] bg-[#001e1d]"></div>
      <div className="bottom-left absolute bottom-[10%] left-0 h-[35%] bg-[#001e1d]"></div>
      <div className="bottom-right absolute bottom-[10%] right-0 h-[35%] w-[40vw] bg-[#001e1d]"></div>
    </div>
  )
}