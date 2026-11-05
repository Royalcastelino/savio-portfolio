import Layout from "./components/layout/layout";
import Intro from "./components/sections/Intro";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Achievements from "./components/sections/Achievement";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <Layout>
      <Intro />
      <Experience />
      <Education />
      <Achievements />
      <Footer />
    </Layout>
  );
}

export default App;
