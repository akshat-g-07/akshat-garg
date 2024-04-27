import { useState } from "react";
import copy from "copy-to-clipboard";
import emailjs from "emailjs-com";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { motion } from "framer-motion";
import IncomingAnimation from "../../globalComps/IncomingAnimation";

const ContactSection = () => {
  const [processing, setProcessing] = useState(false);
  const [valid, setValid] = useState(true);

  const handleClick = () => {
    setProcessing(true);

    let emailValue = document.querySelector("#email").value;
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validRegex)) {
      setValid(false);
      setProcessing(false);
    } else {
      if (!valid) setValid(true);

      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          {
            from_name: document.querySelector("#name").value,
            message: document.querySelector("#message").value,
            subject: document.querySelector("#subject").value,
            email: document.querySelector("#email").value,
          },
          import.meta.env.VITE_USER_ID
        )
        .then(
          (result) => {
            result.text === "OK"
              ? (() => {
                  alert("Message was sent successfully!");
                  document.querySelector("#name").value = null;
                  document.querySelector("#message").value = null;
                  document.querySelector("#subject").value = null;
                  document.querySelector("#email").value = null;
                })()
              : alert("There was some error. Please try again.");
          },
          () => {
            alert("There was some error. Please try again.");
          }
        );
    }
    setProcessing(false);
  };

  return (
    <motion.div
      className="w-4/5 lg:w-3/5 h-auto absolute top-16 flex flex-col select-none pl-10 pr-3 lg:pr-40 md:px-14 pb-24"
      animate={{
        ...IncomingAnimation,
        transition: { ...IncomingAnimation.transition, delay: 1 },
      }}
    >
      <div
        style={{
          background: "rgba( 255, 255, 255, 0.5 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 20px )",
          WebkitBackdropFilter: "blur( 20px )",
          borderRadius: "10px",
        }}
        className="contactContainer p-5"
      >
        <div className="text-left w-max font-sectionHeading text-2xl md:text-5xl text-white">
          Let's get {window.innerWidth < 768 && <br />} in TOUCH!
          <div className="font-sectionDescription flex items-center text-sm md:text-2xl lg:text-3xl my-1 lg:my-5">
            <div className="w-[20px] h-0.5 mr-2 bg-white" />
            Contact Me
          </div>
        </div>
        <div>
          <TextField
            color="secondary"
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ marginY: 1 }}
          />
          <TextField
            error={!valid}
            color="secondary"
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ marginY: 1 }}
            helperText={!valid && "Please enter valid email."}
          />
          <TextField
            color="secondary"
            id="subject"
            label="Subject"
            variant="outlined"
            fullWidth
            sx={{ marginY: 1 }}
          />
          <TextField
            color="secondary"
            id="message"
            label="Message"
            variant="outlined"
            multiline
            rows={10}
            fullWidth
            sx={{ marginY: 1 }}
          />
        </div>
        <div className="pb-6 border-b-4 border-zinc-600">
          {processing ? (
            <CircularProgress color="secondary" />
          ) : (
            <Button
              color="secondary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleClick}
            >
              Send
            </Button>
          )}
        </div>
        <div className="flex flex-col items-center text-white text-sm lg:text-xl my-5">
          <div>or send me a word</div>
          <div>
            <p>
              @&nbsp;
              <span className="underline decoration-2 underline-offset-4 cursor-pointer hover:text-[#9c27b0]">
                <a href="mailto:akshatg805@gmail.com">akshatg805@gmail.com</a>
              </span>
              <Tooltip title="Copy">
                <span
                  className="cursor-pointer hover:text-[#9c27b0]"
                  onClick={() => {
                    copy("akshatg805@gmail.com");
                    alert("Copied!");
                  }}
                >
                  &nbsp; <ContentCopyIcon />
                </span>
              </Tooltip>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;
