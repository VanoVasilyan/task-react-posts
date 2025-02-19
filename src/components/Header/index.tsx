import React, { FC } from 'react';
import SearchBar from '../SearchBar';
import { useGlobalContext } from '../../context/context';
import HamburgerIcon from './../../assets/icons/Hamburger.svg';
import Logo from './../../assets/images/Logo-desktop.svg';
import LogoMobile from './../../assets/images/Logo-mobile.svg';
import * as SC from './styles';

const Header: FC = () => {
    const { showSideBar } = useGlobalContext();

    return (
        <SC.StyledMainHeader>
            <SC.StyledHeaderInnerBlock>
                <SC.StyledHamburgerButon onClick={showSideBar}>
                    <SC.StyledIcon src={HamburgerIcon} alt='HamburgerIcon' />
                </SC.StyledHamburgerButon>
                <SC.StyledPicture>
                    <SC.StyledPictureSource media='(max-width: 375px)' srcSet={LogoMobile} />
                    <SC.StyledLogo src={Logo} alt='Logo' />
                </SC.StyledPicture>
                <SearchBar />
            </SC.StyledHeaderInnerBlock>
        </SC.StyledMainHeader>
    )
};

export default Header
