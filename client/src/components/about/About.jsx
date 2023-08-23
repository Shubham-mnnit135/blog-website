import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
  text-align: justify;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        
        <Typography variant="h3">Thank You for Exploring Vichaar</Typography>
        <Text variant="h5">
          We extend our heartfelt thanks to you for taking the time to explore
          Vichaar. We're truly honored that you chose to be a part of
          our online community, where curiosity knows no bounds and diverse
          interests find a common ground.
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
