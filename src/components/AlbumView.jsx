// These components will be making separate API calls from the app
// component to serve specific data about a given album
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AlbumView = () => {
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    return (
        <div>
            <p>The id passed was: {id}</p>
            <p>Album Data Goes Here!</p>
        </div>
    )
}

export default AlbumView
