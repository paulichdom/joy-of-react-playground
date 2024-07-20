import React from 'react'
import Toggle from './Toggle';
import { useToggle } from '../../hooks/use-toggle';

const CustomisedToggle: React.FC = () => {
  const [value, toggleValue] = useToggle();
  return (
    <Toggle label='Enable Wi-Fi' checked={value} handleToggle={toggleValue}/>
  )
}

export default CustomisedToggle
