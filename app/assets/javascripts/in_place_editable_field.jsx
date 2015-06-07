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

  switchToEditMode: function() {
    this.setState({editingMode: true});
  },

  componentDidMount: function() {
    var root = React.findDOMNode(this);
    $(root).find("input[type!=hidden]").blur(this.submit).val(this.state.value);
    $(root).parents('form').on('ajax:success', this.saveSuccess);
  },

  componentWillUnmount: function() {
    var root = React.findDOMNode(this);
    $(root).find("input[type!=hidden]").off('blur', this.submit);
    $(root).parents('form').off('ajax:success', this.saveSuccess);
  },

  saveSuccess: function() {
    var root = React.findDOMNode(this);
    var newValue = $(root).find("input[type!=hidden]").val();
    this.setState({successShown: true, editingMode: false, value: newValue });
    var self = this;
    setTimeout(function() {
      self.setState({successShown: false});
    }, 2000);
  },

  submit: function() {
    var root = React.findDOMNode(this);
    $(root).trigger("submit.rails");
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