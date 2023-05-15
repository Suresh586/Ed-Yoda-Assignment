import { Stack, Typography } from "@mui/material"
// import vector1 from 

const Details = () =>{
    return <>
    <Stack direction="row" alignItems="center" marginLeft="148px" marginTop="45px">
    <img src={require('../Course.svg').default} alt='mySvgImage' />
    <Typography marginTop={2} variant="h4" color="#0096FF" height="60px" marginLeft={6}>100+</Typography>
    <Typography marginTop={2} variant="h4" color="white" height="60px" marginLeft={1}> Job relevant courses</Typography>
    </Stack>
    <Stack direction="row" alignItems="center" marginLeft="148px" marginTop="45px">
    <img src={require('../Clock.svg').default} alt='mySvgImage' />
    <Typography marginTop={2} variant="h4" color="#0096FF" height="60px" marginLeft={6}>20,000+</Typography>
    <Typography marginTop={2} variant="h4" color="white" height="60px" marginLeft={1}> Hours of content</Typography>
    </Stack>
    <Stack direction="row" alignItems="center" marginLeft="148px" marginTop="45px">
    <img src={require('../Live.svg').default} alt='mySvgImage' />
    
    <Typography marginTop={2} variant="h4" color="#0096FF" height="60px" marginLeft={6}>Exclusive</Typography>
    <Typography marginTop={2} variant="h4" color="white" height="60px" marginLeft={1}> webinar access</Typography>
    </Stack>
    <Stack direction="row" alignItems="center" marginLeft="148px" marginTop="45px">
    <img src={require('../Scholarship.svg').default} alt='mySvgImage' />
    <Typography marginTop={2} variant="h4" color="white" height="60px" marginLeft={6}>Scholarship worth</Typography>
    <Typography marginTop={2} variant="h4" color="#0096FF" height="60px" marginLeft={1}> ₹ 94,500</Typography>
    </Stack>
    <Stack direction="row" alignItems="center" marginLeft="148px" marginTop="45px">
    <img src={require('../Noads.svg').default} alt='mySvgImage' />
    <Typography marginTop={2} variant="h4" color="#0096FF" height="60px" marginLeft={6}> Ad Free </Typography>
    <Typography marginTop={2} variant="h4" color="white" height="60px" marginLeft={1}> learning experience</Typography>
    </Stack>

    </>
}

export default Details 