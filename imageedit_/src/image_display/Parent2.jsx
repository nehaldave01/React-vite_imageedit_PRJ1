import { useState } from 'react'
import Child_A from './Child_A'
import Child_B from './Child_B'

const Parent2 = () => {
  const [page2, setpage2] = useState("")



  return (
    <div>
      {!page2 ?  
      <Child_A
      setpage2={setpage2}
      />
      :
      <Child_B
        page2={page2}
      />
      }
    </div>
  )
}

export default Parent2