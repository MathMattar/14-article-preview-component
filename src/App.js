import Content from "./components/Content";
import Background from "./components/Background";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Title from "./components/Title";
import React from "react";
import Profile from "./components/Profile";

export default function App() {
  return (
      <Background>
        <Banner />
        <Card>
          <Title>
            <h1>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
          </Title>
          <Content>
            <p>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </Content>
          <Profile name="Michelle Appleton" date="28 Jun 2020" />
        </Card>
      </Background>
  );
}
