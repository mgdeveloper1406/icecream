import { useMemo, useState } from 'react'
import Pagination from '@molecules/Pagination'
import Recipe from '@molecules/Cards/Recipe'
import NotFound from '@molecules/NotFound'
import usePageWidth from '@hooks/usePageWidth'

import './styles.scss'

const AllRecipes = ({ recipesData, filtered }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filterCurrentPage, setFilterCurrentPage] = useState(1)

  const windowWidth = usePageWidth()

  const getPageSize = () => {
    if (windowWidth < 700) {
      return 3
    } else if (windowWidth < 1040) {
      return 6
    } else if (windowWidth < 1330) {
      return 9
    } else {
      return 12
    }
  }
  
  const pageSize = getPageSize()

  const currentList = useMemo(() => {
    const firstPageIndex = filtered ? ((filterCurrentPage - 1) * pageSize) : ((currentPage - 1) * pageSize);
    const lastPageIndex = firstPageIndex + pageSize;
    return recipesData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filterCurrentPage, pageSize, recipesData]);

  return (
    <div className='allRecipes__container'>
      {currentList.length > 0 ? ( 
        <>
          <ul className='allRecipes'>
            {currentList.map(recipe => {
              return (
                <Recipe
                  key={recipe.id}
                  {...recipe}
                  cardSize='small'
                />
              )
            })}
          </ul>
          <Pagination
            currentPage={filtered ? filterCurrentPage : currentPage}
            totalCount={recipesData.length}
            pageSize={pageSize}
            onPageChange={filtered ? (page => {
              setFilterCurrentPage(page) 
              window.scrollTo({top: 100, left: 100, behavior: 'smooth'})
            } ) : (page => {
              setCurrentPage(page)
              window.scrollTo({top: 100, left: 100, behavior: 'smooth'})
            })}
          />
        </>)
      : <NotFound text='No recipes found' /> }
    </div>
  )
}

export default AllRecipes