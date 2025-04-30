/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// components/Map.js
"use client"
import React, { useCallback, useState, useMemo } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px' // Adjust height as needed
};

// --- Your Address Locations with Coordinates ---
const locations = [
  {
    id: 'usa',
    name: 'Alie Services USA',
    address: '8 The Green #R, Dover Delaware, 12901, USA',
    position: { lat: 39.1582, lng: -75.5244 } // Replace with accurate coordinates
  },
  {
    id: 'canada',
    name: 'Alie Services Canada',
    address: '77 City Centre Drive, East Tower, Suite 501, Mississauga, Ontario, L5B1M5, Canada',
    position: { lat: 43.5920, lng: -79.6425 } // Replace with accurate coordinates
  }
];
// ---------------------------------------------

// --- Calculate Map Center (average of coordinates) ---
const calculateCenter = (locs:any) => {
  if (!locs || locs.length === 0) {
    return { lat: 41.850033, lng: -87.6500523 }; // Default center (e.g., Chicago)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const totalLat = locs.reduce((sum:any, loc:any) => sum + loc.position.lat, 0);
  const totalLng = locs.reduce((sum:any, loc:any) => sum + loc.position.lng, 0);
  return {
    lat: totalLat / locs.length,
    lng: totalLng / locs.length
  };
};
// ---------------------------------------------------

function Map() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    // libraries: ['places'] // Add libraries if needed (e.g., for Places Autocomplete)
  });

  const [map, setMap] = useState(null);

  // Use useMemo to prevent recalculating center on every render
  const center = useMemo(() => calculateCenter(locations), [locations]);

  const onLoad = useCallback(function callback(mapInstance:any) {
    // Optional: Adjust bounds to fit markers when map loads
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach(loc => bounds.extend(loc.position));
    mapInstance.fitBounds(bounds);

    // Optional: Add padding to bounds if markers are too close to edge
    // Example padding: increase zoom slightly after fitting bounds
    const listener = window.google.maps.event.addListener(mapInstance, 'idle', () => {
         if (mapInstance.getZoom() > 15) mapInstance.setZoom(15); // Max zoom level example
         window.google.maps.event.removeListener(listener);
    });


    setMap(mapInstance);
  }, [locations]); // Dependency array includes locations if they might change

  const onUnmount = useCallback(function callback(map:any) {
    setMap(null);
  }, []);

  if (loadError) {
    console.error("Google Maps loading error:", loadError);
    return <div>Error loading map. Please check the API key and configuration.</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center} // Use calculated or predefined center
      zoom={4} // Initial zoom (will be adjusted by fitBounds in onLoad)
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ // Optional: Customize map appearance/controls
        streetViewControl: false,
        mapTypeControl: false,
        // styles: mapStylesArray // You can add custom styles here (see Snazzy Maps)
      }}
    >
      {/* --- Add Markers for each location --- */}
      {locations.map((loc) => (
        <MarkerF
          key={loc.id}
          position={loc.position}
          title={loc.name + "\n" + loc.address} // Tooltip on hover
          // label={loc.name} // Optional: Add a visible label
          // icon={'/path/to/custom-marker.png'} // Optional: Custom marker icon
        />
      ))}
      {/* ----------------------------------- */}

      {/* Optional: Add InfoWindow for clicks (more complex) */}
    </GoogleMap>
  ) : (
    <div style={containerStyle} className="flex items-center justify-center bg-gray-200">
      <p className="text-gray-500">Loading Map...</p>
    </div>
  );
}

export default React.memo(Map); // Memoize for performance