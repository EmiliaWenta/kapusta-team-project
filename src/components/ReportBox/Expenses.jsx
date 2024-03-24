import { selectCategoryData, selectToken } from '../../redux/selectors';
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
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getExpensesCategories,
  getDetailedCategory,
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

export function Expenses({ changeComponentVisibility }) {
  const dispatch = useDispatch();
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [expensesCategoriesData, setExpenseCategoriesData] = useState({});
  const token = useSelector(selectToken);

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

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const categoryData = {};
        for (const category of Object.values(expenseCategories)) {
          const response = await dispatch(
            getDetailedCategory({
              token,
              credentials: { type: 'Expenses', category },
            })
          );
          categoryData[category] = response.payload;
        }
        setExpenseCategoriesData(categoryData);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchCategoryData();
  }, [dispatch, expenseCategories, token, expensesCategoriesData]);

  const categoryData = useSelector(selectCategoryData);
  const catData = categoryData?.Alcohol?.report[0]?.amount || 0;
  console.log(categoryData);

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
          <ExpensesListItemText>{expenseCategories[2]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{catData}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.alcoholSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[4]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.entertainment}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.entertainmentSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[5]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesDivider />
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.health}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.healthSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[3]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.transport}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.transportSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[0]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.housing}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.housingSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[1]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesDivider />
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.technique}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.techniqueSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[6]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.communal}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.communalSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[7]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.hobbies}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.hobbiesSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[8]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesDivider />
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.education}</ExpensesListItemText>
          <ExpensesSvg width="56" height="56">
            <use href={icons.educationSvg} />
          </ExpensesSvg>
          <ExpensesListItemText>{expenseCategories[9]}</ExpensesListItemText>
        </ExpensesListItem>
        <ExpensesListItem>
          <ExpensesListItemText>{expenses.other}</ExpensesListItemText>
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
