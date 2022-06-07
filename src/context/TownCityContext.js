import react from "react";
import {createContext, useReducer} from "react";





export const Town = createContext()




const townReducer = (state, action) =>{

    if(action.type === "TOGGLE_DESTINATION"){
        return {
            ...state, 
            toggleDestination: !state.toggleDestination
        }
    }


    if(action.type === "SELECT_DESTINATION"){

        let verifyElement = state.selectDestination.some(item => item.id === action.peyload.city.id);
        let deleteElementInsideDestination = action.peyload.destination ? state.selectDestination.filter(item => item.id !== action.peyload.city.id) : state.selectDestination;
        let validationData = verifyElement ? deleteElementInsideDestination : [...state.selectDestination, action.peyload.city];

       
        return {
            ...state,
            toggleDestination: verifyElement ? false : true,
            selectDestination: validationData.splice(0, 3)
        }
    }




    
    
    
    
    if(action.type === "REMOVE_DESTINATION"){
        let deleteDestination = state.selectDestination.filter(item => item.id !== action.peyload)
        
        
        return {
            ...state,
            selectDestination: deleteDestination
        }
    }
    
    
    
    
    
    if(action.type === "SEARCH"){
        
        
        
        return{ 
            ...state,
            destinationSearch: action.peyload
        }
    }
    
    if(action.type === "SELECT_SPRE"){

        let verifyElement = state.spreDestination.some(item => item.id === action.peyload.city.id);
        let deleteElementInsideDestination = action.peyload.spre ? state.spreDestination.filter(item => item.id !== action.peyload.city.id) : state.spreDestination;
        let validationData = verifyElement ? deleteElementInsideDestination : [...state.spreDestination, action.peyload.city];

       
        return {
            ...state,
            toggleSpre: verifyElement ? false : true,
            spreDestination: validationData.splice(0, 3)
        }

    }


    if(action.type === "TOGGLE_SPRE"){

        return{
            ...state,
            toggleSpre: !state.toggleSpre
        }
    }



    if(action.type === "REMOVE_SPRE"){
        let deleteDestination = state.spreDestination.filter(item => item.id !== action.peyload)
        

        return {
            ...state,
            spreDestination: deleteDestination
        }
    }


    if(action.type === "SEARCH_SPRE"){


        return{ 
            ...state,
            selectSpre: action.peyload
        }
    }

}





const TownCityContext = (props) => {
    
   const defaultState = {
        destination: [
            {
                city: "Chisinau",
                country: "Moldova",
                id: 1
            },
            {
                city: "Viena",
                country: "Italia",
                id: 2
            },
            {
                city: "Bucuresti",
                country: "Romania",
                id: 3
            },
            {
                city: "Roma",
                country: "Italia",
                id: 4
            },
            {
                city: "Paris",
                country: "Franta",
                id: 5
            },
            {
                city: "Berlin",
                country: "Germania",
                id: 6
            },
        ],
        toggleDestination: false,
        selectDestination: [],
        destinationSearch: [
            {
                city: "Chisinau",
                country: "Moldova",
                id: 1
            },
            {
                city: "Viena",
                country: "Italia",
                id: 2
            },
            {
                city: "Bucuresti",
                country: "Romania",
                id: 3
            },
            {
                city: "Roma",
                country: "Italia",
                id: 4
            },
            {
                city: "Paris",
                country: "Franta",
                id: 5
            },
            {
                city: "Berlin",
                country: "Germania",
                id: 6
            },
        ],



        spre: [
            {
                city: "Rezina",
                country: "Moldova",
                id: 1
            },
            {
                city: "Juventus",
                country: "Italia",
                id: 2
            },
            {
                city: "Sulina",
                country: "Romania",
                id: 3
            },
            {
                city: "Napoli",
                country: "Italia",
                id: 4
            },
            {
                city: "Nantes",
                country: "Franta",
                id: 5
            },
            {
                city: "Frankfurd",
                country: "Germania",
                id: 6
            },
        ],
        toggleSpre: false,
        spreSearch:  [
            {
                city: "Rezina",
                country: "Moldova",
                id: 1
            },
            {
                city: "Juventus",
                country: "Italia",
                id: 2
            },
            {
                city: "Sulina",
                country: "Romania",
                id: 3
            },
            {
                city: "Napoli",
                country: "Italia",
                id: 4
            },
            {
                city: "Nantes",
                country: "Franta",
                id: 5
            },
            {
                city: "Frankfurd",
                country: "Germania",
                id: 6
            },
        ],
        spreDestination: [],
        
    }

    const [town, disspach] = useReducer(townReducer, defaultState);







    const selectCity = (item) =>{
        disspach({type: "SELECT_DESTINATION", peyload: item})
    }


    const destinationToggle = () =>{
        disspach({type: "TOGGLE_DESTINATION"})
    }


    const removeDestination = (id) =>{
        disspach({type: "REMOVE_DESTINATION", peyload: id})
    }



    const searchDestination = (items) =>{
        disspach({type: "SEARCH", peyload: items})
    }

    // functionSpre

    const activateSpre = () =>{
        disspach({type: "TOGGLE_SPRE"})
    }


    const selectSpre = (item) =>{
        disspach({type: "SELECT_SPRE", peyload: item})
    }


    const removeSpre = (id) =>{
        disspach({type: "REMOVE_SPRE", peyload: id})
    }


    const searchSpre = (items) =>{
        disspach({type: "SEARCH_SPRE", peyload: items})
    }



   const valueElementState = {
        destination: town.destination,
        spre: town.spre,
        selectCity: selectCity,
        toggleDestination: town.toggleDestination,
        activateToggleDestination: destinationToggle,
        selectDestination: town.selectDestination,
        removeDestination: removeDestination,
        searchDestination: searchDestination,
        destinationSearch: town.destinationSearch,
        toggleSpre: town.toggleSpre,
        activateSpre: activateSpre,
        selectSpre: selectSpre,
        removeSpre: removeSpre,
        searchSpre: searchSpre,
        spreDestination: town.spreDestination,
    
    }



    return ( 
        <Town.Provider value={valueElementState}>
            {props.children}
        </Town.Provider>
     );
}
 
export default TownCityContext;