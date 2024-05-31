import React, { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import './card.css';

export default function Gigs() {
  const theme = useTheme();
  const player1 = useRef(null);
  const player2 = useRef(null);
  const player3 = useRef(null);

  const loadYouTubeAPI = () => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = () => {
      player1.current = new window.YT.Player("player1", {
        videoId: "HTWkf9kLojg",
      });
      player2.current = new window.YT.Player("player2", {
        videoId: "1NNfGBR71ZU",
      });
      player3.current = new window.YT.Player("player3", {
        videoId: "5TcnByQ0xOQ",
      });
    };
  };

  useEffect(() => {
    loadYouTubeAPI();
  }, []);

  const handlePlay = (player) => {
    player.playVideo();
  };

  const handlePause = (player) => {
    player.pauseVideo();
  };

  const handlePrev = (player) => {
    player.seekTo(player.getCurrentTime() - 10, true);
  };

  const handleNext = (player) => {
    player.seekTo(player.getCurrentTime() + 10, true);
  };

  return (
    <div className="playCards" id="gigs">
      <Card sx={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
        <div id="player1" style={{ width: '100%' }}></div>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous" onClick={() => handlePrev(player1.current)}>
              {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause" onClick={() => handlePlay(player1.current)}>
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next" onClick={() => handleNext(player1.current)}>
              {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </Box>
      </Card>

      <Card sx={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
        <div id="player2" style={{ width: '100%' }}></div>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous" onClick={() => handlePrev(player2.current)}>
              {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause" onClick={() => handlePlay(player2.current)}>
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next" onClick={() => handleNext(player2.current)}>
              {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </Box>
      </Card>

      <Card sx={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
        <div id="player3" style={{ width: '100%' }}></div>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous" onClick={() => handlePrev(player3.current)}>
              {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause" onClick={() => handlePlay(player3.current)}>
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next" onClick={() => handleNext(player3.current)}>
              {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box>
        </Box>
      </Card>
    </div>
  );
}


