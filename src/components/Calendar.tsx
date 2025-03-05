import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarComponentProps {
  value: Date;
  onChange: (date: Date) => void;
}

const CalendarComponent: React.FC<CalendarComponentProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (val: any) => {
    if (val instanceof Date) {
      onChange(val);
    }
  };

  return (
    <Calendar
      value={value}
      onChange={handleChange}
      minDate={new Date()}
      className="rounded-lg border border-gray-200"
    />
  );
};

export default CalendarComponent;
