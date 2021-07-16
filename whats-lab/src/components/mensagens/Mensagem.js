import React from 'react'
import styled from 'styled-components';

const MensagemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
`
const MensagemCorpo = styled.div`
    display: block;
    justify-content: center;
    padding: 5px;
    height: 500px;
    width: 500px;
    border: 1px solid black;
`
const MensagemForm = styled.div`
    background-color: green;
    padding: 10px;
    
    
`





class Mensagem extends React.Component {
    state = {
        informacoes:[],
        nome: "",
        mensagem: ""
    }

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    onChangeMensagem = (event) => {
        this.setState({mensagem: event.target.value})
    }

    enviar = () => {
        const novasInformacoes = [
            ...this.state.informacoes,
            {
              nome: this.state.nome,
              mensagem: this.state.mensagem
            }
        ]
        this.setState({informacoes: novasInformacoes})
        this.setState({nome: ""})
        this.setState({mensagem: ""})
    }

    render() {

        const mensagens = this.state.informacoes.map((inf, index) => {
            return (
                <div>
                    <span><b>{inf.nome}: </b></span>
                    <span>{inf.mensagem}</span>
                </div>

            )
        })

        return <MensagemContainer>
            <MensagemCorpo>
                
                {mensagens}

            </MensagemCorpo>

            <MensagemForm>
                <input
                    value={this.state.nome}
                    onChange={this.onChangeNome}
                    placeholder={'Digite seu Nome.'}
                />

                <input
                    value={this.state.mensagem}
                    onChange={this.onChangeMensagem}
                    placeholder={'Digite sua Mensagem.'}
                />
                <button onClick={this.enviar}>Enviar</button>
            </MensagemForm>



        </MensagemContainer>
    }


}

export default Mensagem;

