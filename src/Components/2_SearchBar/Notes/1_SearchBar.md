``` javascript
1. As we can see here required 2 divs one is for buy and rent another is for input form for search.

2.
const SearchBar = () => {
  return (
    <div className='searchBar'>
        <div className="searchBar_type">
                <button>Buy</button>
                <button>Rent</button>
        </div>      
    </div>
  )
}

3.
const SearchBar = () => {
  return (
    <div className='searchBar'>
/*1. This is for buy and rent div*/
        <div className="searchBar_type"></div>
/*2. This is for search div*/
        <form>
          <input type="text" name='location' placeholder='City Location' />
          <input type="number" name='minPrice' min={0} max={10000000} placeholder='Min Price' />
          <input type="number" name='maxPrice'  min={0} max={10000000} placeholder='Max Price' />
        </form>      
    </div>
  )
}



```