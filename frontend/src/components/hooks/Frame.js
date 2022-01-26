import React from "react"
import Cursor from "../components/Cursor"
import CursorContextProvider from "../contexts/CursorContextProvider"

const Frame = ({children}) => {
    return (
        <CursorContextProvider>
            <Cursor/>
            {children}
        </CursorContextProvider>
    )
}

export default Frame;