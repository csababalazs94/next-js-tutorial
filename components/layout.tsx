// TODO add header and footer

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
