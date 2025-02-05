import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import "@/styles/app.css";
import TopBar from "@/components/TopBar/TopBar";
import { Footer } from "@/components/Footer/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import { ProductModalProvider } from "@/context/ProductModalContext";
import { ModalAddToCart } from "@/components/ModalAddToCart/ModalAddToCart";
import ReactQueryProvider from "./providers/QueryClientProvider";

export const metadata = {
  title: "Male Fashion",
  description: "Male Fashion - Mua sắm thời trang online",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <ProductModalProvider>
          <TopBar />
          <Header />
          <ModalAddToCart />
          <ScrollToTopButton />
          <main>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </main>
          <Footer />
        </ProductModalProvider>
      </body>
    </html>
  );
}
