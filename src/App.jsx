import "./App.css";
import Accordion from "./projects/accordion";
import QRCodeGenerator from "./projects/qr-code-generator";

const App = () => {
  return (
    <div className="app">
      {/* <Accordion /> */}
      <QRCodeGenerator />
    </div>
  );
};
export default App;
