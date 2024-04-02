import {useRef, useEffect} from 'react';
// import {Icon, LayerGroup, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import { TOfferCity, TPreviewOffers } from '../../types/offer';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  className?: string;
  city: TOfferCity;
  offers: TPreviewOffers;
  activeOfferId?: string | null;
};

// const defaultCustomIcon = new Icon({
//   iconUrl: 'img/pin.svg',
//   iconSize: [27, 39],
//   iconAnchor: [13.5, 39]
// });

// const currentCustomIcon = new Icon({
//   iconUrl: 'img/pin-active.svg',
//   iconSize: [27, 39],
//   iconAnchor: [13.5, 39]
// });

// вариант из открытого занятия
import leaflet, {LayerGroup} from 'leaflet';

const defaultCustomIcon = new leaflet.Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new leaflet.Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

export default function Map(props: MapProps): JSX.Element {
  const {className, city, offers, activeOfferId} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  // вариант из открытого занятия
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet.marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }
        )
          .setIcon(offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon)
          .addTo(markerLayer.current);
      });
    }
  });

  // вариант из демо Академии
  // useEffect(() => {
  //   if (map) {
  //     const markerLayer = layerGroup().addTo(map);
  //     offers.forEach((offer) => {
  //       const marker = new Marker({
  //         lat: offer.location.latitude,
  //         lng: offer.location.longitude
  //       });

  //       marker
  //         .setIcon(
  //           // selectedPoint !== undefined && point.title === selectedPoint.title ? currentCustomIcon : defaultCustomIcon
  //           offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon
  //         )
  //         .addTo(markerLayer);
  //     });

  //     return () => {
  //       map.removeLayer(markerLayer);
  //     };
  //   }
  // }, [map, offers, activeOfferId]);

  // return <div style={{height: '500px'}} ref={mapRef}></div>;
  return <section className={`map ${className}`} ref={mapRef} />;
}
