import { Locale } from "@/lib/i18n-config";

interface LayoutProps {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}

export default function ProduksiLayout({ children, params }: LayoutProps) {
  return <div className="relative">{children}</div>;
}
