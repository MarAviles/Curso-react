import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context/Authcontext";
import { Navbar } from "../../../src/ui/components";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en el componente <Navbar/>', () => {

    const contextValue = {
        logged: true,
        logout: jest.fn(),
        user: {
            id: '1334',
            name: 'Swift'
        }
    };

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => {

        render(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.findByText('Swift') ).toBeTruthy();

    });

    test('debe de mostrar el input y navigate cuando se hace click en el boton', () => { 

        render(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const button = screen.getByRole('button');
        fireEvent.click( button )

        expect( contextValue.logout ).toHaveBeenCalled(); 
        expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});
    });

});