import React, { useCallback, useState } from 'react';

import * as Styles from './styles';

const Calculator: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showRomanResult, setShowRomanResult] = useState<boolean>(false);
  const [isNegative, setIsNegative] = useState<boolean>(false);
  const [algarisms, setAlgarisms] = useState<string>('');
  const [equation, setEquation] = useState<string>('');
  const [romanResult, setRomanResult] = useState<string>('');
  const [numberResult, setNumberResult] = useState<number>(0);

  const map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  const showDetails = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const generateResult = useCallback(
    (type: 'sum' | 'sub') => {
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

      setRomanResult('');
      setIsNegative(false);
      setShowRomanResult(false);
      setNumberResult(total);
      setEquation(algarisms);
      setAlgarisms('');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [algarisms],
  );

  const generateRomanResult = useCallback(() => {
    let myString = '';
    let getResult = numberResult;

    if (getResult < 0) {
      getResult *= -1;

      setIsNegative(true);
    }

    const convertToRoman: any = [
      1000,
      'M',
      900,
      'CM',
      500,
      'D',
      400,
      'CD',
      100,
      'C',
      90,
      'XC',
      50,
      'L',
      40,
      'XL',
      10,
      'X',
      9,
      'IX',
      5,
      'V',
      4,
      'IV',
      1,
      'I',
    ];

    for (let i = 0; getResult > 0 && i < convertToRoman.length; i += 2) {
      while (getResult >= convertToRoman[i]) {
        myString += convertToRoman[i + 1];

        getResult -= convertToRoman[i];
      }
    }

    setRomanResult(myString);
    setShowRomanResult(true);
  }, [numberResult]);

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
            <Styles.ResultArea>{numberResult}</Styles.ResultArea>
          </Styles.Result>

          <Styles.RomanResult>
            <Styles.Label>Resultado em Romano:</Styles.Label>
            {showRomanResult ? (
              <Styles.ResultArea>
                {isNegative === true ? (
                  <>
                    {' - '}
                    {romanResult}
                  </>
                ) : (
                  romanResult
                )}
              </Styles.ResultArea>
            ) : (
              <Styles.ResultArea className="roman">
                <Styles.Button
                  type="button"
                  onClick={generateRomanResult}
                  className="roman-result"
                >
                  Ver resultado
                </Styles.Button>
              </Styles.ResultArea>
            )}
          </Styles.RomanResult>
        </Styles.ResultContainer>

        <Styles.ButtonDetails onClick={showDetails}>
          Ver detalhes da equação
        </Styles.ButtonDetails>

        {isOpen && (
          <Styles.Details>
            {numberResult !== 0 ? (
              <p>
                {equation}
                {' = '}
                {numberResult}

                {romanResult.length > 0 && (
                  <>
                    {' = '}
                    {isNegative === true ? (
                      <>
                        {' - '}
                        {romanResult}
                      </>
                    ) : (
                      romanResult
                    )}
                  </>
                )}
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