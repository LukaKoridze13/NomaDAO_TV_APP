import React from "react";
import { styled } from "styled-components";
export default function Table({ header, rows }) {
  return (
    <Container>
      <TableHeader>
        <Row row={header.length}>
          {header.map((item) => (
            <Column key={item}>{item}</Column>
          ))}
        </Row>
      </TableHeader>
      <TableBody>
        {rows.map((row) => {
          return (
            <Row row={row.length}>
              {row.map((item, index) => (
                <Column>
                  {index === 0 && <Orange />} {item}
                </Column>
              ))}
            </Row>
          );
        })}
      </TableBody>
      <TableFooter>
        <PrevPage>Previous page</PrevPage>
        <PageButton>1</PageButton>
        <PageButton>2</PageButton>
        <PageButton>3</PageButton>
        <PageButton>4</PageButton>
        <PageButton>5</PageButton>
        <PageButton>6</PageButton>
        <PageButton>7</PageButton>
        <PageButton>8</PageButton>
        <NextPage>Next page</NextPage>
      </TableFooter>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  max-width: 920px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: "Inter";
`;

const TableHeader = styled.div`
  color: var(--gray-800, #3f3f3f);
  font-size: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  line-height: 16px;

  border-radius: 4px;
  background: var(--background-section, #f2f2f2);
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(2):not(${TableHeader} *) {
    background-color: #deede5;
    border-radius: 4px;
    color: #427a5b;
  }
  &:last-child:not(${TableHeader} *) {
    border-radius: 4px;
    background: var(--blue, #0699d2);
    color: white;
    cursor: pointer;
  }
`;

const Row = styled.div`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: ${(props) => {
    return `repeat(${props.row}, 1fr)`;
  }};
  &:not(${TableHeader} *) {
    margin-top: 8px;
  }
  &:last-child:not(${TableHeader} *) {
    margin-bottom: 8px;
  }
`;

const TableBody = styled.div`
  color: #616161;
  font-size: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  background: var(--background-section, #f2f2f2);
`;

const TableFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  width: 100%;
  height: 64px;
`;

const PrevPage = styled.div`
  color: #585858;
  margin-right: 20px;
`;

const PageButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #d8d8d8;
  height: 20px;
  width: 20px;
  font-size: 12px;
  margin-inline: 5px;
`;

const NextPage = styled.div`
  color: #585858;
  margin-left: 20px;
`;

const Orange = styled.div`
  width: 25px;
  height: 25px;
  background-color: #fe7c31;
  border-radius: 50%;
  margin-right: 8px;
`;

