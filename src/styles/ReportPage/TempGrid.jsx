import { above1280px, above768px } from 'styles/globalStyles';

const { default: styled } = require('styled-components');

export const TempBox = styled.div`
  width: 280px;
  display: flex;
  min-height: 500px;
  background-color: lightpink;
  margin-top: 40px;

  ${above768px`
  width: 704px;
  height: 422px;
  border-radius: 30px;
    box-shadow: 0px 10px 60px 0px #AAB2C533;`}

  ${above1280px`
  width: 1034px;`}
`;
