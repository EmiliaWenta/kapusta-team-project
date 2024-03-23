import React, { useState } from 'react';
import sprite from '../../svg/icons_sprite.svg';
import { Button } from '../buttons/Button';
import { TomatoButton } from 'components/buttons/TomatoButton';
import { DatePickerComponent } from '../DatePicker/DatePicker';
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

import { CustomSelect } from '../InputTransactionForm/CustomSelect';

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

  const today = new Date();
  const initialFormData = {
    product: '',
    sum: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [date, setDate] = useState(today);
  const [category, setCategory] = useState(null);

  const [isActiveInput, setIsActiveInput] = useState(false);
  const [isActiveClear, setIsActiveClear] = useState(false);

  const handleInputClick = () => {
    setIsActiveInput(true);
    setIsActiveClear(false);
  };

  const handleClearClick = () => {
    setIsActiveInput(false);
    setIsActiveClear(true);
  };

  return (
    <MainContainer>
      <InputForm>
        <DatePickerComponent
          name="date"
          date={date}
          maxDate={today}
          handler={date => setDate(date)}
        />
        <InputGroupWrapper>
          <InputProduct
            type="text"
            value={formData.product}
            name="product"
            placeholder="Product description"
            onChange={e =>
              setFormData(oldData => {
                return { ...oldData, product: e.target.value };
              })
            }
          />
          <SelectAmountWrapper>
            <SelectWrapper>
              <CustomSelect
                keyName={type}
                value={category}
                placeholder="Product category"
                onChange={selectedOption => setCategory(selectedOption)}
              />
            </SelectWrapper>
            <InputAmountWrapper>
              <InputAmount
                type="number"
                placeholder="0,00"
                value={formData.sum}
                name="product"
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
            <TomatoButton text="INPUT" onClick={handleInputClick} />
          ) : (
            <Button text="INPUT" onClick={handleInputClick} />
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
