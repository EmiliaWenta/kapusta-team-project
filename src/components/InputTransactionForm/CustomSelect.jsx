import { CustomSelectStyled } from '../../styles/InputTransactionForm/customSelect';
import categories from './categories.json';

export const CustomSelect = ({
  keyName,

  placeholder,
  isLoading,
  onChange,
  value,
}) => {
  return (
    <CustomSelectStyled
      classNamePrefix="react-select"
      key={keyName}
      defaultOptions
      placeholder={placeholder}
      options={categories}
      isLoading={isLoading}
      closeMenuOnSelect={true}
      onChange={onChange}
      defaultValue={value}
    />
  );
};
