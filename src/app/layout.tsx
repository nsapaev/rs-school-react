import './global.css';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WrapperThemeContext } from '../contexts/theme-context';
import { Flyout } from '../components/Flyout';
import StoreProvider from '../components/StoreProvider';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { FallBack } from '../components/FallBack';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <WrapperThemeContext>
          <ErrorBoundary fallback={<FallBack />}>
            <StoreProvider>
              <div className="body">
                <Header />
                <main className="wrapper">{children}</main>
                <Flyout />
                <Footer />
              </div>
            </StoreProvider>
          </ErrorBoundary>
        </WrapperThemeContext>
      </body>
    </html>
  );
}
