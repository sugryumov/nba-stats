export type TNetworkError = {
  status: number;
  message: string;
};

export class NetworkError {
  readonly status: number;
  readonly message: string;

  constructor({ message, status }: TNetworkError) {
    this.status = status;
    this.message = message;
  }
}
