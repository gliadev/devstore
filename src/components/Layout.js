import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
