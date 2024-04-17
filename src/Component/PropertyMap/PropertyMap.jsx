import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet'
import "./PropertyMap.css"
import PropTypes from "prop-types";

const PropertyMap = ({position, location}) => {
    return (
        <>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Tooltip>{location}</Tooltip>
  </Marker>
</MapContainer>
        </>
    );
};

PropertyMap.propTypes={
    position: PropTypes.array,
    location: PropTypes.element
}

export default PropertyMap;
