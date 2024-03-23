import { injectIntl } from 'react-intl';

import { connect } from 'react-redux';

import { unblockDomain } from '../actions/domain_blocks';
import { Domain } from '../components/domain';

const makeMapStateToProps = () => {
  const mapStateToProps = () => ({});

  return mapStateToProps;
};

const mapDispatchToProps = dispatch => ({
  onUnblockDomain (domain) {
    dispatch(unblockDomain(domain));
  },
});

export default injectIntl(connect(makeMapStateToProps, mapDispatchToProps)(Domain));
