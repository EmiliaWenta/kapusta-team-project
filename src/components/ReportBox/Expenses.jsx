import {
  selectToken,
  selectDetailedExpenses,
  selectCurrentYear,
  selectCurrentMonth,
} from '../../redux/selectors';
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
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDetailedCategory,
  getExpensesCategories,
} from '../../redux/operations';

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

export function Expenses({ changeComponentVisibility, setSelectedCategory }) {
  const expensesAmount = useSelector(selectDetailedExpenses);
  const dispatch = useDispatch();
  const [expenseCategories, setExpenseCategories] = useState([]);
  const token = useSelector(selectToken);
  const storeCurrentYear = useSelector(selectCurrentYear);
  const storeCurrentMonth = useSelector(selectCurrentMonth);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await dispatch(getExpensesCategories(token));
        setExpenseCategories(response.payload);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [dispatch, token]);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
    const credentials = {
      year: storeCurrentYear,
      month: storeCurrentMonth,
      type: 'Expenses',
      category: category,
    };
    dispatch(getDetailedCategory({ token, credentials }));
  };

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
        <ExpensesListItem onClick={() => handleCategoryClick('Products')}>
          <ExpensesListItemText>
            {expensesAmount.Products > 0 ? expensesAmount.Products : 0}
          </ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.productsSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[2]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem onClick={() => handleCategoryClick('Alcohol')}>
          <ExpensesListItemText>
            {expensesAmount.Alcohol > 0 ? expensesAmount.Alcohol : 0}
          </ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.alcoholSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[4]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem onClick={() => handleCategoryClick('Entertainment')}>
          <ExpensesListItemText>
            {expensesAmount.Entertainment > 0
              ? expensesAmount.Entertainment
              : 0}
          </ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.entertainmentSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[5]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesDivider />
        <ExpensesListItem onClick={() => handleCategoryClick('Health')}>
          <ExpensesListItemText>
            {expensesAmount.Health > 0 ? expensesAmount.Health : 0}
          </ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.healthSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[3]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem onClick={() => handleCategoryClick('Transport')}>
          <ExpensesListItemText>
            {expensesAmount.Transport > 0 ? expensesAmount.Transport : 0}
          </ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.transportSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[0]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem onClick={() => handleCategoryClick('Housing')}>
          <ExpensesListItemText>
            {expensesAmount.Housing > 0 ? expensesAmount.Housing : 0}
          </ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.housingSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[1]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesDivider />
        <ExpensesListItem onClick={() => handleCategoryClick('Technique')}>
          <ExpensesListItemText>
            {expensesAmount.Technique > 0 ? expensesAmount.Technique : 0}
          </ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.techniqueSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[6]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem
          onClick={() => handleCategoryClick('Communal, communication')}
        >
          <ExpensesListItemText>
            {expensesAmount['Communal, communication'] > 0
              ? expensesAmount['Communal, communication']
              : 0}
          </ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.communalSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[7]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem
          onClick={() => handleCategoryClick('Sports, hobbies')}
        >
          <ExpensesListItemText>
            {expensesAmount['Sports, hobbies'] > 0
              ? expensesAmount['Sports, hobbies']
              : 0}
          </ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.hobbiesSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[8]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesDivider />
        <ExpensesListItem onClick={() => handleCategoryClick('Education')}>
          <ExpensesListItemText>
            {expensesAmount.Education > 0 ? expensesAmount.Education : 0}
          </ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.educationSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[9]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem onClick={() => handleCategoryClick('Other')}>
          <ExpensesListItemText>
            {expensesAmount.Other > 0 ? expensesAmount.Other : 0}
          </ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.otherSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[10]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesDivider />
      </ExpensesList>
    </ExpensesBox>
  );
}
