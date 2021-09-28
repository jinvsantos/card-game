var carta1 = {
  nome: "Spidey",
  imagem: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/03/legiao_6JrwlWta5qER.jpg.jpeg',
  atributos: {
  ATK: 7,
  DEF: 4,
  INT: 8,
  }
}
var carta2 = {
  nome: "Iron Man",
  imagem: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/09/legiao_NHWEp3eQLAxd.jpg.jpeg',
  atributos: {
  ATK: 8,
  DEF: 8,
  INT: 10,
  }
}
var carta3 = {
  nome: "Capitan America",
  imagem: 'https://cdn.ome.lt/CNKaJ1y3eLBvmLantM-Is7x1ll0=/480x360/smart/extras/conteudos/captainamerica1.jpg',
  atributos: {
  ATK: 7,
  DEF: 8,
  INT: 5,
  }
}
var carta4 = {
  nome: "Thor",
  imagem: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/06/cropped-Thor.jpg',
  atributos: {
  ATK: 10,
  DEF: 7,
  INT: 7,
  }
}
var carta5 = {
  nome: "Hulk",
  imagem: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/06/201591235859-hulk.jpg',
  atributos: {
  ATK: 10,
  DEF: 10,
  INT: 2,
  }
}
var cartas = [carta1, carta2, carta3, carta4, carta5]
var cartaMaquina = 0
var cartaJogador = 0

function sortearCarta() {
  var i = cartas.length
  var numeroCartaMaquina = parseInt(Math.random() * i)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * i)
  while (numeroCartaMaquina == numeroCartaJogador){
    numeroCartaJogador = parseInt(Math.random() * i)
  }
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)
  
  document.getElementById("btnSortear").disabled = true
  document.getElementById("btnJogar").disabled = false
  exibirCartaJogador()
}

function obtemAtributoSelecionado() { 
  var radioAtributos = document.getElementsByName("atributo")
    
    for(var i = 0; i < radioAtributos.length; i++){
      if (radioAtributos [i].checked == true) {
        return radioAtributos[i].value
        
      }
    }  
  }

function jogar () {
  var atributoSelecionado = obtemAtributoSelecionado()
  var divResultado = document.getElementById("resultado")
  
  var elementoResultado = document.getElementById("resultado")
  
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = "<p class='resultado-final'>WIN</p>"
  }else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado])  {
    htmlResultado = "<p class='resultado-final'>LOSE</p>"
  }else{
    htmlResultado = "<p class='resultado-final'>DRAW</p>"
  }
  divResultado.innerHTML = htmlResultado
  document.getElementById('btnJogar').disabled = true
  exibirCartaMaquina()
  
}

function exibirCartaJogador () {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div='opcoes' class='carta-status'>"
  
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>` 
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  
  
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit;position: absolute;">'
  var tagHTML = "<div='opcoes' class='carta-status'>"
  
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>` 
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}