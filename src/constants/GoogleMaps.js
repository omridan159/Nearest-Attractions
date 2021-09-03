const mapContainerStyle = {
   height: '50vh',
   width: '80vw',
   margin: 'auto',
};

const options = {
   disableDefaultUI: true,
   zoomControl: true,
};

const mapCenter = { lat: 31.2540165064844, lng: 34.7907892544368 };

const libraries = ['places'];

export { mapContainerStyle, options, mapCenter, libraries };
