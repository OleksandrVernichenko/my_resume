import "./about.scss";
import { Box } from "@mui/system";
import { useTranslation, Trans } from "react-i18next";
import { cyan } from "@mui/material/colors";
import {grey} from "@mui/material/colors";
import {blue} from "@mui/material/colors";

const About = () => {
  const { i18n } = useTranslation();

  return (
    <Box
    id="about"
      component={"div"}
      className="content_wrapper"
      sx={{ color: "text.primary", paddingTop: "50px" }}
    >
      <Box component={"i"} sx={{ color: grey[200], opacity: 0.5 }}></Box>
      <Box component={"h1"} sx={{ color: blue[200] }}>
        <Trans i18nKey="about.h1"></Trans>
      </Box>

      <Box component={"h2"} sx={{ color: blue[400] }}>
        <Trans i18nKey="about.first"></Trans>
      </Box>
      <Box component={"p"}>
        <Box
          component={"span"}
          className="first"
          sx={{ color: cyan[200], opacity: 0.5 }}
        >
          &lt;p&gt;
        </Box>
        <Trans i18nKey="about.p1"></Trans>
        <br />
        <br />
        <Trans i18nKey="about.p2"></Trans>
        <Box
          component={"span"}
          className="second"
          sx={{ color: cyan[200], opacity: 0.5 }}
        >
          &lt;/p&gt;
        </Box>
        <br />
        <br />
        <Box component={"span"} sx={{ color: blue[400], cursor: 'pointer' }}>
          <a href="#form">
            <Trans i18nKey="about.link"></Trans>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
