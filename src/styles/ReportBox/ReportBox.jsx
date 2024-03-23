import { above1280px, above768px } from 'styles/globalStyles';
const { default: styled } = require('styled-components');

export const ReportBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 280px;
  min-height: 100px;
  background-color: #ffffff;

  ${above768px`
  min-width: 664px;
  min-height: 195px;
  max-height: 348px;
  border-radius: 30px;
  box-shadow: 0px 10px 60px 0px #AAB2C533;
  padding: 0px 20px;
  

  `}

  ${above1280px`
  min-width: 1034px;
  padding: 0px;`}
`;

export const ChartWrapper = styled.div`
  width: 280px;
  height: 422px;
  background-color: #ffffff;

  ${above768px`
  margin: 32px 0px 80px;
  border-radius: 30px;
  box-shadow: 0px 10px 60px 0px #aab2c533;
  width: 704px;
  height: 422px;`}

  ${above1280px`
  width: 1034px;`}
`;
