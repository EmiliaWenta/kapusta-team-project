import { selectToken } from '../../redux/selectors';
import icons_sprite from '../../svg/icons_sprite.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIncomeCategories,
  getDetailedCategory,
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

export function Income({ changeComponentVisibility }) {
  const dispatch = useDispatch();
  const [incomeCategories, setIncomeCategories] = useState([]);
  const [incomeCategoriesData, setIncomeCategoriesData] = useState({});
  const token = useSelector(selectToken);

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

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const categoryData = {};
        for (const category of Object.values(incomeCategories)) {
          try {
            const response = await dispatch(
              getDetailedCategory({
                token,
                credentials: { type: 'Income', category },
              })
            );
            categoryData[category] = response.payload;
          } catch (error) {
            if (error.response && error.response.status === 404) {
              categoryData[category] = { report: [{ amount: 0 }] };
            } else {
              throw error;
            }
          }
        }
        setIncomeCategoriesData(categoryData);
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    if (incomeCategories.length > 0 && token) {
      fetchCategoryData();
    }
  }, [dispatch, incomeCategories, token]);

  const incomeCategoryAmounts = {};

  for (const category in incomeCategoriesData) {
    const report = incomeCategoriesData[category]?.report;
    const amount = report ? report[0]?.amount : 0;
    incomeCategoryAmounts[category] = amount || 0;
  }

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
          <IncomeListItemText>{incomeCategories[0]}</IncomeListItemText>
          <IncomeSvg width="56" height="56">
            <use href={icons.salarySvg}></use>
          </IncomeSvg>
          <IncomeListItemText>
            {incomeCategoryAmounts.Salary}
          </IncomeListItemText>
        </IncomeListItem>
        <IncomeListItem>
          <IncomeListItemText>{incomeCategories[1]}</IncomeListItemText>
          <IncomeSvg width="56" height="56">
            <use href={icons.incomeSvg}></use>
          </IncomeSvg>
          <IncomeListItemText>
            {incomeCategoryAmounts['Add.Income']}
          </IncomeListItemText>
        </IncomeListItem>
      </IncomeList>
    </IncomeBox>
  );
}
