import Archive from "./components/archive/Archive";
import Contact from "./components/contact/Contact";
import Dock from "./components/dock/Dock";
import Finder from "./components/finder/Finder";
import Navbar from "./components/navbar/Navbar";
import Photos from "./components/photos/Photos";
import Resume from "./components/resume/Resume";
import Safari from "./components/safari/Safari";
import Terminal from "./components/terminal/Terminal";
import TextAndPhoto from "./components/textandphoto/TextAndPhoto";
import Welcome from "./components/welcome/Welcome";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cpns from "./components/dekstop/Cpns";

function App() {
  return (
    <main className="w-full h-screen relative">
      <Navbar />

      <Welcome />
      <Dock />
      <Finder />
      <Safari />
      <Photos />
      <Contact />
      <Terminal />
      <Archive />
      <Resume />
      <TextAndPhoto />
      <Cpns />
    </main>
  );
}

export default App;
