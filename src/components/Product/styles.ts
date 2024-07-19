import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  margin-top: 40px;
  width: 472px;
  height: 398px;
  border: 1px solid ${cores.pink};

  ${TagContainer} {
    margin-right: 8px;
  }

  ${ButtonContainer} {
    margin-left: 5px;
  }
`
export const Title = styled.h3`
  font-size: 18px;
  color: ${cores.pink};
  margin-left: 5px;
`
export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.pink};
  line-height: 22px;
  margin-left: 5px;
`
export const Infos = styled.div`
  position: absolute;
  top: 466px;
  left: 455px;
`
