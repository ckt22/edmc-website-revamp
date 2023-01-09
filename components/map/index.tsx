import React, { ReactNode, useRef, useState, useEffect } from 'react';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { GOOGLE_MAP_MAP_ID } = publicRuntimeConfig;

const Map = ({ children, latitude, longitude, zoom }: { children?: ReactNode, latitude: number; longitude: number, zoom?: number }) => {
    const ref = useRef(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const cntr = {
      lat: latitude ?? 0,
      lng: longitude ?? 0,
    };

    new google.maps.Marker({
      position: cntr,
      map,
      title: 'Meow!'
    });
  
    useEffect(() => {
      if (ref.current && !map) {
        setMap(
          new google.maps.Map(ref.current, {
            mapId: GOOGLE_MAP_MAP_ID,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            center: {
              lat: latitude ?? 0,
              lng: longitude ?? 0,
            },
            zoom: zoom ?? 18,
          })
        );
      }
    }, [ref, map, latitude, longitude]);
  
    return <div ref={ref} style={{height: '100%', width: '100%'}} />;
    // return (
    //   <>
    //     <div ref={ref} />
    //     {React.Children.map(children, (child) => {
    //       if (React.isValidElement(child)) {
    //         console.log(child);
    //         // set the map prop on the child component
    //         // @ts-ignore
    //         return React.cloneElement(child, { map });
    //       }
    //     })}
    //   </>
    // );
  };

  export default Map;