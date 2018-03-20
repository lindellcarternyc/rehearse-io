import * as React from 'react'

import { Container } from 'semantic-ui-react'

export const Layout = ( props: { children?: React.ReactNode } ): JSX.Element => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}