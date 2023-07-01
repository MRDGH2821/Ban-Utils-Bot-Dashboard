import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  height: 40px;
  margin-bottom: 20px;
  padding: 0 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Button = styled.button`
  height: 40px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #007bff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Error = styled.span`
  color: #f00;
  margin-bottom: 20px;
`;