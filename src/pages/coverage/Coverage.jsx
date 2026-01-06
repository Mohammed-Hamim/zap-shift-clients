import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563]
    const serviceCenters = useLoaderData()
    // console.log(serviceCenters)
    const mapRef = useRef(null)


    //search function
    const handleSearch = (e) => {
        e.preventDefault()
        const location = e.target.location.value
        const district = serviceCenters.find(center => center.district.toLowerCase().includes(location.toLowerCase()))
        // console.log(district)
        if(district){
            const coord =[district.latitude, district.longitude]
            // console.log(coord)
            // go to the location
            mapRef.current.flyTo(coord, 18)
        }
    }


    return (
        <div className='bg-white  rounded-xl p-4 md:p-10'>
            <div className=''>
                <h2 className='text-2xl md:text-4xl font-bold text-secondary mb-4'>We are available in 64 districts</h2>
                <form onSubmit={handleSearch}>
                    <label className="input w-[300px] md:w-[400px] border-1 rounded-full validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <div className=''>
                            <input type="search" name='location' placeholder="Search here" required />
                            <button type='submit' className='btn rounded-full px-10 -ml-19 md:-ml-6 bg-primary'>Search</button>
                        </div>
                    </label>
                </form>
            </div>
            <div className='mt-10'>
                <h2 className='text-xl mb-5 font-bold text-secondary'>
                    We deliver almost all over Bangladesh
                </h2>
                {/* map */}
                <div className=''>
                    <MapContainer
                        center={position}
                        zoom={7}
                        scrollWheelZoom={false}
                        className='h-[600px]'
                        ref={mapRef}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            serviceCenters.map((center, index) =>

                                <Marker key={index} position={[center.latitude, center.longitude]}>
                                    <Popup>
                                        <strong>{center.district}</strong> <br />
                                        Service Area : {center.covered_area.join(", ")}
                                    </Popup>
                                </Marker>

                            )
                        }
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Coverage;