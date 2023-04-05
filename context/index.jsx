import {createContext, useState} from 'react'

export const miContexto = createContext()

function CustomContextProvider({children}) {
    const [itemsAgregados, setItemsAgregados] = useState(0)
    const onAdd = () => {
        setItemsAgregados((oldState)=> oldState + 1)

    };

    const onRemove = () => {
        setItemsAgregados((oldState)=> oldState - 1)
    };

    const value = {
        itemsAgregados,
        onAdd,
        onRemove,
    }
    return <miContexto.Provider value={value}>{ children }</miContexto.Provider>
}

export default CustomContextProvider;