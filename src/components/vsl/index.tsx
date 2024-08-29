import React, { useRef, useEffect, useState } from 'react'
import { VslContent } from './styles'

export function Vsl() {
  const meuIframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState('')

  // Função para ajustar a altura do iframe com base na largura
  const ajustarAltura = () => {
    if (meuIframeRef.current) {
      const width = meuIframeRef.current.clientWidth // Obter a largura do iframe
      const scaleFactor = 0.56267 // Fator de escala de 10%, você pode ajustar conforme necessário
      const newHeight = `${width * scaleFactor}px` // Calcula a nova altura em pixels
      setIframeHeight(newHeight) // Define a nova altura para o estado
    }
  }

  // Chamando a função ajustarAltura quando o componente for renderizado e toda vez que o tamanho da janela mudar
  useEffect(() => {
    ajustarAltura()
    const handleResize = () => ajustarAltura()
    window.addEventListener('resize', handleResize)

    // Remover o listener quando o componente for desmontado para evitar memory leaks
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <VslContent>
      <iframe
        ref={meuIframeRef}
        src="https://scripts.converteai.net/739c1ff3-2073-4b4d-bd16-400c37ed0f44/players/65404692fbdab3000926bf26/embed.html"
        id="ifr_65404692fbdab3000926bf26"
        referrerPolicy="origin"
        style={{
          height: iframeHeight,
          border: 'none',
        }}
      />
    </VslContent>
  )
}
