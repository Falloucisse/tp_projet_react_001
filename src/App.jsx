import InfoPerso from "./components/InfoPerso";
import Competences from "./components/Competences";
import Experiences from "./components/Experiences";
import "./App.css";

function App() {
return ( <main className="cv"> <header className="cv-header"> <h1>Mon Curriculum Vitae</h1> <p>Développeur web</p> </header>

  <InfoPerso />

  <Competences />

  <Experiences />
</main>

);
}

export default App;
