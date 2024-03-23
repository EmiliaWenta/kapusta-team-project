import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import sprite from '../../svg/icons_sprite.svg';
import { Button } from '../buttons/Button';
import { TomatoButton } from 'components/buttons/TomatoButton';
import { DatePickerComponent } from '../DatePicker/DatePicker';
import { format } from 'date-fns';
import {
  ButtonsWrapper,
  InputAmount,
  InputAmountWrapper,
  InputForm,
  InputGroupWrapper,
  InputProduct,
  MainContainer,
  SelectAmountWrapper,
  SelectWrapper,
} from '../../styles/InputTransactionForm/inputTransactionForm.';
import {
  selectToken,
  selectTransactionType,
  selectUserId,
} from '../../redux/selectors';

import { CustomSelect } from '../InputTransactionForm/CustomSelect';
import { addTransaction } from '../../redux/operations';

export default function InputTransactionForm({ type }) {
  // const TRANSACTION_FORM_DATA = {
  //   expense: {
  //     description: 'Product description',
  //     selectCategoryPlaceholder: 'Product category',
  //   },
  //   income: {
  //     description: 'Income description',
  //     selectCategoryPlaceholder: 'Income category',
  //   },
  // };
  const dispatch = useDispatch();
  const today = new Date();

  const [date, setDate] = useState(today);
  const [category, setCategory] = useState(null);

  const [isActiveInput, setIsActiveInput] = useState(false);
  const [isActiveClear, setIsActiveClear] = useState(false);

  const transactionType = useSelector(selectTransactionType);
  const token = useSelector(selectToken);
  const userId = useSelector(selectUserId);

  const handleInputClick = () => {
    setIsActiveInput(true);
    setIsActiveClear(false);
  };

  const handleClearClick = () => {
    setIsActiveInput(false);
    setIsActiveClear(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const date = event.target.date.value;
    const dateObject = new Date(date.split('.').reverse().join('-'));
    const formattedDate = format(dateObject, 'yyyy-MM-dd');
    const amount = event.target.amount.value;
    const positiveAmount = Math.abs(amount);
    const data = {
      date: formattedDate,
      type: transactionType,
      description: event.target.product.value,
      category: category.value,
      amount: positiveAmount,
      user: userId,
    };
    const credentials = JSON.stringify(data);
    dispatch(addTransaction({ token, credentials }));
  };

  return (
    <MainContainer>
      <InputForm onSubmit={handleSubmit}>
        <DatePickerComponent
          name="date"
          date={date}
          maxDate={today}
          handler={date => setDate(date)}
        />
        <InputGroupWrapper>
          <InputProduct
            type="text"
            //  value={formData.product}
            name="product"
            placeholder="Product description"
            // onChange={e =>
            //   setFormData(oldData => {
            //     return { ...oldData, product: e.target.value };
            //   })
            //    }
          />

          <SelectAmountWrapper>
            <SelectWrapper>
              <CustomSelect
                keyName={type}
                name="category"
                value={category}
                placeholder="Product category"
                onChange={selectedOption => setCategory(selectedOption)}
              />
            </SelectWrapper>
            <InputAmountWrapper>
              <InputAmount
                type="number"
                placeholder="0,00"
                name="amount"
                min="00.00"
                max="10000000.00"
                step="0.1"
                required
              />
              <svg width="20" height="20">
                <use href={sprite + `#calculator`}></use>
              </svg>
            </InputAmountWrapper>
          </SelectAmountWrapper>
        </InputGroupWrapper>
        <ButtonsWrapper>
          {isActiveInput ? (
            <TomatoButton
              type="submit"
              text="INPUT"
              onClick={handleInputClick}
            />
          ) : (
            <Button type="submit" text="INPUT" onClick={handleInputClick} />
          )}
          {isActiveClear ? (
            <TomatoButton text="CLEAR" onClick={handleClearClick} />
          ) : (
            <Button text="CLEAR" onClick={handleClearClick} />
          )}
        </ButtonsWrapper>
      </InputForm>
    </MainContainer>
  );
}
