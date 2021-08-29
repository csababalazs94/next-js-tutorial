// TODO add header and footer
import Header from './header';
import Footer from './footer';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
