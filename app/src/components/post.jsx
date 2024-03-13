import TimeAgo from 'react-timeago';
import {format} from 'date-fns'
import { Link } from 'react-router-dom';

export default function Post({_id,title, cover, content, createdAt, author}) {
  return (
    <div className='post'>
        <div className='image'>
          <Link to={`/post/${_id}`}>
            <img src={`${cover}`} alt='entry-img'></img>
          </Link>
        </div>
        <div className='texts'>
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>         
        </Link>
        
        <p className='info'>
          <a className='author' href='/'> {author.name}</a>
          <time>{format(new Date(createdAt), "MMM d, yyyy")}</time>
          <TimeAgo date={createdAt}/>
        </p>
        </div>
      </div>
  )
}