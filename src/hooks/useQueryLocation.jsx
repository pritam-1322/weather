import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { CURRENT_WAETHER_API } from "../config";
import { longitudeValue } from "../store/dataSlice";
import { latitudeValue } from "../store/dataSlice";

const useQueryLocation = () => {
    const dispatch = useDispatch();
    const cityName = useSelector(store => store.data.cityName);
    const [errorMessage, setErrorMessage] = useState(null);

    const queryResult = async () => {
        try {
            const data = await fetch(CURRENT_WAETHER_API + `q=${cityName}`);
            if (!data.ok) {
                throw new Error("City not found! Search new City");
            }
            const result = await data.json();
            dispatch(longitudeValue(result?.coord?.lon));
            dispatch(latitudeValue(result?.coord?.lat));
            setErrorMessage(null); // Clear any previous error message
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    useEffect(() => {
        if (cityName) {
            queryResult();
        }
    }, [cityName]);

    return { cityName, errorMessage };
}

export default useQueryLocation;
