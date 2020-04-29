import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <Container barStyle="light-content">
      <RecipeBackground source={require("./assets/Burger.jpg")}>
        <SafeAreaView>
          <MenuBar>
            <Back>
              <AntDesign name="arrowleft" size={24} color="#FFF" />
              <Text style={{ marginLeft: 10 }}>Ingredient</Text>
            </Back>
            <AntDesign name="heart" size={24} color="#FFF" />
          </MenuBar>
          <MainRecipe>
            <Text title heavy>
              Burger
            </Text>
            <Divider />
            <Text large bold>80 calories per 100gm</Text>
            <Text small bold>3g Fat | 3g Protien | 8g Carbs</Text>
          </MainRecipe>
        </SafeAreaView>
      </RecipeBackground>
    </Container>
  );
}

const Divider = styled.View`
  border-bottom-color: #fff;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;

const Text = styled.Text`
  color: ${(props) => (props.dark ? "#000" : "#FFF")};

  ${({ title, large, small }) => {
    switch (true) {
      case title:
        return `font-size:32px`;
      case large:
        return `font-size:20px`;
      case small:
        return `font-size:12px`;
    }
  }}

  ${({ bold, heavy }) => {
    switch (true) {
      case bold:
        return `font-weight:600`;
      case heavy:
        return `font-weight:700`;
    }
  }}
`;

const Container = styled.View`
  flex: 1;
  backgroundColor: #fff;
`;

const RecipeBackground = styled.ImageBackground`
  width: 100%;
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const Back = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;
