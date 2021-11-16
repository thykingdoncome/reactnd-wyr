import React from "react";

import { FormControl, Select } from "@chakra-ui/react";

export const CustomDropDown = ({
  placeholder,
  handleOption,
  value,
  options,
  label,
  width,
  required,
}) => {
  return (
    <FormControl
      isRequired={required}
      width={width}
      borderStyle='solid'
      borderWidth={1}
      borderRadius={5}
      paddingY={2}
      paddingX={4}
    >
      <Select
        placeholder={placeholder}
        _placeholder={{ color: "#ddd", fontWeight: 400 }}
        border='none'
        _hover=''
        _focus=''
        fontWeight={500}
        fontSize={18}
        size='sm'
        padding={0}
        value={value}
        onChange={e => handleOption(e.target.value)}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option.id}>
              {option.name}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};
