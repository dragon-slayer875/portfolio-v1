import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, email
}) => (
  <div>
    <h1>My name is {firstName}, email: {email}. I'd like to connect.</h1>
  </div>
);
