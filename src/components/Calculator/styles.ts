import styled, { keyframes } from 'styled-components';

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  } to {
    opacity: 1;
    transform: translateY(0)
  }
`;

export const Container = styled.div`
  width: 100vw;
  margin-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 450px;
  padding: 16px;
  background: #494949;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 450px) {
    width: 300px;
  }
`;

export const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 56px;
`;

export const Input = styled.input`
  height: 70px;
  width: 75%;
  padding: 8px;
  border: none;
  outline: none;
  font-size: 24px;
  background: transparent;
  border-bottom: 1px solid #fff;
  color: #fff;
  opacity: 0.8;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 70px;
`;

export const Button = styled.button`
  width: 100%;
  height: 50%;
  padding: 8px;

  font-size: 24px;
  font-weight: bold;
  color: #eedd43;
  background: transparent;
  border-radius: 4px;
  transition: 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &.roman-result {
    height: 100%;
    font-size: 16px;
  }

  &:hover {
    color: #494949;
    background: #eedd43;
  }
`;

export const ResultContainer = styled.div``;

export const Result = styled.div`
  margin-bottom: 24px;
`;

export const RomanResult = styled.div`
  margin-bottom: 40px;
`;

export const Label = styled.div`
  color: #fff;
`;

export const ResultArea = styled.div`
  background: #5f5f5f;
  width: 100%;
  height: 67px;
  border-radius: 8px;
  padding: 0 16px 8px 0;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  font-size: 32px;
  color: #fff;

  &.roman {
    padding: 0;
  }
`;

export const ButtonDetails = styled.button`
  color: #eedd43;
  background: transparent;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Details = styled.div`
  width: 100%;
  margin-top: 24px;
  padding: 16px;
  background: #5f5f5f;
  font-size: 16px;
  border-radius: 8px;
  color: #fff;

  animation: ${appearFromTop} 0.5s;
`;
