import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as hbs from 'handlebars';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class EmailService {
  private transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
    });
  }

  private loadTemplate(
    templateName: string,
    variables: Record<string, any>,
  ): string {
    const templatePath = path.join(
      __dirname,
      'templates',
      `${templateName}.html`,
    );
    const template = fs.readFileSync(templatePath, 'utf8');
    const compiledTemplate = hbs.compile(template);
    return compiledTemplate(variables);
  }

  async sendEmail(
    to: string,
    subject: string,
    templateName: string,
    variables: Record<string, any>,
  ) {
    const html = this.loadTemplate(templateName, variables);

    const mailOptions = {
      from: this.configService.get<string>('EMAIL_USER'),
      to,
      subject,
      html,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email enviado: ', info.response);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    }
  }
}
