import './App.css';
import{useEffect} from 'react';
import { useState } from 'react';
import News from './News';
function App() {


  let [articles,setArticles] = useState([]);
  let [categorey,setCategory] = useState("india");
  const [selectedDate, setSelectedDate] = useState("");
  

  useEffect(() => {
    const formattedDate = selectedDate ? selectedDate.toISOString().slice(0, 10) : "2024-04-06";
    console.log("Formatted Date:", formattedDate); // Log the formatted date
    fetch(`https://newsapi.org/v2/everything?q=${categorey}&from=${formattedDate}&apiKey=bceec75cd0244d51bf20392d31b9a2f0`)
      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categorey, selectedDate]);
  


  return (
    <div className="App">
      <header className="header">
        <div><h1>Short News</h1></div>
        
        <div className='lastHeader'>
          <div className='date'> 
          <input type='date' onChange={(e) => setSelectedDate(new Date(e.target.value))} />
          </div>

          <div className='searchBar'>
          <input type="text" onChange={(event)=>{
          if(event.target.value!=="")
          {
            setCategory(event.target.value);
          }
          else{
            setCategory("india")
          }
         
        }} placeholder="Search News"/>
          </div>

        
        </div>
      </header>

      <section className="news-article">
    

        {

articles && articles.length !== 0 ?
  articles.map((article, index) => {
    return (
      <News key={index} article={article}/>
    )
  }) :
  <h1>News Not Found For Searched Text</h1>
}
      
      </section>
    </div>
  );
}

export default App;
