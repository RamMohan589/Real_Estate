import React from 'react'
import './Map.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import Pin from '../6_Pin/Pin';


const Map = ({items}) => {
  return (
     <MapContainer center={[40.7128, -74.0060]} zoom={12} scrollWheelZoom={false} className='map'>
    {/* <MapContainer center={[items[0]?.latitude || 51.505, items[0]?.longitude || -0.09]} zoom={7}> */}
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* we can use this marker section in pin component seperately to render the different different locations  
    <Marker position={[40.7128, -74.0060]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}
    {
        items.map((item)=>{
            return <Pin item={item} key={item.id}/>
        })
    }
  </MapContainer>
  )
}

export default Map
