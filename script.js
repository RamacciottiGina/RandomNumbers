window.addEventListener('load', () => {
    const crearBoton = document.querySelector('.contenedor');
    for (let i=0; i<=50; i++) {
        const boton = document.createElement('button');
        boton.className = 'boton'
        boton.textContent= i;
        crearBoton.appendChild(boton);

    
        if (i%2==0) {
            boton.style.background = ('lightblue');
        }
            else {
            boton.style.background = ('orange');    
            }

            boton.addEventListener('click', ()=> {
                const clickMessage= document.querySelector('#click-message');
                const parity = i %2 === 0 ? 'par' : 'impar';
                clickMessage.innerText = `Numero ${i} es ${parity}`;
            });

    }
    const botones = crearBoton.querySelectorAll('.boton');
    let currentDiv = null;
    for (let i = 0; i < botones.length; i++) {
    if (i % 6 === 0) {
    currentDiv = document.createElement('div');
    crearBoton.appendChild(currentDiv);
  }
  currentDiv.appendChild(botones[i]);
}
});
    const random =document.getElementById('random');
    random.addEventListener('click', ()=> {
        const randomNumber = Math.floor(Math.random() * 51);
        const randomText =document.getElementById('last-random-number');
        randomText.textContent = randomNumber;
        const buttons = document.getElementsByClassName('boton');
        buttons[randomNumber].classList.add('shaking');
        const result = document.getElementById('reset-random');
        result.addEventListener('click', ()=> {
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('shaking');
                randomText.textContent=' ';
            }
        });
    });