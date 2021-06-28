import Container from "../components/Container";
// import { useSelector } from "react-redux";

export default function Home() {
  // const { auth } = useSelector((state) => state);
  return (
    <section>
      <Container>
        <h1 className="text-4xl text-purple-500 my-20 text-center">
          Home Page
        </h1>
      </Container>
    </section>
  );
}
