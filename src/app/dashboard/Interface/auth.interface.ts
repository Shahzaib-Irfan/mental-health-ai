import {User} from './user.interface';

export interface Auth{
    user: User;
    token: string;
}