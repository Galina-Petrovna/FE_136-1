import React from "react";

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
import style from "./Map.module.css";


L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";


const Map1 = () => {

    return (
        <MapContainer className={style.map}  center={[55.4424, 37.3636]} zoom={10} style={{height:'400px', width:'100%'}} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[55.4424, 37.3636]}>
                <Popup>
                    КСК "Звездный"
                </Popup>
            </Marker>
        </MapContainer>

    );
}

export default Map1;