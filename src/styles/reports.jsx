import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors } from './globalStyles';
export const StyledLink = styled(NavLink)`
  display: flex;
  width: 84px;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: rgba(82, 85, 95, 0.7);
`;

export const StyledSvg = styled.svg`
  fill: ${colors.textBasicGray};
`;
