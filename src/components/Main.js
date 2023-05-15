import { Box, Container, Grid, Typography, Paper, Stack } from "@mui/material";
import Image from "../Back-Ground.png"
import Details from './Details'
import RadioButtonsGroup from "./SubscriptionForm";
const Main = () => {

    return <>
        <Box sx={{ backgroundImage: `url(${Image})` }} height="1008px" width="1920px">
            <Grid container>
                <Grid item marginTop="70px">
                    <Typography color="white" height="70px" width="800px" fontSize="56px" marginLeft="144px">
                        Access curated courses worth
                    </Typography>
                    <Typography color="white" height="70px" width="800px" fontSize="56px" marginLeft="144px">
                        ₹ <span style={{ color: "red", textDecoration: "line-through" }}>
                            <span style={{ color: "white" }}>
                                18,500</span>
                        </span> at just <span style={{ color: "#0096FF" }}>₹ 99</span> per year!
                    </Typography>
                    <Details />

                </Grid>
                <Grid item marginTop="70px" marginLeft="200px">
                    <Box sx={{ color: "blue", backgroundColor: 'white', height: '882px', width: '550px', marginLeft: "102px", borderRadius:"10px" }}>
                        <Grid container width="502px">
                            {/* <Container> */}
                            <Grid item marginLeft="135.5px" marginTop="32px">
                                <img src={require('../one.svg').default} alt='mySvgImage' />
                                <Typography marginLeft="-10px"  color={"black"}>Sign Up</Typography>
                            </Grid>
                            <Grid item marginTop="32px" marginLeft="195px" alignContent="center" alignItems="center" justifyContent="center">
                                <img src={require('../two.svg').default} alt='mySvgImage' />
                                <Typography marginLeft="-15px" color={"black"}>Subscribe</Typography>
                            </Grid>
                        </Grid>
                        <Container sx={{px:"24px", py:"20px"}} >
                            <Typography textAlign="center" color="#555555" variant="h6" fontWeight={550}>Select your subscription plan</Typography>
                        </Container>
                        <RadioButtonsGroup />
                    </Box>
                </Grid >
            </Grid >
        </Box >
    </>
}

export default Main

