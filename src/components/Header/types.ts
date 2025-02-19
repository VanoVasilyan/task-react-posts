export type THeader = {
    searchvalue: string;
    showSearchInput: boolean;
    showSideBar: () => void;
    handleSearchButton: (show: boolean) => void;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
