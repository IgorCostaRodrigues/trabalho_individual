const propriedades = [];

console.log("Digite uma propriedade de CSS (ou 'SAIR' para terminar):");

process.stdin.on("data", (chunk) => {
  const propriedade = chunk.toString().trim();

  if (propriedade === "SAIR") {
    console.log("Lista de propriedades ordenadas:");
    console.log(propriedades.sort().join("\n"));
    process.exit();
  }

  propriedades.push(propriedade);
});
