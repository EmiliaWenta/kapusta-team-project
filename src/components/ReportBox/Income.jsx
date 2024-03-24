import {
  selectToken,
  selectDetailedIncome,
  selectCurrentYear,
  selectCurrentMonth,
} from '../../redux/selectors';
import icons_sprite from '../../svg/icons_sprite.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDetailedCategory,
  getIncomeCategories,
} from '../../redux/operations';

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

export function Income({ changeComponentVisibility, setSelectedCategory }) {
  const incomeAmount = useSelector(selectDetailedIncome);
  const dispatch = useDispatch();
  const [incomeCategories, setIncomeCategories] = useState([]);
  const token = useSelector(selectToken);
  const storeCurrentYear = useSelector(selectCurrentYear);
  const storeCurrentMonth = useSelector(selectCurrentMonth);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await dispatch(getIncomeCategories(token));
        setIncomeCategories(response.payload);
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
      type: 'Income',
      category: category,
    };
    dispatch(getDetailedCategory({ token, credentials }));
  };

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
        <IncomeListItem onClick={() => handleCategoryClick('Salary')}>
          <IncomeListItemText>{incomeCategories[0]}</IncomeListItemText>
          <IncomeSvg width="56" height="56">
            <use href={icons.salarySvg}></use>
          </IncomeSvg>
          <IncomeListItemText>
            {incomeAmount.Salary > 0 ? incomeAmount.Salary : 0}
          </IncomeListItemText>
        </IncomeListItem>
        <IncomeListItem onClick={() => handleCategoryClick('Add.Income')}>
          <IncomeListItemText>{incomeCategories[1]}</IncomeListItemText>
          <IncomeSvg width="56" height="56">
            <use href={icons.incomeSvg}></use>
          </IncomeSvg>
          <IncomeListItemText>
            {incomeAmount['Add.Income'] > 0 ? incomeAmount['Add.Income'] : 0}
          </IncomeListItemText>
        </IncomeListItem>
      </IncomeList>
    </IncomeBox>
  );
}
