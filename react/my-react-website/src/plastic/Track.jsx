import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";

function Track() {
    const markers = [
        {   
            geocode: [17.246230, 78.473640], // Hyderabad, India
            popUp: "17.246230, 78.473640"
        },
        {
            geocode: [17.464600, 78.366630], // Hyderabad, India
            popUp: "17.464600, 78.366630"
        },
        {
            geocode: [17.409110, 78.432710], // Delhi, India
            popUp: "17.409110, 78.432710"
        },
        {
            geocode: [17.108970, 78.225470],
            popUp: "17.108970, 78.225470"
        },
        {
            geocode: [17.503080, 78.404170],
            popUp: "17.503080, 78.404170"
        },
        {
            geocode: [17.503080, 78.404170],
            popUp: "17.503080, 78.404170"
        },
        {
            geocode: [17.400310, 78.477920],
            popUp: "17.400310, 78.477920"
        },
        {
            "geocode": [17.464600, 78.366630],
            "popUp": "17.464600, 78.366630"
        },
        {
            "geocode": [17.375120, 78.399420],
            "popUp": "17.375120, 78.399420"
        },
        {
            "geocode": [17.428030, 78.422550],
            "popUp": "17.428030, 78.422550"
        },
        {
            geocode: [17.497020, 78.588430],
            popUp: "17.497020, 78.588430"
        },
        {
            "geocode": [17.441320, 78.491690],
            "popUp": "17.441320, 78.491690"
        },
        {
            "geocode": [17.416340, 78.504158],
            "popUp": "17.416340, 78.504158"
        },
        {
            "geocode": [17.514400, 78.284600],
            "popUp": "17.514400, 78.284600"
        },
        {
            "geocode": [17.486590, 78.393530],
            "popUp": "17.486590, 78.393530"
        },
        {
            "geocode": [17.458020, 78.433660],
            "popUp": "17.458020, 78.433660"
        },
        {
            "geocode": [17.519780, 78.480600],
            "popUp": "17.519780, 78.480600"
        },
        {
            geocode: [17.490520, 78.599770],
            popUp: "17.490520, 78.599770"
        },
        {
            geocode: [17.464600, 78.366630],
            popUp: "17.464600, 78.366630"
        },
        {
            geocode: [17.486590, 78.393530],
            popUp: "17.486590, 78.393530"
        },
        {
            geocode: [17.444000, 78.502240],
            popUp: "17.444000, 78.502240"
        },
        {
            geocode: [22.3072, 73.1812],
            popUp: "Vadodara"
        },
        {
            geocode: [28.6692, 77.4538],
            popUp: "Ghaziabad"
        },
        {
            geocode: [30.9, 75.85],
            popUp: "Ludhiana"
        },
        {
            geocode: [27.1767, 78.0081],
            popUp: "Agra"
        },
        {
            geocode: [19.9975, 73.7898],
            popUp: "Nashik"
        },
        {
            geocode: [28.4089, 77.3178],
            popUp: "Faridabad"
        },
        {
            "geocode": [28.9845, 77.7064],
            "popUp": "Meerut"
        },
        {
            "geocode": [22.3039, 70.8022],
            "popUp": "Rajkot"
        },
        {
            "geocode": [25.3176, 82.9739],
            "popUp": "Varanasi"
        },
        {
            "geocode": [34.0837, 74.7973],
            "popUp": "Srinagar"
        },
        {
            "geocode": [19.8762, 75.3433],
            "popUp": "Aurangabad"
        },
        {
            "geocode": [23.7957, 86.4304],
            "popUp": "Dhanbad"
        },
        {
            "geocode": [31.634, 74.8723],
            "popUp": "Amritsar"
        },
        {
            "geocode": [19.033, 73.0297],
            "popUp": "Navi Mumbai"
        },
        {
            "geocode": [25.4358, 81.8463],
            "popUp": "Allahabad"
        },
        {
            "geocode": [23.3441, 85.3096],
            "popUp": "Ranchi"
        },
        {
            "geocode": [22.5958, 88.2636],
            "popUp": "Howrah"
        },
        {
            "geocode": [23.1815, 79.9864],
            "popUp": "Jabalpur"
        },
        {
            "geocode": [26.2183, 78.1828],
            "popUp": "Gwalior"
        }
        
];

    return (
        <div className="overflow-hidden flex justify-center mt-20">
            <MapContainer center={[18.1124, 79.0193]} zoom={3} className="w-[1200px] h-screen">
                <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg" />
                
                {markers.map((item, index) => (
                    <MarkerWithPopup key={index} position={item.geocode} popupText={item.popUp} />
                ))}
            </MapContainer>
        </div>
    );
}

// Custom Marker component with Popup and automatic zoom functionality
function MarkerWithPopup({ position, popupText }) {
    const map = useMap();

    const handleClick = () => {
        map.setView(position, map.getZoom()); // Set map view to the marker position
    };

    return (
        <Marker position={position} eventHandlers={{ click: handleClick }}>
            <Popup>{popupText}</Popup>
        </Marker>
    );
}

export default Track;
