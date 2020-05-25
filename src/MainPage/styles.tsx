import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #333;
  flex: 1;
  align-items: center;
`;

export const View = styled.View`
  width: 90%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  width: 100%;
  height: auto;
  margin-top: 50px;
  padding: 15px 30px;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  width: 100%;
  height: auto;
  margin-top: 20px;
  padding: 15px 30px;
`;

export const ButtonText = styled.Text`
  color: #333;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 18px;
  font-weight: bold;
  margin-top: 30px;
`;

export const ResultView = styled.View`
  width: 100%;
  height: auto;
  margin-top: 30px;
`;

export const ResultTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Box = styled.View`
  background-color: #fff;
  color: #333;
  border-radius: 10px;
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding: 15px 30px;
`;

export const ResultText = styled.Text`
  color: #333;
  font-size: 18px;
  text-align: center;
`;
