import { useState, useEffect } from "react";
import * as Location from 'expo-location';

const useLocation = () => {
    const [location, setLocation] = useState(null);
    const [errorMessage, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    setLoading(false);
                    return;
                }
                const myLocation = await Location.getCurrentPositionAsync({});
                const reverse = await Location.reverseGeocodeAsync({
                    latitude: myLocation.coords.latitude,
                    longitude: myLocation.coords.longitude
                });

                if (reverse && reverse.length > 0) {
                    setLocation(reverse[0]);
                } else {
                    setErrorMsg('Could not retrieve reverse geocode information');
                }
            } catch (e) {
                setErrorMsg('Error getting location');
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        fetchLocation();
    }, []);

    return { location, errorMessage, loading };
};

export default useLocation;
