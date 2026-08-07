import { Link } from 'react-router-dom';
import { buttonVariants } from './button';
import { ArrowLeft } from 'lucide-react';

interface NotFoundProps {
  pageTitle: string;
  pageDesc: string;
  buttonLabel: string;
}

export const NotFound = ({ pageTitle, pageDesc, buttonLabel }: NotFoundProps) => {
  return (
    <div className="section-container flex items-center justify-center">
      <div className="content-container layout text-center">
        <h1 className="mb-4 text-8xl font-bold tracking-tight text-red-600">404</h1>
        <p className="mb-4 text-4xl font-bold tracking-tight">{pageTitle}</p>
        <p className="text-minor text-muted-foreground mb-4 text-lg font-light">{pageDesc}</p>
        <Link
          to="/"
          className={`${buttonVariants({ variant: 'default' })} h-12 px-6 font-mono text-sm`}
        >
          <ArrowLeft />
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
};
