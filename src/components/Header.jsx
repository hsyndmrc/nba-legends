import { Container } from "react-bootstrap"; //! Bu yontem performansli olan yontem
import { Image } from "react-bootstrap"; //! Bu yontem diger yonteme gore daha az tavsiye edilen yontemdir.
import logo from "../assets/nba-logo (2).png";

const Header = () => {
  return (
    <Container>
      <Image src={logo} width={"200px"} />
      <h1 className="my-2">NBA LEGENDS</h1>
    </Container>
  );
};

export default Header;
