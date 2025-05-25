ScrollReveal().reveal('section', {
  origin: 'bottom',
  distance: '30px',
  duration: 600,
  easing: 'ease-in-out',
  opacity: 0,
  reset: false // ❗ ปิดเพื่อให้ตำแหน่งคงที่
});


const navLinks = document.querySelectorAll("header .nav-link");
const sections = document.querySelectorAll('section');
const scrollOffset = 100;

function clearActive() {
  navLinks.forEach(link => link.classList.remove("active"));
}

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    clearActive();
    e.currentTarget.classList.add("active");

    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - scrollOffset;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  const scrollBottom = scrollY + window.innerHeight;
  const docHeight = document.body.offsetHeight;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - scrollOffset;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      clearActive();
      const activeLink = document.querySelector(`header .nav-link[href="#${sectionId}"]`);
      if(activeLink) activeLink.classList.add('active');
    }
  });

  if(scrollBottom >= docHeight) {
    clearActive();
    const lastSection = sections[sections.length - 1];
    const lastId = lastSection.getAttribute('id');
    const lastLink = document.querySelector(`header .nav-link[href="#${lastId}"]`);
    if(lastLink) lastLink.classList.add('active');
  }
});



    function showFullscreen(src) {
      document.getElementById('fullImage').src = src;
      document.getElementById('fullscreen').style.display = 'flex';
    }

    function hideFullscreen() {
      document.getElementById('fullscreen').style.display = 'none';
    }