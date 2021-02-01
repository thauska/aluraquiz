import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

import db from '../db.json';

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
                onChange={(event) => {
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
      </QuizContainer>
      <Footer />
    </QuizBackground>
  );
}
