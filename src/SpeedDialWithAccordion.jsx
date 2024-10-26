import React, { useState } from 'react';
import {
    SpeedDial, 
    SpeedDialAction, 
    SpeedDialIcon, 
    Dialog,
    DialogContent,
    Accordion, 
    AccordionSummary, 
    AccordionDetails,
    IconButton,
    Box
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';


import RowRadioButtonsGroup from './RowRadioButtonsGroup.jsx';

export default function SpeedDialWithAccordion() {

    const [ dialogOpen, setDialogOpen ] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    }

    const handleDialogClose = () => {
        setDialogOpen(false)
    }

    const actions = [
        // {icon: <FileCopyIcon />, name: 'Copy' },
        // {icon: <SaveIcon />, name: 'Save' },
        // {icon: <PrintIcon />, name: 'Print' },
        {icon: <ShareIcon />, name: 'Share' },
    ];

    return (
        <>
            {/* SpeedDial Component */}
            <SpeedDial
                ariaLabel="SpeedDial example"
                sx={{ position: 'absolute', bottom: 16, right:16, zIndex:999 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction 
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}

                <SpeedDialAction 
                    key="Accordion"
                    icon={<SettingsIcon />}
                    tooltipTitle="Open Acordion"
                    onClick={handleDialogOpen}
                />
            </SpeedDial>

            <Dialog open={dialogOpen} onClose={handleDialogClose}>
                <DialogContent>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Accordion 1
                        </AccordionSummary>
                        <AccordionDetails>
                            Hey hey my my
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Accordion 2
                        </AccordionSummary>
                        <AccordionDetails>
                            Hey hey my my
                        </AccordionDetails>
                    </Accordion>
                </DialogContent>
            </Dialog>

        </>
    )



}