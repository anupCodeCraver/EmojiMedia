import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function createEmoji(emojis) {
  return (
    <Emoji
      key={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      description={emojis.meaning}
    />

  );
}

function App() {
  return (<div>
    <h1>
      <span>emojipedia</span>
    </h1>

    <dl className="dictionary">
      {emojipedia.map(createEmoji)}


      {/* here another way by using arrow function */}
      {/* {emojipedia.map(emojis => (
        <Emoji
          key={emojis.id}
          emoji={emojis.emoji}
          name={emojis.name}
          description={emojis.meaning}
        />)
      )} */}




    </dl>
  </div>
  );
}

export default App;

