import React from 'react';

import * as Styles from './styles';

const Header: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Text>Calculadora Romana</Styles.Text>

        <Styles.Text>Desafio VilaApps</Styles.Text>
      </Styles.Content>
    </Styles.Container>
  );
};

export default Header;
