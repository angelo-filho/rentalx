import { IMailProvider } from "../IMailProvider";

interface IMail {
  to: string;
  subject: string;
  variables: any;
  path: string;
}

class MailProviderInMemory implements IMailProvider {
  private messages: IMail[] = [];

  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void> {
    this.messages.push({
      to,
      subject,
      variables,
      path,
    });
  }
}

export { MailProviderInMemory };
