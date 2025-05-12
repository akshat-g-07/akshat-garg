import { Auth, AuthBody } from "@/components/common/auth-setup";
import Stepper from "@/components/preferences/stepper";
import { useState } from "react";

export default function Preferences() {
  const [activeIndx, setActiveIndx] = useState(0);
  return (
    <>
      <Auth>
        <AuthBody>
          <Stepper activeIndx={activeIndx} />
        </AuthBody>
      </Auth>
    </>
  );
}
