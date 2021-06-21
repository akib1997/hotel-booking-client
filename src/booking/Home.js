import Container from "../components/Container";
import { useSelector } from "react-redux";

export default function Home() {
  const state = useSelector((state) => state);

  return (
    <section>
      <Container>
        <h1 className="text-4xl text-purple-500 my-20 text-center">
          Home Page
          {JSON.stringify(state)}
        </h1>
      </Container>
    </section>
  );
}
