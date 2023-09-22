const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
	characters:[],
	planets:[],
	vehicles:[],
	charactersDetails:[],
		},
		actions: {
			fetchCharacters:() => {
				fetch("https://www.swapi.tech/api/people/", {method: "GET"})
				.then((response) => response.json())
				.then((response) => {
					console.log(response)
					setStore({characters:response.results})
				})
			},
			fetchPlanets:() => {
				fetch("https://www.swapi.tech/api/planets/", {method: "GET"})
				.then((response) => response.json())
				.then((response) => {
					console.log(response)
					setStore({planets:response.results})
				}) 
			},
			
			fetchVehicles:() => {
				fetch("https://www.swapi.tech/api/vehicles/", {method: "GET"})
				.then((response) => response.json())
				.then((response) => {
					console.log(response)
					setStore({vehicles:response.results})
				}) 
			},

			getCharacterDetails:(id) => {
				fetch("https://www.swapi.tech/api/people/" + id, {method: "GET"})
				.then((response) => response.json())
				.then((response) => {
					console.log(response)
					setStore({charactersDetails: response.result.properties})
				})		
			},
	
		}	
	};
};

export default getState;
