import Link from 'next/link';

const articles = [
  { slug: 'article1', title: 'SOS: A New Era for Emergency Management' },
  { slug: 'article2', title: 'A Call to Denounce and Combat It' },
  // Ajoutez ici d'autres articles
];

const Index = () => {
  return (
    <div className="relative max-w-3xl mx-auto px-6 py-12 bg-gradient-to-b ">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-4">Articles Ressource</h1>
        <p className="text-lg text-gray-300">
          Discover insightful articles that empower your knowledge on emergency management and crime reporting.
        </p>
      </div>

      {/* Articles List */}
      <ul className="space-y-8">
        {articles.map((article) => (
          <li
            key={article.slug}
            className="group relative overflow-hidden rounded-xl bg-zinc-800 p-6 transition-all hover:bg-zinc-700 hover:shadow-lg transform hover:scale-105"
          >
            {/* Gradient Background on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <Link href={`/resources/${article.slug}`} passHref>
              <div className="relative flex flex-col items-start gap-2">
                <h2 className="text-2xl font-semibold text-white">{article.title}</h2>
                <p className="text-sm text-zinc-400">Read more &rarr;</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
