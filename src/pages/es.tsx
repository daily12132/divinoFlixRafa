/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Inter } from 'next/font/google'
import { Depoimentos2 } from '@/components/Depoimentos'
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
} from '@/styles/es.styles'

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
                TU HIJO MÁS CERCA{' '}
              </span>
              <span style={{ color: 'red', textShadow: '0px 0px 3px red' }}>
                DE DIOS
              </span>
            </h1>
            <p>
              La <b>única plataforma</b> de entretenimiento{' '}
              <b>segura y diferente</b> para tu hijo <br></br> <br></br>
              ¡historias, películas bíblicas, actividades y juegos{' '}
              <u> inspirados en la palabra de Dios!</u>
            </p>
            <Mine>
              <ScrollButton
                sectionId="scroll1"
                title="ACCEDA A LA PLATAFORMA!"
              />
              <Image alt="doismil" src={doismil} quality={100} />
            </Mine>
          </Lexa>
          <MainContent>
            <Lexa2 id="scroll1">
              <h1>
                <span style={{ color: 'red' }}>+DE 300</span> ANIMACIONES
                BÍBLICAS
              </h1>
              <p>
                Para que la Plataforma sea aún más COMPLETA, hemos incluido
                <b>DOCENAS de JUEGOS INTERACTIVOS</b> para estimular la
                CAPACIDAD COGNITIVA e INTELECTUAL de su hijo.
              </p>
            </Lexa2>
            <Depoimentos2 />
            <ScrollButton sectionId="scroll2" title="ACCEDA A LA PLATAFORMA!" />
            <Lexa21 id="scroll2">
              <h1>
                <span style={{ color: 'red' }}> MUCHO MÁS</span> QUE UNA
                PLATAFORMA CINEMATOGRÁFICA
              </h1>
              <p>
                ¡Somos un <b>ecossistema completo</b> desarrollado por{' '}
                <u> pediatras </u>
                <u>especializados,</u> <u>pedagogos</u> y{' '}
                <u>psicólogos cristianos!</u>
              </p>
              <p>
                Nuestro objetivo es <b>facilitar el acceso a la Palabra,</b>{' '}
                ¡creando un hábito que
                <u> transformará la vida de su hijo!</u>
              </p>
            </Lexa21>
            <Lexa3>
              <Image alt="exemplo" src={exemplo} quality={100} />
              <h1>
                LA PLATAFORMA <span style={{ color: 'red' }}>DIVINOFLIX</span>{' '}
                INCLUYE:
              </h1>
              <Mine2>
                <p>
                  <Screencast size={32} color="#ff4d4d" />
                  +300 Películas y dibujos animados con relatos bíblicos
                </p>
                <p>
                  <Books size={32} color="#ff4d4d" />
                  +150 Historias bíblicas para leer
                </p>
                <p>
                  <PuzzlePiece size={32} color="#ff4d4d" />
                  +100 Actividades de alfabetización y juegos educativos con
                  contenido bíblico
                </p>
                <p>
                  <ArrowsClockwise size={32} color="#ff4d4d" />
                  Nuevos contenidos cada día
                </p>
              </Mine2>
            </Lexa3>
            <ScrollButton sectionId="scroll3" title="ACCEDA A LA PLATAFORMA!" />
            <Lexa4 id="scroll3">
              <h1>
                TESTIMONIOS <span style={{ color: 'red' }}>REALES</span>
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
              title="ACCEDA A LA PLATAFORMA!"
            />
            <Lexa5 id="precoSection">
              <Image alt="logo" src={logo} quality={100} />
              <h1>Plano</h1>
              <p>
                Al tratarse de un <u>material didáctico bíblico,</u>
                nuestro objetivo es{' '}
                <b> llegar al mayor número posible de familias.</b>
              </p>
              <p>
                Por eso te <b> OFRECEMOS ACCESO POR UN VALOR SIMBÓLICO</b>{' '}
                Accede a decenas de LECCIONES Y JUEGOS DE{' '}
                <u> ALFABETIZACIÓN DIVERTIDOS</u>
              </p>
              <h2 id="currentDate">
                ¡HOY <span style={{ color: 'red' }}> {formattedDate} </span> ,ES
                EL ULTIMO DIA DEL PRECIO ESPECIAL!
              </h2>
              <Mine3>
                <h1>ACCESO DE POR VIDA</h1>
                <h2>U$ 9,90</h2>
                <a href="https://pay.kirvano.com/b31c5323-4e02-47a1-b4c3-4965c1511989">
                  ELIJA EL PLAN DE POR VIDA!
                </a>
              </Mine3>
            </Lexa5>
            <Lexa6>
              <Image alt="garantia" src={garantia} quality={100} />
              <h1>
                ¡PRUÉBALO SIN RIESGO{' '}
                <span style={{ color: 'red' }}>DURANTE 30 DÍAS!</span>
              </h1>
              <p>
                Estamos tan seguros de la calidad de nuestra plataforma que
                puedes unirte y marcharte sin pagar nada durante este periodo.
                ¡Sólo tiene que ponerse en contacto con el soporte y cancelar!
                <br></br> <br></br> Le devolvemos el 100% de su inversión, sin
                preguntas. Te damos una GARANTÍA clara y objetiva.
              </p>
              <Mine4>
                <ScrollButton
                  sectionId="precoSection"
                  title="PRUÉBELO DURANTE 30 DÍAS!"
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
