import { MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet'
import "./PropertyMap.css"
import PropTypes from "prop-types";

const PropertyMap = ({position}) => {
    return (
        <>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
    <Tooltip>Tooltip for Marker</Tooltip>
  </Marker>
</MapContainer>
        </>
    );
};

PropertyMap.propTypes={
    position: PropTypes.array
}

export default PropertyMap;
