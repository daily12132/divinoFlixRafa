import Image from 'next/image'
import { ImageSecion } from './styles'
import Slider, { Settings } from 'react-slick'
import ft20 from '../../../public/thumbs/crucificação.png'
import ft2 from '../../../public/thumbs/mandamentos.png'
import ft3 from '../../../public/thumbs/marvermelho.png'
import ft4 from '../../../public/thumbs/nascimento.png'
import ft5 from '../../../public/thumbs/paraiso.png'
import ft6 from '../../../public/thumbs/alfabeto de cristo.png'
import ft7 from '../../../public/thumbs/caça palavras.png'
import ft83 from '../../../public/thumbs/jogo da memoria.png'
import ft9 from '../../../public/thumbs/quebra cabeça.png'
import ft10 from '../../../public/thumbs/sansão.png'
import ft11 from '../../../public/thumbs/daniel.png'
import ft12 from '../../../public/thumbs/davi.png'
import ft13 from '../../../public/thumbs/jesus.png'
import ft14 from '../../../public/thumbs/jonas.png'
import ft15 from '../../../public/thumbs/noe.png'
import Ban1 from '../../../public/thumbs/1.webp'
import Ban2 from '../../../public/thumbs/2.webp'
import Ban3 from '../../../public/thumbs/3.webp'
import Ban4 from '../../../public/thumbs/4.webp'
import Ban5 from '../../../public/thumbs/5.webp'
import Ban6 from '../../../public/thumbs/6.webp'
import Ban7 from '../../../public/thumbs/7.webp'
import Ban8 from '../../../public/thumbs/8.webp'
import Ban9 from '../../../public/thumbs/9.webp'
import Ban10 from '../../../public/thumbs/10.webp'
import Ban11 from '../../../public/thumbs/11.webp'
import Ban12 from '../../../public/thumbs/12.webp'
import Ban13 from '../../../public/thumbs/13.webp'
import Ban14 from '../../../public/thumbs/14.webp'
import Ban15 from '../../../public/thumbs/15.webp'

export function Depoimentos() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    speed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  } as Settings

  return (
    <ImageSecion>
      <Slider {...settings}>
        <Image src={ft2} alt="ft3" quality={100} />
        <Image src={ft3} alt="ft4" quality={100} />
        <Image src={ft4} alt="ft5" quality={100} />
        <Image src={ft5} alt="ft6" quality={100} />
        <Image src={ft6} alt="ft7" quality={100} />
        <Image src={ft7} alt="ft8" quality={100} />
        <Image src={ft9} alt="ft60" quality={100} />
        <Image src={ft10} alt="ft61" quality={100} />
        <Image src={ft11} alt="ft62" quality={100} />
        <Image src={ft12} alt="ft63" quality={100} />
        <Image src={ft13} alt="ft64" quality={100} />
        <Image src={ft14} alt="ft65" quality={100} />
        <Image src={ft15} alt="ft66" quality={100} />
        <Image src={ft20} alt="ft232" quality={100} />
        <Image src={ft83} alt="ft9" quality={100} />
      </Slider>
    </ImageSecion>
  )
}

export function Depoimentos2() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2300,
    speed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  } as Settings

  return (
    <ImageSecion>
      <Slider {...settings}>
        <Image src={Ban1} alt="ft3" quality={100} />
        <Image src={Ban2} alt="ft4" quality={100} />
        <Image src={Ban3} alt="ft5" quality={100} />
        <Image src={Ban4} alt="ft6" quality={100} />
        <Image src={Ban5} alt="ft7" quality={100} />
        <Image src={Ban6} alt="ft8" quality={100} />
        <Image src={Ban7} alt="ft60" quality={100} />
        <Image src={Ban8} alt="ft61" quality={100} />
        <Image src={Ban9} alt="ft62" quality={100} />
        <Image src={Ban10} alt="ft63" quality={100} />
        <Image src={Ban11} alt="ft64" quality={100} />
        <Image src={Ban12} alt="ft65" quality={100} />
        <Image src={Ban13} alt="ft66" quality={100} />
        <Image src={Ban14} alt="ft232" quality={100} />
        <Image src={Ban15} alt="ft9" quality={100} />
      </Slider>
    </ImageSecion>
  )
}
