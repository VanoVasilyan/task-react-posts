import { TMenuLinks } from '../types/global';

export const menuLinks: TMenuLinks = [
    {
        id: 1,
        title: 'Demos',
        children: [],
        canHaveSubCategories: true,
    },
    {
        id: 2,
        title: 'Post',
        children: [
            {
                id: 1,
                title: 'Post Header'
            },
            {
                id: 2,
                title: 'Post Layout'
            },
            {
                id: 3,
                title: 'Share Buttons'
            },
            {
                id: 4,
                title: 'Gallery Post'
            },
            {
                id: 5,
                title: 'Video Post'
            }
        ],
        canHaveSubCategories: true,
    },
    {
        id: 3,
        title: 'Features',
        children: [],
        canHaveSubCategories: true,
    },
    {
        id: 4,
        title: 'Categories',
        children: [],
        canHaveSubCategories: true,
    },
    {
        id: 5,
        title: 'Shop',
        children: [],
        canHaveSubCategories: true,
    },
    {
        id: 6,
        title: 'Buy Now',
        children: [],
        canHaveSubCategories: false,
    },
];
