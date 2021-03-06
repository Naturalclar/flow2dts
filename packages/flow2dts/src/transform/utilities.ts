// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { types as t } from "@babel/core"
import { Scope } from "@babel/traverse"
import { State } from "./state"

export const nameForExportDefaultRedirect = "$f2tExportDefaultRedirect"
export const nameForExportDefault = "$f2tExportDefault"
export const nameForRestParameter = "$f2tRest"
export const nameForTypeIndexerKey = "$f2tKey"

export function nameForHidden(name: string): string {
  return `$f2tHidden_${name}`
}

export function nameForImportTypeof(name: string): string {
  return `${name}$f2tTypeof`
}

export function nameForParameter(index: number): string {
  return `$f2t${index + 1}`
}

export function assertTSType(node: t.Node | null | undefined): asserts node is t.TSType {
  if (node != null && node != undefined && !t.isTSType(node)) {
    throw new Error(`${node.type}(node is not a TypeScript type:\r\n${JSON.stringify(node, undefined, 4)}`)
  }
}

export function assertTSTypeElement(node: t.Node | null | undefined): asserts node is t.TSTypeElement {
  t.assertTSTypeElement(node)
}

export function assertTSTypeAnnotation(node: t.Node | null | undefined): asserts node is t.TSTypeAnnotation {
  t.assertTSTypeAnnotation(node)
}

export function wrappedTypeOf(id: t.TSEntityName) {
  return t.tsTypeReference(t.identifier("$TypeOf"), t.tsTypeParameterInstantiation([t.tsTypeQuery(id)]))
}

export function isClass(tsTypeReference: t.TSTypeReference, scope: Scope) {
  const typeName = tsTypeReference.typeName
  if (t.isIdentifier(typeName)) {
    const binding = scope.getBinding(typeName.name)
    if (binding && (binding.path.isDeclareClass() || binding.path.isClassDeclaration())) {
      return true
    }
  }
  return false
}
