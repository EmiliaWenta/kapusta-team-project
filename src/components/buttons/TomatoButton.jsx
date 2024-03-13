import { StyledTomatoButton } from '../../styles/button.jsx';

export const TomatoButton = ({ text, onClick }) => {
  return <StyledTomatoButton onClick={onClick}>{text}</StyledTomatoButton>;
};
