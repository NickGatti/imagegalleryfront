import { useState, useEffect } from "react";
import { GalleryImageModal } from "./GalleryImageModal";
import './css/Gallery.css';

export const Gallery = ({ fileSubmitted, setFileSubmitted }) => {
    const [galleryImages, setGalleryImages] = useState(null);
    const [modalOpen, setModalIsOpen] = useState(false);
    const [modalSrcUrl, setModalSrcUrl] = useState(null);

    const openModal = (event, url) => {
        event.stopPropagation();
        setModalIsOpen(true);
        setModalSrcUrl(url);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setModalSrcUrl(null);
    };

    useEffect(() => {
        //I should make a hook for this
        fetch('/images').then(res => {
            return res.json();
        }).then(res => {
            console.log('Success GET /images:', res);
            setGalleryImages(res.images.map(({ url }, idx) => {
                return <img onClick={event => openModal(event, url)} key={idx} src={url} />
            }));
        }).catch(err => {
            console.log('Error GET /images:', err);
        })
        setFileSubmitted(false);
    }, [fileSubmitted]);

    return (
        <div onClick={closeModal} className="container">
            {galleryImages}
            {modalOpen ? <GalleryImageModal url={modalSrcUrl} /> : null}
        </div>
    );
};
