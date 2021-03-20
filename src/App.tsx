import React from "react";
import Container from "@material-ui/core/Container";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Copyright, ProTip } from "./components";
import { useCurrentYear } from "./hooks";

type Color = "inherit" | "primary" | "secondary" | "default";

export default function App() {
  const [headingColor, setHeadingColor] = React.useState<
    TypographyProps["color"]
  >("textSecondary");
  const [color, setColor] = React.useState<Color>("primary");
  const { getCurrentYear, setCurrentYear } = useCurrentYear();
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const changeColor = () => {
    setColor("secondary");
  };

  const incrementYear = () => {
    setCurrentYear(getCurrentYear() + 1);
    buttonRef.current?.setAttribute("disabled", "true");
    changeColor();
    setHeadingColor("secondary");
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography
          variant="h4"
          component="h1"
          color={headingColor}
          gutterBottom
        >
          Create React App example with TypeScript
        </Typography>
        <ProTip />
        <Copyright year={getCurrentYear()} />
        <Typography variant="body2" align="center">
          <Button
            onClick={incrementYear}
            disabled={false}
            ref={buttonRef}
            color={color}
          >
            Increment Year
          </Button>
        </Typography>
      </Box>
    </Container>
  );
}
