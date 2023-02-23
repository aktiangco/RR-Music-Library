import GalleryItem from './GalleryItem'

const Gallery = (props) => {
    return (
        <div>
            
            {props.data.map((song) => {
                return (
                    <GalleryItem songDetails={song}/>
                )
            })}
        </div>
    )
}

export default Gallery
