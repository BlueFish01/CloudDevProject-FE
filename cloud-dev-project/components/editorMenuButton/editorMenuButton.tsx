
import { COLORS } from '@/constants';
import { icon } from '@fortawesome/fontawesome-svg-core'
import { useState } from 'react';
import { 
    Button, 
    ButtonProps, 
    ToggleButtonGroup,
    Paper,
    ToggleButton,
    Box,
    Divider,
    
} from '@mui/material'
import { ReactNode } from 'react'
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBold,
  faHeading,
  faCode,
  faListUl,
  faListOl,
} from '@fortawesome/free-solid-svg-icons';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(0.5),
      border: 0,
      '&.Mui-disabled': {
        border: 0,
      },
      '&:not(:first-of-type)': {
        borderRadius: theme.shape.borderRadius,
      },
      '&:first-of-type': {
        borderRadius: theme.shape.borderRadius,
      },
    },
  }));

function EditorMenuButton({editor}: any) {

  const [formats, setFormats] = useState(() => ['']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  return (

    <Box>
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        flexWrap: 'wrap',
      }}
    >
      <StyledToggleButtonGroup
        size="small"
        value={formats}
        onChange={handleFormat}
        exclusive
      >
        <ToggleButton 
          sx={{width:'35px'}} 
          value="bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor?.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          selected={editor?.isActive('bold')}
        >
          <FontAwesomeIcon icon={faBold} size='lg'/>
        </ToggleButton>

        <ToggleButton 
          sx={{width:'35px'}} 
          value="heading"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          selected={editor?.isActive('heading', { level: 1 })}
        >
          <FontAwesomeIcon icon={faHeading} size='lg'/>
        </ToggleButton>


        <ToggleButton
          data-testid={"code-block-button"} 
          value="code"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          selected={editor?.isActive('codeBlock')}
          
        >
          <FontAwesomeIcon icon={faCode} size='lg'/>
        </ToggleButton>

       

        <ToggleButton 
          value="bullet"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          selected={editor?.isActive('bulletList')}
          >
          <FontAwesomeIcon icon={faListUl} size='lg'/>
        </ToggleButton>
        <ToggleButton 
          value="list"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          selected={editor?.isActive('orderedList')}
        >
          <FontAwesomeIcon icon={faListOl} size='lg'/>
        </ToggleButton>
      </StyledToggleButtonGroup>

      <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />

    </Paper>
  </Box>
  );
}

export default EditorMenuButton