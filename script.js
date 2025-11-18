document.addEventListener('DOMContentLoaded', () => {
    
    
    const musica = document.getElementById('musicaPassadao');
    const controleMusicaBtn = document.getElementById('controleMusica');
    const textoMusica = document.getElementById('textoMusica');
    const splashScreen = document.getElementById('splashScreen');
    const convitePrincipal = document.getElementById('convitePrincipal');
    const iniciarConviteBtn = document.getElementById('iniciarConvite');
    const fadeItems = document.querySelectorAll('.fade-item');
    let isPlaying = true; 

    
    const toggleMusic = () => {
        if (isPlaying) {
            musica.pause();
            isPlaying = false;
            textoMusica.textContent = '🔊 LIGAR O PASSADÃO';
            controleMusicaBtn.classList.add('pausada');
        } else {
            musica.play();
            isPlaying = true;
            textoMusica.textContent = '⏸️ PARAR O PASSADÃO';
            controleMusicaBtn.classList.remove('pausada');
        }
    };
    
    controleMusicaBtn.addEventListener('click', toggleMusic);

    
    const animateElements = () => {
        fadeItems.forEach(item => {
            const delay = parseFloat(item.getAttribute('data-delay'));
            setTimeout(() => {
                item.classList.add('show');
            }, delay * 1000);
        });
    };

    
    iniciarConviteBtn.addEventListener('click', () => {
        
        splashScreen.classList.add('hidden');
        
        
        convitePrincipal.classList.remove('hidden');
        
        
        musica.play()
            .then(() => {
                
                isPlaying = true;
                textoMusica.textContent = '⏸️ PARAR O PASSADÃO';
                controleMusicaBtn.classList.remove('pausada');
            })
            .catch(error => {
                
                isPlaying = false;
                textoMusica.textContent = '🔊 LIGAR O PASSADÃO';
                controleMusicaBtn.classList.add('pausada');
                console.error("Erro ao tentar tocar a música após o clique de entrada:", error);
            });

        
        animateElements();
    });

    
    const btnRSVP = document.getElementById('btnRSVP');
    
    const numeroWhatsApp = "559192237067"; 
    
    const mensagemConfirmacao = "E aí! Já confirmei minha presença no seu aniversário. Mal posso esperar para celebrar com o Passadão!";
    const mensagemCodificada = encodeURIComponent(mensagemConfirmacao);
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    
    btnRSVP.href = linkWhatsApp;
});