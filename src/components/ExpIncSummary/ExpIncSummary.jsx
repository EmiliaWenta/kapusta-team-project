import {
  ExpIncBox,
  ExpIncDivider,
  ExpIncList,
  ExpIncListItem,
  ExpIncText,
  ExpIncTextRed,
  ExpIncTextGreen,
} from 'styles/ExpIncSummary';
import expenses from '../../../src/expenses';

export function ExpIncInfo() {
  return (
    <ExpIncBox>
      <ExpIncList>
        <ExpIncListItem>
          <ExpIncText>Expenses:</ExpIncText>
          <ExpIncTextRed>-{expenses.expenses + ' .00'} UAH.</ExpIncTextRed>
        </ExpIncListItem>
        <ExpIncDivider />
        <ExpIncListItem>
          <ExpIncText>Income:</ExpIncText>
          <ExpIncTextGreen>+{expenses.income + ' .00'} UAH.</ExpIncTextGreen>
        </ExpIncListItem>
      </ExpIncList>
    </ExpIncBox>
  );
}
