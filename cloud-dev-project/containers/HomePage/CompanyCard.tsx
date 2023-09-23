import { COLORS } from "@/constants";
import { Stack, Typography, Divider, IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faDiscord,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

type TSocialMedia = {
  name: string;
  link: string;
  icon: IconDefinition;
};

const socialMedia: TSocialMedia[] = [
  { name: "Discord", link: "https://discord.com/", icon: faDiscord },
  { name: "Instagram", link: "https://www.instagram.com/", icon: faInstagram },
  { name: "Linkedin", link: "https://www.linkedin.com/", icon: faLinkedin },
];

function CompanyCard() {
  return (
    <Stack
      bgcolor={COLORS.PRIMARY_LIGHT}
      borderRadius={"10px"}
      p={2}
      rowGap={2}
    >
      <Typography variant={"h3"} color={COLORS.PRIMARY} fontWeight={600}>
        COMPANY
      </Typography>
      <Stack direction={"row"} columnGap={1}>
        <Typography variant={"h4"} color={COLORS.SECONDARY}>
          About
        </Typography>
        <Typography variant={"h4"} color={COLORS.SECONDARY}>
          |
        </Typography>
        <Typography variant={"h4"} color={COLORS.SECONDARY}>
          Support
        </Typography>
        <Typography variant={"h4"} color={COLORS.SECONDARY}>
          |
        </Typography>
        <Typography variant={"h4"} color={COLORS.SECONDARY}>
          Careers
        </Typography>
      </Stack>
      <Typography variant={"h3"} color={COLORS.PRIMARY} fontWeight={600} pt={3}>
        CONNECT WITH US
      </Typography>
      <Stack direction={"row"} columnGap={2} pb={2}>
        {socialMedia.map((item, index) => (
          <IconButton
            key={index}
            sx={{ width: "47px", height: "47px", background: COLORS.WHITE }}
            onClick={() => window.open(item.link, "_blank")}
          >
            <FontAwesomeIcon icon={item.icon} color={COLORS.SECONDARY} />
          </IconButton>
        ))}
      </Stack>
      <Divider light sx={{ background: COLORS.WHITE, borderWidth: "1px" }} />
      <Stack direction={"row"} columnGap={1}>
        <Typography variant={"h4"} color={COLORS.WHITE}>
          Privecy
        </Typography>
        <Typography variant={"h4"} color={COLORS.WHITE}>
          |
        </Typography>
        <Typography variant={"h4"} color={COLORS.WHITE}>
          Terms
        </Typography>
      </Stack>
    </Stack>
  );
}

export default CompanyCard;
