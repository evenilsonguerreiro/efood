import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  width: 472px;
  height: 398px;
  border: 1px solid ${cores.pink};
  padding: 5px;
  margin-bottom: 40px;
  position: relative;

  ${TagContainer} {
    margin-right: 5px;
  }

  .links {
    width: 100px;
    height: 25px;
    text-decoration: none;
    background-color: ${cores.pink};
    color: ${cores.branco};
    padding: 5px 10px;
  }
`
export const Titulo = styled.h3`
  width: 200px;
  height: 21px;
  top: 665px;
  left: 168px;
  font-size: 18px;
  color: ${cores.pink};
  margin-top: 10px;
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
  margin-top: 16px;
  margin-bottom: 10px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
