import { useFetchGifs } from '../hooks/useFetchGifs';
import { GitItem } from './GitItem';

export const GitGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargando...</h2> )
        }

        <div className='card-grid'>
          {
            images.map( ( image ) => {
              return (
                <GitItem 
                  key={ image.id }
                  { ...image }
                />
              )
            })
          }
        </div>

    </>
  )
}
