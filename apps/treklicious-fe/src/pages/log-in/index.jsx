import InputField from "@/components/common/input-field";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import normalSrc from "../../assets/profile-normal.png";
import passwordSrc from "../../assets/profile-password.png";
import usernameSrc from "../../assets/profile-username.png";
import { Auth, AuthBody, AuthFooter } from "@/components/common/auth-setup";

export default function LogIn() {
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

  const [headerImg, setHeaderImg] = useState(normalSrc);

  const onSubmit = (data) => {
    console.log("data", data);
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
          />

          <Button
            type="submit"
            size="lg"
            className="md:col-span-2 w-fit justify-self-center-safe cursor-pointer"
          >
            Log In
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
