let indiceMultipla = 0;

function mostrarExercicioMultipla() {
  const exercicio = exerciciosClozemaster[indiceMultipla];
  document.getElementById('fraseMultipla').textContent = exercicio.frase;
  document.getElementById('feedbackMultipla').textContent = '';
  document.getElementById('traducaoMultipla').textContent = '';
  document.getElementById('proximoMultiplaBtn').style.display = 'none';

  const opcoesDiv = document.getElementById('opcoesMultipla');
  opcoesDiv.innerHTML = '';
  exercicio.opcoes.forEach(opcao => {
    const btn = document.createElement('button');
    btn.textContent = opcao;
    btn.onclick = function() {
      if (opcao === exercicio.resposta) {
        document.getElementById('feedbackMultipla').textContent = "Correto! 🎉";
        document.getElementById('traducaoMultipla').textContent = 'Tradução: ' + exercicio.traducao;
        document.getElementById('proximoMultiplaBtn').style.display = 'inline-block';
      } else {
        document.getElementById('feedbackMultipla').textContent = "Tente novamente.";
      }
    };
    opcoesDiv.appendChild(btn);
  });
}

function iniciarMultiplaEscolha() {
  document.querySelectorAll('.container').forEach(div => div.style.display = 'none');
  document.getElementById('tela-multipla').style.display = 'block';
  indiceMultipla = 0;
  mostrarExercicioMultipla();
}

document.getElementById('proximoMultiplaBtn').addEventListener('click', function() {
  indiceMultipla++;
  if (indiceMultipla < exerciciosClozemaster.length) {
    mostrarExercicioMultipla();
  } else {
    document.getElementById('tela-multipla').innerHTML = "<h2>Parabéns!</h2><p>Você completou todos os exercícios!</p>";
  }
});