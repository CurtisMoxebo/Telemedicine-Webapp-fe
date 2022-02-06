import { Container } from "@mui/material";
import Header from "./Header";

const Layout = (props) => {

  return (
    <Container disableGutters maxWidth="xl" sx={{ padding: 0 }}>
      <div>
        <Header />
        {props.children}
      </div>
    </Container>
  );
}

export default Layout;