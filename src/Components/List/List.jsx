import { useState } from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useContext } from "react";
import { ColorModeContext } from "../Context/context";
import { useTranslation } from "react-i18next";
import { FormControlLabel } from "@mui/material";
import { MaterialUISwitch } from "../../theme/theme";
import ua from "../../assets/ua.png";
import en from "../../assets/uk.png";

export const List = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const colorMode = useContext(ColorModeContext);

  const handleAlignment = (event, lng) => {
    if (lng !== null) {
      setLang(lng);
    }
  };
  return (
    <div
      className="drawer_items"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        margin: "0 15px",
        justifySelf: "flex-end",
      }}
    >
      <ToggleButtonGroup exclusive onChange={handleAlignment} value={lang}>
        <ToggleButton
          value={"en"}
          className="language_button"
          type="submit"
          sx={{ height: "25px", width: "35px" }}
          onClick={() => i18n.changeLanguage("en")}
        >
          <img
            src={en}
            alt="language"
            style={{ height: 15, width: 25 }}
            className="language_logo"
          />
        </ToggleButton>
        <ToggleButton
          value={"ua"}
          sx={{ height: "25px", width: "35px" }}
          className="language_button"
          type="submit"
          onClick={() => i18n.changeLanguage("ua")}
        >
          <img
            src={ua}
            alt="language"
            style={{ height: 15, width: 25 }}
            className="language_logo"
          />
        </ToggleButton>
      </ToggleButtonGroup>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FormControlLabel
          control={
            <MaterialUISwitch
              defaultChecked
              sx={{ m: 1 }}
              onClick={colorMode.toggleColorMode}
            />
          }
        />
      </div>
    </div>
  );
};
