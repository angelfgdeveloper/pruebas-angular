// Ejecutar con ng test

export function incrementar(numero: number): number {
  if (numero > 100) {
    return 100;
  } else {
    return numero + 1;
    // return undefined;
  }
}
