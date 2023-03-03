// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState} from 'react'
import { useParams } from 'react-router-dom'

const ArtistView = () => {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <p>The id passed was: {id}</p>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView
