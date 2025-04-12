// firebase-config.js

// Importa Firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Esto es para Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyD-nwiTZ4nvJYoSmEclfOMz5q-J_fG_aLE",
  authDomain: "bingo-iq.firebaseapp.com",
  projectId: "bingo-iq",
  storageBucket: "bingo-iq.appspot.com",
  messagingSenderId: "150993575552",
  appId: "1:150993575552:web:xxxxxxxxxxxxxxxxx", // puedes dejarlo vacío si no tienes uno
  databaseURL: "https://bingo-iq-default-rtdb.firebaseio.com/" // asegúrate de tener esto
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la base de datos
export const database = getDatabase(app);
