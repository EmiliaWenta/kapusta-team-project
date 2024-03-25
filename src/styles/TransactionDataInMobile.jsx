import styled from 'styled-components';

export const StyledDataWrapper = styled.div`
  width: 280px;
  height: 100%;
`;

export const StyledDataList = styled.ul`
  display: flex;
  justify-conent: center;
  flex-direction: column;
  padding-left: 0px;
  margin: 0px;
  gap: 5px;
  width: 280px;
`;

export const StyledLi = styled.li`
  width: 280px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 32px;
  gap: 10px;
  align-items: center;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 1px;
    background-color: rgba(245, 246, 251, 1);
  }
`;

export const StyledDiv1 = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  color: rgba(82, 85, 95, 1);
  font-size: 12px;
  font-weight: 700;
`;

export const StyledDescription = styled.p`
  color: rgba(82, 85, 95, 1);
  font-size: 12px;
  font-weight: 700;
  margin: 0px;
`;

export const StyledDiv2 = styled.div`
  color: inherit;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;

  > p {
    margin: 0px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  padding-bottom: 4px;
`;

export const ColoredParagraph = styled.p`
  color: ${props => (props.value >= 0 ? '#407946' : '#E7192E')};
  font-weight: bold;
  font-size: 12px;
`;
