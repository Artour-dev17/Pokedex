import {useState} from "react";



type onSearchProps ={
    onSearch: (searchTerm: string) => void;
}

function SearchForm({onSearch,}: onSearchProps){
    const [searchTerm, setSearchTerm] = useState("")

   const handleSearch = () => {
        onSearch(searchTerm);
   }





    return (
        <div>
        <input
            value={searchTerm}
            placeholder="Pokemon name. . ."
            onChange={(event)=>
                                        setSearchTerm(event.target.value)}
        />
        <button
            onClick={handleSearch}
        >
            Search
        </button>
        </div>
    )
}
export default SearchForm