import { useEffect } from "react";
import { x } from "./services/services";

function App() {
  useEffect(() => {
    x().then((res) => {
      console.log(res.accessToken);
    });
  });

  return "AAAA";
}

export default App;
