import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import 'react-paginate/theme/basic/react-paginate.css'; // Import CSS
const Pagination = () => {
  return (
    <ReactPaginate
      pageCount={4}
      previousLabel={'<'}
      nextLabel={'>'}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  );
};

export default Pagination;