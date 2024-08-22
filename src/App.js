import Home from "./pages/Home";
import BGDistort from "./shared/BGDistort";
import CursorFollower from "./shared/CursorFollower";
import Header from "./shared/Header";
import Locomotive from "./shared/MyComponent";
import SmoothScroll from "./shared/SmoothScroll";

function App() {
  return (
    <>
      <Locomotive>
        <CursorFollower />
        <SmoothScroll />
        <Header />
        <Home />
        <BGDistort />
      </Locomotive>
    </>
  );
}

export default App;
