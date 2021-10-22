/* eslint-disable max-len */
import React from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import emailPropType from 'email-prop-type';
import isRequiredIf from 'react-proptype-conditional-require';
import mailtoLink from 'mailto-link';
import classNames from 'classnames';

import Hyperlink from '../Hyperlink';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';

const MailtoLink = React.forwardRef((props, ref) => {
  const {
    to,
    cc,
    bcc,
    subject,
    body,
    children,
    target,
    onClick,
    externalLink,
    className,
    ...attrs
  } = props;

  const externalLinkAlternativeText = externalLink.alternativeText;
  const externalLinkTitle = externalLink.title;
  const destination = mailtoLink({
    to, cc, bcc, subject, body,
  });

  const hyperlinkProps = {
    destination,
    target,
    onClick,
    externalLinkAlternativeText,
    externalLinkTitle,
    ...attrs,
  };

  return (
    <span
      ref={ref}
      className={classNames('pgn__mailtolink', className)}
    >
      <Hyperlink {...hyperlinkProps}>
        {children}
      </Hyperlink>
    </span>
  );
});

MailtoLink.defaultProps = {
  to: [],
  cc: [],
  bcc: [],
  subject: '',
  body: '',
  target: '_self',
  onClick: null,
  externalLink: {
    alternativeText: 'in a new tab',
    title: 'Opens in a new tab',
  },
  className: undefined,
};

MailtoLink.propTypes = {
  /** Content of the mailto link */
  children: PropTypes.node.isRequired,
  /** Custom class names for the mailto link */
  className: PropTypes.string,
  /** specifies the email's recipients */
  to: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),
  /** specifies the email's carbon copy recipients */
  cc: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),
  /** specifies the email's blind carbon copy recipients */
  bcc: PropTypes.oneOfType([PropTypes.arrayOf(emailPropType), emailPropType]),
  /** specifies the email's subject */
  subject: PropTypes.string,
  /** specifies the email's body */
  body: PropTypes.string,
  /** specifies where the link should open. The default behavior is `_self`, which means that the URL will be loaded into the same browsing context as the current one */
  target: PropTypes.string,
  /** specifies the callback function when the link is clicked */
  onClick: PropTypes.func,
  /** The object that contains the `alternativeText` and `title` fields which specify the text and title for links with a `_blank` target (which loads the URL in a new browsing context). */
  externalLink: PropTypes.shape({
    alternativeText: isRequiredIf(PropTypes.string, props => props.target === '_blank'),
    title: isRequiredIf(PropTypes.string, props => props.target === '_blank'),
  }),
};

export default withDeprecatedProps(MailtoLink, 'MailtoLink', {
  content: {
    deprType: DEPR_TYPES.MOVED,
    newName: 'children',
  },
});
