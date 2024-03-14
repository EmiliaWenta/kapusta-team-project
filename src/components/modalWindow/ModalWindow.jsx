import { colors, above768px } from '../../styles/globalStyles';
import styled from 'styled-components';

const ModalBox = styled.div`
  background-color: ${colors.modalBackgroundColor};
  width: 260px;
  height: 456px;
  border-radius: 30px;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 10px 20px 0px rgba(170, 178, 197, 0.4);
  ${above768px`
  width: 406px;
  height: 552px;
  padding: 0px 10px;
  box-shadow: 0px 10px 60px 0px rgba(170, 178, 197, 0.2);`};
`;

function ModalWindow({ children }) {
  return <ModalBox>{children}</ModalBox>;
}

export default ModalWindow;
