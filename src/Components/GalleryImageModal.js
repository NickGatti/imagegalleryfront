import './css/Gallery.css';

export const GalleryImageModal = ({ url }) => {
    console.log('url', url)
    return (
        <div className="modal">
            <img src={url} />
        </div>
    )
};
