import { types } from "../../../src/auth/types/types";

describe('Pruebas en types', () => {
    test('debe de regresar los types definidos', () => {

        expect(types).toEqual({
            login: '[Auth] Loging',
            logout: '[Auth] Logout'
        })
    });
});