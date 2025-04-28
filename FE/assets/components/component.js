function createComponent({
    type,
    props
}) {
    const element = document.createElement(type);
    for (const key in props) {
        if (props.hasOwnProperty(key)) {
            if (key === 'style') {
                Object.assign(element.style, props[key]);
            } else if (key.startsWith('on')) {
                const eventType = key.slice(2).toLowerCase();
                element.addEventListener(eventType, props[key]);
            } else {
                element.setAttribute(key, props[key]);
            }
        }
    }

    return element;
}
