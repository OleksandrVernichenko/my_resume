import { useTranslation, Trans } from "react-i18next";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./side1440.scss";
import { Box } from "@mui/system";
import { List } from "../List/List";


const Side1440 = () => {
  const { i18n } = useTranslation();

  return (
    <Box
      component={"menu"}
      className="links"
      sx={{ zIndex: 20, borderRight: "1px solid grey" }}
    >
      <List />
      <div className="links-router">
        <Button>
          <a href={"#about"}>
            <Trans i18nKey="links.about"></Trans>
          </a>
        </Button>
        <Button>
          <a href={"#skills"}>
            <Trans i18nKey="links.skill"></Trans>
          </a>
        </Button>
        <Button>
          <a href={"#works"}>
            <Trans i18nKey="links.work"></Trans>
          </a>
        </Button>
        <Button>
          <a href={"#form"}>
            <Trans i18nKey="links.contacts"></Trans>
          </a>
        </Button>
      </div>
      <div className="links-external">
        <a
          href="https://github.com/OleksandrVernichenko"
          target={"_blank"}
          rel="noreferrer"
          style={{ color: "inherit" }}
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.facebook.com/oleksandr.vernichenko.5"
          target={"_blank"}
          rel="noreferrer"
          style={{ color: "inherit" }}
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.linkedin.com/"
          target={"_blank"}
          rel="noreferrer"
          style={{ color: "inherit" }}
        >
          <LinkedInIcon />
        </a>
      </div>
    </Box>
  );
};

export default Side1440;
