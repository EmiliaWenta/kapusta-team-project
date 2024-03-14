import styled from 'styled-components';
import ModalWindowStyled from './modalWindow';
import { colors } from './globalStyles';
import { StyledTomatoButton, StyledGreyButton } from './button';

export const CustomModalWindow = styled(ModalWindowStyled)`
  background-color: ${colors.modalBackgroundColor};
  width: 380px;
  height: 194px;
  flex-direction: column;
  padding: 0px;
`;

export const BtnList = styled.ul`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  list-style: none;
  padding: 0px;
`;
export const LeaveModalText = styled.p`
  font-size: 14px;
  line-height: 16.41px;
  font-weight: 500;
  text-align: center;
  color: ${colors.textBasicGrey};
`;

export const CustomTomatoBtn = styled(StyledTomatoButton)`
  font-size: 12px;
  line-height: 14.06;
  font-weight: 700;
`;

export const CustomBtn = styled(StyledGreyButton)`
  background-color: ${colors.modalBackgroundColor};
  font-size: 12px;
  line-height: 14.06;
  font-weight: 700;
`;
