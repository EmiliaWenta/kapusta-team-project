import icons_sprite from '../../svg/icons_sprite.svg';
import {
  ExpensesList,
  ExpensesBox,
  ExpensesSvg,
  ExpensesHeader,
  ExpensesDivider,
} from 'styles/Expenses';

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
};
export function Expenses() {
  return (
    <ExpensesBox>
      <ExpensesHeader>expenses</ExpensesHeader>
      <ExpensesList>
        <li>
          <ExpensesSvg width="65" height="56">
            <use href={icons.productsSvg} />
          </ExpensesSvg>
        </li>
        <li>
          <ExpensesSvg width="56" height="56">
            <use href={icons.alcoholSvg} />
          </ExpensesSvg>
        </li>
        <li>
          <ExpensesSvg width="56" height="56">
            <use href={icons.entertainmentSvg} />
          </ExpensesSvg>
        </li>
        <ExpensesDivider />
        <li>
          <ExpensesSvg width="56" height="56">
            <use href={icons.healthSvg} />
          </ExpensesSvg>
        </li>
        <li>
          <ExpensesSvg width="56" height="56">
            <use href={icons.transportSvg} />
          </ExpensesSvg>
        </li>
        <li>
          <ExpensesSvg width="56" height="56">
            <use href={icons.housingSvg} />
          </ExpensesSvg>
        </li>
        <ExpensesDivider />
        <li>
          <ExpensesSvg width="56" height="56">
            <use href={icons.techniqueSvg} />
          </ExpensesSvg>
        </li>
        <li>
          <ExpensesSvg width="56" height="56">
            <use href={icons.communalSvg} />
          </ExpensesSvg>
        </li>
        <li>
          <ExpensesSvg width="56" height="56">
            <use href={icons.hobbiesSvg} />
          </ExpensesSvg>
        </li>
        <ExpensesDivider />
        <li>
          <ExpensesSvg width="56" height="56">
            <use href={icons.educationSvg} />
          </ExpensesSvg>
        </li>
        <li>
          <ExpensesSvg width="56" height="56">
            <use href={icons.otherSvg} />
          </ExpensesSvg>
        </li>
      </ExpensesList>
    </ExpensesBox>
  );
}
