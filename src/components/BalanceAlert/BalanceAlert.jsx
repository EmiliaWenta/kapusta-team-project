import {
  AlertWrapper,
  AlertWindow,
  Triangle,
  AlertText,
  AlertSubText,
} from '../../styles/balanceAlert';

export function BalanceAlert({ setShow, opacity }) {
  return (
    <AlertWrapper onClick={() => setShow(false)}>
      <AlertWindow style={{ opacity }}>
        <Triangle />
        <AlertText>
          Hello! To get started, enter the current balance of your account!
        </AlertText>
        <AlertSubText>You can't spend money until you have it</AlertSubText>
      </AlertWindow>
    </AlertWrapper>
  );
}
