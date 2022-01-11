import React from 'react';
import LoadingImage from "./LoadingImage";

const DisplayContent = ({media_type, url, height = "100%", width = "100%"}) => {
    if (media_type === "video")
        return <iframe
            width={width}
            height={height}
            src={url}
            frameBorder="0"
            title={"video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />

    return <LoadingImage url={url} height={height} width={width} objectFit='fill'/>
}

export default DisplayContent;