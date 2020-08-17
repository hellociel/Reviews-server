import React from 'react';
import styled from 'styled-components';

const main = styled.section`
  width: 850px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
`;

const title = styled.div`
  h4 {
    margin: 0;
  }
`;

const left = styled.div`
  float: left;
  width: 270px;
`;

const right = styled.div`
  float: right;
  width: 580px;
`;

export default {
  main: main,
  title: title,
  left: left,
  right: right,
};