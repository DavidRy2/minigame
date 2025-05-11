let numeroSecreto;
let tentativas;

function gerarNumero() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  localStorage.setItem('tentativas', tentativas);
}

function checkGuess() {
  const input = document.getElementById('guessInput');
  const message = document.getElementById('message');
  const guess = Number(input.value);
  const somVitoria = new Audio('victory-sound.mp3'); // som de vitória

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = 'Digite um número válido entre 1 e 100.';
    return;
  }

  tentativas++;
  localStorage.setItem('tentativas', tentativas);

  if (guess === numeroSecreto) {
    message.textContent = `🎉 Parabéns! Você acertou em ${tentativas} tentativas!`;
    somVitoria.play();
    updateRanking();
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

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('.container').classList.toggle('dark-mode');
}

function updateRanking() {
  const ranking = localStorage.getItem('tentativas');
  document.getElementById('ranking').textContent = `Número de tentativas anteriores: ${ranking}`;
}

gerarNumero();
updateRanking();
