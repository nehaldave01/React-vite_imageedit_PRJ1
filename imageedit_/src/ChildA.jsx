import React, { useEffect, useState } from 'react'
import './index.css'
import { RxCross1 } from "react-icons/rx";

const ChildA = () => {
    const [showImage, setshowImage] = useState([])
    const [first, setfirst] = useState(false)
    const [cross, setCross] = useState(false)

    const handleChange = (e) => {
        let a = URL.createObjectURL(e.target.files[0]);
        console.log(a)
        let arr = JSON.parse(localStorage.getItem("newArr")) || []
        let newArr = arr.concat(a)
        localStorage.setItem("newArr", JSON.stringify(newArr))
        setfirst(!first)
    }
    useEffect(() => {
        let arr = JSON.parse(localStorage.getItem("newArr")) || []
        setshowImage(arr)
    }, [first])
    

    const deleteImg = (index) => {
       let arr = JSON.parse(localStorage.getItem("newArr")) || [];
       arr.splice(index,1)
       localStorage.setItem("newArr", JSON.stringify(arr))
       setshowImage(arr);
    }

  return (
    <>
      <input type="file" onChange={handleChange}/>
      <div className='container d-flex flex-wrap justify-content-around align-content-between'>
               {
                showImage.map((e,i) => {
                    return (
                        <div style={{position:"relative"}}>
                            <div className='img-parent'>
                            <img key={i} src={e} alt="" width={"200px"} height={"200px"}/>
                            <div className='overlay black'>
                            <span style={{cursor:"ponter", position:"absolute", top: 0, right: 6, color:"white", fontSize: '20px'}} onClick={deleteImg}>
                            {(!cross) ? <RxCross1/> : ''}
                            </span>
                            </div>
                            </div>
                            
                        </div>
                    )
                })
            }
            </div>
    </>
  )
}

export default ChildA