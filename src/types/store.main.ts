import { TPopupState } from './global';
import { TPostsdata } from './posts';

export type TStore = {
    posts: TPostsdata;
    popup: TPopupState;
};
