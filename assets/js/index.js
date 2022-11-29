
const form = document.querySelector('.form')


form.addEventListener('submit', function (e) {
    e.preventDefault();
    const peso = e.target.querySelector('#peso')
    const altura = e.target.querySelector('#altura')

    const pesoC = Number(peso.value);
    const alturaC = Number(altura.value);

    if (!pesoC) {
        setResult('peso inválido', false);
        return;
    }
    if (!alturaC) {
        setResult('altura inválida', false);
        return;
    }

    const imc = getImc(pesoC, alturaC);
    const nivelImc = getNivelImc(imc);

    const msg = `seu IMC é ${imc} (${nivelImc})`
    setResult(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso',
        'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    
    if (imc >= 34.9) return nivel[4];

    if (imc >= 29.9) return nivel[3];
   
    if (imc >= 24.9) return nivel[2];
    
    if (imc >= 18.5) return nivel[1];

    if (imc < 18.5) return nivel[0];
    
}


function getImc(pesoC, alturaC) {
    const imc = pesoC / alturaC ** 2;
    return imc.toFixed(2);
}


function criaP() {
    const p = document.createElement('p');
    return p;
}


function setResult(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid){
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }


    p.innerHTML = msg;
    resultado.appendChild(p)
}

