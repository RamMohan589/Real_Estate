```javascript

const types = ["buy" , "rent"]

const SearchBar = () => {
const [query , setQuery] = useState({
    type : 'buy',
    location : "",
    minPrice : 0,
    maxPrice : 0
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="searchBar_type">
        <button onClick={()=>switchType("buy")} >Buy</button>
        <button onClick={()=>switchType("rent")} >Rent</button>
/* But here the DRY  so make the types in a seperate array and and make map functionality*/

        {
          types.map((type)=>{
            return <button key={type} onClick={()=>switchType(type)} className={query.type === type ? "active" : ""} > {type}</button>
          })
        } 
/* Note : we need to define this `types` outside the SearchBar component */

      </div>
    </div>
  );
};

export default SearchBar;



```