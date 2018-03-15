import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h1>Testar</h1>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));

/*
class Background {
constructor() {
 super();
this.state = {
  data:[],
};
}
*/

/*
let email = "joe@example.com";
let password = "donkeybrains";
let myApiUrl = "http://www.example.com/api"
let usersPath = "users"
fetch(`${myApiUrl}/${usersPath}`, {  
  .
  .
  body: JSON.stringify({
    user: { email, password }
  })
})
*/

fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=XXXX'
)
  .then(function(response) {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }

    // Examine the text in the response
    response.json().then(function(data) {
      console.log(data);
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });

/*
  fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=XXX')
    .then((response) => {
      console.log("Headers" , response.headers.get('Content-Type'))
      console.log("date" , response.headers.get('Date'))
    })

*/
/*
render(){
return(
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h1>Testar</h1>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
)
*/
