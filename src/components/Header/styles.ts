import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  background: #494949;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  padding: 24px 0;
  margin: 0 auto;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 20px;
`;
