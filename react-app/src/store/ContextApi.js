import React from "react";

const initialValue = {
    name: 'fsdafsaf'
}


const GlobalStore = React.createContext(initialValue)

export const GlobalStoreProvider = (props) => {
    return (
        <GlobalStore.Provider value={initialValue}>
            {props.children}
        </GlobalStore.Provider>
    )
}

export default GlobalStore;