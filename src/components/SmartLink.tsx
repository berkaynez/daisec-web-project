import React from 'react';
import { Link } from 'react-router-dom';

type SmartLinkProps = React.ComponentProps<'a'> & { 
  to?: string;
  href?: string;
};

export default function SmartLink({ 
  to, 
  href, 
  children, 
  ...rest 
}: SmartLinkProps) {
  const target = to ?? href ?? '#';
  const isInternal = target.startsWith('/') || target.startsWith('#');
  
  if (isInternal) {
    return (
      <Link to={target} {...rest}>
        {children}
      </Link>
    );
  }
  
  return (
    <a 
      href={target} 
      {...rest} 
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
