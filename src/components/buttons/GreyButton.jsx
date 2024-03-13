import { StyledGreyButton } from '../../styles/button.jsx';

export const GreyButton = ({ text, onClick }) => {
  return <StyledGreyButton onClick={onClick}>{text}</StyledGreyButton>;
};
