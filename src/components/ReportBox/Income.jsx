import icons_sprite from '../../svg/icons_sprite.svg';
import expenses from 'expenses.json';

import {
  IncomeBox,
  IncomeHeaderBox,
  IncomeHeader,
  IncomeList,
  IncomeListItem,
  IncomeListItemText,
  IncomeSvg,
} from 'styles/ReportBox/Income';

const icons = {
  salarySvg: `${icons_sprite}#salary`,
  incomeSvg: `${icons_sprite}#income`,
  arrowLeft: `${icons_sprite}#arrow_left`,
  arrowRight: `${icons_sprite}#arrow_right`,
};

export function Income({ changeComponentVisibility }) {
  return (
    <IncomeBox>
      <IncomeHeaderBox>
        <IncomeSvg width="15" height="20" onClick={changeComponentVisibility}>
          <use href={icons.arrowLeft}></use>
        </IncomeSvg>
        <IncomeHeader>income</IncomeHeader>
        <IncomeSvg width="15" height="20" onClick={changeComponentVisibility}>
          <use href={icons.arrowRight}></use>
        </IncomeSvg>
      </IncomeHeaderBox>
      <IncomeList>
        <IncomeListItem>
          <IncomeListItemText>Salary</IncomeListItemText>
          <IncomeSvg width="56" height="56">
            <use href={icons.salarySvg}></use>
          </IncomeSvg>
          <IncomeListItemText>{expenses.salary}</IncomeListItemText>
        </IncomeListItem>
        <IncomeListItem>
          <IncomeListItemText>Add.income</IncomeListItemText>
          <IncomeSvg width="56" height="56">
            <use href={icons.incomeSvg}></use>
          </IncomeSvg>
          <IncomeListItemText>{expenses.addIncome}</IncomeListItemText>
        </IncomeListItem>
      </IncomeList>
    </IncomeBox>
  );
}
