function validarBandeiraCartao(numeroCartao) {
  const numeroCartaoStr = numeroCartao.toString();

  // Verifica se o número do cartão é da bandeira "American Express"
  if (
    (numeroCartaoStr.startsWith("34") || numeroCartaoStr.startsWith("37")) &&
    numeroCartaoStr.length === 15
  ) {
    return "American Express";
  }

  // Verifica se o número do cartão é da bandeira "Visa"
  if (
    numeroCartaoStr.startsWith("4") &&
    (numeroCartaoStr.length === 13 ||
      numeroCartaoStr.length === 16 ||
      numeroCartaoStr.length === 19)
  ) {
    return "Visa";
  }

  // Verifica se o número do cartão é da bandeira "MasterCard"
  if (
    (numeroCartaoStr.startsWith("51") ||
      numeroCartaoStr.startsWith("52") ||
      numeroCartaoStr.startsWith("53") ||
      numeroCartaoStr.startsWith("54") ||
      numeroCartaoStr.startsWith("55") ||
      (parseInt(numeroCartaoStr.substring(0, 6)) >= 222100 &&
        parseInt(numeroCartaoStr.substring(0, 6)) <= 272099)) &&
    numeroCartaoStr.length === 16
  ) {
    return "MasterCard";
  }

  // Verifica se o número do cartão é da bandeira "Diners Club"
  if (
    (numeroCartaoStr.startsWith("300") ||
      numeroCartaoStr.startsWith("301") ||
      numeroCartaoStr.startsWith("302") ||
      numeroCartaoStr.startsWith("303") ||
      numeroCartaoStr.startsWith("304") ||
      numeroCartaoStr.startsWith("305") ||
      numeroCartaoStr.startsWith("36") ||
      numeroCartaoStr.startsWith("38")) &&
    numeroCartaoStr.length === 14
  ) {
    return "Diners Club";
  }

  // Verifica se o número do cartão é da bandeira "Visa"
  if (
    (numeroCartaoStr.startsWith("4026") ||
      numeroCartaoStr.startsWith("417500") ||
      numeroCartaoStr.startsWith("4508") ||
      numeroCartaoStr.startsWith("4844") ||
      numeroCartaoStr.startsWith("4913") ||
      numeroCartaoStr.startsWith("4917")) &&
    numeroCartaoStr.length === 16
  ) {
    return "Visa Electron";
  }

  return "Bandeira desconhecida";
}

// Exemplo de uso
const numeroCartao = 341234567890123;
const bandeira = validarBandeiraCartao(numeroCartao);
console.log(`A bandeira do cartão é: ${bandeira}`);
