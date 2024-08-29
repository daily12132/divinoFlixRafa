import { styled, keyframes } from '../../styles/stitches.config'

// Definindo os keyframes para a animação de scale
const scaleUp = keyframes({
  '0%': { transform: 'scale(.95)' },
  '50%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(.95)' },
})

export const ButtonContainer = styled('button', {
  background: '#28b528',
  fontSize: '2.5rem',
  fontWeight: '700',
  color: '#fff',
  borderRadius: 20,
  border: 0,
  padding: '1.2rem 2.5rem',
  boxShadow: '13px 17px 28px 0px rgba(0,0,0,0.35)',
  animation: `${scaleUp} 1.3s ease-in-out infinite`,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.6rem',

  '@media (max-width: 768px)': {
    fontSize: '1.1rem',
    padding: '1rem 1.5rem',
    width: '100%',
  },
})
