import Header from "../../components/Header";
import CategoryBtn from "../../components/CategoryBtn";
import ThemeBtn from "../../components/ThemeBtn";
import TopButton from "../../components/TopButton";
import CategoryArticles from "../../components/CategoryArticles";

type ParamsType = {
  slug: string;
};

type Props = {
  params: Promise<ParamsType>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug: category } = await params;

  return (
    <div style={{ paddingBottom: 100 }}>
      <TopButton />
      <Header />

      <CategoryArticles category={category} />

      <ThemeBtn className="absolute top-3.5 right-1" />
      <CategoryBtn />
    </div>
  );
}
