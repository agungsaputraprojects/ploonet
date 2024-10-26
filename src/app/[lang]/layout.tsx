import { Inter } from "next/font/google";
import { Locale, i18n } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Navbar params={params} dictionary={dictionary} />
        {children}
      </body>
    </html>
  );
}
