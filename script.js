// Efeito de rolar página para o botão de WhatsApp
window.addEventListener('scroll', function() {
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (window.scrollY > 100) {
      whatsappBtn.style.transform = 'scale(1.1)';
    } else {
      whatsappBtn.style.transform = 'scale(1)';
    }
  });
  