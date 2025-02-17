import { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: '동네냥이',
  description: '동네 고양이 SNS 서비스',
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
});
 export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${notoSans.className} antialiased`}>
      <div className="flex justify-center bg-gray-200 min-h-screen">
          <div className="w-full max-w-md bg-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
