import React from 'react';

export const Article = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      {children}
    </article>
  );
};

export const Abstract = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
      <p className="font-medium text-lg leading-relaxed">
        {children}
      </p>
    </div>
  );
};