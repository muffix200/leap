import React, { useContext, useState } from 'react'
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { IconButton, Tooltip } from '@mui/material';
import BasicModal from './Modal';
import { themeContext } from '../Parent';

export default function Rules() {
    const [modal, setModal] = useState({ isVisible: false, context: false, link: false, name: false })
    const { isDark: isDarkTheme } = useContext(themeContext);

    const openModal = (context, link, name) => {
        setModal({ isVisible: true, context: context, link: link, name: name })
    }

    const closeModal = () => {
        setModal({ isVisible: false, context: false, link: false, name: false })
    }


    return (
        <div className='rules-wrapper'>
            <BasicModal value={modal} handleClose={() => { closeModal() }} />
            <div className='rules-wrapper--button'>
            <Tooltip title="Oferta" placement='left' arrow>
                <IconButton onClick={() => { openModal() }} sx={{ border: "1px solid #1976D2",backgroundColor:isDarkTheme?"#181818":"#f8f8f8" }}>
                    <PrivacyTipIcon sx={{ color: "#1976D2" }} />
                </IconButton>
                </Tooltip>
                </div>
        </div>
    )
}
