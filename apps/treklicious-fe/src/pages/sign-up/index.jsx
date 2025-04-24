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

export default function SignUp() {
  const [profileImg, setProfileImg] = useState(null);
  const [tempProfileImg, setTempProfileImg] = useState(null);

  const avatarOnClose = () => {
    setTempProfileImg(null);
  };

  const avatarOnCrop = (view) => {
    setTempProfileImg(view);
  };

  return (
    <section className="bg-[#0d47a1] flex justify-center min-h-screen">
      <div className="bg-[#ffffff2d] p-10 grid grid-cols-1 md:grid-cols-2 rounded-lg backdrop-blur-xs border border-[#ffffff1a] shadow-2xl gap-x-20 mt-25 space-y-12">
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
        <InputField required type="text" id="first-name" label="First Name" />
        <InputField required type="text" id="last-name" label="Last Name" />
        <InputField required type="text" id="email" label="Email" />
        <InputField required type="text" id="username" label="Username" />
        <InputField required type="password" id="password" label="Password" />
        <InputField
          required
          type="password"
          className="max-w-[200px]"
          inputClassName="max-w-[150px]"
          id="confirm-password"
          label="Confirm Password"
        />
        <Button
          type="submit"
          size="lg"
          className="md:col-span-2 w-fit justify-self-center-safe cursor-pointer"
        >
          Sign Up
        </Button>
        <div className="md:col-span-2 h-0.25 w-full bg-black" />
        <div className="md:col-span-2 w-full text-center">
          Already have an account?{" "}
          <Link to="/log-in" className="font-semibold">
            Log In
          </Link>
        </div>
      </div>
    </section>
  );
}
