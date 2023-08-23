
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:black;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    color: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Vichaar</Heading>
            <SubHeading>Discover, Reflect, Connect</SubHeading>
        </Image>
    )
}

export default Banner;