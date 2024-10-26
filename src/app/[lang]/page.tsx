import { Locale } from "@/lib/i18n-config";
import Produksi from "./produksi/page";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function Home({ params }: PageProps) {
  return (
    <>
      <Produksi params={params} />
    </>
  );
}
