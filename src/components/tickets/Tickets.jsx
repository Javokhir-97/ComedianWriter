import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import "./tickets.css";
import Image1 from "../../assets/stand-up-comedy-neon-sign.jpg";
import Image2 from "../../assets/alison_courseware_intro_2020.jpg";
import Image3 from "../../assets/comedy-hall-neon-sign-microphone-with-hat-vector-47931073.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Tickets() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  
    
    const smallScreenTickets = (  
      <>
      <Card
        className="card"
        orientation="horizontal"
        variant="outlined"
        sx={{ width: 260 }}
      >
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img src={Image1} srcSet={Image1} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography fontWeight="md" textColor="common.black">
            Lofty A
          </Typography>
          <Typography level="body-sm">Apgujeon Rodeo</Typography>
        </CardContent>
        <CardOverflow
          variant="soft"
          color="neutral"
          sx={{
            px: 0.2,
            writingMode: "vertical-rl",
            justifyContent: "center",
            fontSize: "xs",
            fontWeight: "xl",
            letterSpacing: "1px",
            textTransform: "uppercase",
            borderLeft: "1px solid",
            borderColor: "divider",
          }}
        >
          Ticket
        </CardOverflow>
      </Card>

      <Card
        className="card"
        orientation="horizontal"
        variant="outlined"
        sx={{ width: 260 }}
      >
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img src={Image1} srcSet={Image1} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography fontWeight="md" textColor="common.black">
            Dark De Gary
          </Typography>
          <Typography level="body-sm">Iteawon</Typography>
        </CardContent>
        <CardOverflow
          variant="soft"
          color="neutral"
          sx={{
            px: 0.2,
            writingMode: "vertical-rl",
            justifyContent: "center",
            fontSize: "xs",
            fontWeight: "xl",
            letterSpacing: "1px",
            textTransform: "uppercase",
            borderLeft: "1px solid",
            borderColor: "divider",
          }}
        >
          Ticket
        </CardOverflow>
      </Card>

      <Card
        className="card"
        orientation="horizontal"
        variant="outlined"
        sx={{ width: 260 }}
      >
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img src={Image2} srcSet={Image2} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography fontWeight="md" textColor="common.black">
            Taco Amigo
          </Typography>
          <Typography level="body-sm">Iteawon</Typography>
        </CardContent>
        <CardOverflow
          variant="soft"
          color="neutral"
          sx={{
            px: 0.2,
            writingMode: "vertical-rl",
            justifyContent: "center",
            fontSize: "xs",
            fontWeight: "xl",
            letterSpacing: "1px",
            textTransform: "uppercase",
            borderLeft: "1px solid",
            borderColor: "divider",
          }}
        >
          Ticket
        </CardOverflow>
      </Card>
      </>
    )

    const allTickets = (
      <>
      <Card
        className="card"
        orientation="horizontal"
        variant="outlined"
        sx={{ width: 260 }}
      >
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img src={Image1} srcSet={Image1} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography fontWeight="md" textColor="common.black">
            Lofty A
          </Typography>
          <Typography level="body-sm">Apgujeon Rodeo</Typography>
        </CardContent>
        <CardOverflow
          variant="soft"
          color="neutral"
          sx={{
            px: 0.2,
            writingMode: "vertical-rl",
            justifyContent: "center",
            fontSize: "xs",
            fontWeight: "xl",
            letterSpacing: "1px",
            textTransform: "uppercase",
            borderLeft: "1px solid",
            borderColor: "divider",
          }}
        >
          Ticket
        </CardOverflow>
      </Card>

      <Card
        className="card"
        orientation="horizontal"
        variant="outlined"
        sx={{ width: 260 }}
      >
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img src={Image1} srcSet={Image1} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography fontWeight="md" textColor="common.black">
            Dark De Gary
          </Typography>
          <Typography level="body-sm">Iteawon</Typography>
        </CardContent>
        <CardOverflow
          variant="soft"
          color="neutral"
          sx={{
            px: 0.2,
            writingMode: "vertical-rl",
            justifyContent: "center",
            fontSize: "xs",
            fontWeight: "xl",
            letterSpacing: "1px",
            textTransform: "uppercase",
            borderLeft: "1px solid",
            borderColor: "divider",
          }}
        >
          Ticket
        </CardOverflow>
      </Card>

      <Card
        className="card"
        orientation="horizontal"
        variant="outlined"
        sx={{ width: 260 }}
      >
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img src={Image2} srcSet={Image2} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography fontWeight="md" textColor="common.black">
            Taco Amigo
          </Typography>
          <Typography level="body-sm">Iteawon</Typography>
        </CardContent>
        <CardOverflow
          variant="soft"
          color="neutral"
          sx={{
            px: 0.2,
            writingMode: "vertical-rl",
            justifyContent: "center",
            fontSize: "xs",
            fontWeight: "xl",
            letterSpacing: "1px",
            textTransform: "uppercase",
            borderLeft: "1px solid",
            borderColor: "divider",
          }}
        >
          Ticket
        </CardOverflow>
      </Card>

      <Card
        className="card"
        orientation="horizontal"
        variant="outlined"
        sx={{ width: 260 }}
      >
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img src={Image2} srcSet={Image2} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography fontWeight="md" textColor="common.black">
            Dark De Gary
          </Typography>
          <Typography level="body-sm">Iteawon</Typography>
        </CardContent>
        <CardOverflow
          variant="soft"
          color="neutral"
          sx={{
            px: 0.2,
            writingMode: "vertical-rl",
            justifyContent: "center",
            fontSize: "xs",
            fontWeight: "xl",
            letterSpacing: "1px",
            textTransform: "uppercase",
            borderLeft: "1px solid",
            borderColor: "divider",
          }}
        >
          Ticket
        </CardOverflow>
      </Card>

      <Card
        className="card"
        orientation="horizontal"
        variant="outlined"
        sx={{ width: 260 }}
      >
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img src={Image3} srcSet={Image3} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography fontWeight="md" textColor="common.black">
            Lit lounge
          </Typography>
          <Typography level="body-sm">Iteawon</Typography>
        </CardContent>
        <CardOverflow
          variant="soft"
          color="neutral"
          sx={{
            px: 0.2,
            writingMode: "vertical-rl",
            justifyContent: "center",
            fontSize: "xs",
            fontWeight: "xl",
            letterSpacing: "1px",
            textTransform: "uppercase",
            borderLeft: "1px solid",
            borderColor: "divider",
          }}
        >
          Ticket
        </CardOverflow>
      </Card>

      <Card
        className="card"
        orientation="horizontal"
        variant="outlined"
        sx={{ width: 260 }}
      >
        <CardOverflow>
          <AspectRatio ratio="1" sx={{ width: 90 }}>
            <img src={Image3} srcSet={Image3} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography fontWeight="md" textColor="common.black">
            Lit Lounge
          </Typography>
          <Typography level="body-sm">Iteawon</Typography>
        </CardContent>
        <CardOverflow
          variant="soft"
          color="neutral"
          sx={{
            px: 0.2,
            writingMode: "vertical-rl",
            justifyContent: "center",
            fontSize: "xs",
            fontWeight: "xl",
            letterSpacing: "1px",
            textTransform: "uppercase",
            borderLeft: "1px solid",
            borderColor: "divider",
          }}
        >
          Ticket
        </CardOverflow>
      </Card>
      </>
    )
    return (
      <div className="tickets" id='tickets'>
        {isSmallScreen ? smallScreenTickets : allTickets}
    </div>
  );
}
