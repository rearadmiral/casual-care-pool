InPlaceEditableField = React.createClass({

  propTypes: {
    editingMode: React.PropTypes.bool,
    units: React.PropTypes.string,
    inputField: React.PropTypes.string.isRequired,
    value: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      editingMode: false,
      successShown: false,
      value: this.props.currentValue
    };
  },

  getRootElement: function() {
    return $(React.findDOMNode(this));
  },

  getInputElement: function() {
    return this.getRootElement().find("input[type!=hidden]");
  },

  switchToEditMode: function() {
    this.setState({editingMode: true});
    this.getInputElement().focus();
  },

  componentDidMount: function() {
    this.getInputElement().blur(this.submit).val(this.state.value);
    this.getRootElement().parents('form').on('ajax:success', this.saveSuccess);
  },

  componentWillUnmount: function() {
    this.getInputElement().off('blur', this.submit);
    this.getRootElement().parents('form').off('ajax:success', this.saveSuccess);
  },

  saveSuccess: function() {
    var newValue = this.getInputElement().val();
    this.setState({successShown: true,
                   editingMode: false,
                   value: newValue });
    var self = this;
    setTimeout(function() {
      self.setState({successShown: false});
    }, 2000);
  },

  submit: function() {
    this.getRootElement().trigger("submit.rails");
  },

  render: function() {
    // we use display:none because we need the element to exist even when not
    // in use to attach listeners to it
    var displayEditableSection = this.state.editingMode === true ? 'block' : 'none';
    var editableSectionStyle = {
      display: displayEditableSection
    };

    return (<div>
              { !this.state.editingMode ?
                <div className="inPlaceEditableField__readonlySection" onClick={this.switchToEditMode}>
                  {this.state.value}
                </div>
                : null
              }
              {
                this.state.successShown ?
                  <i className="inPlaceEditableField__successIcon">✔</i>
                  : null
              }

              <div className="inPlaceEditableField__editableSection" style={editableSectionStyle}>
                <span dangerouslySetInnerHTML={{__html: this.props.inputField}}>
                </span>
              </div>

              <span className="inPlaceEditableField__units">
                {this.props.units}
              </span>
            </div>);
  }

});