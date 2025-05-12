import { Auth, AuthBody } from "@/components/common/auth-setup";
import FormParent from "@/components/preferences/form-parent";
import PreferenceFooter from "@/components/preferences/preference-footer";
import Stepper from "@/components/preferences/stepper";
import { useState } from "react";

export default function Preferences() {
  const [[activeIndx, direction], setActiveIndx] = useState([0, 0]);

  const handleClick = (newDirection) => {
    if (activeIndx === 2 && newDirection === 1) {
      console.log("then do something api and reroute to home page");
    } else setActiveIndx((prev) => [prev[0] + newDirection, newDirection]);
  };

  return (
    <>
      <Auth>
        <AuthBody>
          <Stepper activeIndx={activeIndx} />
          <FormParent activeIndx={activeIndx} direction={direction} />
          <PreferenceFooter activeIndx={activeIndx} handleClick={handleClick} />
        </AuthBody>
      </Auth>
    </>
  );
}
