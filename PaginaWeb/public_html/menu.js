var btnprimary = document.getElementById('btn-primary'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btncerrarpopup = document.getElementById('btn-cerrar-popup');

btnprimary.addEventListener('click', function(){
    overlay.classList.add('active');
});

btncerrarpopup.addEventListener('click', function(){
    overlay.classList.remove('active');
});