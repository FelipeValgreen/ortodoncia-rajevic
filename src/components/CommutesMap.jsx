"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import './CommutesMap.css';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE";

// --- Configuration ---
const CONFIGURATION = {
    "defaultTravelMode": "DRIVING",
    "distanceMeasurementType": "METRIC", // Changed to metric for Chile
    "mapOptions": {
        "center": { "lat": -33.3936, "lng": -70.5628 }, // Updated to clinic coordinates
        "fullscreenControl": true,
        "mapTypeControl": false,
        "streetViewControl": false,
        "zoom": 14,
        "zoomControl": true,
        "maxZoom": 20,
        "mapId": ""
    },
};

const MAX_NUM_DESTINATIONS = 10;
const BIAS_BOUND_DISTANCE = 0.5;
const HOUR_IN_SECONDS = 3600;
const MIN_IN_SECONDS = 60;

const STROKE_COLORS = {
    active: { innerStroke: '#4285F4', outerStroke: '#185ABC' },
    inactive: { innerStroke: '#BDC1C6', outerStroke: '#80868B' },
};

const MARKER_ICON_COLORS = {
    active: { fill: '#EA4335', stroke: '#C5221F', label: '#FFF' },
    inactive: { fill: '#F1F3F4', stroke: '#9AA0A6', label: '#3C4043' },
};

const DestinationOperation = { ADD: 'ADD', EDIT: 'EDIT', DELETE: 'DELETE' };
const TravelMode = { DRIVING: 'DRIVING', TRANSIT: 'TRANSIT', BICYCLING: 'BICYCLING', WALKING: 'WALKING' };

