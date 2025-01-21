export const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: 'As credenciais fornecidas são inválidas.',
  INVALID_2FA_CODE: 'O código 2FA fornecido está incorreto.',
  EXPIRED_2FA_CODE: 'O código 2FA expirou. Por favor, solicite um novo.',
  USER_NOT_FOUND: 'Usuário não encontrado. Verifique o email fornecido.',
  DECLARATION_NOT_FOUND:
    'Declaração não encontrada. Verifique o ano fornecido.',
  EMAIL_SEND_FAILURE:
    'Falha ao enviar o email de autenticação. Tente novamente mais tarde.',
  YEAR_DECLARATION_CONFLICT: (year: string) =>
    `Declaração para o ano ${year} já existe para este usuário.`,
  USER_FOR_EMAIL_ALREADY_CREATED:
    'Usuário já cadastrado para o email fornecido.',
};
