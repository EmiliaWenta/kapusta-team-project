import { StyledTomatoButtonWithShadow } from '../../styles/button.jsx';

export const TomatoButtonWithShadow = ({ text, onClick }) => {
  return (
    <StyledTomatoButtonWithShadow onClick={onClick}>
      {text}
    </StyledTomatoButtonWithShadow>
  );
};
