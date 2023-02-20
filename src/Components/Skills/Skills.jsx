import { Box } from "@mui/system";
import { cyan } from "@mui/material/colors";
import { useTranslation, Trans } from "react-i18next";
import {blue} from "@mui/material/colors";

const Skills = () => {
  const { i18n } = useTranslation();



  return (
    <Box id='skills' className="content_wrapper" sx={{ color: "text.primary" }}>
      <Box component={"h2"} sx={{ color: blue[400] }}>
        <Trans i18nKey="skills.first"></Trans>
      </Box>
      <Box component={"p"}>
        <Box component={"span"} className="first" sx={{ color: cyan[200],opacity: .5 }}>
          &lt;p&gt;
        </Box>
        <Trans i18nKey="skills.p1"></Trans>
        <Box component={"span"} className="second" sx={{ color: cyan[200],opacity: .5 }}>
          &lt;/p&gt;
        </Box>
      </Box>
    </Box>
  );
};

export default Skills;
