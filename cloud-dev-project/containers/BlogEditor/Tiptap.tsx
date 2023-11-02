'use client'

import { useEditor, ReactNodeViewRenderer, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './editor.css'; // Import your custom CSS
import { Button, Stack, colors, Box } from '@mui/material';
import { COLORS } from '@/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import EditorMenuButton from '@/components/editorMenuButton/editorMenuButton';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import {common, createLowlight} from 'lowlight'
import CodeBlockComponent from './CodeBlockComponent.jsx';


const lowlight = createLowlight(common)

const Tiptap = () => {
  const editor:Editor | null = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight
        .extend({
          addNodeView() {
            return ReactNodeViewRenderer(CodeBlockComponent)
          },
        })
        .configure({ lowlight }),
    ],
    content: '<p>Hello World! 🌎️</p>',
    editorProps: {
      attributes: {
        class: 'editor',
      },
    },
  })

  return (
    <>
    <Box mt={1}>
      <EditorMenuButton editor={editor}/>
    </Box>
    <Box 
      flexGrow={1} 
      height={'100%'} 
      sx={{
          overflow: "hidden",
          overflowY: "scroll",
          '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: COLORS.DARK_GRAY, // Customize the scrollbar thumb color
              borderRadius: '10px', // Customize the scrollbar thumb border-radius
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'white', // Customize the scrollbar track color
            },
      }}
      my={1}
      border={'1px solid'}
      borderColor={COLORS.LIGHT_GRAY}
      borderRadius={'10px'}
    >
      {/* <MenuBar editor={editor} /> */}
      
      
      <EditorContent editor={editor} />
    </Box>
    </>
 
  )
}

export default Tiptap