import React, { useState, useEffect, useMemo } from 'react';
import './NearestAttractions.css';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../../components/Table/Table';
import GoogleMaps from '../../components/GoogleMap/GoogleMap';
import { calculateDistance } from '../../utils/helpers';
import { fetchAttractions } from '../../store/actions/attractions';

const NearestAttractions = (props) => {
   const dispatch = useDispatch();

   const [nearestAttractions, setNearestAttractions] = useState(null);

   const userLocation = useMemo(() => {
      return { lat: props.location.state?.lat, lng: props.location.state?.lng };
   }, [props.location.state]);

   const { attractions, isDataLoading } = useSelector(
      (state) => state.attractionsSlice
   );

   useEffect(() => {
      dispatch(fetchAttractions());
   }, [dispatch]);

   useEffect(() => {
      if (!isDataLoading) {
         const mapAttractions = attractions.map((attractions) => {
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
      }
   }, [attractions, isDataLoading, userLocation.lat, userLocation.lng]);

   return (
      <>
         {isDataLoading ? (
            <span>Loading...</span>
         ) : (
            <div>
               <h1 className='header'>טבלת מיקומים קרובים</h1>
               <div className='box'>
                  <Table data={nearestAttractions || []} />
                  <h1 className='header'>מפת אטרקציות</h1>
                  <GoogleMaps data={attractions} />
               </div>
            </div>
         )}
      </>
   );
};

export default NearestAttractions;
