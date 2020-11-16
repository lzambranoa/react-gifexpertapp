const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGifs } = require("../../hooks/useFetchGifs");


describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });

    test('Debe retorna un arreglo de imgs y el loading en false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        await waitForNextUpdate();

        const { data, loading } = result.current;
        
        expect( data.length ).toEqual(10);
        expect( loading ).toBe(false);
    });
});