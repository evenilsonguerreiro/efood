import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFooter = styled.div`
  width: 100%;
  height: 298px;
  background-color: ${cores.rosa};
  position: relative;

  img {
    margin-left: 43%;
    margin-top: 40px;
  }
`
export const Descricao = styled.p`
  width: 480px;
  height: 24px;
  font-size: 10px;
  color: ${cores.pink};
  margin: auto;
  text-align: center;
  margin-top: 160px;
`
export const Section = styled.section`
  width: 20px;
  height: 24px;
  margin: auto;
  display: flex;
  position: absolute;
  left: 45%;

  img {
    width: 24px;
    height: 24px;
  }
`
