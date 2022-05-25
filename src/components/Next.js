import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./Details";
import Header from "./Header";
import Mcq from "./Mcq";
import QuizSubmit from "./QuizSubmit";

function App() {
  const [details, setDetails] = useState([]);
  const [crr_option, setCrr_option] = useState([]);
  const [permalink, setPermalink] = useState();
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Details
              details={details}
              setDetails={setDetails}
              crr_option={crr_option}
              setCrr_option={setCrr_option}
              permalink={permalink}
              setPermalink={setPermalink}
            />
          </Route>
          <Route path="/mcq">
            <Mcq />
          </Route>
          <Route path="/quizSubmitted">
            <QuizSubmit permalink={permalink} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
