import './SquareButton.scss';

const Button = ({ to, children, black, onClick, border, className }) => {

  let cls = 'btn';
  if (black)
    cls += ' btn--black lato bold';
  if (border)
    cls += ' btn--border-white';

  if (className)
    cls += ` ${className}`;

  return (
    <a
      className={cls}
      href={to}

      onClick={e => {

        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {children}
    </a>
  )
}

export default Button;