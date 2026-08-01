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
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-8xl font-bold tracking-tight text-red-600">404</h1>
          <p className="mb-4 text-4xl font-bold tracking-tight text-white">{pageTitle}</p>
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
    </div>
  );
};
