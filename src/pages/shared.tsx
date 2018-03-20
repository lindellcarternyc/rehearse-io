import * as React from 'react'

import { Container } from 'semantic-ui-react'

interface LayoutProps {
  title?: string
  children?: React.ReactNode
}
export const Layout = ( props: LayoutProps ): JSX.Element => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}