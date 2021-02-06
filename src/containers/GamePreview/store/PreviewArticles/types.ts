export type TPreviewArticlesState = {
  response: TPreviewArticlesResponse;
  error: null | string;
  loading: boolean;
};

export type TPreviewArticlesResponse = {
  paragraphs: Array<TParagraphs>;
  pubDateUTC: string;
  title: string;
};

export type TParagraphs = {
  paragraph: string;
};
