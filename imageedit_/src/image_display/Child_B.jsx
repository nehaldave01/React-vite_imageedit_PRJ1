import React, { useState } from 'react'
import { ImCross } from "react-icons/im";
import Parent2 from './Parent2';

const Child_B = ({page2}) => {
 const [change, setChange] = useState(true)
   
 const click3 = () => {
    setChange(!change)
 }

  return (
    <div>
      {change
         ?
       <div className='container'>
          <div className=' d-flex mx-auto justify-content-center align-content-center m-5'>
            <img src={page2} alt="" width={"600px"} height={"600px"}/>
            <div style={{cursor:"pointer"}}>
              <span className='m-3' onClick={click3}><ImCross/></span>
            </div>
          </div>
       </div>
       : 
       <Parent2/>
       }
    </div>
  )
}

export default Child_B