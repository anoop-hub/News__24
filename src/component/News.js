import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component"






export default function News(props) {

  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [totalResults, setTotalResults] = useState(0)



  useEffect(() => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f0a333daf6bf4684b3084106b889a287&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        props.setProgress(40);
        const json = await response.json();
        console.log(json);
        setArticles(json.articles);
        setPage(1)
        setTotalResults(json.totalResults)
        props.setProgress(70);
        setLoading(false)
        props.setProgress(100)
      } catch (error) {
        console.log("error", error);
      }
      document.title = `${toCapitalize(props.category)}-Top Headlines`
    };

    fetchData();
  }, []);


  /*const  clickPrevious=async()=>{

    console.log("dn,fndfnk");
    
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f0a333daf6bf4684b3084106b889a287&page=${page-1}&pageSize=${props.pageSize}`;
    setLoading(true)
        const response = await fetch(url);
        const json = await response.json();
        
        setArticles(json.articles);
        setPage(page-1);
        setLoading(false)

  }




 const  clickNext = async () => {

        console.log("next");

    
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=f0a333daf6bf4684b3084106b889a287&page=${page+1}&pageSize=${props.pageSize}`;
      setLoading(true)
        const response = await fetch(url);
        const json = await response.json();
        
        setArticles(json.articles);
        setPage(page+1)
        
        setLoading(false)

      

    
  }*/

  const fetchMoreData = async () => {
    console.log("next");


    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=fa562c8ea3c44482a972a8a01e352261&page=${page + 1}&pageSize=${props.pageSize}`;
    
    const response = await fetch(url);
    const json = await response.json();

    setArticles(json.articles.concat(json.articles));
    setPage(page + 1)

    
  };


  const toCapitalize=(string)=>{
return string.charAt(0).toUpperCase()+string.slice(1)
  }




  return (
    <>


<h1 className='text-center text-light' style={{margin:"70px 0 4px"}}>Top {toCapitalize(props.category)} Headlines </h1>
          {loading  }

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles !== totalResults}
        loader={<Spinner />}
      >
        <div className="container ">
         
          <div className="row my-5">

            {articles.map((element) => {

              return <div className="col-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,150):" "} 
                image={element.urlToImage ? element.urlToImage : "https://www.thestatesman.com/wp-content/uploads/2022/06/iStock-1321948884.jpg"}
                 url={element.url} author={element.author?element.author:"unknown"} publish={new Date(element.publishedAt).toGMTString()}  />

              </div>

            })}

          </div>
        </div>
      </InfiniteScroll>

    </>
  )
}
