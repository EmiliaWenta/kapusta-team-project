import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { enUS } from 'date-fns/locale';
import { Label, Wrapper } from '../../styles/datePicker';
import sprite from '../../svg/icons_sprite.svg';

export function DatePickerComponent({ date, maxDate, handler }) {
  const now = new Date();
  return (
    <>
      <Label>
        <svg width="20" height="20">
          <use href={sprite + `#calendar`} />
        </svg>
        <Wrapper>
          <ReactDatePicker
            className="date"
            name="date"
            dateFormat="dd.MM.yyyy"
            selected={date || now}
            maxDate={maxDate}
            onChange={handler}
            shouldCloseOnSelect={true}
            locale={enUS}
          />
        </Wrapper>
      </Label>
    </>
  );
}
