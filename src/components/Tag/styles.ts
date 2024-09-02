import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.pink};
  color: ${cores.branco};
  width: 121px;
  height: 10px;
  align-items: center;
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? ' 8px 16px' : '4px 6px')};
`
