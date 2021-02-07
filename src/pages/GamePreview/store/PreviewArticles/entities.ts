export interface IGetPreviewArticles {
  response: TGetPreviewArticlesResponse;
  error: null | Error;
  loading: boolean;
}

export type TGetPreviewArticlesResponse = {
  paragraphs: Array<TParagraphs>;
  pubDateUTC: string;
  title: string;
};

export type TParagraphs = {
  paragraph: string;
};