// --- Main Map Logic Component ---
const MapComponent = () => {
    const mapRef = useRef(null);
    const [commutesMap, setCommutesMap] = useState(null);
    const originRef = useRef(CONFIGURATION.mapOptions.center);
    const destinationsRef = useRef([]);
    const markerIndexRef = useRef(0);
    const activeDestinationIndexRef = useRef(undefined);
    const [destinationsState, setDestinationsState] = useState([]); // For UI rendering
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('add'); // 'add' or 'edit'
    const [selectedTravelMode, setSelectedTravelMode] = useState('DRIVING');
    const [errorMessage, setErrorMessage] = useState('');

    const autocompleteInputRef = useRef(null);
    const autocompleteRef = useRef(null);
    const destinationToAddRef = useRef(null);
    const containerRef = useRef(null);

    // Initial Map Setup
    useEffect(() => {
        if (mapRef.current && !commutesMap && window.google) {
            const map = new window.google.maps.Map(mapRef.current, CONFIGURATION.mapOptions);
            setCommutesMap(map);

            const defaultTravelModeEnum = parseTravelModeEnum(CONFIGURATION.defaultTravelMode);
            createMarker(originRef.current, undefined, map);
        }
    }, [mapRef, commutesMap]);

    // Autocomplete Setup
    useEffect(() => {
        if (showModal && autocompleteInputRef.current && commutesMap && window.google) {
            const boundConfig = {
                north: originRef.current.lat + BIAS_BOUND_DISTANCE,
                south: originRef.current.lat - BIAS_BOUND_DISTANCE,
                east: originRef.current.lng + BIAS_BOUND_DISTANCE,
                west: originRef.current.lng - BIAS_BOUND_DISTANCE,
            };

            const autocompleteOptions = {
                bounds: boundConfig,
                fields: ['place_id', 'geometry', 'name'],
            };

            if (!autocompleteRef.current) {
                autocompleteRef.current = new window.google.maps.places.Autocomplete(
                    autocompleteInputRef.current, autocompleteOptions
                );

                autocompleteRef.current.addListener('place_changed', () => {
                    const place = autocompleteRef.current.getPlace();
                    if (!place.geometry || !place.geometry.location) {
                        return;
                    } else {
                        destinationToAddRef.current = place;
                    }
                    setErrorMessage('');
                });
            }

            if (modalMode === 'add') {
                setTimeout(() => autocompleteInputRef.current?.focus(), 100);
            }
        }
    }, [showModal, commutesMap, modalMode]);


    const markerIconConfigBase = {
        path: 'M10 27c-.2 0-.2 0-.5-1-.3-.8-.7-2-1.6-3.5-1-1.5-2-2.7-3-3.8-2.2-2.8-3.9-5-3.9-8.8C1 4.9 5 1 10 1s9 4 9 8.9c0 3.9-1.8 6-4 8.8-1 1.2-1.9 2.4-2.8 3.8-1 1.5-1.4 2.7-1.6 3.5-.3 1-.4 1-.6 1Z',
        fillOpacity: 1,
        strokeWeight: 1,
        anchor: window.google ? new window.google.maps.Point(15, 29) : null,
        scale: 1.2,
        labelOrigin: window.google ? new window.google.maps.Point(10, 9) : null,
    };

    const originMarkerIcon = { ...markerIconConfigBase, fillColor: MARKER_ICON_COLORS.active.fill, strokeColor: MARKER_ICON_COLORS.active.stroke };
    const destinationMarkerIcon = { ...markerIconConfigBase, fillColor: MARKER_ICON_COLORS.inactive.fill, strokeColor: MARKER_ICON_COLORS.inactive.stroke };

    // --- Helper Functions ---

    const getNextMarkerLabel = () => {
        const markerLabels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const label = markerLabels[markerIndexRef.current];
        markerIndexRef.current = (markerIndexRef.current + 1) % markerLabels.length;
        return label;
    };

    const parseTravelModeEnum = (travelModeString) => {
        switch (travelModeString) {
            case 'DRIVING': return TravelMode.DRIVING;
            case 'BICYCLING': return TravelMode.BICYCLING;
            case 'PUBLIC_TRANSIT': return TravelMode.TRANSIT;
            case 'WALKING': return TravelMode.WALKING;
            default: return null;
        }
    };

    const createMarker = (location, label, map) => {
        const isOrigin = label === undefined;
        const markerIconConfig = isOrigin ? originMarkerIcon : destinationMarkerIcon;
        const labelColor = isOrigin ? MARKER_ICON_COLORS.active.label : MARKER_ICON_COLORS.inactive.label;
        const labelText = isOrigin ? '●' : label;

        const mapOptions = {
            position: location,
            map: map,
            label: { text: labelText, fontFamily: 'Arial, sans-serif', color: labelColor, fontSize: '16px' },
            icon: markerIconConfig
        };

        if (isOrigin) {
            mapOptions.label.className = 'origin-pin-label';
            mapOptions.label.fontSize = '20px';
        }
        return new window.google.maps.Marker(mapOptions);
    };

    const generateMapsUrl = (destination, travelModeEnum) => {
        let url = 'https://www.google.com/maps/dir/?api=1';
        url += `&origin=${originRef.current.lat},${originRef.current.lng}`;
        url += '&destination=' + encodeURIComponent(destination.name || destination.address) + '&destination_place_id=' + destination.place_id;
        url += '&travelmode=' + travelModeEnum.toLowerCase();
        return url;
    };

    const convertDurationValueAsString = (durationValue) => {
        if (!durationValue) return '';
        if (durationValue < MIN_IN_SECONDS) return '<1 min';
        if (durationValue > HOUR_IN_SECONDS * 10) return '10+ hours';
        const hours = Math.floor(durationValue / HOUR_IN_SECONDS);
        const minutes = Math.floor(durationValue % HOUR_IN_SECONDS / 60);
        const hoursString = hours > 0 ? hours + ' h' : '';
        const minutesString = minutes > 0 ? minutes + ' min' : '';
        const spacer = hoursString && minutesString ? ' ' : '';
        return hoursString + spacer + minutesString;
    };

    const getDirections = (destinationConfig) => {
        const request = {
            origin: originRef.current,
            destination: { 'placeId': destinationConfig.place_id },
            travelMode: destinationConfig.travelModeEnum,
            unitSystem: CONFIGURATION.distanceMeasurementType === 'METRIC' ? window.google.maps.UnitSystem.METRIC : window.google.maps.UnitSystem.IMPERIAL,
        };
        const directionsService = new window.google.maps.DirectionsService();
        return directionsService.route(request);
    };

    const getCommutesInfo = (directionResponse, destinationConfig) => {
        if (!directionResponse) return;
        const path = directionResponse.routes[0].overview_path;
        const bounds = directionResponse.routes[0].bounds;
        const directionLeg = directionResponse.routes[0].legs[0];
        const destinationLocation = directionLeg.end_location;

        const innerStroke = new window.google.maps.Polyline({
            path: path, strokeColor: STROKE_COLORS.inactive.innerStroke, strokeOpacity: 1.0, strokeWeight: 3, zIndex: 10
        });
        const outerStroke = new window.google.maps.Polyline({
            path: path, strokeColor: STROKE_COLORS.inactive.outerStroke, strokeOpacity: 1.0, strokeWeight: 6, zIndex: 1
        });

        const marker = createMarker(destinationLocation, destinationConfig.label, commutesMap);
        innerStroke.setMap(commutesMap);
        outerStroke.setMap(commutesMap);

        destinationConfig.distance = directionLeg.distance.text;
        destinationConfig.duration = convertDurationValueAsString(directionLeg.duration.value);
        destinationConfig.marker = marker;
        destinationConfig.polylines = { innerStroke, outerStroke };
        destinationConfig.bounds = bounds;
        destinationConfig.directionsUrl = generateMapsUrl(destinationConfig, destinationConfig.travelModeEnum);
    };

    const changeMapObjectStrokeWeight = (destination, mouseOver) => {
        if (!destination.marker || !destination.polylines) return;
        const markerIcon = destination.marker.icon;
        if (mouseOver) {
            destination.polylines.outerStroke.setOptions({ strokeWeight: 8 });
            markerIcon.strokeWeight = 2;
        } else {
            destination.polylines.outerStroke.setOptions({ strokeWeight: 6 });
            markerIcon.strokeWeight = 1;
        }
        destination.marker.setIcon(markerIcon);
    };

    const handleRouteClick = (destinationIdx) => {
        const currentActive = activeDestinationIndexRef.current;
        if (currentActive !== undefined && destinationsRef.current[currentActive]) {
            const currentDest = destinationsRef.current[currentActive];
            currentDest.polylines.innerStroke.setOptions({ strokeColor: STROKE_COLORS.inactive.innerStroke, zIndex: 2 });
            currentDest.polylines.outerStroke.setOptions({ strokeColor: STROKE_COLORS.inactive.outerStroke, zIndex: 1 });
            currentDest.marker.setIcon(destinationMarkerIcon);
            currentDest.marker.label.color = MARKER_ICON_COLORS.inactive.label;
        }

        activeDestinationIndexRef.current = destinationIdx;
        const activeDest = destinationsRef.current[destinationIdx];

        activeDest.polylines.innerStroke.setOptions({ strokeColor: STROKE_COLORS.active.innerStroke, zIndex: 101 });
        activeDest.polylines.outerStroke.setOptions({ strokeColor: STROKE_COLORS.active.outerStroke, zIndex: 99 });
        activeDest.marker.setIcon(originMarkerIcon);
        activeDest.marker.label.color = '#ffffff';

        commutesMap.fitBounds(activeDest.bounds);

        // trigger re-render for active class
        setDestinationsState([...destinationsRef.current]);
    };

    const assignMapObjectListeners = (destinationConfig, index) => {
        if (!window.google) return;
        window.google.maps.event.clearListeners(destinationConfig.marker, 'click');
        window.google.maps.event.addListener(destinationConfig.marker, 'click', () => handleRouteClick(index));
        window.google.maps.event.addListener(destinationConfig.marker, 'mouseover', () => changeMapObjectStrokeWeight(destinationConfig, true));
        window.google.maps.event.addListener(destinationConfig.marker, 'mouseout', () => changeMapObjectStrokeWeight(destinationConfig, false));

        for (const strokeLine in destinationConfig.polylines) {
            window.google.maps.event.clearListeners(destinationConfig.polylines[strokeLine], 'click');
            window.google.maps.event.clearListeners(destinationConfig.polylines[strokeLine], 'mouseover');
            window.google.maps.event.addListener(destinationConfig.polylines[strokeLine], 'click', () => handleRouteClick(index));
            window.google.maps.event.addListener(destinationConfig.polylines[strokeLine], 'mouseover', () => changeMapObjectStrokeWeight(destinationConfig, true));
            window.google.maps.event.addListener(destinationConfig.polylines[strokeLine], 'mouseout', () => changeMapObjectStrokeWeight(destinationConfig, false));
        }
    };

    const removeDirectionsFromMapView = (destination) => {
        if (destination.polylines) {
            destination.polylines.innerStroke.setMap(null);
            destination.polylines.outerStroke.setMap(null);
        }
        if (destination.marker) destination.marker.setMap(null);
    };


    // --- UI Handlers ---

    const handleAddDestinationClick = () => {
        setModalMode('add');
        setSelectedTravelMode(CONFIGURATION.defaultTravelMode);
        setErrorMessage('');
        destinationToAddRef.current = null;
        if (autocompleteInputRef.current) autocompleteInputRef.current.value = '';
        setShowModal(true);
    };

    const handleEditDestinationClick = (index, e) => {
        e.stopPropagation();
        activeDestinationIndexRef.current = index;
        const dest = destinationsRef.current[index];
        setModalMode('edit');
        setSelectedTravelMode(dest.travelModeEnum);
        setErrorMessage('');
        destinationToAddRef.current = { place_id: dest.place_id, name: dest.name }; // Keep current as fallback
        if (autocompleteInputRef.current) {
            autocompleteInputRef.current.value = dest.name;
        }
        setShowModal(true);
    };

    const handleModalSubmit = async () => {
        const destToAdd = destinationToAddRef.current;
        let finalInputName = autocompleteInputRef.current ? autocompleteInputRef.current.value : '';

        if (modalMode === 'add') {
            if (!destToAdd) {
                setErrorMessage('Seleccione un destino válido de la lista autocompletada.');
                return;
            }
            if (destinationsRef.current.length >= MAX_NUM_DESTINATIONS) {
                setErrorMessage(`No se pueden añadir más de ${MAX_NUM_DESTINATIONS} destinos.`);
                return;
            }
            if (destinationsRef.current.some(d => d.place_id === destToAdd.place_id)) {
                setErrorMessage('El destino ya existe.');
                return;
            }

            const newDestConfig = {
                name: destToAdd.name,
                place_id: destToAdd.place_id,
                label: getNextMarkerLabel(),
                travelModeEnum: selectedTravelMode,
            };

            try {
                const response = await getDirections(newDestConfig);
                getCommutesInfo(response, newDestConfig);
                const newIndex = destinationsRef.current.length;
                destinationsRef.current.push(newDestConfig);
                assignMapObjectListeners(newDestConfig, newIndex);
                setDestinationsState([...destinationsRef.current]);
                handleRouteClick(newIndex);
                setShowModal(false);
            } catch (e) {
                console.error("Error al obtener ruta", e);
                setErrorMessage('No se pudo calcular la ruta a este destino.');
            }
        } else if (modalMode === 'edit') {
            const currentIndex = activeDestinationIndexRef.current;
            const currentDest = destinationsRef.current[currentIndex];

            const isSameDestination = currentDest.name === finalInputName || (destToAdd && currentDest.place_id === destToAdd.place_id);
            const isSameTravelMode = currentDest.travelModeEnum === selectedTravelMode;

            if (isSameDestination && isSameTravelMode) {
                setShowModal(false);
                return;
            }

            const updatedDest = { ...currentDest };

            if (!isSameDestination) {
                if (!destToAdd) {
                    setErrorMessage('Seleccione un destino válido de la lista autocompletada.');
                    return;
                }
                updatedDest.name = destToAdd.name;
                updatedDest.place_id = destToAdd.place_id;
            }

            updatedDest.travelModeEnum = selectedTravelMode;

            try {
                removeDirectionsFromMapView(currentDest);
                const response = await getDirections(updatedDest);
                getCommutesInfo(response, updatedDest);
                destinationsRef.current[currentIndex] = updatedDest;
                assignMapObjectListeners(updatedDest, currentIndex);
                setDestinationsState([...destinationsRef.current]);
                handleRouteClick(currentIndex);
                setShowModal(false);
            } catch (e) {
                console.error("Error al obtener ruta editada", e);
                setErrorMessage('No se pudo calcular la nueva ruta.');
            }
        }
    };

    const handleModalDelete = () => {
        const currentIndex = activeDestinationIndexRef.current;
        if (currentIndex !== undefined) {
            removeDirectionsFromMapView(destinationsRef.current[currentIndex]);
            destinationsRef.current.splice(currentIndex, 1);
            setDestinationsState([...destinationsRef.current]);

            if (destinationsRef.current.length > 0) {
                handleRouteClick(destinationsRef.current.length - 1);
            } else {
                activeDestinationIndexRef.current = undefined;
            }
        }
        setShowModal(false);
    };


    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    return (
        <main className="commutes">
            {/* SVGs definitions */}
            <svg className="hide">
                <defs>
                    <symbol id="commutes-initial-icon">
                        <path d="M41 20H18.6c-9.5 0-10.8 13.5 0 13.5h14.5C41 33.5 41 45 33 45H17.7" stroke="#D2E3FC" strokeWidth="5"></path>
                        <path d="M41 22c.2 0 .4 0 .6-.2l.4-.5c.3-1 .7-1.7 1.1-2.5l2-3c.8-1 1.5-2 2-3 .6-1 .9-2.3.9-3.8 0-2-.7-3.6-2-5-1.4-1.3-3-2-5-2s-3.6.7-5 2c-1.3 1.4-2 3-2 5 0 1.4.3 2.6.8 3.6s1.2 2 2 3.2c.9 1 1.6 2 2 2.8.5.9 1 1.7 1.2 2.7l.4.5.6.2Zm0-10.5c-.7 0-1.3-.2-1.8-.7-.5-.5-.7-1.1-.7-1.8s.2-1.3.7-1.8c.5-.5 1.1-.7 1.8-.7s1.3.2 1.8.7c.5.5.7 1.1.7 1.8s-.2 1.3-.7 1.8c-.5.5-1.1.7-1.8.7Z" fill="#185ABC"></path>
                        <path d="m12 32-8 6v12h5v-7h6v7h5V38l-8-6Z" fill="#4285F4"></path>
                    </symbol>
                    <symbol id="commutes-add-icon"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></symbol>
                    <symbol id="commutes-driving-icon"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" /><circle cx="7.5" cy="14.5" r="1.5" /><circle cx="16.5" cy="14.5" r="1.5" /></symbol>
                    <symbol id="commutes-transit-icon"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zm5.66 3H6.43c.61-.52 2.06-1 5.57-1 3.71 0 5.12.46 5.66 1zM11 7v3H6V7h5zm2 0h5v3h-5V7zm3.5 10h-9c-.83 0-1.5-.67-1.5-1.5V12h12v3.5c0 .83-.67 1.5-1.5 1.5z" /><circle cx="8.5" cy="14.5" r="1.5" /><circle cx="15.5" cy="14.5" r="1.5" /></symbol>
                    <symbol id="commutes-bicycling-icon"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" /></symbol>
                    <symbol id="commutes-walking-icon"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.56-.89-1.68-1.25-2.65-.84L6 8.3V13h2V9.6l1.8-.7" /></symbol>
                    <symbol id="commutes-chevron-left-icon"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" /></symbol>
                    <symbol id="commutes-chevron-right-icon"><path d="M0 0h24v24H0V0z" fill="none" /><path xmlns="http://www.w3.org/2000/svg" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></symbol>
                    <symbol id="commutes-arrow-icon"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" /></symbol>
                    <symbol id="commutes-directions-icon"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M22.43 10.59l-9.01-9.01c-.75-.75-2.07-.76-2.83 0l-9 9c-.78.78-.78 2.04 0 2.82l9 9c.39.39.9.58 1.41.58.51 0 1.02-.19 1.41-.58l8.99-8.99c.79-.76.8-2.02.03-2.82zm-10.42 10.4l-9-9 9-9 9 9-9 9zM8 11v4h2v-3h4v2.5l3.5-3.5L14 7.5V10H9c-.55 0-1 .45-1 1z" /></symbol>
                    <symbol id="commutes-edit-icon"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" /></symbol>
                </defs>
            </svg>

            <div className="commutes-map" aria-label="Map" style={{ height: '400px' }}>
                <div className="map-view" ref={mapRef}></div>
            </div>

            <div className="commutes-info">
                {destinationsState.length === 0 && (
                    <div className="commutes-initial-state">
                        <svg aria-label="Directions Icon" width="53" height="53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use href="#commutes-initial-icon" />
                        </svg>
                        <div className="description">
                            <h2 className="heading" style={{ fontSize: '1.2rem', margin: 0 }}>Calcula tu tiempo de viaje</h2>
                            <p>Ingresa tu ubicación para ver cómo llegar a la clínica</p>
                        </div>
                        <button className="add-button" onClick={handleAddDestinationClick}>
                            <svg aria-label="Add Icon" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg">
                                <use href="#commutes-add-icon" />
                            </svg>
                            <span className="label">Añadir origen</span>
                        </button>
                    </div>
                )}

                {destinationsState.length > 0 && (
                    <div className="commutes-destinations" style={{ display: 'block' }}>
                        <div className="destinations-container" ref={containerRef}>
                            <div className="destination-list">
                                {destinationsState.map((dest, index) => (
                                    <div key={index} className="destination-container" onClick={() => handleRouteClick(index)}>
                                        <div className={`destination-card ${activeDestinationIndexRef.current === index ? 'active' : ''}`} tabIndex="0" role="button">
                                            <div className="destination-content">
                                                <div className="metadata">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <use href={`#commutes-${dest.travelModeEnum.toLowerCase()}-icon`} />
                                                    </svg>
                                                    {dest.distance}
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <use href="#commutes-arrow-icon" />
                                                    </svg>
                                                    <span className="location-marker">{dest.label}</span>
                                                </div>
                                                <div className="address">Desde <abbr title={dest.name}>{dest.name}</abbr></div>
                                                <div className="destination-eta">{dest.duration}</div>
                                            </div>
                                        </div>
                                        <div className="destination-controls">
                                            <a className="directions-button" href={dest.directionsUrl} target="_blank" rel="noreferrer" aria-label="Ver indicaciones en Google Maps">
                                                <svg aria-label="Directions icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><use href="#commutes-directions-icon" /></svg>
                                            </a>
                                            <button className="edit-button" aria-label="Editar" onClick={(e) => handleEditDestinationClick(index, e)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><use href="#commutes-edit-icon" /></svg>
                                                Editar
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="add-button" onClick={handleAddDestinationClick}>
                                <svg aria-label="Add Icon" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg"><use href="#commutes-add-icon" /></svg>
                                <div className="label">Añadir otro</div>
                            </button>
                        </div>
                        {destinationsState.length > 1 && (
                            <>
                                <button className="left-control visible" onClick={handleScrollLeft} aria-label="Scroll left">
                                    <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg"><use href="#commutes-chevron-left-icon" /></svg>
                                </button>
                                <button className="right-control visible" onClick={handleScrollRight} aria-label="Scroll right">
                                    <svg width="24px" height="24px" xmlns="http://www.w3.org/2000/svg"><use href="#commutes-chevron-right-icon" /></svg>
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>

            {/* Modal */}
            <div className="commutes-modal-container" style={{ display: showModal ? 'flex' : 'none' }}>
                <div className="commutes-modal" role="dialog" aria-modal="true" aria-labelledby="add-edit-heading">
                    <div className="content">
                        <h2 id="add-edit-heading" className="heading">{modalMode === 'add' ? '¿Desde dónde viajas?' : 'Editar origen'}</h2>
                        <form onSubmit={(e) => { e.preventDefault(); handleModalSubmit(); }}>
                            <input type="text" ref={autocompleteInputRef} name="destination-address" placeholder="Ingresa una dirección o lugar" autoComplete="off" required />
                            {errorMessage && <div className="error-message" role="alert">{errorMessage}</div>}
                            <div className="travel-modes">
                                {['DRIVING', 'TRANSIT', 'BICYCLING', 'WALKING'].map(mode => (
                                    <React.Fragment key={mode}>
                                        <input type="radio" name="travel-mode" id={`${mode.toLowerCase()}-mode`} value={mode}
                                            checked={selectedTravelMode === mode}
                                            onChange={(e) => setSelectedTravelMode(e.target.value)} />
                                        <label htmlFor={`${mode.toLowerCase()}-mode`} className={mode === 'DRIVING' ? 'left-label' : mode === 'WALKING' ? 'right-label' : ''} title={mode}>
                                            <svg xmlns="http://www.w3.org/2000/svg"><use href={`#commutes-${mode.toLowerCase()}-icon`} /></svg>
                                        </label>
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="modal-action-bar">
                                {modalMode === 'edit' && (
                                    <button type="button" className="delete-destination-button" onClick={handleModalDelete} style={{ display: 'block' }}>Eliminar</button>
                                )}
                                <button type="button" className="cancel-button" onClick={() => setShowModal(false)}>Cancelar</button>
                                <button type="submit" className="add-destination-button" style={{ color: 'var(--color-primary)' }}>{modalMode === 'add' ? 'Añadir' : 'Guardar'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

const CommutesMap = () => {
    return (
        <Wrapper apiKey={GOOGLE_MAPS_API_KEY} libraries={["places", "geometry"]}>
            <MapComponent />
        </Wrapper>
    );
};

export default CommutesMap;
