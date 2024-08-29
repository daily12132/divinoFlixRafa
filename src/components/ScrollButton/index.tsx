import { DownloadSimple } from 'phosphor-react'
import { ButtonContainer } from './styles'

interface ScrollButtonProps {
  title: string
  sectionId: string
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ title, sectionId }) => {
  const handleClick = () => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ButtonContainer
      className="relative w-full md:w-max flex items-center justify-center text-center text-xl md:text-2xl text-white font-black gap-2 p-4 mt-4 rounded-md bg-[#E50914] hover:scale-105 transition-all cursor-pointer"
      onClick={handleClick}
    >
      <DownloadSimple size={32} />
      {title}
    </ButtonContainer>
  )
}

export default ScrollButton
