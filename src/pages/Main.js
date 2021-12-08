import React from "react";
import styled from "styled-components";
import Grid from "../elements/Grid_01";
import Text from "../elements/Text_01";
import Circle from "../elements/Circle";
import Input from "../elements/Input_01";
import ImageA from "../elements/ImageA";
import ImageB from "../elements/ImageB";
import Button from "../elements/Button_01";
import List from "../components/List";
import { MailRounded } from "@material-ui/icons";
import ImageC from "../elements/ImageC";
import BtnImg from "../images/Btn.png";

const Main = (props) => {
  return (
    <div>
      <ImageC />
      <Grid padding="0 0 0 30px">
        <SubTitle>역시 남의 연애가 개꿀잼😆</SubTitle>
        <Title>연애의 참견</Title>
      </Grid>
      <List></List>
      <Btn>+</Btn>
    </div>
  );
};

Main.defaultProps = {
  children: null,
};

const SubTitle = styled.p`
  position: absolute;
  top: 198px;
  color: #fff;
  font-size: 20px;
`;
const Title = styled.p`
  position: absolute;
  top: 230px;
  font-size: 48px;
  color: #fff;
`;
const Btn = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  position: absolute;
  background-color: #fa4a0c;
  bottom: 39px;
  right: 25px;
  color: #fff;
  font-size: 50px;
  text-align: center;
  line-height: 80px;
`;

export default Main;
