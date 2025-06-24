
import React, { useState } from 'react';
import QRCode from 'react-qr-code';

export default function App() {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [security, setSecurity] = useState('WPA');
  const [hidden, setHidden] = useState(false);
  const [qrVisible, setQrVisible] = useState(false);

  const createWiFiString = () =>
    `WIFI:T:${security};S:${ssid};P:${password};H:${hidden};;`;

  const handleDownload = () => {
    const svg = document.querySelector("svg");
    if (!svg) return;

    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svg);
    const svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${ssid || 'wifi-qr'}.svg`;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 text-white flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-3xl shadow-xl w-full max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-6">Générateur de QR Code WiFi</h1>
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Nom du réseau (SSID)"
            value={ssid}
            onChange={(e) => setSsid(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring focus:ring-emerald-400 text-white placeholder-white/60"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring focus:ring-emerald-400 text-white placeholder-white/60"
          />
          <select
            value={security}
            onChange={(e) => setSecurity(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring focus:ring-emerald-400"
          >
            <option value="WPA">WPA/WPA2</option>
            <option value="WEP">WEP</option>
            <option value="">Aucune</option>
          </select>
          <label className="flex items-center justify-center gap-2">
            <input
              type="checkbox"
              checked={hidden}
              onChange={(e) => setHidden(e.target.checked)}
              className="accent-emerald-500"
            />
            Réseau masqué
          </label>
        </div>

        <button
          onClick={() => setQrVisible(true)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-full transition mb-4"
        >
          Générer le QR Code
        </button>

        {qrVisible && (
          <div className="flex flex-col items-center gap-4">
            <QRCode value={createWiFiString()} />
            <button
              onClick={handleDownload}
              className="bg-white text-emerald-700 font-bold px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
            >
              Télécharger (SVG)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
