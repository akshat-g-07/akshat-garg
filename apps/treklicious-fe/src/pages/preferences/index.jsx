import { APIs } from "@/apis";
import AuthAlert from "@/components/common/auth-alert";
import { Auth, AuthBody } from "@/components/common/auth-setup";
import FormParent from "@/components/preferences/form-parent";
import PreferenceFooter from "@/components/preferences/preference-footer";
import Stepper from "@/components/preferences/stepper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Preferences() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state || {};
  const queryClient = useQueryClient();

  const mutationKey = "put-profile";
  const { mutationOptions, queryInvalidate } = APIs[mutationKey];
  const { isPending, mutate } = useMutation({
    mutationKey: [mutationKey],
    ...mutationOptions,
    onSuccess: async () => {
      await Promise.all(
        queryInvalidate.map((query) =>
          queryClient.invalidateQueries({
            queryKey: [query],
            refetchType: "all",
          })
        )
      );

      navigate("/dashboard");
    },
  });

  useEffect(() => {
    if (user._id) {
      if (
        user.preferences.difficulty !== "NA" &&
        user.preferences.state !== "NA" &&
        user.preferences.season !== "NA"
      )
        navigate("/dashboard");
    }
  }, [user, navigate]);

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
        {user ? (
          <AuthBody>
            <div className="space-y-2 md:col-span-2">
              <h1 className="text-4xl font-semibold leading-relaxed text-white">
                Hello, {user.firstName}!
              </h1>
              <p className="text-lg font-medium text-white/90">
                Please set your preferences before proceeding ahead.
              </p>
            </div>
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
        ) : (
          <>
            <AuthAlert />
          </>
        )}
      </Auth>
    </>
  );
}
