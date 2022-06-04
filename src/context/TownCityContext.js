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

        let data = [];
        
        let findElement = data.some(item => item.id === action.peyload.id);

        console.log(data.map(item => item.id ))
        
        
        if(findElement){
            console.log("acest element este deja in array")
            return
        }
        data.push(...state.selectDestination, action.peyload);
        
        console.log(findElement)
        
        let dest = data.slice(0, 3);
        
       

       
       
        return {
            ...state,
            selectDestination: dest
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
                id: 1
            },
            {
                city: "Bucuresti",
                country: "Romania",
                id: 2
            },
            {
                city: "Roma",
                country: "Italia",
                id: 3
            },
            {
                city: "Paris",
                country: "Franta",
                id: 4
            },
            {
                city: "Berlin",
                country: "Germania",
                id: 5
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



   const valueElementState = {
        destination: town.destination,
        spre: town.spre,
        selectCity: selectCity,
        toggleDestination: town.toggleDestination,
        activateToggleDestination: destinationToggle,
        selectDestination: town.selectDestination
    }



    return ( 
        <Town.Provider value={valueElementState}>
            {props.children}
        </Town.Provider>
     );
}
 
export default TownCityContext;