import Image from "next/image";

type Devotional = {
  id: string;
  title: string;
  image: string;
  description: string;
  content: string;
};

const devotionals: Devotional[] = [
  {
    id: "prodigal-god",
    title: "The Prodigal God",
    image: "/Images/book1.png",
    description: "A powerful devotional on grace.",
    content: "Full devotional content goes here...",
  },
  {
    id: "counterfeit-gods",
    title: "Counterfeit Gods",
    image: "/Images/book2.png",
    description: "Understanding modern idols.",
    content: "Full devotional content goes here...",
  },
  {
    id: "generous-justice",
    title: "Generous Justice",
    image: "/Images/book3.png",
    description: "Faith and social justice.",
    content: "Full devotional content goes here...",
  },
  {
    id: "generous-justice-2",
    title: "Generous Justice 2",
    image: "/Images/book4.png",
    description: "Faith and social justice continued.",
    content: "Full devotional content goes here...",
  },
];

export default async function DevotionalDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; 

  const devotional = devotionals.find((d) => d.id === slug);

  if (!devotional) {
    return <p className="p-20">Devotional not found.</p>;
  }

  return (
    <main className="px-6 md:px-20 py-20 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="relative w-full aspect-[3/4] shadow rounded overflow-hidden">
          <Image
            src={devotional.image}
            alt={devotional.title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{devotional.title}</h1>
          <p className="text-gray-600 mb-6">{devotional.description}</p>
          <p className="leading-relaxed text-gray-800">
            {devotional.content}
          </p>
        </div>
      </div>
    </main>
  );
}
