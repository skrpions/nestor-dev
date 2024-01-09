import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import movie from './assets/movie.mp4';
import thumbnailVideo from './assets/sliders/plus.png';
import img1 from './assets/sliders/skills.jpg';
import img2 from './assets/sliders/img-skills.jpg';
import img3 from './assets/sliders/img-citobot.png';
import img4 from './assets/sliders/img-ecco5.jpg';
import img5 from './assets/sliders/img-avigan.jpg';
import img6 from './assets/sliders/img-biclapp.jpg';
import img7 from './assets/sliders/img-sercor.jpg';
import img8 from './assets/sliders/img-estudio.jpg';
import img9 from './assets/sliders/img-misak.png';

const Carousel = () => {
    const [prev] = useState('<');
    const [next] = useState('>');
    const [runTimeOut, setRunTimeOut] = useState(null);
    const [runNextAuto, setRunNextAuto] = useState(null);
    const [timeRunning, setTimeRunning] = useState(3000);
    const [timeAutoNext, setTimeAutoNext] = useState(7000);
    const [currentSlide, setCurrentSlide] = useState(0); // Nuevo estado para rastrear la diapositiva actual

    const content = [
        {
            feature: "INTRO",
            title: "NESTOR MARTÍNEZ",
            subtitle: "",
            description: "",
            media: <video src={movie} autoPlay muted loop />,
        },
        {
            feature: "PERFIL",
            title: "NESTOR MARTÍNEZ",
            subtitle: "FULL STACK WEB DEVELOPER",
            description: "Experiencias de usuario perfectas para potenciar la transformación digital",
            media: <img src={img1} />,
        },
        {
            feature: "PROYECTO",
            title: "SKILLS INVENTORY",
            subtitle: "Talento",
            description: "",
            media: <img src={img2} />,
        },
        {
            feature: "PROYECTO",
            title: "CITOBOT",
            subtitle: "Salud",
            description: "",
            media: <img src={img3} />,
        },
        {
            feature: "PROYECTO",
            title: "ECCO",
            subtitle: "Deporte",
            description: "",
            media: <img src={img4} />,
        },
        {
            feature: "PROYECTO",
            title: "AVIGAN CLOUD",
            subtitle: "Ganadería",
            description: "",
            media: <img src={img5} />,
        },
        {
            feature: "PROYECTO",
            title: "BICLAPP",
            subtitle: "Seguridad",
            description: "",
            media: <img src={img6} />,
        },
        {
            feature: "PROYECTO",
            title: "SERCOR",
            subtitle: "Agricultura",
            description: "",
            media: <img src={img7} />,
        },
        {
            feature: "PROYECTO",
            title: "ESTUDIO BF",
            subtitle: "Moda",
            description: "",
            media: <img src={img8} />,
        },
        {
            feature: "PROYECTO",
            title: "MISAK UNIVERSIDAD",
            subtitle: "Educación",
            description: "",
            media: <img src={img9} />,
        },
    ];

    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailBorderRef = useRef(null);
    const timeRef = useRef(null);

    useEffect(() => {
        if (
            carouselRef.current &&
            sliderRef.current &&
            thumbnailBorderRef.current &&
            timeRef.current
        ) {
            const carouselDom = carouselRef.current;
            const sliderDom = sliderRef.current;
            const thumbnailBorderDom = thumbnailBorderRef.current;
            const timeDom = timeRef.current;

            let timeAutoNext = 7000;

            setRunTimeOut(
                setTimeout(() => {
                    carouselDom.classList.remove('next');
                    carouselDom.classList.remove('prev');
                }, timeRunning)
            );

            setRunNextAuto(
                setTimeout(() => {
                    nextClick();
                }, timeAutoNext)
            );

            thumbnailBorderDom.addEventListener('click', handleThumbnailClick);

            thumbnailBorderDom.appendChild(thumbnailBorderDom.children[0]);
        }

        return () => {
            // Limpiar los event listeners al desmontar el componente
            if (thumbnailBorderRef.current) {
                thumbnailBorderRef.current.removeEventListener('click', handleThumbnailClick);
            }
        };
    }, []);

    const handleThumbnailClick = (event) => {
        const index = Array.from(thumbnailBorderRef.current.children).indexOf(event.target);
        if (index !== -1) {
            showSlider('thumbnail', index);
        }
    };

    const nextClick = () => {
        showSlider('next');
    };

    const prevClick = () => {
        showSlider('prev');
    };

    const showSlider = (type, index) => {
        if (
            carouselRef.current &&
            sliderRef.current &&
            thumbnailBorderRef.current
        ) {
            const carouselDom = carouselRef.current;
            const sliderDom = sliderRef.current;
            const thumbnailBorderDom = thumbnailBorderRef.current;

            let SliderItemsDom = Array.from(sliderDom.children);
            let thumbnailItemsDom = Array.from(thumbnailBorderDom.children);

            const totalItems = content.length;

            if (type === 'next') {
                const nextIndex = (currentSlide + 1) % totalItems;
                sliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                setCurrentSlide(nextIndex);
                carouselDom.classList.add('next');
            } else if (type === 'prev') {
                const prevIndex = (currentSlide - 1 + totalItems) % totalItems;
                sliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                setCurrentSlide(prevIndex);
                carouselDom.classList.add('prev');
            } else if (type === 'thumbnail') {
                const diff = (index - currentSlide + totalItems) % totalItems;

                if (diff > 0) {
                    for (let i = 0; i < diff; i++) {
                        const nextIndex = (currentSlide + 1) % totalItems;
                        sliderDom.appendChild(SliderItemsDom[i]);
                        thumbnailBorderDom.appendChild(thumbnailItemsDom[i]);
                        setCurrentSlide(nextIndex);
                    }
                } else if (diff < 0) {
                    for (let i = 0; i > diff; i--) {
                        const prevIndex = (currentSlide - 1 + totalItems) % totalItems;
                        sliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                        setCurrentSlide(prevIndex);
                    }
                }

                carouselDom.classList.remove('next', 'prev');
            }

            clearTimeout(runTimeOut);
            setRunTimeOut(
                setTimeout(() => {
                    carouselDom.classList.remove('next');
                    carouselDom.classList.remove('prev');
                }, timeRunning)
            );

            clearTimeout(runNextAuto);
            setRunNextAuto(
                setTimeout(() => {
                    nextClick();
                }, timeAutoNext)
            );
        }
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/+573105338818', '_blank');
    };

    return (
        <>
            <div ref={carouselRef} className="carousel">
                <div ref={sliderRef} className="list">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${index === currentSlide ? 'active' : ''}`}
                        >
                            {item.media}
                            <div className="content">
                                <div className="feature">{item.feature}</div>
                                <div className="title">{item.title}</div>
                                <div className="subtitle">{item.subtitle}</div>
                                <div className="description">{item.description}</div>

                                <div className="buttons">
                                    <button
                                        type='button'
                                        onClick={handleWhatsAppClick}
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        Whatsapp
                                        <svg xmlns="http://www.w3.org/2000/svg" height="12" width="10" fill="currentColor" style={{ marginLeft: 8 }} viewBox="0 0 320 512">
                                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                        </svg>
                                        {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="14"
                                            width="14"
                                            fill="currentColor"
                                            className="bi bi-github"
                                            viewBox="0 0 448 512"
                                            style={{ marginLeft: 8 }}>
                                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                        </svg> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div ref={thumbnailBorderRef} className="thumbnail">
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => showSlider('thumbnail', index)}
                        >
                            {item.feature === 'INTRO' ? (
                                <img src={thumbnailVideo} alt={`Thumbnail ${index + 1}`} />
                            ) : (
                                <img src={item.media.props.src} alt={`Thumbnail ${index + 1}`} />
                            )}
                            <div className="content">
                                <div className="title">{item.title}</div>
                                <div className="feature">{item.feature}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="arrows">
                    <button onClick={prevClick}>{prev}</button>
                    <button onClick={nextClick}>{next}</button>
                </div>
            </div>
        </>
    );
};

export default Carousel;
