import { useState, Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { DataContext } from './context/DataContext'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'
import { createResource as fetchData } from './helper'



function App(){
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState(null)
	let [searchTerm, setSearchTerm] = useState([])

	useEffect(() => {
		if (searchTerm) {
		  document.title=`${searchTerm} Music`
		  console.log(fetchData(searchTerm))
		  setData(fetchData(searchTerm))
	  }
	  }, [searchTerm])
	
	
	  const handleSearch = (e, term) => {
		e.preventDefault()
		setSearchTerm(term)
	  }

	return (
        <div className="App">
			{message}
			<Router>
				<Routes>
					<Route path="/" element={
						<Fragment>
							<SearchBar handleSearch = {handleSearch}/>
						
							<DataContext.Provider value={data}>
								<Gallery />
							</DataContext.Provider>
						</Fragment>
					}/>
					<Route path="/album/:id" element={<AlbumView />} />
					<Route path="/artist/:id" element={<ArtistView />} />
				</Routes>
			</Router>
			
		</div>
  	);
}

export default App;