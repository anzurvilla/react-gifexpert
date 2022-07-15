import { useEffect, useState } from "react";
import { getGif } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => setImages(await getGif(category));

    useEffect(() => {
        getImages();
        setIsLoading(false);
    }, []);

    return {
        images,
        isLoading
    }
}
