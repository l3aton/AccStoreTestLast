import { useState, useMemo } from "react";
import '../css/deviceSlider.css';

const DeviceSlider = (device) => {
    const [index, setIndex] = useState(0);
    const deviceInfo = device.device;
    const titleSlide = deviceInfo?.["g:image_link"];
    const additionSlides = deviceInfo?.["g:additional_image_link"];
    console.log(deviceInfo);
    const slides = useMemo(() => {
        if (!deviceInfo || !Array.isArray(additionSlides)) {
            return titleSlide ? [titleSlide] : [];
        }
        return [titleSlide, ...additionSlides];
    }, [deviceInfo, titleSlide, additionSlides]);

    if (!slides.length) return null;

    const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="device-slider">
            <div className="device-slides" style={{ transform: `translateX(-${index * 100}%)` }}>
                {slides.map((slide, i) => (
                    <img src={slide} className="device-slide" key={i} alt={`Slide ${i + 1}`} />
                ))}
            </div>
            <button className="device-prev device-slide-button" onClick={prevSlide}>&#10094;</button>
            <button className="device-next device-slide-button" onClick={nextSlide}>&#10095;</button>
            <div className="device-slider-counter">
                {index + 1} / {slides.length}
            </div>
        </div>
    );
}

export default DeviceSlider;
