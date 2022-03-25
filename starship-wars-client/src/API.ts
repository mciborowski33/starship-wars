import axios, { AxiosResponse } from "axios"

const baseUrl: string = 'http://localhost:4000/api';

export const getAllStarships = async (page: number = 1): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const starships: AxiosResponse<ApiDataType> = await axios.get(
			baseUrl + `/starships/get_all_starships?page=${page}`
		);
		return starships;
	} catch (error: any) {
		throw new Error(error)
	}
};

export const drawStarships = async (): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const starships: AxiosResponse<ApiDataType> = await axios.get(
			baseUrl + `/starships/draw_starships`
		);
		return starships;
	} catch (error: any) {
		throw new Error(error)
	}
};

export const getStarshipsCount = async (): Promise<AxiosResponse<ApiDataType>> => {
	try {
		const starshipsCount: AxiosResponse<ApiDataType> = await axios.get(
			baseUrl + `/starships/get_starships_count`
		);
		return starshipsCount;
	} catch (error: any) {
		throw new Error(error)
	}
};
