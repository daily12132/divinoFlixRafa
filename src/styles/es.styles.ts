import { styled, keyframes } from './stitches.config'

// Definindo os keyframes para a animação de scale
const scaleUp = keyframes({
  '0%': { transform: 'scale(.95)' },
  '50%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(.95)' },
})

export const MainContainer = styled('main', {
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.5rem',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
})

export const MainContent = styled('div', {
  maxWidth: '85%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.5rem',

  '@media (max-width: 768px)': {
    maxWidth: '95%',
    gap: '2rem',
  },
})

export const Lexa = styled('div', {
  width: '100vw',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '1.7rem',
  gap: '3rem',
  backgroundImage: 'url("tumb.webp")',
  backdropFilter: 'blur(20px)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  '@media (max-width: 768px)': {
    width: '100%',
    height: 'auto',
    gap: '2rem',
    padding: '1.5rem',
  },

  h1: {
    fontSize: '4rem',

    '@media (max-width: 768px)': {
      fontSize: '2.3rem',
    },
  },

  p: {
    fontSize: '2rem',
    textShadow: '0px 0px 10px #000',

    '@media (max-width: 768px)': {
      fontSize: '1rem',
    },
  },
})

export const LexaImage = styled('div', {
  width: '30%',
  background: '#00000099',
  backdropFilter: 'blur(20px)',
  padding: '.5rem 3rem',
  borderRadius: '2rem',

  '@media (max-width: 768px)': {
    width: '70%',
    padding: '.5rem 1.5rem',
  },

  img: {
    width: '100%',
    height: 'auto',
  },
})

export const Mine = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1rem',

  img: {
    width: '70%',
    height: 'auto',

    '@media (max-width: 768px)': {
      width: '100%',
      height: 'auto',
    },
  },
})

export const Lexa2 = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1rem',

  h1: {
    '@media (max-width: 768px)': {
      fontSize: '1.8rem',
    },
  },
})

export const Lexa21 = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1.5rem',

  h1: {
    fontSize: '2.6rem',

    '@media (max-width: 768px)': {
      fontSize: '1.3rem',
    },
  },
})

export const Lexa3 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1rem',

  h1: {
    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },

  img: {
    width: '85%',
    height: 'auto',

    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const Mine2 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'left',
  textAlign: 'left',
  gap: '1rem',
  padding: '0 1rem',

  p: {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',

    svg: {
      flexShrink: 0,
    },
  },
})

export const Lexa4 = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  iframe: {
    width: '60%',
    height: '450px',

    '@media (max-width: 768px)': {
      width: '100%',
      height: '450px',
    },
  },
})

export const Lexa5 = styled('div', {
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.2rem',
  background: '#fff',
  borderRadius: '1rem',
  color: 'black',
  padding: '2rem',

  '@media (max-width: 768px)': {
    width: '100%',
    padding: '1.5rem',
  },

  img: {
    width: '70%',
    height: 'auto',
    '@media (max-width: 768px)': {
      width: '80%',
    },
  },

  h1: {
    fontSize: '2.2rem',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  },

  h2: {
    fontSize: '1.7rem',
    paddingBottom: '1rem',

    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
})

export const Mine3 = styled('div', {
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  background: '#FF3F3F',
  borderRadius: '1rem',
  border: '1px solid #111111',
  padding: '2rem',
  gap: '1.5rem',
  color: 'white',

  '@media (max-width: 768px)': {
    width: '100%',
  },

  h1: {
    fontSize: '2.5rem',
    textDecoration: 'underline',
  },

  h2: {
    fontSize: '3rem',
    textShadow: '0px 0px 2px #fff',
  },

  a: {
    background: '#28b528',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#fff',
    borderRadius: 15,
    border: 0,
    padding: '1.2rem 2.5rem',
    boxShadow: '13px 17px 28px 0px rgba(0,0,0,0.35)',
    animation: `${scaleUp} 1.3s ease-in-out infinite`,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.6rem',

    '@media (max-width: 768px)': {
      fontSize: '1.2rem',
      padding: '1rem 1.5rem',
      width: '100%',
    },
  },
})

export const Lexa6 = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1rem',
  textAlign: 'left',
  padding: '1rem',

  img: {
    '@media (max-width: 768px)': {
      width: '90%',
      height: 'auto',
    },
  },

  h1: {
    textAlign: 'center',
    '@media (max-width: 768px)': {
      fontSize: '1.7rem',
    },
  },

  p: {
    paddingBottom: '1.5rem',
  },
})

export const Mine4 = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '1rem',

  img: {
    width: '50%',
    height: 'auto',

    '@media (max-width: 768px)': {
      width: '100%',
      height: 'auto',
    },
  },
})
