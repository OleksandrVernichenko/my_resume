import cars from "../../assets/autohunt.mov";
import care from "../../assets/care.mov";
import cottage from "../../assets/cottage.mov";
import bike from "../../assets/bike.mov";
import { Box } from "@mui/system";
import "./works.scss";
import { cyan } from "@mui/material/colors";
import Miu from "../../assets/Miu";
import heroku from "../../assets/heroku.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import js from "../../assets/js.png";
import scss from "../../assets/scss.png";
import LaptopIcon from "@mui/icons-material/Laptop";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import { useTranslation, Trans } from "react-i18next";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const Works = () => {
  const { i18n } = useTranslation();
  return (
    <Box
      id="works"
      className="content_wrapper video_works"
      sx={{ color: "text.primary", paddingTop: "50px" }}
    >
      <Box component={"span"} sx={{ color: cyan[200], opacity: 0.5 }}>
        &lt;section&gt;
      </Box>
      <div className="video_works-list">
        <div className="video_works-list-items">
          <div className="work_info">
            <span className="name">Autohunt.</span>
            <span className="description">
              <Trans i18nKey="works.descr1"></Trans>
            </span>
            <div className="technologies">
              <span className="tech">
                <Trans i18nKey="works.tech"></Trans>
              </span>
              <div className="images">
                <LightTooltip title="React">
                  <img src={react} alt="react" />
                </LightTooltip>
                <LightTooltip title="Redux">
                  <img src={redux} alt="react" />
                </LightTooltip>
                <LightTooltip title="JS">
                  <img src={js} alt="react" />
                </LightTooltip>
                <LightTooltip title="SCSS">
                  <img src={scss} alt="react" />
                </LightTooltip>
                <LightTooltip title="Heroku">
                  <img src={heroku} alt="react" />
                </LightTooltip>
                <LightTooltip title="MIU">
                  <div>
                    <Miu />
                  </div>
                </LightTooltip>
              </div>
            </div>
            <span className="adaptive">
              <Trans i18nKey="works.adaptive"></Trans>
            </span>
            <LightTooltip title="Laptop">
              <LaptopIcon fontSize="large" />
            </LightTooltip>
            <a
              href="https://autohunt-cars.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <Trans i18nKey="works.link"></Trans>
            </a>
          </div>
          <video src={cars} autoPlay muted loop></video>
        </div>
        <div className="video_works-list-items">
          <div className="work_info">
            <span className="name">Health Care Application</span>
            <span className="description">
              <Trans i18nKey="works.descr2"></Trans>
            </span>
            <div className="technologies">
              <span className="tech">
                <Trans i18nKey="works.tech"></Trans>
              </span>
              <div className="images">
                <LightTooltip title="React">
                  <img src={react} alt="react" />
                </LightTooltip>
                <LightTooltip title="JS">
                  <img src={js} alt="react" />
                </LightTooltip>
                <LightTooltip title="SCSS">
                  <img src={scss} alt="react" />
                </LightTooltip>
              </div>
            </div>
            <span className="adaptive">
              <Trans i18nKey="works.adaptive"></Trans>
            </span>
            <div className="devises">
              <LightTooltip title="Laptop">
                <LaptopIcon fontSize="large" />
              </LightTooltip>
              <LightTooltip title="Tablet">
                <TabletMacIcon fontSize="large" />
              </LightTooltip>
              <LightTooltip title="Phone">
                <StayCurrentPortraitIcon fontSize="large" />
              </LightTooltip>
            </div>
            <a
              href="https://oleksandrvernichenko.github.io/healthcare-app"
              target="_blank"
              rel="noreferrer"
            >
              <Trans i18nKey="works.link"></Trans>
            </a>
          </div>
          <video src={care} autoPlay muted loop></video>
        </div>
        <div className="video_works-list-items">
          <div className="work_info">
            <span className="name">Cottage Village</span>
            <span className="description">
              <Trans i18nKey="works.descr3"></Trans>
            </span>
            <div className="technologies">
              <span className="tech">
                <Trans i18nKey="works.tech"></Trans>
              </span>
              <div className="images">
                <LightTooltip title="React">
                  <img src={react} alt="react" />
                </LightTooltip>
                <LightTooltip title="JS">
                  <img src={js} alt="react" />
                </LightTooltip>
                <LightTooltip title="SCSS">
                  <img src={scss} alt="react" />
                </LightTooltip>
                <LightTooltip title="MIU">
                  <div>
                    <Miu />
                  </div>
                </LightTooltip>
              </div>
            </div>
            <span className="adaptive">
              <Trans i18nKey="works.adaptive"></Trans>
            </span>
            <div className="devises">
              <LightTooltip title="Laptop">
                <LaptopIcon fontSize="large" />
              </LightTooltip>
              <LightTooltip title="Tablet">
                <TabletMacIcon fontSize="large" />
              </LightTooltip>
              <LightTooltip title="Phone">
                <StayCurrentPortraitIcon fontSize="large" />
              </LightTooltip>
            </div>
            <a
              href="https://oleksandrvernichenko.github.io/cottagevillage"
              target="_blank"
              rel="noreferrer"
            >
              <Trans i18nKey="works.link"></Trans>
            </a>
          </div>
          <video src={cottage} autoPlay muted loop></video>
        </div>
        <div className="video_works-list-items">
          <div className="work_info">
            <span className="name">Cowboy*</span>
            <span className="description">
              <Trans i18nKey="works.descr4"></Trans>
            </span>
            <div className="technologies">
              <span className="tech">
                <Trans i18nKey="works.tech"></Trans>
              </span>
              <div className="images">
                <LightTooltip title="React">
                  <img src={react} alt="react" />
                </LightTooltip>
                <LightTooltip title="JS">
                  <img src={js} alt="react" />
                </LightTooltip>
                <LightTooltip title="SCSS">
                  <img src={scss} alt="react" />
                </LightTooltip>
              </div>
            </div>
            <span className="adaptive">
              <Trans i18nKey="works.adaptive"></Trans>
            </span>
            <div className="devises">
              <LightTooltip title="Laptop">
                <LaptopIcon fontSize="large" />
              </LightTooltip>
              <LightTooltip title="Tablet">
                <TabletMacIcon fontSize="large" />
              </LightTooltip>
              <LightTooltip title="Phone">
                <StayCurrentPortraitIcon fontSize="large" />
              </LightTooltip>
            </div>
            <a
              href="https://oleksandrvernichenko.github.io/bike"
              target="_blank"
              rel="noreferrer"
            >
              <Trans i18nKey="works.link"></Trans>
            </a>
          </div>
          <video src={bike} autoPlay muted loop></video>
        </div>
      </div>
      <Box component={"span"} sx={{ color: cyan[200], opacity: 0.5 }}>
        &lt;/section&gt;
      </Box>
    </Box>
  );
};

export default Works;
