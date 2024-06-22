import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: black;
  font-size: 16px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

interface DropdownProps {
  label: string;
  onChange: (value: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <Container>
      <Label>{label}:</Label>
      <Select onChange={handleChange} defaultValue={5}>
        {[...Array(10).keys()].map(num => {
          const number = num + 1;
          return (
            <option key={number} value={number}>
              {number}
            </option>
          )
        })}
      </Select>
    </Container>
  );
};

export default Dropdown;
