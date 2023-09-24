import React,{useState} from 'react';
import "./Resturant.css";
import Menu from "./menuApi.js";
import MenuCard from '../MenuCard';
import Navbar from './Navbar';


///ARRAY added in state variable to run loop
const uniquelist=[
  ...new Set(Menu.map((currelem)=>{
             return currelem.category;
})
),
"All",
//for all button in navbar
];


const Resturant = () => { 
  //state variable
  const [menuData,setMenuData]=useState(Menu);

  const [menuList,setMenuList]=useState(uniquelist);   //for navbar



  const filterItem=(category)=>{
    if(category==="All"){
      setMenuData(Menu);
      return;
    }
       const updatedlist=Menu.filter((currelem)=>{
        return currelem.category===category;
       });
       setMenuData(updatedlist);
  };
  return (
    <> 
     <Navbar filterItem={filterItem} menuList={menuList}/>
     <MenuCard menuData={menuData}/> 
    </>
  )
}

export default Resturant
