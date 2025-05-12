import { Auth, AuthBody } from "@/components/common/auth-setup";
import PreferenceFooter from "@/components/preferences/preference-footer";
import Stepper from "@/components/preferences/stepper";
import { useState } from "react";

export default function Preferences() {
  const [activeIndx, setActiveIndx] = useState(0);

  const handleClick = (indx) => {
    if (indx === 3) {
      //then do something api and reroute to home page
    } else setActiveIndx(indx);
  };

  return (
    <>
      <Auth>
        <AuthBody>
          <Stepper activeIndx={activeIndx} />
          <PreferenceFooter activeIndx={activeIndx} handleClick={handleClick} />
        </AuthBody>
      </Auth>
    </>
  );
}
