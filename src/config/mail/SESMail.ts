import nodemailer from 'nodemailer';
import HandlebarsMailTemplate from './HandlebarsMailTemplate';
import aws from 'aws-sdk';
import mailConfig from '@config/mail/mail';

interface ITemplateVariable {
  [key: string]: string | number;
}
interface IParseMailTemplate {
  file: string;
  variables: ITemplateVariable;
}
interface IMailContact {
  name: string;
  email: string;
}
interface ISendMail {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplate;
}

export default class SESMail {
  static async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMail): Promise<void> {
    const mailTemplate = new HandlebarsMailTemplate();

    const transporter = nodemailer.createTransport({
      SES: new aws.SES({
        apiVersion: '2022-04-20',
      }),
    });

    const { email, name } = mailConfig.defaults.from;

    const message = await transporter.sendMail({
      from: {
        name: from?.name || name,
        address: from?.email || email,
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await mailTemplate.parse(templateData),
    });
  }
}
