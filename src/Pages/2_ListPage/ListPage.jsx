import React from 'react';
import { listData } from '../../Data/dummyData';
import './ListPage.scss';  
import Filter from '../../Components/3_Filter/Filter';
import Card from '../../Components/4_Card/Card';
import Map from '../../Components/5_Map/Map';

const ListPage = () => {
  const data = listData;

  return (
    <div className='listPage' >
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {
            data.map((item)=>{
              return <Card key={item.id} item = {item}/>
            })
          }
        </div>
      </div>
      <div className="mapContainer">
        <Map items = {data}/>
      </div>
    </div>
  )
}

export default ListPage
