import { Header } from "./components/Header/index"
import { Records } from "./components/Records/index"
import { Records2 } from "./components/Records 2/index"
import { GlobalStyles } from "./Styles/GlobalStyles"

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Records />
      <Records2 />
    </>
  );
}

