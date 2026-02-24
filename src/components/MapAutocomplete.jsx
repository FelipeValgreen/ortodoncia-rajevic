"use client";
import React, { useEffect, useRef } from 'react';
import '@googlemaps/extended-component-library/api_loader.js';
import '@googlemaps/extended-component-library/place_picker.js';
import './MapAutocomplete.css';

const MapAutocomplete = () => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const placePickerRef = useRef(null);
    const apiLoaderRef = useRef(null);
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE";

    useEffect(() => {
        // React intercepts the 'key' prop, so we must set it manually on the custom element
        if (apiLoaderRef.current && API_KEY) {
            apiLoaderRef.current.setAttribute('key', API_KEY);
        }
    }, [API_KEY]);

    useEffect(() => {
        let cleanupFunc = null;

        const init = async () => {
            await customElements.whenDefined('gmp-map');

            const map = mapRef.current;
            const marker = markerRef.current;
            const placePicker = placePickerRef.current;

            // Wait for innerMap to be available
            if (!map || !map.innerMap) {
                setTimeout(init, 100);
                return;
            }

            const infowindow = new window.google.maps.InfoWindow();

            map.innerMap.setOptions({
                mapTypeControl: false
            });

            const handlePlaceChange = () => {
                const place = placePicker.value;

                if (!place || !place.location) {
                    window.alert(
                        "No se encontraron detalles para: '" + (place?.name || '') + "'"
                    );
                    infowindow.close();
                    if (marker) marker.position = null;
                    return;
                }

                if (place.viewport) {
                    map.innerMap.fitBounds(place.viewport);
                } else {
                    map.center = place.location;
                    map.zoom = 17;
                }

                marker.position = place.location;
                infowindow.setContent(
                    `<strong>${place.displayName}</strong><br>
           <span>${place.formattedAddress}</span>`
                );
                infowindow.open(map.innerMap, marker);
            };

            if (placePicker) {
                placePicker.addEventListener('gmpx-placechange', handlePlaceChange);
                cleanupFunc = () => {
                    placePicker.removeEventListener('gmpx-placechange', handlePlaceChange);
                };
            }
        };

        const checkMapsApi = setInterval(() => {
            if (window.google && window.google.maps) {
                clearInterval(checkMapsApi);
                init();
            }
        }, 100);

        return () => {
            clearInterval(checkMapsApi);
            if (cleanupFunc) cleanupFunc();
        };
    }, []);

    return (
        <div className="map-autocomplete-wrapper" style={{ height: '500px', width: '100%', position: 'relative' }}>
            <gmpx-api-loader ref={apiLoaderRef} solution-channel="GMP_GE_mapsandplacesautocomplete_v2"></gmpx-api-loader>
            <gmp-map ref={mapRef} center="-33.3936,-70.5628" zoom="13" map-id="DEMO_MAP_ID" style={{ height: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                <div slot="control-block-start-inline-start" className="place-picker-container">
                    <gmpx-place-picker ref={placePickerRef} placeholder="Busca una dirección o lugar"></gmpx-place-picker>
                </div>
                <gmp-advanced-marker ref={markerRef}></gmp-advanced-marker>
            </gmp-map>
        </div>
    );
};

export default MapAutocomplete;
