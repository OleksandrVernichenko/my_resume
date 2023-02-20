import { Box } from "@mui/system";
import "./form.scss";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { cyan } from "@mui/material/colors";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { useTranslation, Trans } from "react-i18next";

const Form = () => {
  const { i18n } = useTranslation();
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [onError, setOnError] = useState(false);

  const onSendMessage = (e) => {
    e.preventDefault();
    const TOKEN = "6150074479:AAEhlOUlSLaBB-DEAmoaRZv4iH4vQiaAGbk";
    const user = "599517936";

    const messageToSend = `New Message:%0A - Name: ${text} %0A - Email: ${email}%0A - Subject: ${subject}%0A - Message: ${message} `;
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${user}&text=${messageToSend}/`;

    if (
      text.length < 3 ||
      email.length < 5 ||
      subject.length < 1 ||
      message.length < 1
    ) {
      setError(true);
      setOnError(true);
    } else {
      fetch(url);
      setText("");
      setEmail("");
      setSubject("");
      setMessage("");
      setOpen(true);
      setError(false);
    }
  };

  useEffect(() => {
    let timeout;
    if (open) {
      timeout = setInterval(() => setOpen(false), 3000);
    }
    return () => clearInterval(timeout, 3000);
  });

  useEffect(() => {
    let timeout;
    if (onError) {
      timeout = setInterval(() => setOnError(false), 3000);
    }
    return () => clearInterval(timeout, 3000);
  });

  return (
    <Box
      className="content_wrapper form"
      sx={{ color: "text.primary" }}
      id="form"
    >
      <Box component={"h2"} sx={{ color: blue[400] }}>
        <Trans i18nKey="form.contact"></Trans>
      </Box>
      <form onSubmit={(e) => onSendMessage(e)}>
        <div className="name_email">
          <TextField
            id="name"
            sx={{ width: "50%" }}
            label={<Trans i18nKey="form.name"></Trans>}
            required
            error={error}
            type={"text"}
            value={text}
            onChange={(e) => setText(e.target.value)}
            variant="outlined"
          />
          <TextField
            id="email"
            sx={{ width: "50%" }}
            label={<Trans i18nKey="form.email"></Trans>}
            error={error}
            required
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
        </div>
        <Collapse
          in={open}
          sx={{
            position: "absolute",
            zIndex: 10,
            width: 300,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Alert>{<Trans i18nKey="form.done"></Trans>}</Alert>
        </Collapse>
        <Collapse
          in={onError}
          sx={{
            position: "absolute",
            zIndex: 10,
            width: 300,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Alert severity="error">{<Trans i18nKey="form.alert"></Trans>}</Alert>
        </Collapse>
        <TextField
          id="subject"
          label={<Trans i18nKey="form.sub"></Trans>}
          error={error}
          required
          type={"text"}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="message"
          required
          label={<Trans i18nKey="form.message"></Trans>}
          type={"text"}
          error={error}
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
        />
        <Button type="submit" variant="outlined">
          {<Trans i18nKey="form.send"></Trans>}
        </Button>
      </form>

      <Box component={"span"} sx={{ color: cyan[200], opacity: 0.5 }}>
        &lt;/body&gt;
      </Box>
      <Box
        component={"span"}
        sx={{ color: cyan[200], opacity: 0.5, display: "block", marginTop: 2 }}
      >
        &lt;/html&gt;
      </Box>
    </Box>
  );
};

export default Form;
