import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: 'var(--border-radius)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
};

const center = {
    lat: -33.403, // Approximate Vitacura coords, user should calibrate
    lng: -70.596
};

// Custom map styles to match the site's professional aesthetic (Blue/Gray tones)
const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#444444" }]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{ "color": "#f2f2f2" }]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{ "saturation": -100 }, { "lightness": 45 }]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{ "visibility": "simplified" }]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{ "color": "#92c6df" }, { "visibility": "on" }]
        }
    ]
};

const MapComponent = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds(center);
        // map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    if (!import.meta.env.VITE_GOOGLE_MAPS_API_KEY) {
        return (
            <div style={{ ...containerStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f4f8', color: 'var(--color-text-light)', border: '1px dashed var(--color-border)', flexDirection: 'column', gap: '1rem', padding: '1rem', textAlign: 'center' }}>
                <strong>Mapa no configurado</strong>
                <p style={{ fontSize: '0.9rem' }}>Falta la API Key en el archivo .env (VITE_GOOGLE_MAPS_API_KEY)</p>
            </div>
        )
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={mapOptions}
        >
            <Marker position={center} title="Ortodoncia Rajevic" />
        </GoogleMap>
    ) : <div style={{ ...containerStyle, backgroundColor: '#f0f4f8', animation: 'pulse 1.5s infinite' }}></div>
}

export default React.memo(MapComponent);
