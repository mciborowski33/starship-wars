import axios, { AxiosResponse } from "axios"

const baseUrl: string = 'http://localhost:4000/api';

export const getAllStarships = async (): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const starship: AxiosResponse<ApiDataType> = await axios.get(
			baseUrl + '/starships/get_all_starships'
		);
		return starship;
	} catch (error: any) {
		throw new Error(error)
	}
}
