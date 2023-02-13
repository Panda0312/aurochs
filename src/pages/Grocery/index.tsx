import { Container } from "@/components/common/styled";

import { useIo } from "./hooks/useIO";

const Grocery = () => {
  useIo();
  return <Container></Container>;
};

export default Grocery;
