import InputField from "@/components/common/input-field";
import { Link } from "react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import normalSrc from "../../assets/profile-normal.png";
import passwordSrc from "../../assets/profile-password.png";
import usernameSrc from "../../assets/profile-username.png";

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
    <section className="bg-[#0d47a1] flex justify-center min-h-screen pt-5 pb-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-[#ffffff2d] p-10 grid grid-cols-1 md:grid-cols-2 rounded-lg backdrop-blur-xs border border-[#ffffff1a] shadow-2xl md:gap-x-20 mt-25 space-y-12 w-[300px] md:w-[600px] lg:w-[900px]">
          <div className="h-10 relative md:col-span-2 *:left-1/2 *:-translate-1/2 cursor-grab rounded-full *:absolute *:-top-full mb-4">
            <img
              className="size-37 object-fill hover:opacity-25"
              src={headerImg}
            />
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

          <div className="md:col-span-2 h-0.25 w-full bg-black" />
          <div className="md:col-span-2 w-full md:flex md:justify-center-safe md:space-x-1">
            <p>Don't have one?</p>
            <Link to="/sign-up" className="font-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}
