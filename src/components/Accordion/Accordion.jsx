import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {/* <h1>Tez-tez beriladigan savollar</h1> */}
      <Divider
        className="divider-main"
        sx={{
          fontSize: "30px",
          fontFamily: "Montserrat",
          fontWeight: "500",
          color: "text.default",
        }}
        textAlign="left"
      >
        Tez-tez beriladigan savollar
      </Divider>

      <div className="acc-group">
        <Accordion
          className="acc-wrapper"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            className="acc-head"
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>
              Kurs qanday borishi haqida to'liq malumot bera olasizmi ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Kurslarimiz qanday bo'lishi haqida to'liq malumotni YouTube dagi
              Leap English kanalidan bilib olishingiz mumkin
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="acc-wrapper"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            className="acc-head"
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>Kurs narxlari qanday ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Kurslarning oylik to'lovi Beginner, Elementary, Pre-Intermediate,
              Intermediate darajalari uchun 300.000 so'mdan. Pre-IELTS 350.000
              so'm, IELTS uchun 400.000 so'm
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="acc-wrapper"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            className="acc-head"
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography>Kurslar qachondan boshlanadi ?</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Kurslarga qabul har oy uchun bo'lib o'tadi va har oyda yangi guruh
              o'qishni boshlaydi
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* -------------------------------------- */}

        <Accordion
          className="acc-wrapper"
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            className="acc-head"
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography>
              Biror guruhga kursning yarmidan qo'shilib keta olamanmi ?
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Yo'q, faqatgina yangi guruhda o'qishni boshlashingiz mumkin
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="acc-wrapper"
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            className="acc-head"
            aria-controls="panel5d-content"
            id="panel5d-header"
          >
            <Typography>Kurslar qancha davom etadi ?</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Kurslarimiz davomiyligi Beginner va Elementary darajalari uchun 2
              oydan, Pre-Intermediate va Intermediate darajalari uchun 3 oydan
              bo'ladi
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="acc-wrapper"
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            className="acc-head"
            aria-controls="panel6d-content"
            id="panel6d-header"
          >
            <Typography>Bitta guruhda qancha o'quvchi bo'ladi ?</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Guruhda eng ko'pi bilan 12 ta o'quvchi bo'ladi
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="acc-wrapper"
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            className="acc-head"
            aria-controls="panel7d-content"
            id="panel7d-header"
          >
            <Typography>Darajamni qanday belgilayman ?</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Agar darajangizni aniq bilmasangiz shunchaki bilmaymanni belgilang
              va biz siz bilan bog'lanamiz
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="acc-wrapper"
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            className="acc-head"
            aria-controls="panel8d-content"
            id="panel8d-header"
          >
            <Typography>Nega menga javob kelmayapti ?</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>
              Hozirda o'quvchilar ko'pligi sababdan sizga jovob biroz kechroq
              kelishi mumkin, agar sizga 2 kun davomida aloqaga chiqishmasa
              pastdagi murojat uchun deb berilgan havolaga bosing
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
