const botaoCriptografar = document.getElementById('botao_criptografar');
const botaoDescriptografar = document.getElementById('botao_descriptografar');
const botaoCopiar = document.getElementById('botaoCopiar');
const saidaDados = document.getElementById('saidaDados');

botaoCriptografar.addEventListener('click', () => {
  const divBotao = document.querySelector('.botao_container');
  const imagem = document.getElementById('imagemNoText');
  const informacoesDados = document.getElementById('infoSaidaDados');
  const entradaDados = document.getElementById('campoEntradaDados').value.replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/o/g, 'ober').replace(/u/g, 'ufat');
  const saidaDados = document.getElementById('saidaDados')
  const exibirNaTela = saidaDados.innerHTML = entradaDados;

  function limparCampo(){
    const campoEntradaDados = document.getElementById('campoEntradaDados');
    campoEntradaDados.value = '';
  };

  function aparecerNaTela(){
    if(entradaDados != ''){
      divBotao.classList.replace('botao_container', 'botao_container_on');
      imagem.classList.replace('imagemNoText', 'imagemNoText_off');
      informacoesDados.classList.replace('info_saida_dados', 'info_saida_dados_off');
      botaoCopiar.classList.replace('botao_copiar', 'botao_copiar_on');
      saidaDados.classList.replace('texto_codificado', 'texto_codificado_on');
      return exibirNaTela;
    }else{
      alert('Digite algo para  criptografar ou descriptografar!')
    }
  };

  limparCampo();
  aparecerNaTela();
});
botaoDescriptografar.addEventListener('click', () => {
  const imagem = document.getElementById('imagemNoText');
  const informacoesDados = document.getElementById('infoSaidaDados');
  const entradaDados = document.getElementById('campoEntradaDados').value.replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/ober/g, 'o').replace(/ufat/g, 'u');
  const saidaDados = document.getElementById('saidaDados')
  const exibirNaTela = saidaDados.innerHTML = entradaDados;

  function limparCampo(){
    const campoEntradaDados = document.getElementById('campoEntradaDados');
    campoEntradaDados.value = '';
  };

  function aparecerNaTela(){
    if(entradaDados != ''){
      imagem.classList.replace('imagemNoText', 'imagemNoText_off');
      informacoesDados.classList.replace('info_saida_dados', 'info_saida_dados_off');
      botaoCopiar.classList.replace('botao_copiar', 'botao_copiar_on');
      saidaDados.classList.replace('texto_codificado', 'texto_codificado_on');
      return exibirNaTela;
    }else{
      alert('Digite algo para criptografar ou descriptografar!')
    }
  };

  limparCampo()
  aparecerNaTela();
});

botaoCopiar.addEventListener('click', () => {
  alert('Texto copiado com sucesso!');
  navigator.clipboard.writeText(saidaDados.innerHTML);
});