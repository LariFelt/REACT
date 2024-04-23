import React from "react";

const Lohko = () => {
  const [aika, setAika] = React.useState(0);
  React.useEffect(() => {
    console.log("Lohko on päivitetty");
  });

  React.useEffect(() => {
    const id = setInterval(() => {
      setAika((prevAika) => prevAika + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <h2>Aikasi sivustolla {aika} sekuntia</h2>
    </div>
  );
};

export default Lohko;
