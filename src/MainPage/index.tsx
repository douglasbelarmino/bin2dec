import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import {
  Container,
  View,
  Title,
  Input,
  ErrorMessage,
  ResultView,
  ResultTitle,
  Box,
  ResultText,
  Button,
  ButtonText,
} from "./styles";

const MainPage: React.FC = () => {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState<number | null>();
  const [errorMessage, setErrorMessage] = useState("");
  const [status, setStatus] = useState(true);

  const checksDigitIsZeroOrOne = () => {
    if (binary === "" || binary.match(/^[0-1]+$/g) === null) {
      setErrorMessage("Digite 0 ou 1");
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (binary !== "") {
      if (decimal !== null) setDecimal(null);

      if (!checksDigitIsZeroOrOne()) {
        setStatus(false);

        return;
      }

      setStatus(true);
      setErrorMessage("");
    }
  }, [binary]);

  const handleBinaryToDecimalConversion = () => {
    if (!status) return;

    setErrorMessage("");

    const decimalResult = parseInt(binary, 2);
    setDecimal(decimalResult);
  };

  return (
    <>
      <StatusBar backgroundColor="#333" translucent={true} animated={true} />
      <Container>
        <View>
          <Title>Bin2Dec</Title>

          <Input
            value={binary}
            onChangeText={(text) => setBinary(text)}
            placeholder="Binário"
            placeholderTextColor="#333"
            keyboardType="numeric"
            maxLength={8}
          />

          <Button onPress={handleBinaryToDecimalConversion}>
            <ButtonText>Converter</ButtonText>
          </Button>

          <ErrorMessage>{errorMessage}</ErrorMessage>

          <ResultView>
            <ResultTitle>Resultado:</ResultTitle>
            <Box>
              <ResultText selectable={true}>{decimal}</ResultText>
            </Box>
          </ResultView>
        </View>
      </Container>
    </>
  );
};

export default MainPage;
