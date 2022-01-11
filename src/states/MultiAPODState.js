import {useQuery} from "react-query";
import axios from "axios";

const getMultiAPOD = async (count = 10) => {
    const URL = "https://api.nasa.gov/planetary/apod";
    const params = {
        count,
        thumbs: true,
        api_key: process.env.REACT_APP_NASA_API_KEY
    };
    const {data} = await axios.get(URL, {params});

    return data;
}
const useMultiAPOD = () => {
    return useQuery(
        "apods",
        () => getMultiAPOD()
    );
}

export {useMultiAPOD}