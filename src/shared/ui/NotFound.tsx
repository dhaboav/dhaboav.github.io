import { Link } from 'react-router-dom';

interface NotFoundProps {
  pageTitle: string;
  pageDesc: string;
  buttonLabel: string;
}

export const NotFound = ({ pageTitle, pageDesc, buttonLabel }: NotFoundProps) => {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-8xl font-bold tracking-tight text-red-600">404</h1>
          <p className="mb-4 text-4xl font-bold tracking-tight text-white">{pageTitle}</p>
          <p className="text-minor mb-4 text-lg font-light text-white">{pageDesc}</p>
          <button className="border-primary/50 hover:bg-primary hover:border-primary rounded-lg border px-4 py-2 text-white">
            <Link to="/" className="font-mono text-sm">
              ← {buttonLabel}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
