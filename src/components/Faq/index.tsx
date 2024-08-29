import { ForwardedRef, forwardRef } from 'react'
import {
  AccordionItem,
  AccordionRoot,
  StyledChevron,
  StyledContent,
  StyledContentText,
  StyledHeader,
  StyledTrigger,
} from './styles'
import { AccordionContentProps } from '@radix-ui/react-accordion'

export default function Faq() {
  return (
    <AccordionRoot
      defaultChecked
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="item-1">
        <StyledHeader>
          <StyledTrigger>
            O que é o Divinoflix?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Divinoflix é uma plataforma desenvolvida para oferecer uma
            experiência de streaming aos cristãos. <br></br> <br></br> A ideia é
            despertar a fome pela palavra em seu filho, para que ele passe mais
            tempo com Deus e evite o desperdício de tempo.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <StyledHeader>
          <StyledTrigger>
            Posso baixar episódios para assisti-los offline?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Você pode baixar os episódios em iOS ou Android. Use as downloads
            para levá-los aonde quiser sem necessidade de conexão à internet.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <StyledHeader>
          <StyledTrigger>
            Como será disponibilizado meu acesso à plataforma?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Após a confirmação do pagamento, o acesso à plataforma será liberado
            imediatamente. Você receberá um e-mail com o link de acesso, além do
            seu login e senha exclusivos.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <StyledHeader>
          <StyledTrigger>
            Como posso cancelar?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Divinoflix é flexível. Não há contratos nem compromissos. Você pode
            cancelar sua conta na internet com apenas dois cliques.
            <br></br>
            <br></br> Não há taxa de cancelamento: você pode começar ou terminar
            a qualquer momento.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <StyledHeader>
          <StyledTrigger>
            Funciona em todos os dispositivos?
            <StyledChevron />
          </StyledTrigger>
        </StyledHeader>

        <AccordionContent>
          <p>
            Assista onde quiser, quando quiser. Faça login com sua conta para
            começar a assistir em qualquer dispositivo conectado à internet,
            como computadores, Smart TVs, smartphones, tablets, dispositivos de
            streaming e consoles de videogame. <br></br> <br></br> Você também
            pode baixar seus episódios favoritos em iOS, Android ou Windows 10.
            Use os downloads para levar Divinoflix onde quiser sem necessidade
            de conexão à internet.
          </p>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  )
}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  (
    { children, ...props }: AccordionContentProps,
    forwardedRef: ForwardedRef<HTMLDivElement>,
  ) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  ),
)

AccordionContent.displayName = 'AccordionContent'
