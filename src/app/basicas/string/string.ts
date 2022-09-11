// Ejecutar con ng test

export function mensaje(nombre: string) {
  return `Saludos ${ nombre }`; // Saludos Angel
  // return true; // Error en pruebas por tipo de retorno boolean
}
