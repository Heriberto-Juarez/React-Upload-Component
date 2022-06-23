import { useEffect, useState } from "react";

const ImageFromFile = ({file}) => {
    const [src, setSrc] = useState()
    useEffect(()=>{
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            setSrc(reader.result)
          }, false);
        reader.readAsDataURL(file);
    }, [file])
    return ( <img src={src} alt='File preview'/> );
}

export default ImageFromFile;