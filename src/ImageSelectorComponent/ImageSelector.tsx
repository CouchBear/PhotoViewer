import React from "react";  // import React (to provide access to TSX)
import "./ImageSelector.css";


const brokenImages = [1, 24, 32, 36, 44, 47];
export function getImageUrls() {

    const urls: string[] = [];

    for (let i = 0; i < 50; i++) {

        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }

    return urls;
}

function ImageSelector(props: {
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>
}) {    // declare angd export new function called 'Image Selector'

    // const brokenImages = [1, 24, 32, 36, 44, 47];

    // function getImageUrls() {

    //     const urls: string[] = [];

    //     for (let i = 0; i < 50; i++) {

    //         if (!brokenImages.includes(i)) {
    //             const imageNumberString = i.toString().padStart(2, '0');
    //             urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
    //         }
    //     }

    //     return urls;
    // }

    const imageUrls = getImageUrls();

    // const [image, setImage] = React.useState("https://picsum.photos/id/223/1600/900.jpg");

    const images = imageUrls.map(imageUrl => {
        return <img src={imageUrl} onClick={function () { props.setSelected(imageUrl) }} className="individualImage" />
    })


    return (
        <div className="imageGallery">

            {images}

        </div>
    );

}


export { ImageSelector };