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
    message.className = 'error';
    return;
  }

  tentativas++;
  localStorage.setItem('tentativas', tentativas);

  if (guess === numeroSecreto) {
    message.textContent = `🎉 Parabéns! Você acertou em ${tentativas} tentativas!`;
    message.className = 'success';
    somVitoria.play();
    updateRanking();
  } else if (guess < numeroSecreto) {
    message.textContent = '🔽 Muito baixo. Tente novamente.';
    message.className = 'error';
  } else {
    message.textContent = '🔼 Muito alto. Tente novamente.';
    message.className = 'error';
  }
}

function resetGame() {
  gerarNumero();
  document.getElementById('message').textContent = '';
  document.getElementById('guessInput').value = '';
  document.getElementById('message').className = '';
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
