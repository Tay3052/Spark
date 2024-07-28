'use client';
import {
	ContextProviderProps,
	VoicevoxCharacterDetailResponse,
	VoicevoxSpeakersResponse,
} from '@/interfaces';
import { ReactNode, createContext, useState } from 'react';

export const Context = createContext<ContextProviderProps | null>(null);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
	const [characters, setCharacters] = useState<VoicevoxSpeakersResponse | null>(
		null
	);
	const [characterDetails, setCharacterDetails] = useState<{
		[uuid: string]: VoicevoxCharacterDetailResponse;
	}>({});

	const contextValue = {
		characters,
		setCharacters,
		characterDetails,
		setCharacterDetails,
	};

	return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};