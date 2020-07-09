import textFieldPlugin from "./../text";
import { FbBuilderFieldPlugin } from "@webiny/app-form-builder/types";

const plugin: FbBuilderFieldPlugin = {
    type: "form-editor-field-type",
    name: "form-editor-field-type-email",
    field: {
        ...textFieldPlugin.field,
        unique: true,
        group: "form-editor-field-group-contact",
        name: "email",
        label: "Email   ",
        description: "Email address",
        // TODO: validators: validation.create("required"), // Editable validators.
        createField(props) {
            const { i18n } = props;
            return {
                ...textFieldPlugin.field.createField(props),
                name: this.name,
                fieldId: "email",
                label: {
                    values: [
                        {
                            locale: i18n.getDefaultLocale().id,
                            value: "Email"
                        }
                    ]
                },
                validation: [
                    {
                        name: "pattern",
                        message: {
                            values: [
                                {
                                    locale: i18n.getDefaultLocale().id,
                                    value: "Please enter a valid e-mail."
                                }
                            ]
                        },
                        settings: {
                            preset: "email",
                            regex: null,
                            flags: null
                        }
                    }
                ]
            };
        }
    }
};

export default plugin;
