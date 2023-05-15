import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Stack, Box, Grid, Typography, Divider, Button } from '@mui/material';

export default function RadioButtonsGroup() {
    return (
        <FormControl>
            {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="12"
                name="radio-buttons-group"
            >
                <Stack flexDirection="row" color="grey" mx="24px" my={1} style={{ background:"#E7E7E7", backgroundColor:"2px solid #BEBEBE", height: "65px", width: "491px", border: "2px solid grey", borderRadius: "5px" }}>
                    <FormControlLabel sx={{ paddingLeft: "20px", color:"#BEBEBE" }} value="10" disabled control={<Radio />}></FormControlLabel>
                    <Typography paddingTop="20px" color="#BEBEBE">12 Months Subscription</Typography>
                    <Stack justifyContent="flex-end" marginLeft="180px" marginBottom="12px">
                        <Stack flexDirection="row">
                            <Typography marginTop={0.5} paddingBottom={0} marginRight="3px" color="#BEBEBE" variant='caption'>
                                Total
                            </Typography>
                            <Typography marginLeft="3px" variant="body1" color="#BEBEBE">
                                ₹99
                            </Typography>
                        </Stack>
                        <Stack flexDirection="row">
                            <Typography marginTop={0.8} marginLeft={1} variant='caption' color="#BEBEBE">
                                ₹8
                            </Typography>
                            <Typography variant="caption" marginLeft={0.8} marginTop={0.8} color="#BEBEBE">
                                /mo
                            </Typography>
                        </Stack>
                        {/* </Grid> */}
                    </Stack>
                </Stack>
                <Stack flexDirection="row" mx="24px" my={1} style={{ background:"#D7EDDD", height: "65px", width: "491px", border: "2px solid green", borderRadius: "5px" }}>
                    <FormControlLabel sx={{ paddingLeft: "20px" }} value="12" control={<Radio />}></FormControlLabel>
                    <Typography paddingTop="20px" color="GrayText">12 Months Subscription</Typography>

                    <Stack justifyContent="flex-end" marginLeft="180px" marginBottom="12px">
                        <Stack flexDirection="row">
                            <Typography marginTop={0.5} paddingBottom={0} marginRight="3px" color="#555555" variant='caption'>
                                Total
                            </Typography>
                            <Typography marginLeft="3px" color="#222222" variant="body1">
                                ₹179
                            </Typography>
                        </Stack>
                        <Stack flexDirection="row">
                            <Typography marginTop={0.8} color="#222222" marginLeft={1} variant='caption'>
                                ₹15
                            </Typography>
                            <Typography color="grey" variant="caption" marginLeft={0.8} marginTop={0.8}>
                                /mo
                            </Typography>
                        </Stack>
                        {/* </Grid> */}
                    </Stack>
                </Stack>
                <Stack flexDirection="row" mx="24px" my={1} style={{ height: "65px", width: "491px", border: "2px solid grey", borderRadius: "5px" }}>
                    <FormControlLabel sx={{ paddingLeft: "20px" }} value="6" control={<Radio />}></FormControlLabel>
                    <Typography paddingTop="20px" color="GrayText">6 Months Subscription</Typography>

                    <Stack justifyContent="flex-end" marginLeft="180px" marginBottom="12px">
                        <Stack flexDirection="row">
                            <Typography marginTop={0.5} paddingBottom={0} marginRight="3px" color="#555555" variant='caption'>
                                Total
                            </Typography>
                            <Typography marginLeft="3px" color="#222222" variant="body1">
                                ₹149
                            </Typography>
                        </Stack>
                        <Stack flexDirection="row">
                            <Typography marginTop={0.8} color="#222222" marginLeft={1} variant='caption'>
                                ₹25
                            </Typography>
                            <Typography color="grey" variant="caption" marginLeft={0.8} marginTop={0.8}>
                                /mo
                            </Typography>
                        </Stack>
                        {/* </Grid> */}
                    </Stack>
                </Stack>
                <Stack flexDirection="row" mx="24px" my={1} style={{ height: "65px", width: "491px", border: "2px solid grey", borderRadius: "5px" }}>
                    <FormControlLabel sx={{ paddingLeft: "20px" }} value="3" control={<Radio />}></FormControlLabel>
                    <Typography paddingTop="20px" color="GrayText">3 Months Subscription</Typography>

                    <Stack justifyContent="flex-end" marginLeft="180px" marginBottom="12px">
                        <Stack flexDirection="row">
                            <Typography marginTop={0.5} paddingBottom={0} marginRight="3px" color="#555555" variant='caption'>
                                Total
                            </Typography>
                            <Typography marginLeft="3px" color="#222222" variant="body1">
                                ₹99
                            </Typography>
                        </Stack>
                        <Stack flexDirection="row">
                            <Typography marginTop={0.8} color="#222222" marginLeft={1} variant='caption'>
                                ₹33
                            </Typography>
                            <Typography color="grey" variant="caption" marginLeft={0.8} marginTop={0.8}>
                                /mo
                            </Typography>
                        </Stack>
                        {/* </Grid> */}
                    </Stack>
                </Stack>
                {/* <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
            </RadioGroup>
            <Divider sx={{ height: "5px", marginLeft: "25px", marginTop: "5px", marginRight: "23px" }} variant="fullWidth"></Divider>

            <Stack height="180px" mx="24px" marginTop="5px">
                <Box height="52px">
                    <Grid px="36px" py={"12px"} flexDirection="row" display="flex" justifyContent="space-between">
                        <Typography color="#333333" >Subscrition Fee</Typography>
                        <Typography color="black" >₹18,500</Typography>
                    </Grid>
                </Box>
                <Box height="76px" sx={{ border: "2px solid #DE4313", borderRadius: "8px", background: `linear-gradient(135deg, rgba(222, 67, 19, 0.2) 0%, rgba(222, 67, 19, 0.2) 0.75%, rgba(222, 67, 19, 0.2) 2.92%, rgba(222, 68, 20, 0.2) 6.37%, rgba(223, 69, 21, 0.2) 10.97%, rgba(223, 72, 22, 0.2) 16.59%, rgba(224, 75, 24, 0.2) 23.1%, rgba(225, 80, 27, 0.2) 30.37%, rgba(227, 86, 31, 0.2) 38.27%, rgba(229, 94, 36, 0.2) 46.66%, rgba(231, 104, 43, 0.2) 55.41%, rgba(235, 117, 51, 0.2) 64.39%, rgba(238, 132, 60, 0.2) 73.47%, rgba(243, 149, 71, 0.2) 82.52%, rgba(248, 169, 84, 0.2) 91.41%, rgba(254, 193, 99, 0.2) 100%);` }}>
                    <Grid px="36px" paddingTop={"12px"} flexDirection="row" display="flex" justifyContent="space-between">
                        <Typography color="#DE4313" ><b>Limited time offer</b></Typography>
                        <Typography color="#444444"><b>-₹18,401</b></Typography>
                    </Grid>
                    <Grid px="36px" py={"5px"} flexDirection="row" display="flex">
                        {/* <Typography  color="#DE4313" ><b>Limited time offer</b></Typography> */}
                        <img src={require('../ClockDanger.svg').default} alt='mySvgImage' />
                        <Typography variant="subtitle2" color="#DE4313" paddingLeft="5px" marginTop="3px">Offer valid till 25th March 2023</Typography>
                    </Grid>
                </Box>
                <Box height="52px">
                    <Grid px="36px" py={"12px"} flexDirection="row" display="flex" justifyContent="space-between">
                        <Typography color="#333333" ><b>Total</b> (Incl. of 18% GST)</Typography>
                        <Typography color="#333333" variant='h6'><b>₹149</b></Typography>
                    </Grid>
                </Box>
            </Stack>
            <Box>
                <Grid height="56px" mx="24px" marginTop="20px" flexDirection="row" display="flex" justifyContent="space-between">
                    <Button sx={{ width: "240px", color: "#F77171", border: "2px solid #F77171" }}>
                        CANCEL
                    </Button>
                    <Button variant="contained" sx={{ color: "white", width: "240px", background: `linear-gradient(266.79deg, #47BA68 4.63%, #47BA68 100%)` }}>
                        <Typography>
                            PROCEED TO PAY

                        </Typography>
                    </Button>
                </Grid>
            </Box>
            <Box>
                <Grid height="56px" mx="24px" marginTop="25px" flexDirection="row" display="flex" justifyContent="space-between">
                    <img src={require('../Razorpay.svg').default} height="50px" alt='mySvgImage' />
                </Grid>
            </Box>
            {/* <Box></Box>
                <Box></Box> */}
            <Typography position="absolute" variant='caption' textAlign="center" paddingBottom="1px" marginLeft="80px" marginTop="9px" color="white" width="100px" height="15px" sx={{ backgroundColor: "#F77171", borderRadius: "0px 0px 4px 4px" }}>Offer expired</Typography>
            <Typography position="absolute" variant='caption' textAlign="center" paddingBottom="1px" marginLeft="80px" marginTop="92px" color="white" width="100px" height="15px" sx={{ backgroundColor: "#47BA68", borderRadius: "0px 0px 4px 4px" }}>Recommended</Typography>

        </FormControl>
    );
}
