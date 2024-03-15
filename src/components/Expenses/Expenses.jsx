import icons_sprite from '../../svg/icons_sprite.svg';
import { ExpensesList, ExpensesBox, ExpensesText } from 'styles/Expenses';

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
      <ExpensesText>expenses</ExpensesText>
      <ExpensesList>
        <li>
          <svg width="84" height="103">
            <use href={icons.productsSvg} />
          </svg>
        </li>
        <li>
          <svg width="84" height="103">
            <use href={icons.alcoholSvg} />
          </svg>
        </li>
        <li>
          <svg width="84" height="103">
            <use href={icons.entertainmentSvg} />
          </svg>
        </li>
        <li>
          <svg width="84" height="103">
            <use href={icons.healthSvg} />
          </svg>
        </li>
        <li>
          <svg width="84" height="103">
            <use href={icons.transportSvg} />
          </svg>
        </li>
        <li>
          <svg width="84" height="103">
            <use href={icons.housingSvg} />
          </svg>
        </li>
        <li>
          <svg width="84" height="103">
            <use href={icons.techniqueSvg} />
          </svg>
        </li>
        <li>
          <svg width="84" height="103">
            <use href={icons.communalSvg} />
          </svg>
        </li>
        <li>
          <svg width="84" height="103">
            <use href={icons.hobbiesSvg} />
          </svg>
        </li>
        <li>
          <svg width="84" height="103">
            <use href={icons.educationSvg} />
          </svg>
        </li>
        <li>
          <svg width="84" height="103">
            <use href={icons.otherSvg} />
          </svg>
        </li>
      </ExpensesList>
    </ExpensesBox>
  );
}
