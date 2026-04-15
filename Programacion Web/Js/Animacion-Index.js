const botones3D = document.querySelectorAll('.social-3d li');

botones3D.forEach(boton => {
    
    boton.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = boton.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 10;
        const y = (e.clientY - top - height / 2) / 10;
        boton.style.transform = `rotate(-15deg) skew(15deg) translate(${x}px, ${y}px)`;
    });

    boton.addEventListener('mouseleave', () => {
        boton.style.transform = `rotate(-15deg) skew(15deg) translate(0, 0)`;
    });

    
    boton.addEventListener('click', () => {
        const redSocial = boton.classList[0]; 
        let url = "";

        
        
        if(redSocial === 'facebook') {
            url = ''; 
        }
        
        if(redSocial === 'twitter') {
            url = '';
        }
        
        if(redSocial === 'instagram') {
            url = '';
        }


        if(url !== "") {
            window.open(url, '_blank');
        }
    });
});

const form = document.querySelector('.newsletter-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.innerHTML = `<p style="color: #00d2ff; font-weight: bold;">¡Gracias por suscribirte!</p>`;
    });
}