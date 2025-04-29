import InputField from "@/components/common/input-field";
import { Link } from "react-router";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Avatar from "react-avatar-edit";
import { useState } from "react";
import profilePlaceholderSrc from "../../assets/profile-placeholder.png";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
    resolver: async (values) => {
      const errors = {};
      const {
        firstName,
        lastName,
        email,
        userName,
        password,
        confirmPassword,
      } = values;

      const nameRegex = /^[a-zA-Z\s.()]+$/;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const userNameRegex = /^[a-zA-Z0-9_@-]+$/;

      if (!firstName) {
        errors.firstName = {
          type: "required",
          message: "First Name is required.",
        };
      } else if (!nameRegex.test(firstName)) {
        errors.firstName = {
          type: "validation",
          message:
            "First Name can only have [a-z], [A-Z], [ ], [.], [(] and [)].",
        };
      }

      if (!lastName) {
        errors.lastName = {
          type: "required",
          message: "Last Name is required.",
        };
      } else if (!nameRegex.test(lastName)) {
        errors.lastName = {
          type: "validation",
          message:
            "Last Name can only have [a-z], [A-Z], [ ], [.], [(] and [)].",
        };
      }

      if (!email) {
        errors.email = {
          type: "required",
          message: "Email is required.",
        };
      } else if (!emailRegex.test(email)) {
        errors.email = {
          type: "validation",
          message: "Please enter valid email.",
        };
      }

      if (!userName) {
        errors.userName = {
          type: "required",
          message: "Please choose a user name.",
        };
      } else if (!userNameRegex.test(userName)) {
        errors.userName = {
          type: "validation",
          message:
            "Username can only have [a-z], [A-Z], [0-9], [@], [-] and [_].",
        };
      }

      const rules = [
        {
          regex: /[a-z]/,
          message: "Password should have at least one lowercase letter.",
        },
        {
          regex: /[A-Z]/,
          message: "Password should have at least one uppercase letter.",
        },
        {
          regex: /[@_&^-]/,
          message:
            "Password should have at least one special character [@], [_], [-], [&], [^].",
        },
        { regex: /\d/, message: "Password should have at least one digit" },
        {
          regex: /.{8,}/,
          message: "Password should be at least 8 characters long.",
        },
      ];
      const failedRules = rules.filter((rule) => !rule.regex.test(password));

      if (!password) {
        errors.password = {
          type: "required",
          message: "Please choose a passsword.",
        };
      } else if (failedRules.length > 0) {
        errors.password = {
          type: "validation",
          message: failedRules.map((rule) => rule.message).join("\n"),
        };
      }

      if (!confirmPassword) {
        errors.confirmPassword = {
          type: "required",
          message: "Please confirm your passsword.",
        };
      } else if (confirmPassword !== password) {
        errors.confirmPassword = {
          type: "validation",
          message: "Passswords doesn't match.",
        };
      }

      return {
        errors: errors,
        values: values,
      };
    },
  });

  const [profileImg, setProfileImg] = useState(null);
  const [tempProfileImg, setTempProfileImg] = useState(null);
  const [profileImgError, setProfileImgError] = useState(true);

  const avatarOnClose = () => {
    setTempProfileImg(null);
  };

  const avatarOnCrop = (view) => {
    setTempProfileImg(view);
  };

  const onSubmit = (data) => {
    if (!profileImg) {
      setProfileImgError(true);
      return;
    }
    console.log("data");
    console.log(data);
  };

  return (
    <section className="bg-[#0d47a1] flex justify-center min-h-screen pt-5 pb-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-[#ffffff2d] p-10 grid grid-cols-1 md:grid-cols-2 rounded-lg backdrop-blur-xs border border-[#ffffff1a] shadow-2xl md:gap-x-20 mt-25 space-y-12 w-[300px] md:w-[600px] lg:w-[900px]">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className="h-10 relative md:col-span-2 *:left-1/2 *:-translate-1/2 cursor-grab rounded-full *:absolute *:-top-full mb-4">
                <img
                  className="size-37 object-fill hover:opacity-25"
                  src={profileImg ? profileImg : profilePlaceholderSrc}
                />
                <p className="text-center -z-10 font-bold text-lg">
                  {profileImg ? "Change" : "Upload"}
                  <br />
                  Profile
                  <br />
                  Photo
                </p>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Choose Profile Picture</AlertDialogTitle>
                <AlertDialogDescription>
                  A picture helps people recognize you.
                </AlertDialogDescription>
                <Avatar
                  width="100%"
                  imageWidth={300}
                  height={500}
                  onClose={avatarOnClose}
                  onCrop={avatarOnCrop}
                />
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  disabled={!tempProfileImg}
                  onClick={() => {
                    setProfileImg(tempProfileImg);
                    setTempProfileImg(null);
                  }}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          {profileImgError && (
            <p className="text-red-500 md:col-span-2 w-full text-center">
              Please choose a profile picture.
            </p>
          )}
          <InputField
            type="text"
            id="firstName"
            label="First Name"
            {...register("firstName")}
            error={errors.firstName?.message}
            className="justify-self-center-safe"
          />
          <InputField
            type="text"
            id="lastName"
            label="Last Name"
            {...register("lastName")}
            error={errors.lastName?.message}
            className="justify-self-center-safe"
          />
          <InputField
            type="text"
            id="email"
            label="Email"
            {...register("email")}
            error={errors.email?.message}
            className="justify-self-center-safe"
          />
          <InputField
            type="text"
            id="userName"
            label="Username"
            {...register("userName")}
            error={errors.userName?.message}
            className="justify-self-center-safe"
          />
          <InputField
            type="password"
            id="password"
            label="Password"
            {...register("password")}
            error={errors.password?.message}
            className="justify-self-center-safe"
          />
          <InputField
            type="password"
            id="confirmPassword"
            label="Confirm Password"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
            className="justify-self-center-safe"
          />
          <Button
            type="submit"
            size="lg"
            className="md:col-span-2 w-fit justify-self-center-safe cursor-pointer"
          >
            Sign Up
          </Button>
          <div className="md:col-span-2 h-0.25 w-full bg-black" />
          <div className="md:col-span-2 w-full md:flex md:justify-center-safe md:space-x-1">
            <p>Already have an account?</p>
            <Link to="/log-in" className="font-semibold">
              Log In
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
}
