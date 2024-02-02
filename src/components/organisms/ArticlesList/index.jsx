import { useMemo, useState } from 'react'
import Pagination from '@molecules/Pagination'
import ArticleItem from '@molecules/Cards/Article'
import usePageWidth from '@hooks/usePageWidth'

import './styles.scss'

const ArticlesList = ({ articlesData, filtered }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filterCurrentPage, setFilterCurrentPage] = useState(1)

  const windowWidth = usePageWidth()
  const pageSize = windowWidth <= 600 ? 3 : 6

  const currentList = useMemo(() => {
    const firstPageIndex = filtered ? ((filterCurrentPage - 1) * pageSize) : ((currentPage - 1) * pageSize);
    const lastPageIndex = firstPageIndex + pageSize;
    return articlesData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filterCurrentPage, pageSize, articlesData]);

  return (
    <div className='articleList__container'>
      {currentList.length > 0 ? ( 
        <>
          <ul className='articleList'>
            {currentList.map(article => {
              return (
                <ArticleItem
                  key={article.id}
                  id={article.id}
                  image={article.image}
                  title={article.title}
                  description={article.description} 
                  userImage={article.userImage}
                  userName={article.userName}
                  plublishedAt={article.publishedAt}
                />
              )
            })}
          </ul>
          <Pagination
            currentPage={filtered ? filterCurrentPage : currentPage}
            totalCount={articlesData.length}
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
      : <p className='articlesList--empty'>No results found.</p>}
    </div>
  );
};

export default ArticlesList;