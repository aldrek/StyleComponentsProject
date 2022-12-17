import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container className="constainer">
          {content.map((card, index) => {
            return <Card key={index} item={card}></Card>;
          })}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
