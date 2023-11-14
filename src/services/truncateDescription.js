import React from 'react';
import styled from 'styled-components';

const TruncatedDescription = ({ description, maxLength }) => {
  const truncatedText = description.length > maxLength
    ? `${description.slice(0, maxLength)}...`
    : description;

  return <TruncatedText dangerouslySetInnerHTML={{ __html: truncatedText }} />;
};

const TruncatedText = styled.div`
  position: relative;
  width: calc(90% - 369px);
  top: -525px;
  left: 400px;
  font-size: 1.5rem;
  text-align: left;
  overflow: hidden;
`;

export default TruncatedDescription;