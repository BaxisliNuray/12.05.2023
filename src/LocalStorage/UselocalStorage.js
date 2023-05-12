import {  useState ,useEffect} from "react";

function getSavedValue(key,initialValue){
    const savevalue = JSON.parse(localStorage.getItem(key));
    if (savevalue) return savevalue;

    if(initialValue instanceof Function) return initialValue();
    return initialValue;
}

export default function useLocalStorage(key,initialValue){
    const[value,setValue] = useState(()=>{
        return getSavedValue(key,initialValue);
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);

    return [value,setValue];
}