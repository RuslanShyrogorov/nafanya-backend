// export const HttpError = (status: number, message: string) => {
//   const error = new Error(message);
//   // error.status = status;
//   return error;
// };

export class HttpError extends Error {
  public status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

// let error = new HttpError(404, 'Not found');
// console.log(error.status);
