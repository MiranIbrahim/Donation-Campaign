import { useEffect, useState } from "react";


const useGetAllData = () => {

    const [cards,setCards] = useState()

    useEffect(()=>{

        fetch('/data.json')
        .then(res=>res.json())
        .then(data => setCards(data))

    },[])
    

    return [cards]

};

export default useGetAllData;