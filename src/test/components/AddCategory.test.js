import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas sobre el <Addcategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => { // aca viene todo lo que requiere qe se reinicialize
        jest.clearAllMocks();  //limpia las simulaciones
        wrapper = shallow(<AddCategory  setCategories={ setCategories } />); 
    });

    test('Debe mostar correctamente al componente', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe cambiar el contenido del input', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';


        input.simulate('change', {
            target: {
                value
            }
        });

        expect( wrapper.find('p').text().trim() ).toBe( value );
    });

    test('No debe postear la información de onSubmit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Hola Leonardo';

        //1. Simular el inputChange
        wrapper.find('input').simulate('change', {
            target: {
                value
            }
        });

        //2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. SetCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalled();

        // El evento se llama un N numero de veces
        expect( setCategories ).toHaveBeenCalledTimes(1);

        // Que el valor llamado sea una Funcion
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        // 4. el valor del input debe de estar en ''
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
});
