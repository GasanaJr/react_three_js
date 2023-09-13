import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";
import { useRef } from "react";
function App() {
  const WebgiViewerRef = useRef();
  const contentRef = useRef();
  const handlePreview = () => {
    WebgiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />
      <div id="content" ref={contentRef}>
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer ref={WebgiViewerRef} contentRef={contentRef} />
    </div>
  );
}

export default App;
