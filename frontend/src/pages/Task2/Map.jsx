import React, { useState } from 'react';
import './mapbox.scss';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import icons from '../../assets/marker.png';
const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 26.449432670637346,
    longitude: 87.27721567619342,
    zoom: 8,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [showPopup, setShowPopup] = useState(false);
  const maptoken = process.env.MAP_TOKEN;
  return (
    <div>
      <ReactMapGL
        mapboxApiAccessToken={maptoken}
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}>
        {showPopup && (
          <Popup
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            closeButton={true}
            onClose={() => setShowPopup(false)}
            anchor='top-right'>
            <div>Popup up marker</div>
          </Popup>
        )}
        <Marker
          latitude={viewport.latitude}
          longitude={viewport.longitude}
          offsetLeft={-20}
          offsetTop={-30}>
          <img
            onClick={() => setShowPopup(true)}
            src={icons}
            alt='marker'
            style={{ height: 50, width: 50 }}
          />
          We are here
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
