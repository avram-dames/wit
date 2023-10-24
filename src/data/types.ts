export type Meetup = {
  title: string;
  url: string;
  date: Date;
  upComing?: boolean,
  location?: string,
  description: string[];
};

export type Member = {
  imageSource: string;
  name: string;
  ocupation: string;
  twitterLink: string;
  linkedinLink: string;
};