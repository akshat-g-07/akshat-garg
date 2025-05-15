import InputField from "@/components/common/input-field";
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

// MARK: user details in props
// put those details as default values of form
export default function ProfileForm({
  defaultFirstName,
  defaultLastName,
  defaultEmail,
  defaultUserName,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: defaultFirstName,
      lastName: defaultLastName,
      email: defaultEmail,
      userName: defaultUserName,
      newPassword: "",
    },
    resolver: async (values) => {
      const errors = {};
      const { firstName, lastName, email, userName, newPassword } = values;

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
      const failedRules = rules.filter((rule) => !rule.regex.test(newPassword));

      if (!newPassword) {
        errors.newPassword = {
          type: "required",
          message: "Please choose a passsword.",
        };
      } else if (failedRules.length > 0) {
        errors.newPassword = {
          type: "validation",
          message: failedRules.map((rule) => rule.message).join("\n"),
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
  const [profileImgError, setProfileImgError] = useState(false);

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
    setProfileImgError(false);
    console.log("data", data);
    console.log("profileImg", profileImg);
  };

  return (
    <>
      <h2 className="pb-2 border-b-2 border-black w-full text-3xl font-semibold cursor-default">
        Profile
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 *:py-6">
          <div className="order-2 md:order-1">
            <InputField
              type="text"
              id="firstName"
              label="First Name"
              {...register("firstName")}
              error={errors.firstName?.message}
              className="justify-self-center-safe"
            />
          </div>
          <div className="md:row-span-2 order-1 md:order-2 h-fit w-full flex justify-center-safe">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className="cursor-grab rounded-full relative">
                  <img
                    className="size-37 object-fill hover:opacity-25"
                    src={profileImg ? profileImg : profilePlaceholderSrc}
                  />
                  <p className="text-center -z-10 font-bold text-lg absolute top-1/2 left-1/2 -translate-1/2">
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
          </div>
          <div className="order-3">
            <InputField
              type="text"
              id="lastName"
              label="Last Name"
              {...register("lastName")}
              error={errors.lastName?.message}
              className="justify-self-center-safe"
            />
          </div>
          <div className="order-4">
            <InputField
              type="text"
              id="email"
              label="Email"
              {...register("email")}
              error={errors.email?.message}
              className="justify-self-center-safe"
            />
          </div>
          <div className="order-5">
            <InputField
              type="text"
              id="userName"
              label="Username"
              {...register("userName")}
              error={errors.userName?.message}
              className="justify-self-center-safe"
            />
          </div>
          <div className="order-6">
            <InputField
              type="newPassword"
              id="newPassword"
              label="New Password"
              {...register("newPassword")}
              error={errors.newPassword?.message}
              className="justify-self-center-safe"
            />
          </div>
          {/* MARK: enable only if there is change in any of the value */}
          <Button
            type="submit"
            size="lg"
            className="md:col-span-2 w-fit justify-self-center-safe cursor-pointer order-7"
          >
            Update
          </Button>
        </div>
      </form>
    </>
  );
}
