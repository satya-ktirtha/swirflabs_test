// options must be components/elements
function createLabeledDropdown({
    id,
    label,
    placeholder,
    name,
    options
}) {
    const div =  createComponent({
        type: "div",
        props: {
            class: "container vertical"
        }
    });

    const errorSpan = createComponent({
        type: "span",
        props: {
            id: `error-${id}`,
            style: {
                "font-size": "0.75rem",
                "color": "red"
            }
        }
    })

    const group = createComponent({
        type: "div",
        props: {
            class: "container"
        }
    })

    const _label = createComponent({
        type: "label",
        props: {
            label,
            "for": id,
            class: "me-1",
            style: {
                "margin-top": "auto",
                "margin-bottom": "auto"
            }
        }
    })
    _label.textContent = label;

    const select = createComponent({
        type: "select",
        props: {
            id,
            name,
            placeholder,
            style: {
                "height": "24px",
                "font-size": "12px",
                "box-sizing": "border-box",
                "padding": "auto"
            }
        }
    })

    group.appendChild(_label);
    group.appendChild(select);
    options.forEach((e) => {
        select.appendChild(e);
    });

    div.appendChild(group);
    div.appendChild(errorSpan);

    return div;
}

function createLabeledInput({
    id,
    label,
    type="text",
    placeholder,
    name,
}) {
    const div =  createComponent({
        type: "div",
        props: {
            class: "container vertical"
        }
    });

    const group = createComponent({
        type: "div",
        props: {
            class: "container",
        }
    })

    const errorSpan = createComponent({
        type: "span",
        props: {
            id: `error-${id}`,
            style: {
                "font-size": "0.75rem",
                "color": "red"
            }
        }
    })

    const _label = createComponent({
        type: "label",
        props: {
            label,
            "for": id,
            class: "me-1",
            style: {
                "margin-top": "auto",
                "margin-bottom": "auto",
                "font-size": "12px",
                "padding": "auto"
            }
        }
    })
    _label.textContent = label;

    const input = createComponent({
        type: "input",
        props: {
            id,
            name,
            type,
            placeholder,
            style: {
                "height": "24px",
                "font-size": "12px",
                "box-sizing": "border-box"
            }
        }
    })

    group.appendChild(_label);
    group.appendChild(input);

    div.appendChild(group);
    div.appendChild(errorSpan);

    return div;
}
