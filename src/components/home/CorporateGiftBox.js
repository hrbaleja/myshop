import React from 'react';
import { Box, Typography,  } from '@mui/material';
import heImage from '../Images/898965.jpg'; 

const CorporateGiftBox = () => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            height: '400px',
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundImage: `url(${heImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: '20px',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                zIndex: 1,
            },
        }}
    >
        <div style={{ zIndex: 2 }}>
            <Typography variant="h4" gutterBottom style={{fontFamily:'Lora'}}> 
                Corporate Gift Packing
            </Typography>
            <Typography variant="body1" paragraph style={{ width: '300px' }}>
                Impress your clients and partners with our premium corporate gift packing services. Elevate your gifting experience and make a lasting impression.
            </Typography>
            <button type="button" className="pagebuilder-slide-button">
                Contact Us
            </button>
        </div>
    </Box>
);

export default CorporateGiftBox;
