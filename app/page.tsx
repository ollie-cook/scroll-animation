import "./page.css"

export default function Home() {
  return (
    <main className="main-colour-scroll min-h-[200vh]">
      <div className="h-[200vh]">
        <div className="fixed top-[50vh] -translate-y-1/2 left-[50vw] -translate-x-1/2">
          <h1 className="text-6xl text-white font-bold "> 
            Learning Scroll-Driven Animations
          </h1>
          <p className="p-colour-scroll text-xl font-bold text-center mt-4">
            Firstly the background colour changes as you scroll down the page.
          </p>
          <p className="p-opacity-scroll text-lg mt-2 absolute right-0">
            &#x2B11; And so did the colour of that text
          </p>
        </div>
      </div>
    </main>
  );
}
