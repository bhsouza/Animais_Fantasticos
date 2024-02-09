export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if(sections.length) {
    function animaScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - (window.innerHeight * 0.6)) < 0;
        if(isSectionVisible) 
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
        
      })
    }
    animaScroll()
    window.addEventListener('scroll', animaScroll);
  }
}
