export type TSearchBar = {
    searchvalue: string;
    showSearchInput: boolean;
    handleSearchButton: (show: boolean) => void;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
