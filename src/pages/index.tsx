/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Inter } from 'next/font/google'
import { Depoimentos } from '@/components/Depoimentos'
import { Comentarios } from '@/components/Comentarios'
import Faq from '@/components/Faq'
import { format } from 'date-fns'

import {
  Lexa,
  Lexa2,
  Lexa21,
  Lexa3,
  Lexa4,
  Lexa5,
  Lexa6,
  LexaImage,
  MainContainer,
  MainContent,
  Mine,
  Mine2,
  Mine3,
  Mine4,
} from '@/styles/index.styles'

import Image from 'next/image'
import logo from '../../public/divinoflix.webp'
import doismil from '../../public/2mil.webp'
import garantia from '../../public/30D.webp'
import exemplo from '../../public/exemplo.webp'
import { Books, Screencast, PuzzlePiece, ArrowsClockwise } from 'phosphor-react'
import ScrollButton from '@/components/ScrollButton'

const Vietnam = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export default function Home() {
  // Obtém a data atual
  const currentDate = new Date()

  // Formata a data para o formato desejado
  const formattedDate = format(currentDate, 'dd/MM/yyyy')

  return (
    <>
      <Head>
        <title>Plataforma</title>
        <meta name="description" content="Plataforma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/divinoflix.png" />
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          async
          defer
        ></script>
      </Head>

      <>
        <MainContainer className={Vietnam.className}>
          <Lexa>
            <LexaImage>
              <Image alt="logo" src={logo} quality={100} />
            </LexaImage>
            <h1>
              <span style={{ textShadow: '0px 0px 3px #fff' }}>
                SEU FILHO PRÓXIMO{' '}
              </span>
              <span style={{ color: 'red', textShadow: '0px 0px 3px red' }}>
                {' '}
                DE DEUS
              </span>
            </h1>
            <p>
              A <b>única plataforma</b> de entretenimento{' '}
              <b>segura e diferente</b> para seu filho <br></br> <br></br>
              histórias, filmes bíblicos, atividades e jogos{' '}
              <u>inspirados na palavra de Deus!</u>
            </p>
            <Mine>
              <ScrollButton
                sectionId="precoSection"
                title="ACESSAR A PLATAFORMA!"
              />
              <Image alt="doismil" src={doismil} quality={100} />
            </Mine>
          </Lexa>
          <MainContent>
            <Lexa2 id="scroll1">
              <h1>
                <span style={{ color: 'red' }}>+DE 300</span> ANIMAÇÕES BÍBLICAS
              </h1>
              <p>
                Para deixar a Plataforma ainda mais COMPLETA, disponibilizamos{' '}
                <b>DEZENAS de JOGOS INTERATIVOS,</b> para estimular a CAPACIDADE
                COGNITIVA e INTELECTUAL do seu filho.
              </p>
            </Lexa2>
            <Depoimentos />
            <ScrollButton
              sectionId="precoSection"
              title="ACESSAR A PLATAFORMA!"
            />
            <Lexa21 id="scroll2">
              <h1>
                <span style={{ color: 'red' }}>MUITO MAIS</span> DO QUE UMA
                PLATAFORMA DE FILMES
              </h1>
              <p>
                Somos um <b>ecossistema completo</b> desenvolvido por{' '}
                <u>pediatras,</u>
                <u>especialistas,</u> <u>pedagogos</u> e{' '}
                <u>psicólogos cristãos!</u>
              </p>
              <p>
                O nosso objetivo é <b>facilitar o acesso à Palavra,</b> criando
                um hábito que vai <u>transformar vida do seu filho!</u>
              </p>
            </Lexa21>
            <Lexa3>
              <Image alt="exemplo" src={exemplo} quality={100} />
              <h1>
                A PLATAFORMA <span style={{ color: 'red' }}>DIVINOFLIX</span>{' '}
                CONTA COM:
              </h1>
              <Mine2>
                <p>
                  <Screencast size={32} color="#ff4d4d" />
                  +300 Filmes e Desenhos Animados Com História Da Bíblia
                </p>
                <p>
                  <Books size={32} color="#ff4d4d" />
                  +150 Histórias Bíblicas Para Leitura
                </p>
                <p>
                  <PuzzlePiece size={32} color="#ff4d4d" />
                  +100 Atividades De Alfabetização e Jogos Pedagógicos Com
                  Conteúdos Bíblicos
                </p>
                <p>
                  <ArrowsClockwise size={32} color="#ff4d4d" />
                  Conteúdos Novos Todos Os Dias
                </p>
              </Mine2>
            </Lexa3>
            <ScrollButton
              sectionId="precoSection"
              title="ACESSAR A PLATAFORMA!"
            />
            <Lexa4 id="scroll3">
              <h1>
                DEPOIMENTOS <span style={{ color: 'red' }}>REAIS</span>
              </h1>
              <iframe
                src="https://www.youtube.com/embed/qGYGntDqX6g?si=Ay2-rPMrBVqzm2rU"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              <Comentarios />
            </Lexa4>
            <ScrollButton
              sectionId="precoSection"
              title="ACESSAR A PLATAFORMA!"
            />
            <Lexa5 id="precoSection">
              <Image alt="logo" src={logo} quality={100} />
              <h1>Plano</h1>
              <p>
                Por se tratar de um{' '}
                <u>material pedagógico de ensinamento Bíblico,</u>
                nosso objetivo é <b>atingir o maior número de famílias</b>
              </p>
              <p>
                Por esse motivo estamos{' '}
                <b>LIBERANDO OS ACESSOS POR UM VALOR SIMBÓLICO</b> Tenha acesso
                á dezenas de AULAS E JOGOS DIVERTIDOS DE <u>ALFABETIZAÇÃO</u>
              </p>
              <h2 id="currentDate">
                HOJE <span style={{ color: 'red' }}> {formattedDate} </span> , É
                O ÚLTIMO DIA DO PREÇO ESPECIAL!
              </h2>
              <Mine3>
                <h1>ACESSO</h1>
                <h2>R$ 9,90</h2>
                <a href="https://pay.kirvano.com/dcee0ef9-9964-443a-bb46-36b4cf01ec9d">
                  ESCOLHER O PLANO!
                </a>
              </Mine3>
            </Lexa5>
            <Lexa6>
              <Image alt="garantia" src={garantia} quality={100} />
              <h1>
                EXPERIMENTE POR{' '}
                <span style={{ color: 'red' }}>30 DIAS SEM RISCO!</span>
              </h1>
              <p>
                Confiamos na qualidade da nossa plataforma, que você pode entrar
                e sair sem pagar nada nesse período! Basta entrar em contato com
                o suporte e cancelar! <br></br> <br></br> Devolveremos 100% do
                seu investimento, sem perguntas. Estamos entregando a você uma
                GARANTIA clara e objetiva.
              </p>
              <Mine4>
                <ScrollButton
                  sectionId="precoSection"
                  title="EXPERIMENTE POR 30 DIAS!"
                />
                <Image alt="doismil" src={doismil} quality={100} />
              </Mine4>
            </Lexa6>
            <Faq />
          </MainContent>
        </MainContainer>
      </>
    </>
  )
}
