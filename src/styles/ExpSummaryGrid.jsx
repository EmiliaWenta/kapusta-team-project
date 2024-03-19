import styled from 'styled-components';
import { above1280px, above768px } from './globalStyles';
// import { colors } from './globalStyles';

export const GridBox = styled.div`
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: beige;
  flex-direction: column;
  margin-left: 20px;
  ${above768px`
  flex-direction: row;
  width: 704px;
  height: 422px;`} ${above1280px`
  width: 1034px;`};
`;

export const GridList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-right: 40px;

  ${above768px`
  flex-direction: row;
  margin: 40px 20px 0px 17px;
  height: 392px;
    padding: 0px 0px`}

  ${above1280px`
  width: 1034px;
  height: 392px;
  margin-left: 10px;`}
`;

export const GridListItem = styled.li`
  max-width: 280px;
  height: 40px;

  ${above768px`
   width: 63px;
   height: 90%;`}

  ${above1280px`
  
   width: 93px;`}
`;
