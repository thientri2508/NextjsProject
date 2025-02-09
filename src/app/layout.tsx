import Header from "@/components/Header/Header";
import "@/styles/globals.css";
import "@/styles/app.css";
import TopBar from "@/components/TopBar/TopBar";
import { Footer } from "@/components/Footer/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton/ScrollToTopButton";
import { ProductModalProvider } from "@/context/ProductModalContext";
import { ModalUpdateItemCart } from "@/components/ModalUpdateItemCart/ModalUpdateItemCart";
import ReactQueryProvider from "./providers/QueryClientProvider";
import { CartProvider } from "@/context/CartProvider";
import { ConfirmModalProvider } from "@/context/ConfirmModalContext";

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
        <CartProvider>
          <ProductModalProvider>
            <ConfirmModalProvider>
              <TopBar />
              <Header />
              <ModalUpdateItemCart />
              <ScrollToTopButton />
              <main>
                <ReactQueryProvider>{children}</ReactQueryProvider>
              </main>
              <Footer />
            </ConfirmModalProvider>
          </ProductModalProvider>
        </CartProvider>
      </body>
    </html>
  );
}
