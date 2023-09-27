

import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";
import useGetAllData from "../../Hook/useGetAllCards";


const Home = () => {
    const [cards] = useGetAllData()
    return (
        <div>
            <Banner></Banner>
            <Cards cards = {cards}></Cards>
        </div>
    );
};

export default Home;