import { useState, useEffect, useCallback } from "react";
import * as Location from 'expo-location';

const useLocation = () => {
    const [location, setLocation] = useState(null);
    const [errorMessage, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [coords, setCoords] = useState(null);

    const fetchLocation = useCallback(async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('В разрешении на доступ к местоположению было отказано');
                setLoading(false);
                return;
            }
            const myLocation = await Location.getCurrentPositionAsync({});
            setCoords(myLocation.coords);

            if (!myLocation) {
                setErrorMsg("Не удалось определить местоположение");
                setLoading(false);
                return;
            }

            const reverse = await Location.reverseGeocodeAsync({
                latitude: myLocation.coords.latitude,
                longitude: myLocation.coords.longitude
            });

            if (reverse && reverse.length > 0) {
                setLocation(reverse[0]);
            } else {
                setErrorMsg('Не удалось получить информацию обратного геокодирования');
            }
        } catch (e) {
            setErrorMsg('Ошибка при получении местоположения');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchLocation();
    }, [fetchLocation]);

    return { location, coords, errorMessage, loading };
};

export default useLocation;
