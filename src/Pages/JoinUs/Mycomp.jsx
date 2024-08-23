import React from 'react';

// This function converts newline characters to HTML break tags
function createMarkup(description) {
  return { __html: description.replace(/\n/g, '<br />') };
}

function MyComp({ description }) {
  return <div dangerouslySetInnerHTML={createMarkup(description)} />;
}

export default MyComp;