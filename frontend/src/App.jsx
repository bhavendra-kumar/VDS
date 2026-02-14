import FloatingHearts from "./components/FloatingHearts";
import Music from "./components/Music";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import TypingLetter from "./components/TypingLetter";
import Proposal from "./components/Proposal";
import FinalMessage from "./components/FinalMessage";
import LoveLetter from "./components/LoveLetter";
import StaticHearts from "./components/staticHearts";
import LoveTimeline from "./components/LoveTimeline";


function App() {
  return (
    <div className="relative isolate">
      <Music />
      <FloatingHearts />

      <div className="relative z-10">
        <Hero />
        <Gallery />
        <LoveTimeline/>
        <TypingLetter />
        <Proposal />
        <StaticHearts/>
        <div className="content-layer">
          <LoveLetter />
        </div>
        <FinalMessage />
      </div>
    </div>
  );
}

export default App;
