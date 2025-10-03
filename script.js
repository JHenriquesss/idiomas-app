let indiceCloze = 0;

function mostrarExercicioCloze() {
  const exercicio = exerciciosCloze[indiceCloze];
  document.getElementById('fraseCloze').textContent = exercicio.frase;
  document.getElementById('feedbackCloze').textContent = '';
  document.getElementById('traducaoCloze').textContent = '';
  document.getElementById('proximoClozeBtn').style.display = 'none';

  const opcoesDiv = document.getElementById('opcoesCloze');
  opcoesDiv.innerHTML = '';
  exercicio.opcoes.forEach(opcao => {
    const btn = document.createElement('button');
    btn.textContent = opcao;
    btn.onclick = function() {
      if (opcao === exercicio.resposta) {
        document.getElementById('feedbackCloze').textContent = "Correto! 🎉";
        document.getElementById('traducaoCloze').textContent = 'Tradução: ' + exercicio.traducao;
        document.getElementById('proximoClozeBtn').style.display = 'inline-block';
      } else {
        document.getElementById('feedbackCloze').textContent = "Tente novamente.";
      }
    };
    opcoesDiv.appendChild(btn);
  });
}

function iniciarClozeTeste() {
  document.querySelectorAll('.container').forEach(div => div.style.display = 'none');
  document.getElementById('tela-cloze').style.display = 'block';
  indiceCloze = 0;
  mostrarExercicioCloze();
}

document.getElementById('proximoClozeBtn').addEventListener('click', function() {
  indiceCloze++;
  if (indiceCloze < exerciciosCloze.length) {
    mostrarExercicioCloze();
  } else {
    document.getElementById('tela-cloze').innerHTML = "<h2>Parabéns!</h2><p>Você completou todos os exercícios!</p>";
  }
});