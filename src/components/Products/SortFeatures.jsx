
import { useSearchParams } from 'react-router-dom'

const SortFeatures = () => {
  const [searchParams, setSearchParams] = useSearchParams()


  const handleSortChange = (e) =>{
    const sortBy = e.target.value;
    searchParams.set("SortBy",sortBy)
    setSearchParams(searchParams)
  }

  return (
    <div className='mb-4 flex items-center justify-end'>
      <select onChange={handleSortChange} value={searchParams.get("SortBy") || ""} className='border focus:outline-none p-2 rounded-md' name="" id="sort">
        <option value="">Default</option>
        <option className='' value="priceAsc">Price : Low to High</option>
        <option value="priceDsc">Price : High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  )
}

export default SortFeatures