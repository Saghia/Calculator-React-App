import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import logo from "./calc2.svg";
import ContainerDev from "./components/ContainerDev.js";
import Title from "./components/Title.js";
import ImgRotate from "./components/ImgRotate";
import CalculatorBody from "./components/CalculatorBody";
import PCode from "./components/PCode";
import LinkGithubSaghia from "./components/LinkGithubSaghia";
const LinkGithubSaghiaVar = "https://github.com/Saghia";

function App() {
  return (
    <ContainerDev
      Title={<Title TextTitle={"Calcualtor App"} />}
      ImgRotate={<ImgRotate img={logo} />}
      CalculatorBody={<CalculatorBody />}
      PCode={<PCode CodeText={"src/App.js"} />}
      LinkGithubSaghia={<LinkGithubSaghia TextLink={LinkGithubSaghiaVar} />}
    />
  );
}

export default App;
