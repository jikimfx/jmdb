import React from 'react';
import PropTypes from 'prop-types';
import './FourColGrid.css';

const FourColGrid = ({ header, loading, children }) => {

  const renderElements = () => {
    const gridElements = children.map((element, i) => (
      <div key={i} className="jmdb-grid-element">
        {element}
      </div>
    ))
    return gridElements;
  }

  return (
    <div className="jmdb-grid">
      {header && !loading ? <h1>{header}</h1> : null}
      <div className="jmdb-grid-content">
        {renderElements()}
      </div>
    </div>
  )
}

FourColGrid.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
}

export default FourColGrid;