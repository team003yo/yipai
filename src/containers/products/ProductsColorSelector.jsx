import { CirclePicker } from 'react-color'
import  { useState } from 'react'
import React from 'react'

function ProductsColorSelector(){
const [color, setColor] = useState('#f44336');
const [visible, setVisible] = useState(false);


return (
<>
           <div style={{ position: 'relative', display: 'inline-block', margin: 60 }}>
              <CirclePicker
               style={{ position: 'absolute' }}
               color={color}
               visible={visible}
               onChange={({ color }) => setColor(color)}
               />
            </div>

         </>
        )
    }
    
export default ProductsColorSelector;