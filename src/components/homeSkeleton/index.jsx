import { Container } from "./style";

export function HomeSkeleton() {
  return (
    <Container>
      <div className="header"></div>
      <div className="banner"></div>
      <div className="cards">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="cards">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  )
}