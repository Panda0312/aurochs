import styled from "styled-components";

export const BoxRoot = styled.div`
  border-radius: 6px;
  width: 500px;
  border: 1px solid #ccc;
  padding: 6px;
  margin-right: 8px;
  height: 100%;
`;

export const BoxHeader = styled.div`
  height: 30px;
  line-height: 30px;
  text-align: center;
`;

export const MessageInput = styled.textarea`
  width: 100%;
  min-height: 200px;
  display: block;
`;

export const MailItemRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border: 1px solid #ccc;
  margin-top: 6px;
  padding: 0 8px;
`;
