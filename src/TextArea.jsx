import { useState } from "react";

export const TextArea = () => {
  const [text, setText] = useState("");
  return (
    <>
      text areadです
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="submit"
          value="追加"
          onSubmit={(e) => e.preventDefault()}
        />
      </form>
    </>
  );
};
