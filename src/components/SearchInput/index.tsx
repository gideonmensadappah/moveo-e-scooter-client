import { Input } from "@material-ui/core";
import React, { FC } from "react";

type Props = {
  searchKey?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<Props> = ({ handleChange, searchKey }) => {
  return <Input type='text' onChange={handleChange} placeholder={searchKey} />;
};

export default SearchInput;
