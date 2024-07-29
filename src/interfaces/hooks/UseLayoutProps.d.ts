import { SelectedContentProps } from '../provider';

export interface UseLayoutProps {
	selectedContent: SelectedContentProps;
	setSelectedContent: React.Dispatch<
		React.SetStateAction<SelectedContentProps>
	>;
	selectedCharacterUuid: string | null;
	setSelectedCharacterUuid: React.Dispatch<React.SetStateAction<string | null>>;
	handleCharacterSelect: ({ uuid }: HandleCharacterSelectProps) => void;
	isLeftBar: boolean;
	setIsLeftBar: React.Dispatch<React.SetStateAction<boolean>>;
	isLeftDrawer: boolean;
	setIsLeftDrawer: React.Dispatch<React.SetStateAction<boolean>>;
	isLogSelect: boolean;
	setIsLogSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HandleCharacterSelectProps {
	uuid: string;
}
