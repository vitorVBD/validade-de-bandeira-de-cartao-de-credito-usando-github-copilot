# Validação de Bandeira de Cartão de Crédito Usando GitHub Copilot

Este projeto utiliza o GitHub Copilot para criar um validador de bandeiras de cartão de crédito, baseado no prompt fornecido em `assets/prompt/prompt.txt` e nas informações contidas na imagem `assets/base.png`.

## Descrição

O objetivo deste projeto é validar as bandeiras de cartões de crédito de acordo com os números descritos na imagem `base.png`. O código foi gerado utilizando o GitHub Copilot.

## Como Funciona

O arquivo principal `src/index.js` contém a implementação da função `validarBandeiraCartao`, que verifica a bandeira do cartão de crédito com base no número fornecido.

### Bandeiras Suportadas

- **American Express**: Números que começam com 34 ou 37 e possuem 15 dígitos.
- **Visa**: Números que começam com 4 e possuem 13, 16 ou 19 dígitos.
- **MasterCard**: Números que começam com 51 a 55 ou no intervalo de 222100 a 272099, com 16 dígitos.
- **Diners Club**: Números que começam com 300 a 305, 36 ou 38, com 14 dígitos.
- **Visa Electron**: Números que começam com 4026, 417500, 4508, 4844, 4913 ou 4917, com 16 dígitos.

## Estrutura do Projeto

- `src/index.js`: Contém a implementação do validador de bandeiras de cartão de crédito.
- `assets/prompt/prompt.txt`: Contém o prompt utilizado para gerar o código com o GitHub Copilot.
- `assets/base.png`: Imagem com a legenda dos números de cartões de crédito e suas respectivas bandeiras.

## Como Executar

1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Execute o código `src/index.js` com Node.js.

```bash
node src/index.js
```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar o projeto.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
