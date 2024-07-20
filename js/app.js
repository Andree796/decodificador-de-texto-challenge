const botaoCriptografar = document.getElementById('botao-criptografar');
const botaoDescriptografar = document.getElementById('botao-descriptografar');
const botaoCopiar = document.getElementById('botao-copiar');
const saidaDados = document.getElementById('saida-dados');
const entradaDados = document.getElementById('campo-entrada-dados').value

botaoCriptografar.addEventListener('click', () => {
  const divBotao = document.getElementById('botao-container');
  const imagem = document.getElementById('imagem');
  const informacoesDados = document.getElementById('info-saida-dados');
  const entradaDados = document.getElementById('campo-entrada-dados').value.replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/o/g, 'ober').replace(/u/g, 'ufat');
  //const saidaDados = document.getElementById('saidaDados')
  const exibirNaTela = saidaDados.innerHTML = entradaDados;

  function limparCampo(){
    const campoEntradaDados = document.getElementById('campo-entrada-dados');
    campoEntradaDados.value = '';
  };

  function aparecerNaTela(){
    if(entradaDados != ''){
      divBotao.classList.replace('container-botao-copiar-dados', 'container-botao-copiar-dados-ativado');
      imagem.classList.replace('imagem', 'imagem-off');
      informacoesDados.classList.replace('container-informacoes', 'container-informacoes-ativo');
      //botaoCopiar.classList.replace('botao_copiar', 'botao_copiar_on');
      saidaDados.classList.replace('box-texto', 'box-texto-ativo');
      return exibirNaTela;
    }else{
      alert('Digite algo para criptografar ou descriptografar!')
    }
  };

  limparCampo();
  aparecerNaTela();
});
botaoDescriptografar.addEventListener('click', () => {
  const imagem = document.getElementById('imagem');
  const informacoesDados = document.getElementById('info-saida-dados');
  const entradaDados = document.getElementById('campo-entrada-dados').value.replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/ober/g, 'o').replace(/ufat/g, 'u');
  const saidaDados = document.getElementById('saida-dados')
  const exibirNaTela = saidaDados.innerHTML = entradaDados;

  function limparCampo(){
    const campoEntradaDados = document.getElementById('campo-entrada-dados');
    campoEntradaDados.value = '';
  };

  function aparecerNaTela(){
    if(entradaDados != ''){
      imagem.classList.replace('imagem', 'imagem-off');
      informacoesDados.classList.replace('container-informacoes', 'container-informacoes-ativo');
      //botaoCopiar.classList.replace('botao_copiar', 'botao_copiar_on');
      saidaDados.classList.replace('box-texto', 'box-texto-ativo');
      return exibirNaTela;
    }else{
      alert('Digite algo para criptografar ou descriptografar!');
    }
  };

  limparCampo()
  aparecerNaTela();
});

botaoCopiar.addEventListener('click', () => {
  alert('Texto copiado com sucesso!');
  navigator.clipboard.writeText(saidaDados.innerHTML);
});