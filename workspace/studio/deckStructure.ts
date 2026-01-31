import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S, Context) => {
    return S.list()
        .title('Content')
        .items(S.documentTypeListItems())
}