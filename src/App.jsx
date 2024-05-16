import "./App.css";
import Accordion from "./projects/accordion";
import QRCodeGenerator from "./projects/qr-code-generator";
import Weather from "./projects/weather app/weather";

const App = () => {
  return (
    <div className="app">
      {/* <Accordion /> */}
      {/* <QRCodeGenerator /> */}
      <Weather />
    </div>
  );
};
export default App;
