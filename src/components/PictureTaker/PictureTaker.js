import { useState } from "react";


export default function PictureTaker() {

    const [imgURL, setImgURL] = useState(null);
    const [targetDebug, setTargetDebug] = useState(null);

    const handleCapture = (target) => {
        setTargetDebug(JSON.stringify(target))
        if (target.files) {
          if (target.files.length !== 0) {
            const file = target.files[0];
            const newUrl = URL.createObjectURL(file);
            //setSource(newUrl);
            setImgURL(newUrl);
          }
        }
      };

    return (
        <div>
        <input accept="image/*" id="icon-button-file" type="file" capture="environment" onChange={(e) => handleCapture(e.target)}/>
        <div>
            <label>{imgURL}</label>
            <img src={imgURL} style={{"max-width":"240px"}} />
        </div>
        <div>
            <div>{targetDebug}</div>
        </div>
        </div>
    );
}