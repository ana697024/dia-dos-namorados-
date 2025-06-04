function mostrarMensagem() {
  const msg = document.getElementById('mensagem');
  msg.classList.toggle('show');
}
const botao = document.getElementById('foge');

botao.addEventListener('mouseenter', () => {
  const largura = window.innerWidth - botao.offsetWidth;
  const altura = window.innerHeight - botao.offsetHeight;

  const randomX = Math.floor(Math.random() * largura);
  const randomY = Math.floor(Math.random() * altura);

  botao.style.position = 'absolute';
  botao.style.left = `${randomX}px`;
  botao.style.top = `${randomY}px`;
});
