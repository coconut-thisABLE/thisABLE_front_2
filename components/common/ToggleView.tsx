import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type ToggleViewType = {
  children: React.ReactNode
  title: string
}

const ToggleView = ({ children, title }: ToggleViewType) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <Accordion
      expanded={isExpanded}
      onChange={() => setIsExpanded(!isExpanded)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {title}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(() => ({
  border: 'none',
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(() => ({
  flexDirection: 'row-reverse',
  minHeight: '0px',
  '& .MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(-90deg)',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(0deg)',
  },
  '& .MuiAccordionSummary-content': {
    margin: '0.4rem',
    flexGrow: 'inherit',
  },
}))

export default ToggleView
