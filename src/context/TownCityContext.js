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


    if(action.type === "TOGGLE_ECONOM_BUSSINESS"){

        return{
            ...state,
            toggleBussinessEconom: action.peyload
        }
    }



    if(action.type === "NUMBER_PEOPLE_INCREMENT"){

        if(action.peyload === "adult"){

            let incrementAdult = state.adult < 9 ? state.adult +1 : state.adult;
            return{
                ...state,
                adult: incrementAdult
            }
        }


        if(action.peyload === "copil"){
            let incrementAdult = state.copil < 9 ? state.copil +1 : state.copil;
            return{
                ...state,
                copil: incrementAdult
            }
        }




        if(action.peyload === "bebelus"){
            let incrementAdult = state.bebelus < 9 ? state.bebelus +1 : state.bebelus;
            return{
                ...state,
                bebelus: incrementAdult
            }
        }
  
    }





    if(action.type === "NUMBER_PEOPLE_DECREMENT"){


        

        if(action.peyload === "adult"){

            console.log(action.peyload)

            let incrementAdult = state.adult <= 9 ? state.adult -1 : state.adult;
            return{
                ...state,
                adult: incrementAdult
            }
        }


        if(action.peyload === "copil"){
            let incrementAdult = state.copil <= 7 ? state.copil -1 : state.copil;
            return{
                ...state,
                copil: incrementAdult
            }
        }




        if(action.peyload === "bebelus"){
            let incrementAdult = state.bebelus <= 1 ? state.bebelus -1 : state.bebelus;
            return{
                ...state,
                bebelus: incrementAdult
            }
        }
  
    }


     //--------------------- canedar -------------------------------------


     if(action.type === "TOGGLE_CALENDAR"){
         return {
             ...state, 
             toggleCalendar: !state.toggleCalendar
         }
     }




}





const TownCityContext = (props) => {
    
   const defaultState = {


   //----------- din ------------------------------------
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


        //------------------- spre -------------------------

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


        // ------------------------people ---------------------------------
        togglePeople: false,
        toggleBussinessEconom: false,
        adult: 0,
        copil: 0,
        bebelus: 0,

         // ------------------------calendar ---------------------------------

         toggleCalendar: false,


        
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


    const economBussinessToggleFn = (bool) =>{
        disspach({type: "TOGGLE_ECONOM_BUSSINESS", peyload: bool})
    }


    const numberPeopleFn = (element) =>{
        disspach({type: "NUMBER_PEOPLE_INCREMENT", peyload: element})
    }


    const numberDecrementFn = (element) =>{
        disspach({type: "NUMBER_PEOPLE_DECREMENT", peyload: element})
    }

    //-----------------------people select----------------------------

    const toggleCalendarFn = () =>{
        disspach({type: "TOGGLE_CALENDAR"})

        console.log("SAlut din Toggle calendar")

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
        changeTogglePeople: togglePeopleElement,

        toggleBussinessEconom: town.toggleBussinessEconom,
        economBussinessToggleFn: economBussinessToggleFn,
        adult: town.adult,
        copil: town.copil,
        bebelus: town.bebelus,
        increment: numberPeopleFn,
        decrement: numberDecrementFn,

        total: town.copil + town.adult + town.bebelus > 9 ? 9 : town.copil + town.adult + town.bebelus,

         //----------- calendar --------------
         toggleCalendarFn: toggleCalendarFn,
         toggleCalendar: town.toggleCalendar



    
    }



    return ( 
        <Town.Provider value={valueElementState}>
            {props.children}
        </Town.Provider>
     );
}
 
export default TownCityContext;