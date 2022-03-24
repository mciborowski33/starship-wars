interface IStarship {
	_id: string
	name: string
	crew_number: number
	guns: number
	stores_fighters: boolean
}

interface StarshipProps {
	starship: IStarship
}

type ApiDataType = {
	message: string
	status: string
	starships: IStarship[]
	starship?: IStarship
}
