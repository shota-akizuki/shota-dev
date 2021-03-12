import sharedStyles from '../styles/shared.module.css';

export const Divider = (props) => (
  <p style={props.style} className={sharedStyles.divider} />
);
