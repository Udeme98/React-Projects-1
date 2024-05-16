import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <>
      <h2>QR Code Generator</h2>

      <div className="qr-code">
        <div>
          <input
            name="qr-code"
            value={input}
            placeholder="Enter your value here.."
            onChange={(e) => setInput(e.target.value)}
            style={{ marginRight: "5px", backgroundColor: "bisque" }}
          />
          <button
            onClick={handleGenerateQrCode}
            disabled={input && input.trim() !== "" ? false : true}
          >
            Generate QR Code
          </button>
        </div>

        <div>
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        </div>
      </div>
    </>
  );
};
export default QRCodeGenerator;
