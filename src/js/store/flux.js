const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      vehicles: [],
      charactersDetails: [],
      vehicleDetails: [],
      planetsDetails: [],
	  favorites: [],
    },
    actions: {
      fetchCharacters: () => {
        fetch("https://www.swapi.tech/api/people/", { method: "GET" })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setStore({ characters: response.results });
          });
      },
      fetchPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/", { method: "GET" })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setStore({ planets: response.results });
          });
      },

      fetchVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles/", { method: "GET" })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setStore({ vehicles: response.results });
          });
      },

      getCharacterDetails: (id) => {
        fetch("https://www.swapi.tech/api/people/" + id, { method: "GET" })
          .then((response) => response.json())
          .then((response) => {
            console.log("Dámaso", response);
            setStore({
              charactersDetails: {
                ...response.result.properties,
                description: response.result.description,
              },
            });
          });
      },

      getVehicleDetails: (id) => {
        fetch("https://www.swapi.tech/api/vehicles/" + id, { method: "GET" })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setStore({ vehicleDetails: response.result.properties });
          });
      },

      getPlanetsDetails: (id) => {
        fetch("https://www.swapi.tech/api/planets/" + id, { method: "GET" })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setStore({ planetsDetails: response.result.properties });
          });
      },

	  addFavorite:(newFavorite) => {
		const store = getStore();
		setStore({
			...store,
			favorites: [...store.favorites, newFavorite]
		})
		console.log(getStore());
	  }, 
    },
  };
};

export default getState;
