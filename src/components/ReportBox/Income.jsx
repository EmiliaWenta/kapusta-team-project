import { selectToken } from '../../redux/selectors';
import icons_sprite from '../../svg/icons_sprite.svg';
import expenses from 'expenses.json';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIncomeCategories } from '../../redux/operations';

import axios from 'axios';

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
  const token = useSelector(selectToken);
  const [incomeCategories, setIncomeCategories] = useState([]);
  const dispatch = useDispatch();
  const handleIconClick = async categoryName => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://kapusta-team-project-backend.onrender.com/api/report/detailed/category?type=Income&category=${categoryName}`,
        config
      );
      console.log(categoryName);
      console.log(response.data);
    } catch (error) {
      console.error('Błąd podczas pobierania nazwy kategorii:', error);
    }
  };

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
          <IncomeSvg
            width="56"
            height="56"
            onClick={() => handleIconClick('salary')}
          >
            <use href={icons.salarySvg}></use>
          </IncomeSvg>
          <IncomeListItemText>{expenses.salary}</IncomeListItemText>
        </IncomeListItem>
        <IncomeListItem>
          <IncomeListItemText>{incomeCategories[1]}</IncomeListItemText>
          <IncomeSvg
            width="56"
            height="56"
            onClick={() => handleIconClick('add.income')}
          >
            <use href={icons.incomeSvg}></use>
          </IncomeSvg>
          <IncomeListItemText>{expenses.addIncome}</IncomeListItemText>
        </IncomeListItem>
      </IncomeList>
    </IncomeBox>
  );
}
