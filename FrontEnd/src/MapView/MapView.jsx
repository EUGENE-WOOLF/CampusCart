import { useEffect, useState } from 'react';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import * as maptilersdk from '@maptiler/sdk';
import './MapView.css'
import { GeocodingControl } from "@maptiler/geocoding-control/maptilersdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "@maptiler/geocoding-control/style.css";

function Map() {

    const [searchLocation, setSearchLocation] = useState("IIT Kanpur");

    useEffect(() => {
        maptilersdk.config.apiKey = 'brwwDhjdKy4iHMrMP10i';


        const map = new maptilersdk.Map({
            container: 'map',
            style: maptilersdk.MapStyle.STREETS,
            center: [80.23332674, 26.51254658],
            zoom: 14
        });

        const marker = new maptilersdk.Marker()
            .setLngLat([80.23332674, 26.51254658])
            .addTo(map);

        const gc = new GeocodingControl();

        map.addControl(gc, 'top-left');

        return () => {
            map.remove();
        };
    }, []);

    return (
        <div className='container'>
            <div>
                <div id="map" className='divBox'></div>
            </div>
        </div>
    );
}

export default Map;