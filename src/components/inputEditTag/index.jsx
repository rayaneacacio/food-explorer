import { useTags } from "../../hooks/tags";

import { EditTag } from "../editTag";

import { Container } from "./style";

export function InputEditTag() {
  const { localTags } = useTags();

  return (
    <Container>
      Ingredientes
      <div>
        {
          (localTags.length > 0) &&
          localTags.map(tag => (
            <EditTag key={ String(localTags.indexOf(tag)) } title={ tag.title } /> 
          ))
        }

        <EditTag $new />
      </div>
    </Container>
  )
}