import React, { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker: React.FC<{ onDateChange: (date: Date | null) => void }> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  useEffect(() => {
    handleChange(new Date())
  }, [])
  
  return (
    <ReactDatePicker selected={selectedDate} onChange={handleChange} />
  );
};

export default DatePicker;
