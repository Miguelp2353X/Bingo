import { ref, set, onValue } from "firebase/database";
import { database } from "./firebase-config.js";

// Supongamos que quieres guardar el estado de la cuadrícula:
function actualizarCuadricula(estado) {
  set(ref(database, "cuadricula/"), estado);
}

// Para recibir los cambios en tiempo real:
onValue(ref(database, "cuadricula/"), (snapshot) => {
  const datos = snapshot.val();
  if (datos) {
    actualizarVisualmenteCuadricula(datos); // función tuya para actualizar la interfaz
  }
});