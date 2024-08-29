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
  Lexa3,
  Lexa4,
  Lexa5,
  Lexa6,
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
import BuyButton from '@/components/ScrollButton'

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
          <MainContent>
            <Lexa>
              <Image alt="logo" src={logo} quality={100} />
              <h1>
                SEU FILHO PRÓXIMO DE DEUS <br></br> <br></br>
              </h1>
              <p>
                A única plataforma de entretenimento segura e diferente para seu
                filho <br></br> <br></br>
                histórias, filmes bíblicos, atividades e jogos inspirados na
                palavra de Deus!
              </p>
              <Mine>
                <BuyButton
                  title="ACESSAR A PLATAFORMA!"
                  sectionId="precoSection"
                />
                <Image alt="doismil" src={doismil} quality={100} />
              </Mine>
            </Lexa>
            <Lexa2>
              <h1>+DE 300 ANIMAÇÕES BÍBLICAS</h1>
              <p>
                Para deixar a Plataforma ainda mais COMPLETA, disponibilizamos
                DEZENAS de JOGOS INTERATIVOS, para estimular a CAPACIDADE
                COGNITIVA e INTELECTUAL do seu filho.
              </p>
            </Lexa2>
            <Depoimentos />
            <Lexa2>
              <h1>A DIVINOFLIX É MUITO MAIS DO QUE UMA PLATAFORMA DE FILMES</h1>
              <p>
                É um ecossistema completo desenvolvido por pediatras,
                especialistas, pedagogos e psicólogos cristãos!
                <br></br> <br></br> O nosso objetivo é facilitar o acesso à
                Palavra, criando um hábito que vai transformar vida do seu
                filho!
              </p>
            </Lexa2>
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
            <Lexa4>
              <h1>DEPOIMENTOS REAIS</h1>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/qGYGntDqX6g?si=Ay2-rPMrBVqzm2rU"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              <Comentarios />
            </Lexa4>
            <Lexa5 id="precoSection">
              <Image alt="logo" src={logo} quality={100} />
              <h1>Plano</h1>
              <p>
                Por se tratar de um material pedagógico de ensinamento Bíblico,
                nosso objetivo é atingir o maior número de famílias <br></br>{' '}
                <br></br> Por esse motivo estamos LIBERANDO OS ACESSOS POR UM
                VALOR SIMBÓLICO <br></br>Tenha acesso á dezenas de AULAS E JOGOS
                DIVERTIDOS DE ALFABETIZAÇÃO
              </p>
              <h2 id="currentDate">
                HOJE <span style={{ color: 'red' }}> {formattedDate} </span> , É
                O ÚLTIMO DIA DO PREÇO ESPECIAL!
              </h2>
              <Mine3>
                <h1>Acesso Vitalício</h1>
                <h2>R$ 9,90</h2>
                <a href="https://pay.kirvano.com/cea47f38-b32b-4b24-82d6-f0066e374f01">
                  ESCOLHER O PLANO VITALÍCIO
                </a>
              </Mine3>
            </Lexa5>
            <Lexa6>
              <Image alt="garantia" src={garantia} quality={100} />
              <h1>EXPERIMENTE POR 30 DIAS SEM RISCO:</h1>
              <p>
                Confiamos na qualidade da nossa plataforma, que você pode entrar
                e sair sem pagar nada nesse período! Basta entrar em contato com
                o suporte e cancelar! <br></br> <br></br> Devolveremos 100% do
                seu investimento, sem perguntas. Estamos entregando a você uma
                GARANTIA clara e objetiva.
              </p>
              <Mine4>
                <BuyButton
                  title="EXPERIMENTE POR 30 DIAS!"
                  sectionId="precoSection"
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
