import { useEffect } from "react"

export const Gallery = () => {
    useEffect(() => {
        fetch('/images').then(res => {
            return res.json()
        }).then(res => {
            console.log('GET /images Success!', res)
        }).catch(err => {
            console.log('ERROR on GET /images ERROR:', err)
        })
    }, [])

    return (
        <div>
            SAMPLE IMAGE
        </div>
    )
}
