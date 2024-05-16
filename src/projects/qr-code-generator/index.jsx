import { useState } from "react";
import QRCode from "react-qr-code";

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
      <input
        name="qr-code"
        placeholder="Enter your value here.."
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleGenerateQrCode}
        disabled={input && input.trim() !== "" ? false : true}
      >
        Generate QR Code
      </button>

      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </>
  );
};
export default QRCodeGenerator;
