import axios, { AxiosResponse } from "axios"

const baseUrl: string = 'http://localhost:4000/api';

export const getStarship = async (): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const starship: AxiosResponse<ApiDataType> = await axios.get(
			baseUrl + '/starships/get_starship'
		);
		return starship;
	} catch (error: any) {
		throw new Error(error)
	}
}
