// Seleciona todos os botões de aba e todos os painéis de conteúdo
//animação das habilidades
const botoes = document.querySelectorAll('.abas-habilidades button');
const paineis = document.querySelectorAll('.card-habilidades > div');

// para que algo apareça quando a página carregar
botoes[0].classList.add('ativo');
paineis[0].classList.add('ativo');

// Para cada botão, escuta o evento de clique
botoes.forEach(function(botao) {
  botao.addEventListener('click', function() {

    // Remove .ativo de todos os botões e painéis
    botoes.forEach(b => b.classList.remove('ativo'));
    paineis.forEach(p => p.classList.remove('ativo'));

    // Descobre qual aba foi clicada lendo o atributo data-tab
    const tabClicada = botao.getAttribute('data-tab');

    // Adiciona .ativo nesse botão
    botao.classList.add('ativo');

    const painelAtivo = document.querySelector(`[data-content="${tabClicada}"]`);
    painelAtivo.classList.add('ativo');
  });
});

//animacao da timeline

const itensTimeline = document.querySelectorAll('.timeline-item');

// Cria o observer — ele fica vigiando cada item
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {

    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
  });
}, {
  threshold: 0.2 // dispara quando 20% do card está visível na tela
});

// Manda o observer vigiar cada item da timeline
itensTimeline.forEach(function(item) {
  observer.observe(item);
});

//animacao do blog 
const overlay = document.getElementById('overlay');

// Elementos do drawer do blog
const linkBlog = document.querySelector('a[href="#blog"]');
const drawerBlog = document.getElementById('drawer-blog');
const fecharBlogBtn = document.getElementById('fechar-blog');

// Elementos do drawer do contato
const linkContato = document.querySelector('a[href="#contato"]');
const drawerContato = document.getElementById('drawer-contato');
const fecharContatoBtn = document.getElementById('fechar-contato');

// Função genérica — abre qualquer drawer e mostra o overlay
function abrirDrawer(drawer) {
  drawer.classList.add('aberto');
  overlay.classList.add('aberto');
}

// Função genérica — fecha qualquer drawer e esconde o overlay
function fecharTudo() {
  drawerBlog.classList.remove('aberto');
  drawerContato.classList.remove('aberto');
  overlay.classList.remove('aberto');
}

// Blog
linkBlog.addEventListener('click', function(e) {
  e.preventDefault();
  abrirDrawer(drawerBlog);
});
fecharBlogBtn.addEventListener('click', fecharTudo);

// Contato
linkContato.addEventListener('click', function(e) {
  e.preventDefault();
  abrirDrawer(drawerContato);
});
fecharContatoBtn.addEventListener('click', fecharTudo);

// Overlay fecha qualquer drawer que estiver aberto
overlay.addEventListener('click', fecharTudo);