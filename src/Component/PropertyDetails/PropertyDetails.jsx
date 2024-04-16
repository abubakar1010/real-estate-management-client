
import { useLoaderData, useParams } from "react-router-dom";
import DisplayPropertyDetails from "../DisplayPropertyDetails/DisplayPropertyDetails";

const PropertyDetails = () => {

    const data = useLoaderData()

    const params = useParams()

    const filteredData = data.filter( element => element.id == params.id)

    console.log(data,params, filteredData);
    return (
        <div>
            {
                filteredData.map( element => <DisplayPropertyDetails key={element.id} element={element} />)
            }
        </div>
    );
};

export default PropertyDetails;