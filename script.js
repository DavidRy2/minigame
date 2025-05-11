let numeroSecreto;
let tentativas;

function gerarNumero() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
}

function checkGuess() {
  const input = document.getElementById('guessInput');
  const message = document.getElementById('message');
  const guess = Number(input.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = 'Digite um número válido entre 1 e 100.';
    return;
  }

  tentativas++;

  if (guess === numeroSecreto) {
    message.textContent = `🎉 Parabéns! Você acertou em ${tentativas} tentativas!`;
  } else if (guess < numeroSecreto) {
    message.textContent = '🔽 Muito baixo. Tente novamente.';
  } else {
    message.textContent = '🔼 Muito alto. Tente novamente.';
  }
}

function resetGame() {
  gerarNumero();
  document.getElementById('message').textContent = '';
  document.getElementById('guessInput').value = '';
}

gerarNumero();
