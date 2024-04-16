
import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {

    const data = useLoaderData()

    const params = useParams()

    const filteredData = data.filter( element => element.id == params.id)

    console.log(data,params, filteredData);
    return (
        <div>
            
        </div>
    );
};

export default PropertyDetails;