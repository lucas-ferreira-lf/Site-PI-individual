//funções da página Index
function manager()
{
    if(gi.style.display == 'none')
    {
        gi.style.display = 'block';
    }
    else
    {
        gi.style.display = 'none';
    }
}

function abreLixeira()
{
    lixo.style.display = 'block';
}

function fechaLixeira()
{
    lixo.style.display = 'none';
}

function abrePainel()
{
    painel.style.display = 'block';
}

function fechaPainel()
{
    painel.style.display = 'none';
}

function abreConexao()
{
    conexao.style.display = 'block';
}

function fechaConexao()
{
    conexao.style.display = 'none';
}

function abreInternet()
{
    internet.style.display = 'block';
}

function fechaInternet()
{
    internet.style.display = 'none';
}

function abreTexto()
{
    historia.style.display = 'block';
}

function fechaTexto()
{
    historia.style.display = 'none';
}

function showTheCroc()
{
    formulario.style.display = 'none';
    god.style.display = 'block';
}
//fim das funções da página Index