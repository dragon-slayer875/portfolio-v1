import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name="test", email="test", message= "test"
}) => (
  <div>
    <h1>Name: {name}<br/>Email: {email}.<br/>Message: {message}</h1>
  </div>
);
