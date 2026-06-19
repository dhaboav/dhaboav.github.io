import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-8xl font-bold tracking-tight text-red-600">404</h1>
          <p className="mb-4 text-4xl font-bold tracking-tight text-white">Page not found.</p>
          <p className="text-minor mb-4 text-lg font-light text-white">
            Oops! Page not found. We can't seem to find the page you're looking for. Go back to
            home.
          </p>
          <button className="border-primary/50 hover:bg-primary hover:border-primary rounded-lg border-1 px-4 py-2 text-white">
            <Link to="/" className="font-mono text-sm">
              ← Back to Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
