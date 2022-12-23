import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Mariana',
        email: 'mar@gmail.com'
    }

    test('debe de regresar los valores por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
    });

    test('debe de cambiar el nomre del formulario', () => {
        
        const newValue = 'Abril';

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;

        const target = {
            name: 'name',
            value: newValue 
        }

        
        act( () => {
            onInputChange({target});
            onResetForm();
        });

        // console.log(result.current);

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );
        

    });
});