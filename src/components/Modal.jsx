import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { borderRadius } from '@mui/system';
import ReactAudioPlayer from 'react-audio-player';
import { themeContext } from '../Parent';
import { IconButton } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  maxHeight:450,
  width: "90%",
  backgroundColor: '#fff',
  // border: '1px solid #000',
  boxShadow: 24,
  padding:"20px 15px",
  outline: "none",
  // borderRadius: "10px",
};

export default function BasicModal({ value, handleClose }) {

  const { isDark: isDarkTheme } = React.useContext(themeContext);

  const {context,isVisible,link,name} = value

  return (
    
      <Modal
        open={isVisible}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ background: isDarkTheme?"rgba(255,255,255,0.7)":"rgba(0,0,0,0.7)" }}
      >
      
      <div className='modal-controller'>

       <div className='modal-header'> 
         <IconButton onClick={handleClose}  sx={{borderWidth:1,backgroundColor:"#FF3347",width:"30px",height:"30px"}}>
          <CloseRoundedIcon sx={{color:"#fff"}}/>
         </IconButton>
       </div>

        <div className='modal-context'>
         
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>

          {context &&
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {context}
            </Typography>
          }
          {link &&

            <ReactAudioPlayer
             style={{marginTop:"10px",width:"100%"}}
              src={link}
              controls
            />
          }
        </div>

        

        </div>

      </Modal>
    
  );
}
