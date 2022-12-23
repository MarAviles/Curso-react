import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el componente <authReducer/>', () => {

    const initialState = [{
        logged: false,
    }]

    test('debe de retornar el estado por defecto', () => {

        const newState = authReducer(initialState, {});
        expect( newState ).toBe(initialState);
    });

    test('debe de (login) llamar el login autenticar y establecer el user', () => { 

        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: 'Mariana'
            }
        }

        const newState = authReducer(initialState, action);
        expect( newState.logged ).toBeTruthy();
        expect( newState.user ).toBe( action.payload );
    });


    test('debe de (logout) borrar el name del usuario y logged en false', () => {

        const action = {
            type: types.logout
        }

        const newState = authReducer(initialState, action);
        expect( newState.logged ).toBe(false);
    });
});