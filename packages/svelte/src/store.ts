import { writable } from 'svelte/store';
import type { User } from '@supabase/supabase-js';

export type UserExtra = User & { exp?: number };

interface Props {
    user: UserExtra | null;
    accessToken: string | null;
    isLoading: boolean;
    error: Error | null;
}

const initialValues: Props = {
    user: null,
    accessToken: null,
    isLoading: false,
    error: null
};

const user = writable<User | null>(initialValues.user);
const setUser = (usr: User | null) => user.set(usr);

const accessToken = writable<string>(initialValues.accessToken);
const setAccessToken = (token: string) => accessToken.set(token);

const isLoading = writable(initialValues.isLoading);
const setIsLoading = (loading: boolean) => isLoading.set(loading);

const error = writable<Error | null>(initialValues.error);
const setError = (err: Error) => error.set(err);

const resetAll = () => {
    setUser(initialValues.user);
    setAccessToken(initialValues.accessToken);
    setIsLoading(initialValues.isLoading);
    setError(initialValues.error);
};

export {
    user,
    setUser,
    accessToken,
    setAccessToken,
    isLoading,
    setIsLoading,
    error,
    setError,
    resetAll
}
