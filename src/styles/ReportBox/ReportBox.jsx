import { above1280px, above768px, colors } from 'styles/globalStyles';
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
