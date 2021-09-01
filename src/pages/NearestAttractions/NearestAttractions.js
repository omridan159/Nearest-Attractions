import React, { useState, useEffect, useMemo } from 'react';
import './NearestAttractions.css';
import { useSelector } from 'react-redux';
import Table from '../../components/Table/Table';
import GoogleMaps from '../../components/GoogleMap/GoogleMap';
import { calculateDistance } from '../../utils/helpers';

const NearestAttractions = (props) => {
   const [nearestAttractions, setNearestAttractions] = useState(null);

   const userLocation = useMemo(() => {
      return { lat: props.location.state.lat, lng: props.location.state.lng };
   }, [props.location.state]);

   const data = useSelector((state) => state.attractionsData.data);

   useEffect(() => {
      const mapAttractions = data.map((attractions) => {
         return {
            ...attractions,
            Distance: calculateDistance(
               userLocation.lat,
               userLocation.lng,
               attractions.Y,
               attractions.X
            ).toFixed(0),
         };
      });

      setNearestAttractions(mapAttractions);
   }, [data, userLocation]);

   return (
      <div>
         <h1 className='header'>טבלת מיקומים קרובים</h1>
         <div className='box'>
            <Table data={nearestAttractions || []} />
            <h1 className='header'>מפת אטרקציות</h1>
            <GoogleMaps data={data} />
         </div>
      </div>
   );
};

export default NearestAttractions;
