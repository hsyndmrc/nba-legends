import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
const ContainerCard = () => {
  const [search, setSearch] = useState("");
  //   console.log(data);

  const handleSearch = (e) => {
    // console.log(e.target.value);

    setSearch(e.target.value); //! setter metodlari asenkron olarak calisir.
  };

  //   console.log(setSearch);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  console.log(filteredData);

  return (
    <>
      <Form.Control
        type="search"
        placeholder="Search Player"
        onChange={handleSearch}
      />

      <Container className="p-3 rounded-4 card-container my-3">
        <Row
          xs={1}
          sm={2}
          md={3}
          lg={4}
          xl={6}
          className="justify-content-center g-3"
        >
          {/* {filteredData.map((player, index) => (
            <PlayerCard
              key={index}
              player={player}
              img={player.img}
              name={player.name}
              statistics={player.statistics}
              {name,img,statistics}
              {...player} ==> objenin icindeki tum veriler lazimsa bu yontem kullanilir.
            />
          ))} */}

          {filteredData.map((player, index) => (
            <PlayerCard key={index} {...player} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ContainerCard;
