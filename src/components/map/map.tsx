import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
// import us
// import {City, Points, Point} from '../../types/types';
// import { TOfferCity, TPreviewOffer, TPreviewOffers } from '../../types/offer';
import { TOfferCity, TPreviewOffers } from '../../types/offer';
// import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';

// type MapProps = {
//   city: City;
//   points: Points;
//   selectedPoint: Point | undefined;
// };

type MapProps = {
  className?: string;
  city: TOfferCity;
  // points: TPreviewOffers;
  // selectedPoint: TPreviewOffer | undefined;
  offers: TPreviewOffers;
  activeOfferId?: string | null;
};

// const defaultCustomIcon = new Icon({
//   iconUrl: URL_MARKER_DEFAULT,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40]
// });

// const currentCustomIcon = new Icon({
//   iconUrl: URL_MARKER_CURRENT,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40]
// });

const defaultCustomIcon = new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

export default function Map(props: MapProps): JSX.Element {
  const {className, city, offers, activeOfferId} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          // lat: point.lat,
          // lng: point.lng
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            // selectedPoint !== undefined && point.title === selectedPoint.title ? currentCustomIcon : defaultCustomIcon
            offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOfferId]);

  // return <div style={{height: '500px'}} ref={mapRef}></div>;
  return <section className={`map ${className}`} ref={mapRef} />;
}

// export default Map;

// export default function Map({city, offers, activeOfferId} : MapProps): JSX.Element {

//   // const mapRef = useRef(null);
//   // const map = useMap(mapRef, city);
//   const mapRef = useRef<HTMLDivElement>(null);
//   const map = useMap({location: city.location, containerRef: mapRef});

//   useEffect(() => {
//     if (map) {
//       const markerLayer = layerGroup().addTo(map);
//       offers.forEach((offer) => {
//         const marker = new Marker({
//           // lat: point.lat,
//           // lng: point.lng
//           lat: offer.location.latitude,
//           lng: offer.location.longitude
//         });

//         marker
//           .setIcon(
//             activeOfferId !== undefined && point.title === selectedPoint.title
//               ? currentCustomIcon
//               : defaultCustomIcon
//           )
//           .addTo(markerLayer);
//       });

//       return () => {
//         map.removeLayer(markerLayer);
//       };
//     }
//   }, [map, points, selectedPoint]);

//   return <div style={{height: '500px'}} ref={mapRef}></div>;
// }
