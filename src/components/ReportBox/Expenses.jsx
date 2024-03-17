import {
  ExpensesList,
  ExpensesBox,
  ExpensesSvg,
  ExpensesHeader,
  ExpensesDivider,
  ExpensesListItem,
  ExpensesListItemText,
  ExpensesHeaderBox,
} from 'styles/ReportBox/Expenses';
import expenses from 'expenses.json';

import icons_sprite from '../../svg/icons_sprite.svg';
const icons = {
  productsSvg: `${icons_sprite}#products`,
  alcoholSvg: `${icons_sprite}#alcohol`,
  entertainmentSvg: `${icons_sprite}#entertainment`,
  healthSvg: `${icons_sprite}#health`,
  transportSvg: `${icons_sprite}#transport`,
  housingSvg: `${icons_sprite}#housing`,
  techniqueSvg: `${icons_sprite}#technique`,
  communalSvg: `${icons_sprite}#communal`,
  hobbiesSvg: `${icons_sprite}#hobbies`,
  educationSvg: `${icons_sprite}#education`,
  otherSvg: `${icons_sprite}#other`,
  arrowLeft: `${icons_sprite}#arrow_left`,
  arrowRight: `${icons_sprite}#arrow_right`,
};

export function Expenses({ changeComponentVisibility }) {
  return (
    <ExpensesBox>
      <ExpensesHeaderBox>
        <ExpensesSvg width="15" height="20" onClick={changeComponentVisibility}>
          <use href={icons.arrowLeft}></use>
        </ExpensesSvg>
        <ExpensesHeader>expenses</ExpensesHeader>
        <ExpensesSvg width="15" height="20" onClick={changeComponentVisibility}>
          <use href={icons.arrowRight}></use>
        </ExpensesSvg>
      </ExpensesHeaderBox>
      <ExpensesList>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.products}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.productsSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>products</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.alcohol}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.alcoholSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>alcohol</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.entertainment}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.entertainmentSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>entertain</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesDivider />
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.health}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.healthSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>health</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.transport}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.transportSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>transport</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.housing}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.housingSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>housing</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesDivider />
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.technique}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.techniqueSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>technique</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.communal}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.communalSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>communal</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.hobbies}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.hobbiesSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>hobbies</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesDivider />
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.education}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.educationSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>education</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.other}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.otherSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>other</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesDivider />
      </ExpensesList>
    </ExpensesBox>
  );
}
