"use client";
import React, { useEffect, useRef } from 'react';
import '@googlemaps/extended-component-library/api_loader.js';
import '@googlemaps/extended-component-library/store_locator.js';
import './StoreLocator.css';

const CONFIGURATION = {
    "locations": [
        {
            "title": "Ortodoncia Rajevic",
            "address1": "Las Hualtatas 8999",
            "address2": "Vitacura, Región Metropolitana, Chile",
            "coords": { "lat": -33.3860974, "lng": -70.5489258 },
            "placeId": "ChIJT-5-tSTJYpYRoq1YwFCV0sk"
        }
    ],
    "mapOptions": {
        "center": { "lat": -33.3860974, "lng": -70.5489258 }, // Centered on the clinic
        "fullscreenControl": true,
        "mapTypeControl": false,
        "streetViewControl": false,
        "zoom": 13,
        "zoomControl": true,
        "maxZoom": 17,
        "mapId": "DEMO_MAP_ID"
    },
    "capabilities": {
        "input": true,
        "autocomplete": true,
        "directions": false,
        "distanceMatrix": true,
        "details": false,
        "actions": false
    }
};

const StoreLocator = () => {
    const locatorRef = useRef(null);
    const apiLoaderRef = useRef(null);
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE";

    useEffect(() => {
        // React intercepts the 'key' prop, so we set it manually on the custom element
        if (apiLoaderRef.current && API_KEY) {
            apiLoaderRef.current.setAttribute('key', API_KEY);
        }
    }, [API_KEY]);

    useEffect(() => {
        let isMounted = true;

        const init = async () => {
            await customElements.whenDefined('gmpx-store-locator');
            if (!isMounted) return;

            if (locatorRef.current) {
                // Pass the configuration from the builder to the actual element
                locatorRef.current.configureFromQuickBuilder(CONFIGURATION);
            }
        };

        init();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="store-locator-wrapper">
            <gmpx-api-loader
                ref={apiLoaderRef}
                solution-channel="GMP_QB_locatorplus_v11_cABD"
            ></gmpx-api-loader>

            <gmpx-store-locator
                ref={locatorRef}
                map-id="DEMO_MAP_ID"
            ></gmpx-store-locator>
        </div>
    );
};

export default StoreLocator;
