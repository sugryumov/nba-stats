export interface IGetGameArticle {
  response: TGetGameArticleResponse;
  error: null | Error;
  loading: boolean;
}

export type TGetGameArticleResponse = {
  paragraphs: Array<TParagraphs>;
  pubDateUTC: string;
  title: string;
};

export type TParagraphs = {
  paragraph: string;
};
