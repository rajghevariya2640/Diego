import styled from "@emotion/styled/macro";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
import DBox from "../../shared/DBox";
import DContainer from "../../shared/DContainer";
import DGrid from "../../shared/DGrid";
import DStack from "../../shared/DStack";
import DSubHead from "../../shared/DSubHead";
import DTypography from "../../shared/DTypography";
import DList from "../../shared/DList";
import DListItem from "../../shared/DListItem";
import { accordion } from "../../description/home.description";

const AccordionWrapper = styled(DBox)(({ theme }) => ({
  marginTop: "90px",
  paddingLeft: "70px",
  position: "relative",
  "&::after": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: 1,
    backgroundColor: `${theme.palette.text.main}33`,
    transform: "translateX(-50%)",
  },
}));
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  "&.MuiAccordion-root": {
    background: "transparent",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.text.main}33`,
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: -71,
      height: 0,
      width: 2,
      backgroundColor: theme.palette.text.main,
      transition: "all 0.3s ease-in-out",
      opacity: 0,
    },
    "&.Mui-expanded": {
      margin: 0,
      "&::after": {
        opacity: 1,
        height: "100%",
      },
    },
    "& .MuiAccordionSummary-root": {
      minHeight: "unset",
      padding: "28px 0px 20px",
      "&.Mui-expanded": {
        minHeight: "unset",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "transparent",
      },
    },
    "& .MuiAccordionSummary-content": {
      marginBottom: 0,
      margin: 0,
      "&.Mui-expanded": {
        marginBottom: 0,
      },
      "& .MuiTypography-body1": {
        color: `${theme.palette.text.main}99`,
        fontWeight: 700,
        paddingRight: "15px",
        fontFamily: "EB Garamond",
      },
    },
    "& .MuiAccordionDetails-root": {
      padding: 0,
      "& .MuiTypography-body1": {
        color: `${theme.palette.text.main}b3`,
        fontWeight: 600,
      },
      "& .MuiListItem-root": {
        padding: 0,
        paddingLeft: 15,
        lineHeight: "26px",
        fontWeight: 600,
        position: "relative",
        "&::after": {
          content: "''",
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translate(-50%, -50%)",
          height: 4,
          width: 4,
          borderRadius: 10,
          backgroundColor: theme.palette.text.main,
        },
      },
    },
  },
}));

const Services = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <DContainer maxWidth="xl">
        <DBox>
          <DGrid container>
            <DGrid item xs={12} lg={7} xl={6}>
              <DBox padding="100px 70px 0 65px" marginRight="30px">
                <DSubHead
                  head={
                    <>
                      Solution
                      <br /> we provided.
                    </>
                  }
                  primaryText="services"
                />
              </DBox>
            </DGrid>
            <DGrid item xs={12} lg={5} xl={6}>
              <AccordionWrapper>
                {accordion.map((accordion, accordionIndex) => {
                  return (
                    <StyledAccordion
                      defaultExpanded
                      expanded={expanded === `panel${accordionIndex + 1}`}
                      key={accordionIndex}
                      onChange={handleChange(`panel${accordionIndex + 1}`)}
                    >
                      <AccordionSummary id="panel1-header">
                        <DTypography>{`0${accordionIndex + 1}`}</DTypography>
                        <DTypography variant="h4" fontWeight={700}>
                          {accordion?.head}
                        </DTypography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <DStack sx={{ padding: "0 95px 33px 32px" }}>
                          <DTypography mb="15px">
                            Project systematization is something I place a lot
                            of emphasis on. My passion Design Systems.
                          </DTypography>
                          <DList sx={{ padding: 0 }}>
                            <DListItem>Interface design</DListItem>
                            <DListItem>Creating design systems</DListItem>
                            <DListItem>Ui kits</DListItem>
                          </DList>
                        </DStack>
                      </AccordionDetails>
                    </StyledAccordion>
                  );
                })}
              </AccordionWrapper>
            </DGrid>
          </DGrid>
        </DBox>
      </DContainer>
    </div>
  );
};

export default Services;
