import styled from 'styled-components'
import { cores } from '../../styles'

export const Card2 = styled.div`
  background-color: ${cores.pink};
  width: 304px;
  height: 338px;
  border: 8px solid ${cores.pink};
  margin-bottom: 40px;
  position: relative;
  margin-top: 40px;

  .links2 {
    background-color: ${cores.branco};
    width: 304px;
    height: 24px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700px;
    color: ${cores.pink};
  }
`
export const Card2Title = styled.h3`
  width: 124px;
  height: 19px;
  font-size: 16px;
  color: ${cores.branco};
  margin-top: 10px;
  margin-bottom: 25px;
`
export const Card2Descricao = styled.p`
  width: 304px;
  height: 88px;
  font-size: 14px;
  font-weight: 400px;
  color: ${cores.branco};
  line-height: 22px;
`
