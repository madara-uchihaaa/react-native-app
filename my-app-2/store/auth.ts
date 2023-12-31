import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { User } from '../models/user';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../firebase/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware'

export interface UserStore {
    user: User;
    signIn: (email: string, password: string) => void;
    signOut: () => void;
    register: (email: string, password: string) => void;
}


const useUserStore = create<UserStore>()(
    devtools(
        persist(
            (set) => ({
                user: new User({}),
                signIn: (email: string, password: string) => {
                    signInWithEmailAndPassword(
                        firebaseAuth,
                        email,
                        password).then(res => {
                            const user = res.user;
                            if (user) {
                                set((state) => ({ user: new User(user) }));
                            }
                        }).catch(err => {
                            console.error('Sign in error:', err);
                            throw err;
                        })
                },
                signOut: () => {
                    firebaseAuth.signOut().then(() => {
                        set((state) => ({ user: new User({}) }));
                    }).catch(err => {
                        console.log('Error while signOut', err);
                        throw err;
                    })
                },
                register: (email: string, password: string) => {
                    createUserWithEmailAndPassword(
                        firebaseAuth,
                        email,
                        password
                    ).then(res => {
                        const user = res.user;
                        if (user) {
                            set((state) => ({ user: new User(user) }));
                        }
                    }).catch(err => {
                        console.log('Error while sigin', err);
                        throw err;
                    })
                },
            }),
            { name: 'user-store', storage: createJSONStorage(() => AsyncStorage) },

        )
    )
);

export default useUserStore;
