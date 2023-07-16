import styled from "styled-components";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableItem from "../sortableItems/sortableItemsleft";

export default function ContainerHeader(props) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id,
  });

  const filteredHeader = items.filter((item) =>
    item.includes("rickandmortyapi")
  );
  return (
    <SortableContext
      id={id}
      items={filteredHeader}
      strategy={verticalListSortingStrategy}
    >
      <AreasSection ref={setNodeRef}>
        <AreaContainer>
          <AreaTitle>{id}</AreaTitle>

          {filteredHeader.map((id) => (
            <SortableItem key={id} id={id} />
          ))}

          {filteredHeader.length === 0 && (
            <ContainerEmpty>
              <AreaDropText>
                Drag and drop an element within this area.
              </AreaDropText>
            </ContainerEmpty>
          )}
        </AreaContainer>
      </AreasSection>
    </SortableContext>
  );
}

const ContainerEmpty = styled.div`
  background-color: #fff;
  border: 1px dotted #3a6b88;
  padding: 64px 32px 64px 32px;
  border-radius: 2px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const AreaDropText = styled.p`
  font-size: 14px;
  color: #3f3f3f;
  font-weight: 400;
`;

const AreasSection = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const AreaContainer = styled.div`
  background-color: #f6f6f6;
  border-radius: 4px;
  padding: 16px 8px 16px 8px;
  width: 834px;
  text-align: center;
`;
const AreaTitle = styled.h2`
  font-size: 14px;
  color: #3a6b88;
  font-weight: 600;
  padding-bottom: 16px;
  text-transform: capitalize;
`;