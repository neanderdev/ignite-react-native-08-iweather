import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse"
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse"
import { render, screen, waitFor } from "@__tests__/utils/customRender"

import { Dashboard } from "@screens/Dashboard"

import { api } from "@services/api"

import { saveStorageCity } from "@libs/asyncStorage/cityStorage"

describe("Screen: Dashboard", () => {
    it('should be show city weather', async () => {
        jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });

        const city = {
            id: '1',
            name: 'Rio do Sul, BR',
            latitude: 123,
            longitude: 456
        }

        await saveStorageCity(city)

        render(<Dashboard />)

        const cityName = await waitFor(() => screen.findByText(/rio do sul/i));
        expect(cityName).toBeTruthy()
    })

    it('should be show another selected weather city', async () => {
        const city = {
            id: '1',
            name: 'Rio do Sul, BR',
            latitude: 123,
            longitude: 456
        }

        await saveStorageCity(city)

        jest.spyOn(api, 'get')
            .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
            .mockResolvedValueOnce({ data: mockCityAPIResponse })
            .mockResolvedValueOnce({ data: mockWeatherAPIResponse })
    })
})
