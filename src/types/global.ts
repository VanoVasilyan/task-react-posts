export interface IPost {
    title: string;
    text: string;
    tags: string;
    autor: string;
    img: string;
    img_2x: string;
    date: string;
    views: string;
};

export type TBeResponseWithData = IPost[];

export type TPopupState = {
    isPopupOpen: boolean;
    selectedPost: IPost | null;
};

export type TMenuLinkChild = {
    id: number;
    title: string;
};

export type TMenuLinks = {
    id: number;
    title: string;
    children: TMenuLinkChild[];
    canHaveSubCategories: boolean;
}[];

export type TGlobalContextProps = {
    searchValue: string;
    isShowSideBar: boolean;
    showSearchInput: boolean;
    showSideBar: () => void;
    setSearchValue: (value: string) => void;
    setIsShowSideBar: (value: boolean) => void;
    handleSearchButton: (show: boolean) => void;
    setShowSearchInput: (value: boolean) => void;
    handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
