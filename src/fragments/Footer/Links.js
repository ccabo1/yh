import React from 'react'
import s from 'styled-components'

import { BLUE, WHITE} from '../../constants/colors'

const links = [
  'Home',
  'About',
  'Ventures',
  'Startup School',
  'Blog',
  'Get Involved',
]

const Links = s.ul`
  list-style: none;
  margin: 1.5rem 0;
  padding: 0;
  z-index: 6 !important;

  a {
    text-decoration: none !important;
    font-weight: bold;
    text-transform: uppercase;
    color: ${WHITE};
    font-size: 120%;

    &:hover {
      color: ${BLUE};
    }
  }

  li {
    z-index: 6 !important;
  }
`

export default () => (
  <Links>
    {links.map(link => (
      <li key={link}>
        <a>{link}</a>
      </li>
    ))}
  </Links>
)
