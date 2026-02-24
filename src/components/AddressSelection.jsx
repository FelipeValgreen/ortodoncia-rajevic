"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import '@googlemaps/extended-component-library/api_loader.js';
import '@googlemaps/extended-component-library/split_layout.js';
import '@googlemaps/extended-component-library/icon_button.js';
import './AddressSelection.css';

const CONFIGURATION = {
    "ctaTitle": "Ir",
    "mapOptions": {
        "center": { "lat": -33.3936, "lng": -70.5628 }, // Centered around clinic general area initially
        "fullscreenControl": true,
        "mapTypeControl": false,
        "streetViewControl": true,
        "zoom": 13,
        "zoomControl": true,
        "maxZoom": 22,
        "mapId": "DEMO_MAP_ID"
    },
    "capabilities": {
        "addressAutocompleteControl": true,
        "mapDisplayControl": true,
        "ctaControl": true
    }
};

const SHORT_NAME_ADDRESS_COMPONENT_TYPES = new Set(['street_number', 'administrative_area_level_1', 'postal_code']);
const ADDRESS_COMPONENT_TYPES_IN_FORM = ['location', 'locality', 'administrative_area_level_1', 'postal_code', 'country'];

const AddressSelection = () => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const locationInputRef = useRef(null);
    const apiLoaderRef = useRef(null);

    // Create refs for the other inputs
    const localityInputRef = useRef(null);
    const adminAreaInputRef = useRef(null);
    const postalCodeInputRef = useRef(null);
    const countryInputRef = useRef(null);

    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE";

    useEffect(() => {
        if (apiLoaderRef.current && API_KEY) {
            apiLoaderRef.current.setAttribute('key', API_KEY);
        }
    }, [API_KEY]);

    useEffect(() => {
        let isMounted = true;
        let autocompleteInstance = null;
        let placeChangedListener = null;

        const getFormInputElement = (componentType) => {
            switch (componentType) {
                case 'location': return locationInputRef.current;
                case 'locality': return localityInputRef.current;
                case 'administrative_area_level_1': return adminAreaInputRef.current;
                case 'postal_code': return postalCodeInputRef.current;
                case 'country': return countryInputRef.current;
                default: return null;
            }
        };

        const fillInAddress = (place) => {
            const getComponentName = (componentType) => {
                for (const component of place.address_components || []) {
                    if (component.types[0] === componentType) {
                        return SHORT_NAME_ADDRESS_COMPONENT_TYPES.has(componentType) ?
                            component.short_name :
                            component.long_name;
                    }
                }
                return '';
            };

            const getComponentText = (componentType) => {
                if (componentType === 'location') {
                    const streetNumber = getComponentName('street_number');
                    const route = getComponentName('route');
                    return [streetNumber, route].filter(Boolean).join(' ');
                }
                return getComponentName(componentType);
            };

            for (const componentType of ADDRESS_COMPONENT_TYPES_IN_FORM) {
                const el = getFormInputElement(componentType);
                if (el) el.value = getComponentText(componentType);
            }
        };

        const renderAddress = (place) => {
            const mapEl = mapRef.current;
            const markerEl = markerRef.current;

            if (!mapEl || !markerEl) return;

            if (place.geometry && place.geometry.location) {
                if (mapEl.innerMap) {
                    mapEl.innerMap.setCenter(place.geometry.location);
                    mapEl.innerMap.setZoom(17);
                } else {
                    mapEl.center = place.geometry.location;
                }
                markerEl.position = place.geometry.location;
            } else {
                markerEl.position = null;
            }
        };

        const initMap = async () => {
            if (!window.google || !window.google.maps || !window.google.maps.places) {
                return; // Wait for API loader to do its job
            }

            await customElements.whenDefined('gmp-map');
            if (!isMounted) return;

            const mapEl = mapRef.current;
            const mapOptions = { ...CONFIGURATION.mapOptions };

            if (mapEl && mapEl.innerMap) {
                mapEl.innerMap.setOptions(mapOptions);
            } else if (mapEl) {
                mapEl.center = mapOptions.center;
                mapEl.zoom = mapOptions.zoom;
            }

            if (locationInputRef.current && !autocompleteInstance) {
                autocompleteInstance = new window.google.maps.places.Autocomplete(locationInputRef.current, {
                    fields: ['address_components', 'geometry', 'name'],
                    types: ['address'],
                });

                placeChangedListener = autocompleteInstance.addListener('place_changed', () => {
                    const place = autocompleteInstance.getPlace();
                    if (!place || !place.geometry) {
                        window.alert(`No details available for input: '${place?.name || ''}'`);
                        return;
                    }
                    renderAddress(place);
                    fillInAddress(place);
                });
            }
        };

        const checkApi = setInterval(() => {
            if (window.google && window.google.maps && window.google.maps.places) {
                clearInterval(checkApi);
                initMap();
            }
        }, 100);

        return () => {
            isMounted = false;
            clearInterval(checkApi);
            if (placeChangedListener && window.google) {
                window.google.maps.event.removeListener(placeChangedListener);
            }
        };
    }, []);

    return (
        <div className="address-selection-wrapper">
            <gmpx-api-loader
                ref={apiLoaderRef}
                solution-channel="GMP_QB_addressselection_v4_cABC"
            ></gmpx-api-loader>

            <gmpx-split-layout row-layout-min-width="600" style={{ height: '600px', width: '100%' }}>
                <div className="panel" slot="fixed">
                    <div>
                        <img className="sb-title-icon" src="https://fonts.gstatic.com/s/i/googlematerialicons/location_pin/v5/24px.svg" alt="" />
                        <span className="sb-title">Ubicación y Dirección</span>
                    </div>

                    <input type="text" placeholder="Dirección" ref={locationInputRef} />
                    <input type="text" placeholder="Depto, Suite, etc (opcional)" />
                    <input type="text" placeholder="Ciudad / Comuna" ref={localityInputRef} />

                    <div className="half-input-container">
                        <input type="text" className="half-input" placeholder="Estado/Provincia" ref={adminAreaInputRef} />
                        <input type="text" className="half-input" placeholder="Código Postal" ref={postalCodeInputRef} />
                    </div>

                    <input type="text" placeholder="País" ref={countryInputRef} />

                    <gmpx-icon-button variant="filled" style={{ '--gmpx-color-primary': 'var(--color-primary)' }}>
                        Confirmar Ubicación
                    </gmpx-icon-button>
                </div>

                <gmp-map slot="main" ref={mapRef}>
                    <gmp-advanced-marker ref={markerRef}></gmp-advanced-marker>
                </gmp-map>
            </gmpx-split-layout>
        </div>
    );
};

export default AddressSelection;
