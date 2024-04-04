import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-alice-carousel";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6" >
            Company
          </Typography>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              MARKETING
            </Button>
          </div>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              ANALYTICS
            </Button>
          </div>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              COMMERCE
            </Button>
          </div>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              INSIGHTS
            </Button>
          </div>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              SUPPORTS
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              GUIDES
            </Button>
          </div>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              API STATUS
            </Button>
          </div>
          
         
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" varient="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              CLAIM
            </Button>
          </div>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              PRIVACY
            </Button>
          </div>
          <div>
            <Button className="pb-5 text-white" varient="h6" style={{color:"white"}}>
              TERMS
            </Button>
          </div>
          
        </Grid>

        <Grid className="pt-20" item xs={12}>
            <Typography varient='body2' component='p' align="center">
                &copy; 2024 My Company. All rights reserved.
            </Typography>
            <Typography varient='body2' component='p' align="center">
                Made By Kishan Kashyap.
            </Typography>
            <Typography varient='body2' component='p' align="center">
                Icons made by{' '}
                <Link href= "https://www.freepic.com" color="inherit" underline="always">
                    Freepik
                </Link>{' '}
                from{' '}
                <Link href= "https://www.flaticon.com" color="inherit" underline="always">
                    www.flaticon.com
                </Link>
            </Typography>

        </Grid>

        
      </Grid>
    </div>
  );
};

export default Footer;
