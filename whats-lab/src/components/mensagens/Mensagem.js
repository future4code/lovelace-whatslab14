import React from 'react'


class Mensagem extends React.Component {
    state = {

        informacoes:[],


        nome: "",
        mensagem: ""
    }


    render() {
        return <MensagemContainer>
            <MensagemCorpo>
                <div>
                </div>

            </MensagemCorpo>

            <MensagemForm>
                <InputNome
                    placeholder={'Digite seu Nome.'}
                    value={this.state.nome}
                    onChange={this.onChangeNome}
                />

                <InputNome
                    placeholder={'Digite sua Mensagem.'}
                    value={this.state.mensagem}
                    onChange={this.onChangeMensagem}
                />
                <button></button>
            </MensagemForm>



        </MensagemContainer>
    }


}

export default Mensagem;

