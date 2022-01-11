import React, {useState} from 'react';
import {Image} from "@chakra-ui/react";
import DisplayContent from "./Loader";

const LoadingImage = ({url, height, width}) => {

    const [isLoading, setLoading] = useState(true);

    const onLoad = () => {
        setLoading(false)
    }

    return <>
        {isLoading && <DisplayContent height={height} width={width}/>}
        <Image key={url} src={url} h={height} w={width} onLoad={onLoad} objectFit='fill'/>
    </>

}

export default LoadingImage;