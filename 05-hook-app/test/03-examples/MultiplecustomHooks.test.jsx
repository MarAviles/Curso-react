import { fireEvent, render, screen } from "@testing-library/react";
import { MultiplecustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch.js');
jest.mock('../../src/hooks/useCounter.js');

describe('Pruebas en MultipleCusstomHooks', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('debe de mostrar el componente por defecto', () => {
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true
        })
        
        render( <MultiplecustomHooks/>);

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('Breaking Bad quotes') );

        const nexButton = screen.getByRole('button', {name: 'Next quote'});
        expect( nexButton.disabled ).toBeTruthy();
        
    });

    test('debe de mostrar un quote', () => { 
        useFetch.mockReturnValue({
            data: [{ author: 'Mariana', quote: 'Hola Mundo'}],
            isLoading: false
        });

        render( <MultiplecustomHooks/>);
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Mariana') ).toBeTruthy();

    });

    test('debe de llamar la funcion de incrementar', () => { 

        useFetch.mockReturnValue({
            data: [{ author: 'Mariana', quote: 'Hola Mundo'}],
            isLoading: false
        });

        render( <MultiplecustomHooks/>);
        const nexButton = screen.getByRole('button', {name: 'Next quote'})

        fireEvent.click( nexButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });
})