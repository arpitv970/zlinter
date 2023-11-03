import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const AvtarIcon = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/arpitv970.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>

  )
}

export default AvtarIcon
