export default interface Comic {
	month: string;
	num: number;
	link: string;
	year: string;
	news: string;
	safe_title: string;
	transcript: string;
	alt: string;
	img: string;
	title: string;
	day: string;
}

export type RootStackParamList = {
	Home: { latestComicNumber: number };
	Details: { comic: Comic };
};
