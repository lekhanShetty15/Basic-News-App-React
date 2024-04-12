export default function News(props)

{
return(

        <div className="News">
            <div className="news-Img">
                <img src={props.article.urlToImage} alt="No Image"/>
            </div>

            <h1>{props.article.title}</h1>
            <p>{props.article.description?.substring(0,100).concat("...")}<a target="blank" href={props.article.url}>Read More</a></p>
            
            <div className="source">
                <p>Author : {props.article.author}</p>
                <p className="name">{props.article.source.name}</p>
            </div>
        </div>
    );
}
