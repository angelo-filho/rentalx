interface IMailProvider {
  sendMail<T>(
    to: string,
    subject: string,
    variables: T,
    path: string
  ): Promise<void>;
}

export { IMailProvider };
