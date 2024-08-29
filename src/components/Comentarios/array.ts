import Perfil8 from '../../../public/perfil8.webp'
import Perfil17 from '../../../public/perfil27.webp'
import Perfil18 from '../../../public/perfil18.webp'
import Perfil20 from '../../../public/perfil20.webp'
import Perfil21 from '../../../public/perfil21.webp'
import Perfil22 from '../../../public/perfil22.webp'
import Perfil23 from '../../../public/perfil23.webp'
import Perfil30 from '../../../public/perfil30.webp'
import Perfil01 from '../../../public/avatar.webp'

interface LocationProps {
  city: string
  region: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const comentarios = (location: LocationProps) => [
  {
    src: Perfil8,
    name: 'Sônia Cardoso',
    desc: 'Comprei para minhas netas, é maravilhoso ver as crianças no caminho do Senhor. Parabéns pelo projeto, já recomendei ao nosso ministério infantil​',
    time: '3 horas',
    ammount: 42,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil17,
    name: 'Rodrigo Bezerra',
    desc: 'Que bênção de projeto, irmãos! Fiz o pedido na semana passada para que minha filha e meu sobrinho assistam. Inclusive imprimi os materiais e ambos gostaram muito. Continuem assim, Deus os abençoe!',
    time: '5 horas',
    ammount: 51,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil20,
    name: 'Marina Carvalho Nuens',
    desc: 'Adorei, adorei... as ilustrações e as histórias são lindas, meus pequenos amam. Vocês estão fazendo um excelente trabalho, que Jesus ilumine o caminho e este magnífico projeto de levar a palavra do Senhor🙏🏼​',
    time: '5 horas',
    ammount: 35,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil18,
    name: 'Nicole Esteves',
    desc: 'Alguém sabe para que idades é recomendado?​',
    time: '7 horas',
    ammount: 28,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil21,
        name: 'Giovanna Alves',
        desc: 'Minha filha de 2 anos se entretém muito assistindo​',
        time: '5 horas',
        ammount: 7,
      },
      {
        src: Perfil01,
        name: 'Alison Souza',
        desc: 'O meu tem 9 anos e assiste, acho que é destinado a crianças entre 1 e 12 anos​',
        time: '3 horas',
        ammount: 16,
      },
    ],
  },
  {
    src: Perfil23,
    name: 'Luiza Fonseca',
    desc: 'Muito bom! Comprei para minha irmã de 6 anos, ela assiste todos os dias depois da escola. Inclusive parou de assistir aquele Lucas Neto... graças a Deus..😅',
    time: '12 horas',
    ammount: 14,
    hasRespostas: false,
    respostas: [],
  },
  {
    src: Perfil30,
    name: 'Alice Pereira',
    desc: 'Um preço muito baixo pelo material, fiquei impressionada!',
    time: '17 horas',
    ammount: 26,
    hasRespostas: true,
    respostas: [
      {
        src: Perfil22,
        name: 'Rafaela Souza',
        desc: 'Concordo, é simplesmente perfeito🥰​',
        time: '3 horas',
        ammount: 11,
      },
    ],
  },
]
