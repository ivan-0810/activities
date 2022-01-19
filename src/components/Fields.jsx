
const labelOutput = ({ label, inline, input, touched, target, error }) => {
  if (label) {
    return (
      <div className="d-flex px-0">
        <label ref={target} className={inline && `${inline[0]} col-form-label text-white`}>
          {label}{' '}
        </label>
      </div>
    );
  }
  return '';
};
export const inputGroupField = ({
  input,
  label,
  target,
  tooltip,
  inline,
  size,
  placeholder,
  type,
  readOnly,
  feedback,
  className,
  groupClassName = 'form-group',
  helpBlock,
  meta: { asyncValidating, touched, error, warning },
  children,
  position = 'prepend'
}) => {
  const changeHandler = e => {
    input.onChange(e);
    if (typeof feedback === 'function') {
      feedback(e.currentTarget.value);
    }
  };

  const newGroupClassName = `${groupClassName} ${inline ? ' row' : ''} ${
    size ? ` form-group-${size}` : ''
  } ${asyncValidating ? 'async-validating' : ''}`;

  return (
    <div className={newGroupClassName}>
      {labelOutput({
        label,
        tooltip,
        inline,
        input,
        error,
        target
      })}
      <div className={inline && inline[1]}>
        <div className="input-group">
          {position === 'prepend' && (
            <div className="input-group-prepend">{children}</div>
          )}

          <input
            {...input}
            onChange={changeHandler}
            onFocus={changeHandler}
            className={className}
            placeholder={placeholder}
            type={type}
            readOnly={readOnly}
          />
          {position !== 'prepend' && (
            <div className="input-group-append">{children}</div>
          )}
        </div>
        {(touched && (
          <div
            className="invalid-feedback"
            style={{ display: 'block', height: '16px' }}
          >
            {error && error}
          </div>
        )) || (
          <div
            className="invalid-feedback"
            style={{ display: 'block', height: '16px' }}
          >
            {warning && warning}
          </div>
        )}
        {helpBlock && <small className="help-block">{helpBlock}</small>}
      </div>
    </div>
  );
};


export const inputField = ({
  input,
  label,
  target,
  inline,
  size,
  placeholder,
  type,
  readOnly,
  feedback,
  className,
  groupClassName = 'form-group',
  helpBlock,
  children,
  meta: { asyncValidating, touched, error, warning },
}) => {
  const changeHandler = e => {
    input.onChange(e);
    if (typeof feedback === 'function') {
      feedback(e.currentTarget.value);
    }
  };

  const newGroupClassName = `${groupClassName} ${inline ? ' row' : ''} ${
    size ? ` form-group-${size}` : ''
  } ${asyncValidating ? 'async-validating' : ''}`;

  return (
    <div className={newGroupClassName}>
      {labelOutput({
        label,
        inline,
        input,
        error,
        target,
        touched,
      })}
      <div className={inline && inline[1]}>
        <input
          {...input}
          onChange={changeHandler}
          className={className}
          placeholder={placeholder}
          type={type}
          readOnly={readOnly}
        
        />
        <div>{children}</div>

        <div
          className="invalid-feedback"
          style={{ display: 'block', height: '16px', marginBottom: '5px' }}
        >
          {touched && error && error}
        </div>

        {helpBlock && <small className="help-block">{helpBlock}</small>}
      </div>
    </div>
  );
};

export const textareaField = ({
  input,
  label,
  tooltip,
  inline,
  placeholder,
  rows,
  feedback,
  className,
  groupClassName = 'form-group',
  helpBlock,
  style,
  meta: { asyncValidating, touched, error, warning },
}) => {
  const changeHandler = e => {
    input.onChange(e.currentTarget.value);
    if (typeof feedback === 'function') {
      feedback(e.currentTarget.value);
    }
  };
  const newGroupClassName = `${groupClassName} ${inline ? ' row' : ''} ${
    asyncValidating ? 'async-validating' : ''
  }`;

  return (
    <div className={newGroupClassName}>
      {labelOutput({
        label,
        tooltip,
        inline,
        input,
      })}
      <div className={inline && inline[1]}>
        <textarea
          {...input}
          onChange={changeHandler}
          className={className}
          placeholder={placeholder}
          style={style}
          pattern="\d*"
        />
        {touched &&
          ((error && (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              {error}
            </div>
          )) ||
            (warning && (
              <div className="invalid-feedback" style={{ display: 'block' }}>
                {warning}
              </div>
            )))}
        {helpBlock && <small className="help-block">{helpBlock}</small>}
      </div>
    </div>
  );
};





