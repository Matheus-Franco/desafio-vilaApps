import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  margin-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 30%;
  padding: 16px;
  background: #494949;
  border-radius: 8px;
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
  font-size: 18px;
  border-radius: 8px;
  color: #fff;
`;
