// src/app/category/[category]/page.tsx
import CategoryNewsClient from "./CategoryNewsClient";

type Props = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;

  return (
    <main>
      <h1>{resolvedParams.category} ニュース</h1>
      <CategoryNewsClient category={resolvedParams.category} />
    </main>
  );
}
