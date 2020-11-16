import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';



describe('Pruebas en GifGridItem', () => {

    
    const url = 'https://localhost/algo.jpg';
    const title = 'Un titulo';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Debe mostrar el <GifGridItem /> correctamente', () => {

        
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe  tner un parrafo con el title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim()).toBe( title );
    });

    test('Debe tener una imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('Debe tener en el div una clase animate-fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate_fadeIn') ).toBe( false );
    });
});
