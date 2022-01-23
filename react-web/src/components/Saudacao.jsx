import React, { Component } from 'react'

export default class Saudacao extends Component {

  state = {
    tipo: 'Fala',
    nome: 'Pedro'
  }

  setTipo(e){
    this.setState({ tipo: e.target.value })
  }

  setNome(el){
    this.setState({ nome: el.target.value })
  }

  render(){
    const { tipo, nome } = this.state
      return(
        <>
          <h1>{tipo} {nome}!</h1>
          <hr />
          <input type = "text" placeholder = "Tipo..." value = {tipo} onChange = {e => this.setTipo(e)} />
          <input type = "text" placeholder = "Nome..." value = {nome} onChange = {el => this.setNome(el)} />
        </>
      )
  }
}