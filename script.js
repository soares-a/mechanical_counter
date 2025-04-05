const counter = document.getElementById('counter');
const numDigits = 6; // Quantos dígitos exibir
let currentValue = 0;

// Cria os dígitos na tela
for (let i = 0; i < numDigits; i++) {
  const digit = document.createElement('div');
  digit.classList.add('digit');

  const digitInner = document.createElement('div');
  digitInner.classList.add('digit-inner');

  // Cria os números de 0 a 9 empilhados verticalmente
  for (let j = 0; j < 10; j++) {
    const num = document.createElement('div');
    num.textContent = j;
    digitInner.appendChild(num);
  }

  digit.appendChild(digitInner);
  counter.appendChild(digit);
}

// Atualiza o contador com base no valor atual
function updateCounter(value) {
  const digits = String(value).padStart(numDigits, '0').split('');

  digits.forEach((digit, index) => {
    const digitInner = counter.children[index].querySelector('.digit-inner');
    const targetY = parseInt(digit) * 100; // 60px é a altura de cada número
    digitInner.style.transform = `translateY(-${targetY}px)`;
  });
}

// Simula a contagem real
setInterval(() => {
  currentValue++;
  updateCounter(currentValue);
}, 1000); // atualiza a cada segundo (ou troque para 100 se quiser mais rápido)
