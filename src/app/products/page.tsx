import MaxWidthWrapper from "@/components/max-width-wrapper";
import ProductReel from "@/components/products-reel";
import { productCategories } from "@/config";

type Param = string | string[] | undefined;

type ProductsPageProps = {
  searchParams: { [key: string]: Param };
};

const parse = (param: Param) => {
  return typeof param === "string" ? param : undefined;
};

const ProductsPage = ({ searchParams }: ProductsPageProps) => {
  const sort = parse(searchParams.sort);
  const category = parse(searchParams.category);

  const label = productCategories.find((c) => c.value === category)?.label;

  return (
    <MaxWidthWrapper>
      <ProductReel
        title={label ?? "Browse hight-quality assets"}
        query={{
          category,
          limit: 40,
          sort: sort === "desc" || sort === "asc" ? sort : undefined,
        }}
      />
    </MaxWidthWrapper>
  );
};

export default ProductsPage;
