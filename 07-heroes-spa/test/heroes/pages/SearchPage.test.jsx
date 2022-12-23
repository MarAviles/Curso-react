import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/herores/pages/SearchPage";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

beforeEach(() => jest.clearAllMocks());


describe('Prueba en el componente <SearchPage/>', () => {

    test('debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar a Batman y el input con el valor del queryString', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=Batman']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('Batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/asset/heroes/dc-batman.jpg');

        const showSearch = screen.getByLabelText('showSearch');
        expect( showSearch.style.display ).toBe('none');
    });

    test('debe de mostrar un error si no se encuentra el hero', () => { 
        render(
            <MemoryRouter initialEntries={['/search?q=Pikachu']}>
                <SearchPage/>
            </MemoryRouter>
        );
        
        const showError = screen.getByLabelText('showError');
        expect( showError.style.display ).toBe('');

    });


    test('debe de llamar al navigate a la pantalla nueva', () => {

        const inputValue = 'Batman'

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        ); 

        const input = screen.getByRole('textbox');
        const form = screen.getByLabelText('form');

        fireEvent.input( input, { target: { value: inputValue}});
        fireEvent.submit( form );

        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${inputValue}`);
        // expect( mockedUseNavigate ).toHaveBeenCalledWith()
    })
});