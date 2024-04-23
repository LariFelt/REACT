import React from "react";
import Painike from "./Painike";
const Profile = () => {
  const [teksti, setTeksti] = React.useState("Olet kirjautunut");
  function toggle() {
    setTeksti();
  }
  return (
    <div>
      <p>{teksti}</p>
      <Painike setTeksti={setTeksti} teksti={teksti} />
    </div>
  );
};

export default Profile;
