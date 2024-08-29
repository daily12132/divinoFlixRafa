import { styled } from '../styles/stitches.config'

export const MainContainer = styled('main', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flex: '1',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  flexWrap: 'nowrap',
  gap: '6rem',

  img: {
    '@media (max-width: 768px)': {
      width: '95%',
      height: 'auto',
    },
  },

  '@media (max-width: 768px)': {
    height: 'auto',
    gap: '1rem',
    padding: '1rem 2rem',
    flexDirection: 'column',
  },
})

export const TextContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: '#000',
  width: '50%',
  gap: '1rem',

  p: {
    color: '#fff',
    marginBottom: '1.2rem',
    fontWeight: '500',
    fontSize: '1.3rem',
  },

  h1: {
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.30);',

    fontSize: '2rem',
    color: 'White',
    marginBottom: '2rem',
    textDecoration: 'underline',
    '@media (max-width: 768px)': {
      fontSize: '1.7rem',
    },
  },

  a: {
    fontSize: '2.5rem',
    background: 'green',
    padding: '1rem 4rem',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',

    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },

    '&:hover': {
      transform: 'scale(1.05)',
    },
  },

  '@media (max-width: 768px)': {
    width: '100%',
  },
})
