import {createContext, ReactNode, useState, useEffect, useContext} from 'react'

interface Cart {
    updateItem: (props:any) => void;
    item: any
}

interface ItemContextProps { 
    children: ReactNode
};

export const ItemContext = createContext<Cart>(
    {} as Cart
)

export function ItemProvider({children} : ItemContextProps) {
    const [item, setItem] = useState([]);
    const [cartItens, setCartItens] = useState([])

    function updateItem (props: any) {
        const itemProps = props;
        setItem(itemProps)
    }    

    return(
        <ItemContext.Provider value={ { updateItem, item} }>
            {children}
        </ItemContext.Provider>
    )
}

export function useCart() {
    const context = useContext(ItemContext)
    return context
}