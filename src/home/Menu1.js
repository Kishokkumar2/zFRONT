import React from 'react'
import Menu from '../Menu/Menu'
import Fooddisplay from '../COMPONENTS/Fooddisplay'
import { useState } from 'react'


const Menu1 = () => {
    const [category, setCategory] = useState("All")
    return (
    
        < div >
        <Menu  category={category} setCategory={setCategory}/>
      <Fooddisplay  category={category}/>
    
    </div >
  )
}

export default Menu1