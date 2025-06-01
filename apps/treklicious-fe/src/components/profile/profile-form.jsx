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
import { useMemo, useState } from "react";
import profilePlaceholderSrc from "../../assets/profile-placeholder.png";
import { Button } from "@/components/ui/button";
import { useForm, useWatch } from "react-hook-form";
import { APIs } from "@/apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import { USERNAME_EXISTS_RESPONSE } from "@repo/treklicious-constants";

export default function ProfileForm({
  preferences,
  defaultEmail,
  defaultUserName,
  defaultLastName,
  defaultFirstName,
  defaultProfilePic,
}) {
  const {
    control,
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
      if (newPassword) {
        const failedRules = rules.filter(
          (rule) => !rule.regex.test(newPassword)
        );

        if (failedRules.length > 0) {
          errors.newPassword = {
            type: "validation",
            message: failedRules.map((rule) => rule.message).join("\n"),
          };
        }
      }
      return {
        errors: errors,
        values: values,
      };
    },
  });

  const queryClient = useQueryClient();
  const [tempProfileImg, setTempProfileImg] = useState(null);
  const [profileImgError, setProfileImgError] = useState(false);
  const [profileImg, setProfileImg] = useState(defaultProfilePic);

  const mutationKey = "put-profile";
  const { mutationOptions, queryInvalidate } = APIs[mutationKey];
  const { isPending, mutate } = useMutation({
    mutationKey: [mutationKey],
    ...mutationOptions,
    onSuccess: async (data) => {
      if (data.message === USERNAME_EXISTS_RESPONSE) {
        errors.userName = {
          type: "validation",
          message: `${USERNAME_EXISTS_RESPONSE}. Please choose another username.`,
        };
        return;
      }

      await Promise.all(
        queryInvalidate.map((query) =>
          queryClient.invalidateQueries({
            queryKey: [query],
            refetchType: "all",
          })
        )
      );
    },
  });

  const watchedValues = useWatch({ control });
  const updateButtonDisable = useMemo(() => {
    const currentValues = watchedValues;

    const isPasswordChanged = currentValues.newPassword !== "";
    const isProfilePicChanged = profileImg !== defaultProfilePic;
    const isLastNameChanged = currentValues.lastName !== defaultLastName;
    const isUserNameChanged = currentValues.userName !== defaultUserName;
    const isFirstNameChanged = currentValues.firstName !== defaultFirstName;

    return (
      isLastNameChanged ||
      isUserNameChanged ||
      isFirstNameChanged ||
      isProfilePicChanged ||
      isPasswordChanged
    );
  }, [
    profileImg,
    watchedValues,
    defaultLastName,
    defaultUserName,
    defaultFirstName,
    defaultProfilePic,
  ]);

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

    mutate({
      queryKey: [mutationKey],
      data: {
        ...data,
        profile: profileImg,
        preferences,
      },
    });
  };

  return (
    <>
      <h2 className="pb-2 border-b-2 border-black dark:border-white w-full text-3xl font-semibold cursor-default">
        Profile
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 *:py-6">
          <div className="order-2 md:order-1">
            <InputField
              disabled={isPending}
              type="text"
              id="firstName"
              label="First Name"
              {...register("firstName")}
              error={errors.firstName?.message}
            />
          </div>
          <div className="md:row-span-2 order-1 md:order-2 h-fit w-full flex justify-center-safe">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div
                  className={cn(
                    "cursor-grab rounded-full relative overflow-hidden",
                    isPending && "pointer-events-none"
                  )}
                >
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
              disabled={isPending}
              type="text"
              id="lastName"
              label="Last Name"
              {...register("lastName")}
              error={errors.lastName?.message}
            />
          </div>
          <div className="order-4">
            <InputField
              disabled={isPending}
              readOnly
              id="email"
              type="text"
              label="Email"
              {...register("email")}
              error={errors.email?.message}
            />
          </div>
          <div className="order-5">
            <InputField
              disabled={isPending}
              type="text"
              id="userName"
              label="Username"
              {...register("userName")}
              error={errors.userName?.message}
            />
          </div>
          <div className="order-6">
            <InputField
              disabled={isPending}
              type="newPassword"
              id="newPassword"
              label="New Password"
              {...register("newPassword")}
              error={errors.newPassword?.message}
            />
          </div>

          <Button
            size="lg"
            type="submit"
            disabled={!updateButtonDisable || isPending}
            className="md:col-span-2 w-fit justify-self-center-safe cursor-pointer order-7"
          >
            {isPending ? (
              <Loader className="animate-spin size-4 mx-7" />
            ) : (
              "Update"
            )}
          </Button>
        </div>
      </form>
    </>
  );
}
