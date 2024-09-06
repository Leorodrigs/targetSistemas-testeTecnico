const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalFaturamento = Object.values(faturamento).reduce((soma, valor) => soma + valor, 0);

for (const estado in faturamento) {
  const valorEstado = faturamento[estado];
  const percentual = (valorEstado / totalFaturamento) * 100;
  console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
}
