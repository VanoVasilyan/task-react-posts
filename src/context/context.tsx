import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TGlobalContextProps } from '../types/global';

const GlobalContext = createContext<TGlobalContextProps | undefined>(undefined);

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [isShowSideBar, setIsShowSideBar] = useState(false);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSearchButton = (show: boolean) => {
        setShowSearchInput(show);
    };

    const showSideBar = () => setIsShowSideBar(prev => !prev);

    return (
        <GlobalContext.Provider
            value={{
                searchValue,
                isShowSideBar,
                showSearchInput,
                showSideBar,
                handleSearch,
                setSearchValue,
                handleSearchButton,
                setShowSearchInput,
                setIsShowSideBar
            }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};
