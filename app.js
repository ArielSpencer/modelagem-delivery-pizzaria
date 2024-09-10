const correctPassword = "1508";
let attempts = 3;

while (attempts > 0) {
  let userPassword = prompt("Por favor, insira sua senha de acesso:");

  if (userPassword === correctPassword) {
    document.body.style.display = "block";
    alert("Bem-vindo!");
    break;
  } else {
    attempts--;
    alert(`Acesso negado. Você tem mais ${attempts} tentativa(s).`);
  } if (attempts === 0) {
    alert("Você excedeu o número de tentativas. Redirecionando...");
    window.location.href = "https://www.arielspencer.com.br/";
  }
}
