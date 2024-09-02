import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#FFF8F2',
  pink: '#E66767',
  preto: '#111',
  branco: '#fff',
  bg: '#FFEBD9'
}

export const EstiloGlobal = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  font-family: Roboto , sans-serif;
}

body{
background-color: ${cores.branco};

.container{
  max-width: 1024px;
  width: 100%;
  margin: auto;
}

}
`
