import styled from 'styled-components';
import { colors } from '../globalStyles';

const { textBasicGray } = colors;

export const UserWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const StyledLetter = styled.span`
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  background-color: #f5f6fa;
  border-radius: 50%;
  padding: 9px 12px;
  font-size: 12px;
  font-weight: 700;
  color: ${textBasicGray};
`;

export const NoMobileMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledName = styled.span`
  box-sizing: border-box;
  height: 36px;
  padding-top: 11px;
  font-size: 12px;
  font-weight: 400;
  padding-right: 20px;
  color: ${textBasicGray};
  border-right: 1px solid #e0e5eb;
`;

export const NoMobileExit = styled.a`
  font-size: 12px;
  font-weight: 400;
  padding-left: 20px;
  text-decoration: underline;
  color: ${textBasicGray};
  cursor: pointer;
`;

export const NoStyledButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
`;
