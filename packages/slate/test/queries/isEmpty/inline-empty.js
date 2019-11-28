/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../..'

export const input = (
  <editor>
    <block>
      one
      <inline />
      three
    </block>
  </editor>
)

export const run = editor => {
  const inline = editor.children[0].children[1]
  return Editor.isEmpty(editor, inline)
}

export const output = true
