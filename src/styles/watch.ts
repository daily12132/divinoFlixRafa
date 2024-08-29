import { styled } from './stitches.config'

export const MainContainer = styled('main', {
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
})

export const MainContent = styled('div', {
  maxWidth: 950,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.5rem',

  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
})

export const Divi = styled('div', {
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundImage: 'url("tumb.png")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',

  img: {
    width: '20%',
    height: 'auto',

    '@media (max-width: 768px)': {
      width: '70%',
    },
  },
})

export const Divi1 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

export const Minedivi = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',

  iframe: {
    '@media (max-width: 768px)': {
      width: '90%',
      height: 'auto',
    },
  },
})

export const Minedivi1 = styled('div', {})
