const data = require("./dados.json");

function calcularValores(dados) {
  const valores = dados
    .filter((item) => item.valor > 0)
    .map((item) => item.valor);

  const menorValor = Math.min(...valores);
  const maiorValor = Math.max(...valores);

  const somaValores = valores.reduce((acc, curr) => acc + curr, 0);
  const mediaMensal = somaValores / valores.length;

  const diasAcimaMedia = valores.filter((f) => f > mediaMensal).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaMedia,
  };
}

try {
  const resultados = calcularValores(data);
  console.log("Menor valor:", resultados.menorValor);
  console.log("Maior valor:", resultados.maiorValor);
  console.log(
    "Número de dias com valor superior à média mensal:",
    resultados.diasAcimaMedia
  );
} catch (e) {
  console.error("Erro:", e.message);
}
