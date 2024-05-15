let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Loja de eletronicos";

let body = document.querySelector("body");
body.appendChild(titulo);

let produto = document.createElement("div");

produto.innerHTML = `
<div>
    <h2>Notebook</h2>
    <img src="./notebook.jpeg" alt="notbook">
    <p>13ª geração Intel® Core™ i5-1335U
    Windows 11 Home
    Intel® UHD Graphics
    8 GB DDR4
    512 GB SSD
    Tela 15.6” Full HD (1920X1080)
    Peso inicial de 1,65 kg 
    Produtividade pessoal e profissional:
     tela com 3 lados de bordas finas, teclado numérico, 
     módulo de segurança integrado e testes de nível militar
      para durabilidade.</p>
    <p id="preco-notebook">R$ 2.860,00</p>
  </div>
`;

body.appendChild(produto);
