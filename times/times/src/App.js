import React from 'react';
import './App.css'
import Santos from './images/santos.png'
import Palmeiras from './images/palmeiras.png'
import Spfc from './images/spfc.png'
import Corinthians from './images/corinthians.png'

const App = () => 
  <div>
    <Title content="Times de SP"/>
    <ListaDeTimes />
  </div>

export default App;

class Time {
  constructor(nome, fundacao, titulosNacionais, estadio, maiorIdolo, campeaoMundial, mundiais, site, image, id) {
    this.nome = nome
    this.fundacao = fundacao
    this.titulosNacionais = titulosNacionais
    this.estadio = estadio
    this.maiorIdolo = maiorIdolo
    this.campeaoMundial = campeaoMundial
    this.mundiais = mundiais
    this.site = site
    this.image = image
    this.id = id
  }

  temMundial = () => {
    const mundial = this.campeaoMundial
    return mundial ? `Tem sim, tem logo ${this.mundiais}!` : `Tem não mano, foda.`
  }
}

const palmeiras = new Time('Sociedade Esportiva Palmeiras', '26 de Agosto de 1914', 13, 'Allianz Parque', 'Ademir da Guia', false, 0, 'https://www.palmeiras.com.br', Palmeiras, 1)
const corinthians = new Time('Sport Club Corinthians Paulista', '2 de Setembro de 1910', 10, 'Itaquerão', 'Sócrates', true, 2, 'https://www.corinthians.com.br', Corinthians, 2)
const saoPaulo = new Time('São Paulo Futebol Clube', '25 de Janeiro de 1930', 6, 'Morumbi', 'Rogério Ceni', true, 3, 'https://www.spfc.net',Spfc, 3)
const santos = new Time('Santos Futebol Clube', '14 de Abril de 1912', 10, 'Vila Belmiro', 'Pelé', true, 2, 'https://www.santosfc.com.br',Santos, 4)

const times = [
  palmeiras,
  corinthians,
  saoPaulo,
  santos,
]

const ListaDeTimes = () =>
  times.map( item =>
    <div key={item.id}>
      <ul>
        <Image src={item.image}/>
        <ListItem 
          text="Nome: " 
          inside={
            <Link 
              link={item.site}
              content={item.nome}
            />
          }
        />
        <ListItem text="Fundação: " inside={item.fundacao} />
        <ListItem text="Títulos Nacionais: " inside={item.titulosNacionais} />
        <ListItem text="Estádio: " inside={item.estadio} />
        <ListItem text="Maior ídolo: " inside={item.maiorIdolo} />
        <ListItem text="Tem Mundial: " inside={item.temMundial()} />
      </ul>
      <Hr />
    </div> 
  );


const Image = props => <img src={props.src}></img>

const Title = props => <h1>{props.content}</h1>
  
const Hr = () => <hr />

const ListItem = props => <li>{props.text}{props.inside}</li>

const Link = props => <a href={props.link} target="_blank">{props.content}</a>
