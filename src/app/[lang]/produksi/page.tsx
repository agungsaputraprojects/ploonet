import { Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import Banner from "@/components/Banner";
import VideoSection from "@/components/VideoSection";
import PreviousWorks from "@/components/PreviousWorks";
import MakingProcess from "@/components/MakingProcess";
import ContactForm from "@/components/ContactForm";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function Produksi({ params }: PageProps) {
  const dictionary = await getDictionary(params.lang);

  return (
    <div>
      <Banner params={params} dictionary={dictionary} />
      <div className="max-w-7xl mx-auto">
        <VideoSection params={params} dictionary={dictionary} />
      </div>
      <PreviousWorks params={params} dictionary={dictionary} />
      <MakingProcess params={params} dictionary={dictionary} />
      <ContactForm params={params} dictionary={dictionary} />
    </div>
  );
}
