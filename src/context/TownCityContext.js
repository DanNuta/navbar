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
        let deleteElementInsideDestination = action.peyload.destination ? state.spreDestination.filter(item => item.id !== action.peyload.city.id) : state.spreDestination;
        let validationData = verifyElement ? deleteElementInsideDestination : [...state.spreDestination, action.peyload.city];

        console.log("Action", deleteElementInsideDestination)
       
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
            spreSearch: action.peyload
        }
    }






    // -----------------SWICH------------------------


    if(action.type === "SWICH"){

        let destination = state.selectDestination;
        let spreEl = state.spreDestination;
        let therdElement;

        therdElement = destination
        destination = spreEl
        spreEl = therdElement

        return{
            ...state,
            selectDestination: destination,
            spreDestination: spreEl
        }
    }

    //---------------------select people -------------------------------------

    if(action.type === "TOGGLE_PEOPLE"){

        
        return{
            ...state,
            togglePeople: !state.togglePeople
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


        togglePeople: false
        
    }

    const [town, disspach] = useReducer(townReducer, defaultState);



console.log("ElementContext")



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


    const spreSearchSelect = (items) =>{
        disspach({type: "SEARCH_SPRE", peyload: items})
    }



    //------------------swich sity-----------------------------


    const swhichCity = () =>{
        disspach({type: "SWICH"})
    }


    //-----------------------people select----------------------------


    const togglePeopleElement = () =>{
        disspach({type: "TOGGLE_PEOPLE"})
    }



   const valueElementState = {
       //-------destination-------------------------
        destination: town.destination,
        toggleDestination: town.toggleDestination,
        selectDestination: town.selectDestination,
        destinationSearch: town.destinationSearch,
        activateToggleDestination: destinationToggle,
        removeDestination: removeDestination,
        searchDestination: searchDestination,
        selectCity: selectCity,

        //-------spre-----------
        spre: town.spre,
        toggleSpre: town.toggleSpre,
        spreDestination: town.spreDestination,
        searchSpre: town.spreSearch,
        activateSpre: activateSpre,
        selectSpre: selectSpre,
        removeSpre: removeSpre,
        spreSearchSelect: spreSearchSelect,

        //----------swich----------------
        swich: swhichCity,

        //-----------people--------------
        togglePeople: town.togglePeople,
        changeTogglePeople: togglePeopleElement


    
    }



    return ( 
        <Town.Provider value={valueElementState}>
            {props.children}
        </Town.Provider>
     );
}
 
export default TownCityContext;