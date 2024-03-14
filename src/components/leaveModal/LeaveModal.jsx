import {
  CustomModalWindow,
  BtnList,
  LeaveModalText,
  // CustomTomatoBtn,
  // CustomBtn,
} from 'styles/leaveModal';

import { TomatoButton } from 'components/buttons/TomatoButton';
import { GreyButton } from 'components/buttons/GreyButton';

export function LeaveModal({ text }) {
  return (
    <CustomModalWindow>
      <LeaveModalText>{text}</LeaveModalText>
      <BtnList>
        <li>
          <TomatoButton text="Yes"></TomatoButton>
        </li>
        <li>
          <GreyButton text="No"></GreyButton>
        </li>
      </BtnList>
    </CustomModalWindow>
  );
}
export default LeaveModal;

// Example usage in App.jsx: <LeaveModal text="Do you want to leave?" />;
