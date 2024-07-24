import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  margin-bottom: 40px;
  position: relative;

  img {
    width: 100%;
  }
`
export const HeaderLogo = styled.div`
  position: absolute;
  top: 40px;
  left: 580px;
  width: 125px;
  height: 57px;
`

export const HeaderTitle = styled.h2`
  color: ${cores.pink};
  text-align: center;
  font-size: 36px;
  position: absolute;
  top: 236px;
  left: 414px;
  width: 539px;
  height: 84px;
`
