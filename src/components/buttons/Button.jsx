import { StyledButton } from '../../styles/button.jsx';

export const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};
