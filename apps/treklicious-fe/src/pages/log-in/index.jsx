import { useEffect, useState } from "react";
import { APIs } from "@/apis";
import {
  PASSWORDS_DONT_MATCH_RESPONSE,
  USER_NOT_FOUND_RESPONSE,
} from "@repo/treklicious-constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { getAccessToken, setAccessToken } from "@/lib/access-token";

import { Button } from "@/components/ui/button";
import { Auth, AuthBody, AuthFooter } from "@/components/common/auth-setup";
import InputField from "@/components/common/input-field";

import normalSrc from "../../assets/profile-normal.png";
import passwordSrc from "../../assets/profile-password.png";
import usernameSrc from "../../assets/profile-username.png";

export default function LogIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
    resolver: async (values) => {
      const errors = {};
      const { userName, password } = values;

      const userNameRegex = /^[a-zA-Z0-9_@-]+$/;

      if (!userName) {
        errors.userName = {
          type: "required",
          message: "Please enter a user name.",
        };
      } else if (!userNameRegex.test(userName)) {
        errors.userName = {
          type: "validation",
          message:
            "Username can only have [a-z], [A-Z], [0-9], [@], [-] and [_].",
        };
      }
      if (!password) {
        errors.password = {
          type: "required",
          message: "Please enter a passsword.",
        };
      }

      return {
        errors: errors,
        values: values,
      };
    },
  });

  useEffect(() => {
    if (getAccessToken()) navigate("/dashboard");
  }, [navigate]);

  const mutationKey = "log-in";
  const { mutationOptions, queryInvalidate } = APIs[mutationKey];
  const { isPending, mutate } = useMutation({
    mutationKey: [mutationKey],
    ...mutationOptions,
    onSuccess: (data) => {
      if (data.message === USER_NOT_FOUND_RESPONSE) {
        errors.userName = {
          type: "validation",
          message: USER_NOT_FOUND_RESPONSE,
        };
        return;
      }

      if (data.message === PASSWORDS_DONT_MATCH_RESPONSE) {
        errors.password = {
          type: "validation",
          message: PASSWORDS_DONT_MATCH_RESPONSE,
        };
        return;
      }
      queryClient.invalidateQueries({ queryKey: queryInvalidate });
      setAccessToken(data.accessToken);
      navigate("/dashboard");
    },
  });

  const [headerImg, setHeaderImg] = useState(normalSrc);

  const onSubmit = (data) => {
    mutate({
      queryKey: [mutationKey],
      data,
    });
  };

  return (
    <Auth>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthBody>
          <div className="h-10 relative md:col-span-2 *:left-1/2 *:-translate-1/2 rounded-full *:absolute *:-top-full mb-4">
            <img className="size-37 object-fill" src={headerImg} />
          </div>

          <InputField
            type="text"
            id="userName"
            label="Username"
            {...register("userName")}
            error={errors.userName?.message}
            className="justify-self-center-safe"
            onFocus={() => {
              setHeaderImg(usernameSrc);
            }}
            onBlur={() => {
              setHeaderImg(normalSrc);
            }}
            disabled={isPending}
          />
          <InputField
            type="password"
            id="password"
            label="Password"
            {...register("password")}
            error={errors.password?.message}
            className="justify-self-center-safe"
            onFocus={() => {
              setHeaderImg(passwordSrc);
            }}
            onBlur={() => {
              setHeaderImg(normalSrc);
            }}
            disabled={isPending}
          />

          <Button
            type="submit"
            size="lg"
            className="md:col-span-2 w-fit justify-self-center-safe cursor-pointer"
            disabled={isPending}
          >
            {isPending ? (
              <Loader className="animate-spin size-4 mx-7" />
            ) : (
              "Log In"
            )}
          </Button>

          <AuthFooter
            textToShow="Don't have one?"
            CTAUrl="/sign-up"
            CTAText="Sign Up"
          />
        </AuthBody>
      </form>
    </Auth>
  );
}
