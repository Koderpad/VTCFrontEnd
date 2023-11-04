import DatePicker from "react-datepicker";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
function DatePickerAsSingle({ labelText, labelFor, _setStartDate }) {
  const [startDate, setStartDate] = useState(_setStartDate);

  return (
    <div className="tw-block tw-w-full tw-mb-4">
      <label className="tw-block tw-text-gray-700 tw-mb-2" htmlFor={labelFor}>
        {labelText}
      </label>
      <div className="tw-w-full">
        <DatePicker
          className="tw-w-full tw-bg-gray-200 tw-border tw-border-gray-200 tw-rounded tw-py-2 tw-px-4 tw-text-gray-700 tw-leading-tight focus:tw-bg-white focus:tw-border-gray-500 focus:tw-outline-none"
          showIcon
          id={labelFor}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  );
}

export default DatePickerAsSingle;
