import { useState } from 'react'
import AdvertisingCard from '@molecules/Cards/Advertising'
import ArticlesList from '@organisms/ArticlesList'
import Newsletter from '@organisms/Newsletter'
import TitleAndSearch from '@organisms/TitleAndSearch'
import TastyRecipes from '@organisms/TastyRecipes'
import RecipesData from '@api/RecipesData.json'
import AdvertisingData from '@api/AdvertisingData'
import { articles } from '@api/articles'

import './styles.scss'

const Blog = () => {

  const [articlesData, setArticlesData] = useState(articles)
  const [filtered, setFiltered] = useState(false)

  const filterArticles = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setArticlesData(articles)
      setFiltered(false)
    } else {
      const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.userName.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setArticlesData(filteredArticles)
      setFiltered(true)
    }
  }

  return (
    <div className='blogPage'>
      <TitleAndSearch 
        filterData={filterArticles}
        title='Blog & Article'
        searchFor='articles'
      />
      <div className='blogPage__mainContent'>
        <ArticlesList articlesData={articlesData} filtered={filtered} />
        <aside className='blogPage__aside'>
          <AdvertisingCard data={AdvertisingData} />
          <TastyRecipes data={RecipesData.slice(20, 23)} />
        </aside>
      </div>
      <Newsletter />
    </div>
  )
}

export default Blog