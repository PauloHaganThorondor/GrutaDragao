function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search');
  const searchBtn = document.getElementById('search-btn');

  // Lista de palavras-chave válidas
  function realizarBusca() {
    const palavra = searchInput.value.toLowerCase(); // Transforma o texto em minúsculas

    // Verificar a palavra e redirecionar para a página correspondente
    switch(palavra) {
      case 'salão':
          window.location.href = 'GrutaDragaoSalao.html';
          break;
      case 'quadra':
          window.location.href = 'GrutaDragaoVaranda.html';
          break;
      case 'esporte':
          window.location.href = 'GrutaDragaoVaranda.html';
          break;
      case 'som':
          window.location.href = 'GrutaDragaoEstereo.html';
          break;
      case 'música':
          window.location.href = 'GrutaDragaoAudioVisual.html';
          break;
      case 'televisão':
          window.location.href = 'GrutaDragaoAudioVisual.html';
          break;
      case 'tv':
          window.location.href = 'GrutaDragaoAudioVisual.html';
          break;
      case 'tela':
          window.location.href = 'GrutaDragaoAudioVisual.html';
          break;
      case 'video':
          window.location.href = 'GrutaDragaoAudioVisual.html';
          break;
      case 'varanda':
          window.location.href = 'GrutaDragaoVaranda.html';
          break;
      case 'piscina':
          window.location.href = 'GrutaDragaoPiscina.html';
          break;
      case 'duvidas':
          window.location.href = 'GrutaDragaoRegra.html';
          break;
      case 'segurança':
          window.location.href = 'GrutaDragaoPrivacidade.html';
          break;
      case 'carne':
          window.location.href = 'GrutaDragaoChurrasco.html';
          break;
      case 'churrasco':
          window.location.href = 'GrutaDragaoChurrasco.html';
          break;
      default:
        alert('Não foram encontrados resultados para a sua pesquisa.');
    }
  }

  // Listener de clique para o botão de busca
  searchBtn.addEventListener('click', realizarBusca);

  // Listener para a tecla "Enter" no campo de busca
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Impede o comportamento padrão de envio do formulário
      realizarBusca();
    }
  });
});
