import generateId from './generateId'

export const generateClipnote = ({ title, text, tags = [] }) => ({
  id: generateId(),
  date: new Date(),
  title,
  text,
  tags
})
