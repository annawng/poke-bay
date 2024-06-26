import {defineConfig} from 'sanity'
import {StructureBuilder, structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/index'

// Create singleton document as we only want one document per website page
const singletonListItem = (S: StructureBuilder, typeName: string, title: string) =>
  S.listItem()
    .title(title)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName))

export default defineConfig({
  name: 'default',
  title: 'Poke Bay',

  projectId: '811mmoaa',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            singletonListItem(S, 'home', 'Home'),
            singletonListItem(S, 'about', 'About'),
            singletonListItem(S, 'menu', 'Menu'),
            singletonListItem(S, 'footer', 'Footer'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
