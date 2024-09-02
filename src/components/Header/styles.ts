import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  position: relative;
  img {
    width: 100%;
  }
`
export const Logo = styled.div`
  position: absolute;
  top: 40px;
  left: 621px;

  img {
    width: 125px;
    height: 57px;
  }
`
export const HeaderTexto = styled.p`
  position: absolute;
  top: 236px;
  left: 414px;
  width: 539px;
  height: 84px;
  text-align: center;
  font-size: 36px;
  line-height: 42.19px;
  font-weight: bold;
  color: ${cores.pink};
`
