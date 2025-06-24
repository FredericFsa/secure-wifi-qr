# 📶 Secure WiFi QR

Une application React moderne permettant de **générer un QR code sécurisé** pour se connecter facilement à un réseau WiFi, avec options de **téléchargement en SVG ou PNG**.

---

## 🚀 Fonctionnalités

- 🔐 Génère un QR Code WiFi à partir du SSID, mot de passe et type de sécurité.
- 📲 Scannable par tous les téléphones récents.
- 💾 Téléchargement du QR code :
  - en **SVG** (qualité vectorielle, idéale pour impression)
  - en **PNG** (pour les documents, emails, etc.)
- 🎨 Design responsive et épuré basé sur **TailwindCSS**
- 🌐 Déployé sur [GitHub Pages](https://fredericfsa.github.io/secure-wifi-qr/)

---

## 🛠️ Technologies utilisées

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [react-qr-code](https://github.com/rosskhanas/react-qr-code)
- [Vite](https://vitejs.dev/) – pour un développement ultra-rapide

---

## 📦 Installation locale

```bash
git clone https://github.com/FredericFsa/secure-wifi-qr.git
cd secure-wifi-qr
npm install
npm run dev
```

---

## 🧱 Structure du projet

```
.
├── src/
│   ├── App.tsx          # Composant principal avec la logique du QR code
│   ├── Home.tsx         # Page d'accueil (route d'entrée)
│   ├── main.tsx         # Point d'entrée React
│   └── index.css        # Styles Tailwind
├── public/
│   └── favicon.ico      # Icône du site
├── vite.config.ts       # Configuration Vite (avec GitHub Pages)
└── README.md            # Ce fichier
```


---

## 🧑‍💻 Auteur

**Frédéric Salerno**  
[Portfolio](https://fredericsa.dev) • [GitHub](https://github.com/FredericFsa)

---

## 📄 Licence

Ce projet est open-source sous licence MIT.
