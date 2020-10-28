import React, { useCallback, useState } from 'react';

import * as Styles from './styles';

const Calculator: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [algarisms, setAlgarisms] = useState<string>('');
  const [equation, setEquation] = useState<string>('');
  const [result, setResult] = useState<number>(0);

  const showDetails = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const generateResult = useCallback(
    (type: 'sum' | 'sub') => {
      const map = new Map();
      map.set('I', 1);
      map.set('V', 5);
      map.set('X', 10);
      map.set('L', 50);
      map.set('C', 100);
      map.set('D', 500);
      map.set('M', 1000);

      const separateItems = algarisms.split('');

      let total = 0;

      separateItems.filter(item => {
        if (map.has(item)) {
          if (type === 'sum') {
            total += Number(map.get(item));
          }

          if (type === 'sub') {
            if (total === 0) {
              total = Number(map.get(item));
            } else {
              total -= Number(map.get(item));
            }
          }
        }

        return null;
      });

      setResult(total);
      setEquation(algarisms);
      setAlgarisms('');
    },
    [algarisms],
  );

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.FirstLine>
          <Styles.Input
            placeholder="Digite aqui"
            value={algarisms}
            onChange={e => setAlgarisms(e.target.value.toUpperCase())}
          />

          <Styles.Options>
            <Styles.Button type="button" onClick={() => generateResult('sum')}>
              +
            </Styles.Button>
            <Styles.Button type="button" onClick={() => generateResult('sub')}>
              -
            </Styles.Button>
          </Styles.Options>
        </Styles.FirstLine>

        <Styles.ResultContainer>
          <Styles.Result>
            <Styles.Label>Resultado:</Styles.Label>
            <Styles.ResultArea>{result}</Styles.ResultArea>
          </Styles.Result>

          <Styles.RomanResult>
            <Styles.Label>Resultado em Romanos:</Styles.Label>
            <Styles.ResultArea>XIII</Styles.ResultArea>
          </Styles.RomanResult>
        </Styles.ResultContainer>

        <Styles.ButtonDetails onClick={showDetails}>
          Ver detalhes da equação
        </Styles.ButtonDetails>

        {isOpen && (
          <Styles.Details>
            {result > 0 ? (
              <p>
                {equation}
                {' = '}
                {result}
              </p>
            ) : (
              <p>Nenhuma equação realizada</p>
            )}
          </Styles.Details>
        )}
      </Styles.Content>
    </Styles.Container>
  );
};

export default Calculator;
