import { Brands } from "@/components/Brands";
import CatiGrid from "@/components/CatiGrid";
import Collation from "@/components/Collation";
import { CollationInta } from "@/components/CollationInta";
import DenimHero from "@/components/DenimHero";
import { Reviws } from "@/components/Reviws";
import { Slider } from "@/components/Slider";
import { demoProducts, demoProductsSelling } from "@/data/data";

export function Home() {
  return (
    <>
      <Slider />
      <Collation title="Featured Products" products={demoProducts} />
      <CatiGrid />
      <Collation
        title="Best selling products
"
        products={demoProductsSelling}
      />
      <Reviws />
      <Collation
        title="Flash sales
"
        products={demoProducts}
      />
      <DenimHero />
      <Brands />
      <CollationInta />
    </>
  );
}
