import styled from 'styled-components';
import { above768px, above1280px } from '../globalStyles';

export const StyledWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  padding: 13px 20px 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${above768px`
    padding-left: 32px;
    padding-right: 32px;
  `}
  ${above1280px`
    padding-left: 16px;
    padding-right: 16px;
  `};
`;
