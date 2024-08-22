document.addEventListener("DOMContentLoaded", () => {
  const conversionRates = {
    USD_EUR: 0.9002,
    EUR_USD: 1.11086,
    BRL_EUR: 0.161615,
    EUR_BRL: 6.18605,
    BRL_USD: 0.179589,
    USD_BRL: 5.56826,
    // Adicione mais taxas de conversão conforme necessário
  };

  const amountInput = document.getElementById("amount");
  const fromCurrencySelect = document.getElementById("fromCurrency");
  const toCurrencySelect = document.getElementById("toCurrency");
  const convertButton = document.getElementById("convertButton");
  const resultParagraph = document.getElementById("result");

  convertButton.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    //resultado
    if (isNaN(amount) || amount <= 0) {
      resultParagraph.textContent = "Por favor, insira uma quantia válida.";
      return;
    }

    if (fromCurrency === toCurrency) {
      resultParagraph.textContent = "A moeda de origem e destino são iguais.";
      return;
    }

    const conversionKey = `${fromCurrency}_${toCurrency}`;
    const rate = conversionRates[conversionKey];

    if (rate) {
      const convertedAmount = amount * rate;
      resultParagraph.textContent = `${amount} ${fromCurrency} é igual a ${convertedAmount.toFixed(
        2
      )} ${toCurrency}`;
    } else {
      resultParagraph.textContent = "Taxa de conversão não disponível.";
    }
  });
});
