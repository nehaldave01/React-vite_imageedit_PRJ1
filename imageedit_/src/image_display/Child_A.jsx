import { useEffect, useState } from 'react'
import "../index.css"
import { RxCross1 } from "react-icons/rx";


const Child_A = ({setpage2}) => {

  const [showImage, setShowImage] = useState([])
  const [first, setfirst] = useState(false)


  const handleChange = (e) => {
    let a = URL.createObjectURL(e.target.files[0]);
    console.log(a)

    let arr = JSON.parse(localStorage.getItem("newArr")) || [];
    let newArr = arr.concat(a)
    localStorage.setItem("newArr",JSON.stringify(newArr))
    setfirst(!first)
    }

    const Click1 = (e) => {
      setpage2(e)
    }

    const deleteImg = (index) => {
      let arr = JSON.parse(localStorage.getItem("newArr")) || [];
      arr.splice(index,1)
      localStorage.setItem("newArr", JSON.stringify(arr))
      setShowImage(arr);
   }

 useEffect(() => {
  let arr = JSON.parse(localStorage.getItem("newArr")) || [];
  setShowImage(arr)
}, [first])

   
  return (

    <div>
      <input type="file" onChange={handleChange}/>
      <div className='container d-flex flex-wrap justify-content-around align-content-between'>
               {
                showImage.map((e,i) => {
                    return (
                         <div style={{position:"relative"}}>
                          <div className='img-parent'>
                            <img key={i} src={e} alt="" width={"200px"} height={"200px"} onClick={() => Click1(e)}/>
                            {/* <div className='overlay black'>
                            <span style={{cursor:"ponter", position:"absolute", top: 0, right: 6, color:"white", fontSize: '20px'}} onClick={deleteImg}>
                            {(!cross) ? <RxCross1/> : ''}
                            </span>
                            </div> */}
                          </div>
                          </div>
                          )
                })
               }
            </div>
    </div>
    
  )
}

export default Child_A