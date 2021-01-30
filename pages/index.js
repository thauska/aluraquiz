import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';

import db from '../db.json';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 280px;
  padding: 10px 15px;
  margin: 10px auto;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: transparent;
  border-radius: 4px;
  border:  1px solid ${({ theme }) => theme.colors.primary};
`;

const Button = styled.button`
  width: 100%;
  max-width: 280px;
  padding: 10px;
  margin: 10px auto;
  border-radius: 4px;
  border:  1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  text-transform: uppercase;
  & :disabled, [disabled] {
    border: 0px;
    background-color: #cccccc;
    color: #696969;
  }  
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The legend of Zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
            Teste os seus conhecimentos sobre o universo Marvel e divirta-se criando o seu AluraQuiz!
            </p>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
              <Input
                onChange={function(event) {
                  console.log(event.target.value)
                  // State
                  // name = event.target.value;
                  setName(event.target.value);
                }}
                placeholder="Digite seu nome"
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz Alura</h1>
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
      <Footer />
      <GitHubCorner projectUrl="https://github.com/thauska" />
    </QuizBackground>
  );
}
