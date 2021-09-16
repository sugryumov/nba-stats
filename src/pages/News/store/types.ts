export type TNewsState = {
  response: TNewsResponse;
  error: string | null;
  loading: boolean;
};

export type TNewsResponse = {
  ListItems: any;
};
