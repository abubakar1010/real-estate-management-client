import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import Card from "../../Component/Card/Card";

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home | TraumHeim </title>
        </Helmet>
            <div>
                <Banner />
                <Card />
            </div>
        </>
    );
};

export default Home;