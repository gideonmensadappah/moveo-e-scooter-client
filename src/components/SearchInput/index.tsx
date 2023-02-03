import React, { FC } from "react";

type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<Props> = ({ handleChange }) => {
  return <input type='text' onChange={handleChange} />;
};

export default SearchInput;
