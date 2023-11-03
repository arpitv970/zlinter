import React, { HTMLInputTypeAttribute } from 'react'
import { Input } from "@/components/ui/input"

interface PropsType {
  inputType: HTMLInputTypeAttribute
}

const SearchBar = ({ inputType }: PropsType) => {
  return (
    <Input type={inputType} placeholder='Search' />
  )
}

export default SearchBar
