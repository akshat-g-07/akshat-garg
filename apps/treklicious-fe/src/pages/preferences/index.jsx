import { APIs } from "@/apis";
import { Auth, AuthBody } from "@/components/common/auth-setup";
import FormParent from "@/components/preferences/form-parent";
import PreferenceFooter from "@/components/preferences/preference-footer";
import Stepper from "@/components/preferences/stepper";
import { useMutation } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Preferences() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);
  const { user } = location.state;

  const mutationKey = "put-profile";
  const { mutationOptions } = APIs[mutationKey];
  const { isPending, mutate } = useMutation({
    mutationKey: [mutationKey],
    ...mutationOptions,
    onSuccess: () => {
      navigate("/dashboard");
    },
  });

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
      mutate({
        queryKey: [mutationKey],
        data: {
          ...user,
          preferences: answers,
        },
      });
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
            isPending={isPending}
            activeIndx={activeIndx}
            handleClick={handleClick}
          />
        </AuthBody>
      </Auth>
    </>
  );
}
