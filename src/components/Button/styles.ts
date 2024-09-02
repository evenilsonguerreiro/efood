import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  width: 82px;
  height: 24px;
  top: 806px;
  left: 179px;
  color: ${cores.branco};
  background-color: ${cores.pink};
  font-size: 14px;
  align-items: center;
  line-height: 16px 41px;
  font-weight: 700;
  border: none;
`
export const ButtonLink = styled(Link)`
  width: 304px;
  height: 24px;
  top: 804px;
  left: 179px;
  background-color: #ffebd9;
  color: ${cores.pink};
  font-size: 14px;
  font-weight: 700;
  align-items: center;
  line-height: 16.41px;
`
