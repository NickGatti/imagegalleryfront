import { useState, useEffect } from "react"

export const Gallery = () => {
    const [galleryImages, setGalleryImages] = useState()

    useEffect(() => {
        fetch('/images').then(res => {
            return res.json()
        }).then(res => {
            console.log('GET /images Success!', res)
            setGalleryImages(res.images.map((image, idx) => {
                return <img key={idx} src={image.url} />
            }))

        }).catch(err => {
            console.log('ERROR on GET /images ERROR:', err)
        })
    }, [])

    return (
        <div>
            {galleryImages}
        </div>
    )
}
