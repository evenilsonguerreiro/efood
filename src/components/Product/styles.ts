import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  width: 472px;
  height: 398px;
  top: 440px;
  left: 171px;
  border: 1px solid ${cores.pink};
  padding: 5px;
  margin-bottom: 40px;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Titulo = styled.h3`
  width: 92px;
  height: 21px;
  top: 665px;
  left: 168px;
  font-size: 18px;
  color: ${cores.pink};
`
export const Descricao = styled.p`
  width: 456px;
  height: 88px;
  top: 702px;
  left: 179px;
  font-size: 14px;
  font-weight: 400px;
  line-height: 22px;
  color: ${cores.pink};
`
