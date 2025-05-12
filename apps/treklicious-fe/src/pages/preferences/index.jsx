import { Auth, AuthBody } from "@/components/common/auth-setup";
import FormParent from "@/components/preferences/form-parent";
import PreferenceFooter from "@/components/preferences/preference-footer";
import Stepper from "@/components/preferences/stepper";
import { useMemo, useState } from "react";

export default function Preferences() {
  const [answers, setAnswers] = useState({
    state: "NA",
    season: "NA",
    difficulty: "NA",
  });
  const [[activeIndx, direction], setActiveIndx] = useState([0, 0]);

  const question = useMemo(() => {
    switch (activeIndx) {
      case 0:
        return "state";
      case 1:
        return "season";
      case 2:
        return "difficulty";
      default:
        return "";
    }
  }, [activeIndx]);

  const handleAnswerSelect = (answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: answer }));
  };

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
          <FormParent
            answers={answers}
            question={question}
            direction={direction}
            activeIndx={activeIndx}
            handleAnswerSelect={handleAnswerSelect}
          />
          <PreferenceFooter
            answers={answers}
            question={question}
            activeIndx={activeIndx}
            handleClick={handleClick}
          />
        </AuthBody>
      </Auth>
    </>
  );
}
