export const quickStart = {
  usingStyled: `
import { styled, Button } from 'secptrum-ui'

const StyledDemo = () => {
  return (
    <StyledButton>Styled Button</StyledButton>
  )
}

const StyledButton = styled(Button)\`
  background: red !important;
  border: 3px solid green !important;
  border-radius: 6px !important;

  &:hover {
    background: blue !important;
  }
\`
  `,
  usingTailwind: `
import { Button } from 'secptrum-ui'

const TailwindDemo = () => {
  return (
    <Button className="!bg-red-500 !border-[3px] !border-green-500 !rounded-md !hover:bg-blue-500">
      Tailwind Button
    </Button>
  )
}
  `,
};
