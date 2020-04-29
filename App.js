import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const recipies = [
    {
      name: "Burger",
      info: "80 calories per 100gm",
      image: require("./assets/Burger.jpg"),
    },
    {
      name: "Burger",
      info: "80 calories per 100gm",
      image: require("./assets/Burger.jpg"),
    },
    {
      name: "Burger",
      info: "80 calories per 100gm",
      image: require("./assets/Burger.jpg"),
    },
  ];
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
            <Text large bold>
              80 calories per 100gm
            </Text>
            <Text small bold>
              3g Fat | 3g Protien | 8g Carbs
            </Text>
          </MainRecipe>
          <Button>
            <Text large bold>
              Learn More
            </Text>
          </Button>
        </SafeAreaView>
      </RecipeBackground>

      <RecipeContainer>
        <Text dark heavy large>
          Recipes
        </Text>
        <Text dark large bold>
          20 Recipes Available
        </Text>

        <Recipes>
          {recipies.map((recipie, index) => {
            return (
              <Recipe key={index}>
                <RecipeImage source={recipie.image} />
                <RecipeInfo>
                  <Text dark bold small>
                    {recipie.name}
                  </Text>
                  <Text dark bold small>
                    {recipie.info}
                  </Text>
                </RecipeInfo>
                <AntDesign name="hearto" color="#000" />
              </Recipe>
            );
          })}
        </Recipes>
      </RecipeContainer>
    </Container>
  );
}

const Recipe = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;
const RecipeImage = styled.Image`
  width: 68px;
  height: 60px;
  border-radius: 6px;
`;
const RecipeInfo = styled.View`
flex:1;
margin-left:12px
`;

const Recipes = styled.View`
  margin-top: 16px;
`;

const RecipeContainer = styled.View`
  margin-top: -24px;
  padding: 32px;
  border-top-left-radius: 32px;
  border-top-right-radius: 24px;
`;

const Button = styled.TouchableOpacity`
  margin: 0 0 48px 32px;
  background-color: rgba(255, 255, 255, 0.5);
  align-self: flex-start;
  padding: 6px 18px;
  border-radius: 100px;
`;

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
