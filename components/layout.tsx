// TODO add header and footer
import Header from './header';
import Footer from './footer';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
