import React from "react";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Slider from "./Slider";

const Repair = styled.div`
  color: #ffffff;
  font-weihgt: 700;
  font-size: 40px;
  line-height: 50px;

  span {
    display: block;
    font-size: 24px;
    line-height: 30px;
  }
`;

const LightText = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weihgt: 300;
  line-height: 28px;
  margin-top: 54px;
`;

const CallBtn = styled.button`
  width: 247px;
  height: 67px;
  background-color: #ffa14b;
  border-radius: 30px;
  color: #ffffff;
  font-size: 18px;
  font-weihgt: bold;
  margin-top: 32px;
`;

function Main() {
  return (
    <Container>
      <Row>
        <Col lg={5}>
          <Repair>
            Качественный ремонт
            <span> iphone за 35 минут и гарантия 1 год </span>
          </Repair>

          <LightText>
            Оставьте заявку на бесплатную диагностику без очереди, и получите защитное стекло,
            стоимостью 1000 рублей, с установкой в подарок!
          </LightText>

          <CallBtn> Отправить заявку! </CallBtn>
        </Col>
        <Col lg={{ span: 6, offset: 1 }}>
          <Slider />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;

/*
для примера, сдесь мы создали стайлед-компонент Repair с таким же названием как и в меню-блоке, чтобы показать что стили независимые и конфликтов имён нет
*/
