import React, { FC } from 'react';
import { useGlobalContext } from '../../context/context';
import { useNavbar } from './useNavbar';
import { menuLinks } from '../../data/menuLinks';
import ArrowDown from '../../assets/icons/ArrowDown.svg';
import ArrowRight from '../../assets/icons/ArrowRight.svg';
import CloseIcon from '../../assets/icons/CloseIcon.svg';
import LogoSideBar from './../../assets/images/Logo-sidebar.svg';
import Logo from './../../assets/images/Logo-desktop.svg';
import * as SC from './styles';

const Navbar: FC = () => {
    const { isShowSideBar, showSideBar } = useGlobalContext();
    const { isHidden } = useNavbar();

    return (
        <SC.StyledNavbarContainer className={isHidden ? 'hidden' : ''}>
            <SC.StyledNavbarMenu>
                {menuLinks.map(({ id, title, children, canHaveSubCategories }) => {
                    return <SC.StyledNavbarMenuParentItem key={id}>
                        <SC.StyledMenuItemLink>
                            <SC.StyledMenuItemTitle>
                                {title}
                            </SC.StyledMenuItemTitle>
                            {canHaveSubCategories && <SC.StyledMenuItemIcon src={ArrowDown} alt='Arrow Down Icon' />}
                        </SC.StyledMenuItemLink>
                        {children?.length ? (
                            <SC.StyledMenuItemChildrenList>
                                {children.map(({ id, title }) => (
                                    <SC.StyledNavbarMenuChildrenListtItem key={id}>
                                        <SC.StyledMenuItemChildrenListLink>
                                            <SC.StyledMenuItemTitle>
                                                {title}
                                            </SC.StyledMenuItemTitle>
                                            <SC.StyledMenuItemIcon src={ArrowRight} alt='Arrow Right Icon' />
                                        </SC.StyledMenuItemChildrenListLink>
                                    </SC.StyledNavbarMenuChildrenListtItem>
                                ))}
                            </SC.StyledMenuItemChildrenList>
                        ) : null}
                    </SC.StyledNavbarMenuParentItem>
                })}
            </SC.StyledNavbarMenu>
            <SC.StyledSideBar className={isShowSideBar ? 'show' : 'hide'}>
                <SC.StyledSidebarLogoPart>
                    <SC.StyledPicture>
                        <SC.StyledPictureSource media='(max-width: 375px)' srcSet={LogoSideBar} />
                        <SC.StyledLogo src={Logo} alt='Logo' />
                    </SC.StyledPicture>
                    <SC.StyledCloseButton onClick={showSideBar}>
                        <SC.StyledIcon src={CloseIcon} alt='CloseIcon' />
                    </SC.StyledCloseButton>
                </SC.StyledSidebarLogoPart>
                <SC.StyledSidebarList>
                    {menuLinks.map(({ id, title, children, canHaveSubCategories }) => (
                        <SC.StyledNavbarMenuParentItem key={id} $needBorderBottom>
                            <SC.StyledMenuItemLink>
                                <SC.StyledMenuItemTitle>
                                    {title}
                                </SC.StyledMenuItemTitle>
                                {canHaveSubCategories && <SC.StyledMenuItemIcon src={ArrowDown} alt='Arrow Down Icon' />}
                            </SC.StyledMenuItemLink>
                            {children?.length ? (
                                <SC.StyledMenuItemChildrenList>
                                    {children.map(({ id, title }) => (
                                        <SC.StyledNavbarMenuChildrenListtItem key={id}>
                                            <SC.StyledMenuItemChildrenListLink>
                                                <SC.StyledMenuItemTitle>
                                                    {title}
                                                </SC.StyledMenuItemTitle>
                                                <SC.StyledMenuItemIcon src={ArrowRight} alt='Arrow Right Icon' />
                                            </SC.StyledMenuItemChildrenListLink>
                                        </SC.StyledNavbarMenuChildrenListtItem>
                                    ))}
                                </SC.StyledMenuItemChildrenList>
                            ) : null}
                        </SC.StyledNavbarMenuParentItem>
                    ))}
                </SC.StyledSidebarList>
            </SC.StyledSideBar>
        </SC.StyledNavbarContainer>
    )
};

export default Navbar
