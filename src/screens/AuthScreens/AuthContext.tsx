import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { retrieveData, storeData } from '../../storage';

type AuthContextType = {
    token: boolean;
    setToken: (token: string) => void;
};

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
    token: false,
    setToken: () => { },
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [token, setTokenState] = useState<boolean>(false);

    useEffect(() => {
        getToken();
    }, []);

    const getToken = async (): Promise<string | null> => {
        return new Promise<string | null>((resolve, reject) => {
            try {
                retrieveData('token')
                    .then(token => {
                        setTokenState(true);
                        resolve(token);
                    })
                    .catch(error => {
                        setTokenState(false);
                        reject('');
                    });
            } catch (error) {
                setTokenState(false);
                reject('');
            }
        });
    };

    const setToken = async (newToken: string) => {
        try {
            storeData('token', newToken);
            if (newToken !== "") {
                setTokenState(true)
            } else {
                setTokenState(false)
            }
        } catch (error) {
            console.error('Error storing token in AsyncStorage:', error);
        }
    };

    const authContextValue: AuthContextType = {
        token,
        setToken,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
