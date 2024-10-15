"use client";
import { useMutation } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import {
	loginWithPassword,
	registerWithPassword,
	getLimitedUserInfo,
	LimitedUserInfoType,
} from "@/lib/services/auth.service";
import { ContextAuthType } from "@/lib/types/auth.context.type";
import { auth } from "@/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export const ContextAuth = createContext<ContextAuthType | null>(null);

interface Props {
	children: React.ReactNode;
}
export default function ContextAuthProvider({ children }: Props) {
	const signinState = useMutation({
		mutationFn: loginWithPassword,
	});
	const signupState = useMutation({
		mutationFn: registerWithPassword,
	});

	const [userState, setUserState] = useState<LimitedUserInfoType | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			console.log("debug 4: onAuthStateChanged, user: ", user);
			if (user) {
				setUserState(getLimitedUserInfo(user));
			} else {
				setUserState(null);
			}
		});
		return () => unsubscribe(); // Clean up
	}, [auth]);

	return (
		<ContextAuth.Provider value={{ signinState, signupState, userState }}>
			{children}
		</ContextAuth.Provider>
	);
}
