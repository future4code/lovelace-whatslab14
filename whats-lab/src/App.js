import './App.css';
import Mensagem from './components/mensagens/Mensagem';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Mensagem></Mensagem>
      </MainContainer>
    )
  }
}

export default App;