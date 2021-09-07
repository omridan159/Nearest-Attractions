// eslint-disable-next-line
Number.prototype.toRad = function () {
   return (this * Math.PI) / 180;
};

function calculateDistance(lat1, lon1, lat2, lon2) {
   var R = 6371;
   var x1 = lat2 - lat1;
   var dLat = x1.toRad();
   var x2 = lon2 - lon1;
   var dLon = x2.toRad();
   var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1.toRad()) *
         Math.cos(lat2.toRad()) *
         Math.sin(dLon / 2) *
         Math.sin(dLon / 2);
   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
   var d = R * c;

   return d;
}

function filterAttractionsByType(attractionType, data) {

   if (attractionType === 'הכל') {
      return data;
   }

   return data.filter((attraction) => {
      return attraction.Attraction_Type === attractionType;
   });

}

export { calculateDistance, filterAttractionsByType };
