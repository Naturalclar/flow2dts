import { PluginPass, Visitor, types as t } from "@babel/core"
import { assertTSType, nameForExportDefault } from "./utilities"

export const exportVisitor: Visitor<PluginPass> = {
  DeclareModuleExports: {
    exit(path) {
      const typeAnnotation = path.node.typeAnnotation.typeAnnotation
      assertTSType(typeAnnotation)
      const id = t.identifier(nameForExportDefault)
      id.typeAnnotation = t.tsTypeAnnotation(typeAnnotation)
      path.replaceWithMultiple([
        t.variableDeclaration("const", [t.variableDeclarator(id)]),
        t.exportDefaultDeclaration(id),
      ])
    },
  },
  ExportDefaultDeclaration: {
    exit(path) {
      const decl = path.node.declaration
      switch (decl.type) {
        case "Identifier": {
          // nothing to do
          break
        }
        case "TypeCastExpression": {
          const tsType = decl.typeAnnotation.typeAnnotation
          assertTSType(tsType)

          const varId = t.identifier(nameForExportDefault)
          varId.typeAnnotation = t.tsTypeAnnotation(tsType)
          const varDecl = t.variableDeclaration("const", [t.variableDeclarator(varId)])
          varDecl.declare = true

          path.node.declaration = t.identifier(nameForExportDefault)
          path.replaceWithMultiple([varDecl, path.node])
          break
        }
        default:
          throw new Error(
            `Only identifiers and type cast expressions are allowed in export default:\r\n${JSON.stringify(
              decl,
              undefined,
              4
            )}`
          )
      }
    },
  },
}