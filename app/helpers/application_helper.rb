module ApplicationHelper


  def in_place_editable_field(model, attribute,
                              field_type: :text_field,
                              field_options: {},
                              label: nil)
    render partial: 'shared/in_place_editable_field',
                  locals: {
                    label: label || attribute.to_s.capitalize,
                    model: model,
                    attribute: attribute,
                    field_type: field_type,
                    field_options: field_options
                  }
  end

end
