import { useState } from 'react'

const GalleryItem = (props) => {
    let [view, setView] = useState(false)

    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            
            <p>Title</p>
            <p>Artist</p>
            <p>Release Date</p>
        </div>
    )
}

export default GalleryItem
