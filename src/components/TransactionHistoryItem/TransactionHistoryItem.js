import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ type, amount, currency }) => (
  <>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </>
);

TransactionHistoryItem.defaultProps = {
  type: 'no data',
  amount: 'no data',
  currency: 'no data',
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionHistoryItem;
