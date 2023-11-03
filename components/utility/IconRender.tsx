import { Home, Target, ArrowRightLeft, Network, Layers, Landmark, HelpCircle, Settings, Users } from 'lucide-react'
import React from 'react'

interface PropsType {
  iconName: string,
  size: number
}

const IconRender = ({ iconName, size }: PropsType) => {

  if (iconName === 'Home') return <Home size={size} />
  else if (iconName === 'Target') return <Target size={size} />
  else if (iconName === 'ArrowRightLeft') return <ArrowRightLeft size={size} />
  else if (iconName === 'Users') return <Users size={size} />
  else if (iconName === 'Network') return <Network size={size} />
  else if (iconName === 'Layers') return <Layers size={size} />
  else if (iconName === 'Landmark') return <Landmark size={size} />
  else if (iconName === 'HelpCircle') return <HelpCircle size={size} />
  return <Settings size={size} />
}

export default IconRender
