function createTable({
    headers=[],
    data=[],
    ...restProps
}) {
    const table = createComponent({
        type: "table",
        props: {
            style: {
                width: "100%",
                "border-collapse": "collapse"
            },
            ...restProps
        }
    })

    const thead = createComponent({ type: "thead" });
    const headerRow = createComponent({ type: "tr" });

    headers.forEach(header => {
        const th = createComponent({
            type: "th",
            props: {
                style: {
                    backgroundColor: "navy",
                    color: "white",
                    fontSize: "2rem",
                    textAlign: header.align,
                    width: header.width
                }
            }
        });
        th.textContent = header.text;
        headerRow.appendChild(th);
    });

    const tbody = createComponent({ type: "tbody" });

    data.forEach(row => {
        const tr = createComponent({ type: "tr" });

        headers.forEach(header => {
            const td = createComponent({
                type: "td",
                props: {
                    style: {
                        textAlign: header.align,
                        fontSize: header.fontSize || "1rem",
                        width: header.width
                    }
                }
            });
            td.textContent = row[header.key];
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    thead.append(headerRow);
    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

