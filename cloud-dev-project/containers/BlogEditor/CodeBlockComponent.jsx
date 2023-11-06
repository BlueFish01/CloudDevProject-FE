import { NodeViewContent, NodeViewWrapper } from '@tiptap/react'
import './style.css'
import { MenuItem, Select } from '@mui/material'
import { COLORS } from '@/constants'

export default ({ node: { attrs: { language: defaultLanguage }}, updateAttributes, extension }) => (
    <NodeViewWrapper className="code-block" style={{position: 'relative'}}>

      <Select
        contentEditable={false}
        defaultValue={'auto'}
        onChange={event => updateAttributes({ language: event.target.value })}
        sx={{
          position: 'absolute', 
          top: '0.5rem', 
          right: '2rem', 
          fontSize: '0.75rem',
          width: '100px',
          height: '30px',
          backgroundColor: COLORS.LIGHT_GRAY,
        }}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200, // Set your desired max height here
            },
          },
        }}
      >
        <MenuItem value={'auto'}>
          auto
        </MenuItem>
        <MenuItem disabled>
          —
        </MenuItem>
        {extension.options.lowlight.listLanguages().map((lang, index) => (
          <MenuItem key={index} value={lang}>
            {lang}
          </MenuItem>
        ))}
      </Select>

      <pre>
        <NodeViewContent as="code"/>
      </pre>

    </NodeViewWrapper>
  )