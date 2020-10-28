import React from 'react';
import { FaCalculator } from 'react-icons/fa';

import * as Styles from './styles';

const Header: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Content>
        <FaCalculator />
        <Styles.Text>Calculadora Romana</Styles.Text>
        <FaCalculator />
      </Styles.Content>
    </Styles.Container>
  );
};

export default Header;
