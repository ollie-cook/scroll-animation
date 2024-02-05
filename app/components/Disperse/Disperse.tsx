import "./disperse.css"

export default function Disperse() {
  return (
    <div className="relative h-[100vh] w-full bg-[#001219]">
      <div className="disperse_one absolute top-8 w-96 aspect-[1.618] bg-[#005F73]"></div>
      <div className="disperse_two absolute w-96 aspect-[1.618] bg-[#0A9396]"></div>
      <div className="disperse_three absolute w-96 aspect-[1.618] bg-[#94D2BD]"></div>
      <div className="disperse_four absolute w-96 aspect-[1.618] bg-[#CA6702]"></div>
      <div className="disperse_five absolute top-8 w-96 aspect-[1.618] bg-[#AE2012]"></div>
    </div>
  )
}