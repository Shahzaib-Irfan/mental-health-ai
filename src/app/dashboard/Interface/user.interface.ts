export interface User{
    id: string;
    anonymousUser: boolean;
    email?: string;
    name?: string;
    created_at: Date;
    updated_at: Date;
}