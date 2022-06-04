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

        let verifyElement = state.selectDestination.some(item => item.id === action.peyload.id);
        let validationData = verifyElement ? state.selectDestination : [...state.selectDestination, action.peyload]
       
        return {
            ...state,
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
        spre: ["Atena", "Berlin", "Budapesta", "Bucuresti", "Cahul"],
        toggleDestination: false,
        selectDestination: []
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



   const valueElementState = {
        destination: town.destination,
        spre: town.spre,
        selectCity: selectCity,
        toggleDestination: town.toggleDestination,
        activateToggleDestination: destinationToggle,
        selectDestination: town.selectDestination,
        removeDestination: removeDestination
    }



    return ( 
        <Town.Provider value={valueElementState}>
            {props.children}
        </Town.Provider>
     );
}
 
export default TownCityContext;