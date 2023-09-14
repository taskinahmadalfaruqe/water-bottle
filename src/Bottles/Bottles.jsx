import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";


const Bottles =()=> {
    const [bottles, setBottles]= useState([]);

    useEffect(()=>{
        const lodeBottles= async()=>{
            const dataFetch = await fetch('Bottles.json');
            const convertJSON = await dataFetch.json();
            setBottles(convertJSON);
        }
        lodeBottles();
    },[])

    return(
        <div>
            <h2> All Bottle List</h2>
            <div>
                {
                    bottles.map(bottle=> <Bottle bottle={bottle} key={bottle.id}></Bottle>)
                } 
            </div>
        </div>
    )
};
export default Bottles;
