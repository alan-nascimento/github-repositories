import React from 'react';

import { Title } from './styles';

export default function Repositories({ match }) {
  return <Title>Repositories: {decodeURIComponent(match.params.repository)}</Title>;
}
