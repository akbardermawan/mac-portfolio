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
import Village from "./components/dekstop/Village";
import Music from "./components/dekstop/music/Music";
import Calendar from "./components/dekstop/calendar/Calendar";
import Aurora from "./components/background/Aurora";

function App() {
  return (
    <main className="w-full h-screen relative ">
      {/* 🔥 SEO LANDING (VISIBLE UNTUK GOOGLE, HIDDEN UNTUK USER) */}
      <section className="sr-only">
        <h1>Akbar Portfolio - React JS Frontend Developer</h1>

        <p>
          Akbar adalah seorang Frontend Developer yang membangun website modern
          menggunakan React JS, Vite, dan teknologi frontend terbaru. Portfolio
          ini menampilkan berbagai project, pengalaman, dan kemampuan dalam web
          development.
        </p>

        <h2>Skills</h2>
        <p>React JS, JavaScript, Vite, Redux, Tailwind CSS, Web Development</p>

        <h2>Projects</h2>
        <p>
          Website portfolio, UI desktop simulator, aplikasi frontend interaktif,
          dan berbagai project React modern.
        </p>

        <h2>Location</h2>
        <p>Indonesia</p>
      </section>
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-black">
        <Aurora
          colorStops={["#678dff", "#05fafa", "#2762ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* Foreground */}
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
      <Village />
      <Music />
      <Calendar />
    </main>
  );
}

export default App;
