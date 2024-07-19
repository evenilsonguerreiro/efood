import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.pink};
  color: ${cores.branco};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  width: 53px;
  height: 14px;
  display: inline-block;
  padding: 5px;
`
