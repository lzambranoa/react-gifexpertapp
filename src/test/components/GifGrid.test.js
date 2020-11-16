import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); // Finge la llamada a este archivo


describe('Pruebas al componente GifGrid', () => {

    const category = 'One Punch';
    

    test('Debe mostrar correctamente el GifGrid', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se carga images UseFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localohost/prueba',
            title: 'Leonardo'
        },
        {
            id: 'DEF',
            url: 'https://localohost/prueba',
            title: 'Leonardo'
        },
    ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category}/>); 

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
    });
});