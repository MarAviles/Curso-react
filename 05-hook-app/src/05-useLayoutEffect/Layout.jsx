import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {

  const { counter, increment} = useCounter(1);

  const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

  const { author, quote } = !!data && data[0];

  return (
    <>
        <h1>Breaking Bad quotes</h1>
        <hr/>

        {
           isLoading ? <LoadingQuote/> : <Quote quote={ quote } author={ author }/>
        }

      <button 
        onClick={ () => increment() } 
        disabled = { isLoading }
        className='btn btn-primary'>
        Next quote
      </button>

        

    </>
  )
}
