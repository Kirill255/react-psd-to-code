import React from "react";
import styled from "styled-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Link from "./Link";

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 49px;
`;

function Header() {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <nav>
            <StyledList>
              <Link link="#" text="Вызов мастера" />
              <Link link="#" text="Прайс на ремонт" />
              <Link link="#" text="Наши премущества" />
              <Link link="#" text="Схема работы" />
              <Link link="#" text="Отзывы клиентов" />
              <Link link="#" text="Примеры работ" />
              <Link link="#" text="Контакты" />
            </StyledList>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;

/*
ссылки заглушки, это просто вёрстка макета
*/
