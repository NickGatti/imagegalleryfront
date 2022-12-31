import { useState, useEffect } from "react";
import './css/Gallery.css';
import { GalleryImageModal } from "./GalleryImageModal";

export const Gallery = ({fileSubmitted, setFileSubmitted}) => {
    const [galleryImages, setGalleryImages] = useState(null);
    const [modalOpen, setModalIsOpen] = useState(false);
    const [modalSrcUrl, setModalSrcUrl] = useState(null);

    const openModal = (event, url) => {
        event.stopPropagation();
        setModalIsOpen(true);
        setModalSrcUrl(url);
    };

    const closeModal = event => {
        setModalIsOpen(false);
        setModalSrcUrl(null);
    }

    useEffect(() => {
        fetch('/images').then(res => {
            return res.json();
        }).then(res => {
            console.log('GET /images Success!', res);
            setGalleryImages(res.images.map(({ url }, idx) => {
                return <img onClick={event => openModal(event, url)} key={idx} src={url} />
            }));
        }).catch(err => {
            console.log('ERROR on GET /images ERROR:', err);
        })
        setFileSubmitted(false)
        console.log('ran X many times.')
    }, [fileSubmitted]);

    return (
        <div onClick={closeModal} className="container">
            {galleryImages}
            {modalOpen ? <GalleryImageModal url={modalSrcUrl}/> : null}
        </div>
    )
};
