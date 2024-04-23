import React from "react";

const Input = () => {
  const syottoElementti = React.useRef();
  function Fokus() {
    syottoElementti.current.focus();
  }
  return (
    <div>
      <input type="text" ref={syottoElementti} />
      <button onClick={Fokus}>Fokus</button>
    </div>
  );
};

export default Input;
