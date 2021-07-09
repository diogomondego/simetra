import { BrowserRouter, Route } from "react-router-dom"

import { Home } from "./Pages/Home";
import { Post } from "./Pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/post/:id' component={Post} />
    </BrowserRouter>
  );
}

export default App;
