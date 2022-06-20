import React, { useEffect, useMemo, useState } from "react";
import Item from "./Item";

function DiscvoverBar() {
    var categoryList=[
        {name:"Evgeny Grinko", category:"Müzik"},
        {name:"Leonarda Cohen", category:"Müzik"},
        {name:"Hamlet", category:"Sahne"},
        {name:"Cimri", category:"Sahne"},
        {name:"NotreDame", category:"Sahne"},
        {name:"Efes Basketbol Maçı", category:"Spor"},
        {name:"Tenis", category:"Spor"},
        {name:"Coffea Festivali", category:"Eğitim ve Daha Fazlası"},
        {name:"TEDX", category:"Eğitim ve Daha Fazlası"}
    ]
 const [activityList, setActivityList]=useState([]);
 const [selectedCategory, setSelectedCategory]=useState();

 useEffect(()=>{
    setActivityList(categoryList);
 },[]);

function getFilteredList(){
    if(!selectedCategory){
        return activityList;
    }
    return activityList.filter((item)=>item.category===selectedCategory)
};
 var filteredList=useMemo(getFilteredList,[selectedCategory,activityList]);

 function handleCategoryChange(event){
    setSelectedCategory(event.target.value);
 };

  return (
    <div className="discover-bar">
      <div className="mainheader_discover">
        <div className="filter-container">
          <span>Keşfet</span>
          <div>
            <select name="category-list" className="category-list" onChange={handleCategoryChange}>
                <option value="">Tümü</option>
                <option value="Müzik">Müzik</option>
                <option value="Sahne">Sahne</option>
                <option value="Spor">Spor</option>
                <option value="Eğlence ve Daha Fazlası">Eğitim ve Daha Fazlası</option>
            </select>
          </div>
        </div>
        <div className="activitiy-list">
            {filteredList.map((element,index)=>(
                <Item {...element} key={index} />
            ))}

        </div>
        <div>
          <span>Tarih</span>
          <input type="text" placeholder="Search.." />
        </div>
        <div>
          <span>Lokasyon</span>
          <input type="text" placeholder="Search.." />
        </div>
      </div>
    </div>
  );
}
export default DiscvoverBar;
