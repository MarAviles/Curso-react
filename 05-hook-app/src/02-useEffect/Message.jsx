import React, { useEffect } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState(second)

    useEffect(() => {

        const onMouseMove = ( { x, y } ) => {
            const coords = { x, y }
            console.log(coords);
        }
        
        window.addEventListener( 'mousemove', onMouseMove );

      return () => {
        window.removeEventListener( 'mousemove', onMouseMove );
      }

    }, [])
    

  return (
    <>
        <h3>Usuario ya existe</h3>
        { JSON.stringify( coords ) }
    </>
  )
}
