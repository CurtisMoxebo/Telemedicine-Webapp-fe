import { Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Container disableGutters maxWidth='true'>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
}

export default Layout;