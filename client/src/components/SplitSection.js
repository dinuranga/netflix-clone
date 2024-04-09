import React, { useEffect, useState } from "react";
import SplitLayout from "./Layout/SplitLayout";
import Image1 from "./views/Image1";
import Image2 from "./views/Image2";
import Image3 from "./views/Image3";

const SplitSection = () => {
    const [imagePosition, setImagePosition] = useState("left");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setImagePosition("right");
            } else {
                setImagePosition("left");
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <SplitLayout
                image={<Image1/>}
                imagePosition={imagePosition}
                heading="Enjoy on your TV"
                paragraph="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
            />
            <SplitLayout
                image={<Image2/>}
                imagePosition="left"
                heading="Download your shows to watch offline"
                paragraph="Save your favorites easily and always have something to watch."
            />
            <SplitLayout
                image={<Image3/>}
                imagePosition={imagePosition}
                heading="Create profiles for kids"
                paragraph="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
            />
        </div>
    );
}

export default SplitSection;
