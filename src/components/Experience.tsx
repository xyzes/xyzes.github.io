import * as React from 'react';
import Box from '@mui/material/Box';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }

export default function About(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [fadeIn, setFadeIn] = React.useState(false);
  const [slowFadeIn, setSlowFadeIn] = React.useState(false);

  React.useEffect(() => {
    // After the component is mounted, trigger the fade-in effect
    setFadeIn(true);
  }, []);

  React.useEffect(() => {
    // Use setTimeout to delay the start of the fade-in effect by one second
    const delay = setTimeout(() => {
      setSlowFadeIn(true); // Trigger the fade-in effect after the delay
    }, 500); // 1000 milliseconds = 1 second

    // Clear the timeout when the component unmounts to prevent memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection:'column', height: '100vh', width: '100%', backgroundColor: 'green' }}>
       {/** Background image */}
      <img
        src="assets/education-background.png" // Replace with your background image
        alt="Background"
        className={`fast-fade-in ${fadeIn ? 'show' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          marginLeft: '-10px',
          objectFit: 'cover',
          opacity: 0.6,
          zIndex: 0, // Place it behind other elements
        }}
      />
       <Box
        position="relative"
        sx={{display: 'flex', flexDirection:'row', flex: 1}}
        aria-label="mailbox folders"
        >
        {/** Sidebar is here: */}
        <Box sx={{display: 'flex', flexDirection: 'column', height:'calc(100vh - 100px)', flex: 1 }}>
            <img
                src="assets/Education.png" 
                alt="A description of your image" 
                style={{ height: 'auto', width: '39%', marginLeft: '-6%', position: 'fixed' }} // Adjust the margins to offset the image
                className={`fade-in ${slowFadeIn ? 'show' : ''}`}
                />
        </Box>
        {/** Content is here: */}
        <Box sx={{margin: '30px', borderRadius:'15px', height:'calc(100vh - 200px)', flex: 2.5, boxShadow: '1px 1px 2px 1.5px rgba(0, 0, 0, 0.3)', backgroundColor: 'white', position: 'relative', zIndex: 2 }}>
            
        </Box>
        
      </Box>
    </Box>
  );
}