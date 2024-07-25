import styled from 'styled-components'
import { cores } from '../../styles'

import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  background-color: ${cores.pink};
  color: ${cores.branco};
  width: 100px;
  height: 25px;
  font-size: 14px;
  fontweight: bold;
  aling-item: center;
  border: none;
  margin-top: 16px;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.pink};
  color: ${cores.branco};
  width: 70px;
  height: 16px;
  font-size: 14px;
  fontweight: bold;
  aling-item: center;
`
