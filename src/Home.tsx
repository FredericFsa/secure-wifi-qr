import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 text-white">
      {/* Barre de navigation */}
      <header className="w-full p-4 flex justify-between items-center bg-white/10 backdrop-blur-md shadow-md">
        <h1 className="text-xl font-bold">🔐 Secure WiFi QR</h1>
        <Link to="/generate" className="text-emerald-300 hover:text-emerald-400 font-semibold transition">
          Générer
        </Link>
      </header>

      {/* Contenu principal */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-3xl shadow-xl text-center max-w-xl w-full animate-fade-in">
          <img
            src="https://cdn-icons-png.flaticon.com/512/481/481103.png"
            alt="Icône QR"
            className="w-24 h-24 mx-auto mb-6 drop-shadow-lg"
          />
          <h2 className="text-4xl font-extrabold mb-4">Secure WiFi QR Generator</h2>
          <p className="text-lg mb-6 text-white/90 leading-relaxed">
            Créez instantanément un QR Code WiFi sécurisé. Un outil simple, rapide et sans erreur pour connecter vos invités.
          </p>
          <Link
            to="/generate"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
          >
            Générer un QR Code
          </Link>
        </div>
      </main>

      {/* Pied de page */}
      <footer className="text-center text-white/70 py-4 text-sm">
        © {new Date().getFullYear()} Secure WiFi QR • Créé avec ❤️ par Frédéric SALERNO 
      </footer>
    </div>
  );
}
