let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

exibirMensagemInicial();

function verificarChute() 
{
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto)
    {
        exibirTextoTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else
    {
        if(chute > numeroSecreto)
        {
            exibirTextoTela('p', 'O número secreto é menor!');
        }
        else
        { 
            exibirTextoTela('p', 'O número secreto é maior!');
        }
        tentativas ++;
        LimpaCampos();
    }
    
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    LimpaCampos();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}

function LimpaCampos()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() 
{
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdElementosLista = listaNumerosSorteados.length;
    if(qtdElementosLista == numeroLimite)
    {
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido))
    {
        return gerarNumeroAleatorio();
    }
    else
    {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function exibirMensagemInicial()
{
    exibirTextoTela('h1','Jogo do número secreto!');
    exibirTextoTela('p','Escolha um número entre 1 e 10');
}