import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'

export default function Home() {

  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    setFoodItem(response[0]);
    console.log(response);
    setFoodItem(response[0]);
  }

  useEffect(() => {
    loadData()
  }, [])




  return (
    <div>
      <div><Navbar /></div>
      <div><Carousal /></div>
     <div className='container'>
      {
 foodItem!==[]
?foodItem.map((data)=>{
  return(
    
    
    <Card category={data.CategoryName}
    name={data.name}
    description={data.description}
    imgSrc={data.img}
    value={data.options}/>
    
  )
}):" "
      }
       
        
      </div>
      <div><Footer /></div>
    </div>
  )
}
