import  { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = localStorage.getItem(key)

            if(value){
                return JSON.parse(value)
            } else{
                localStorage.setItem(key, JSON.stringify(defaultValue))
                return defaultValue;
            }
        } catch(error) {
            return defaultValue;
        }
    })
  
    return [storedValue, setStoredValue]
}

export default useLocalStorage;