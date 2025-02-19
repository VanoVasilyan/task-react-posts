import React, { FC, useRef } from 'react';
import { useGlobalContext } from '../../context/context';
import SearchIcon from './../../assets/icons/Search.svg';
import * as SC from './styles';

const SearchBar: FC = () => {
    const { handleSearch, handleSearchButton, showSearchInput, searchValue } = useGlobalContext();

    const searchRef = useRef<HTMLDivElement>(null);
    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        if (!searchRef.current?.contains(e.relatedTarget as Node)) {
            handleSearchButton(false);
        }
    };

    return (
        <SC.StyledSearchBarContainer onClick={() => handleSearchButton(true)} ref={searchRef} onBlur={handleBlur} tabIndex={-1}>
            <SC.StyledIcon src={SearchIcon} alt='Search' />
            <SC.StyledSearchBarInput $show={showSearchInput} value={searchValue} onChange={handleSearch} placeholder='Search ...' />
        </SC.StyledSearchBarContainer>
    )
};

export default SearchBar
