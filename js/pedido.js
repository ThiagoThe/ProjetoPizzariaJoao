const form = document.getElementById("pizza-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Gera um número aleatório único com 8 dígitos
  const codigoPedido = Math.floor(Math.random() * 90000000) + 10000000;

  // Cria um campo oculto no formulário com o código do pedido
  const codigoPedidoInput = document.createElement("input");
  codigoPedidoInput.setAttribute("type", "hidden");
  codigoPedidoInput.setAttribute("name", "codigoPedido");
  codigoPedidoInput.setAttribute("value", codigoPedido);

  // Adiciona o campo oculto ao formulário
  form.appendChild(codigoPedidoInput);

  // Mostra o número do pedido ao cliente
  numeroPedido.innerHTML = `Seu número do pedido é: ${codigoPedido}`;
  numeroPedido.style.display = "block";

  // Envia o formulário
  form.submit();
});
