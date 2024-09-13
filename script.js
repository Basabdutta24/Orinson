let blink = document.getElementById('blink');

        setInterval(function () {
            blink.style.opacity =
                (blink.style.opacity == 0 ? 1 : 0);
        }, 1000); 
// Smooth scrolling for links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
