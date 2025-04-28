// TODO
//  IDEALLY THERE SHOULD BE A "MASTER" VALUE LIST FOR THIS
//  (Unemployed, Programmer, Designer, Architect, Artist)

document.addEventListener('DOMContentLoaded', function() {
    const headers = [
        { text: 'Name', key: 'cName', align: 'right', width: '30%' },
        { text: 'Age', key: 'nAge', align: 'center', width: '10%', fontSize: '1.2em' },
        { text: 'Address', key: 'cAddress', align: 'left', width: '40%' },
        { text: 'Occupation', key: 'cOccupation', align: 'right', width: '20%' }
    ]

    const createEmployeeTable = (data) => {
        const table = createTable({
            headers,
            data,
            id: "employeeTable"
        });

        return table;
    }

    const clearErrors = () => {
        form.querySelectorAll('[id^="error-"]').forEach((c) => c.textContent = "");
        errorDiv.classList.add("hidden");
        errorMessage.textContent = "";
    }

    const resetForm =  () => {
        const children = form.querySelectorAll('input');
        const option = form.querySelector('select');
        children.forEach((c) => c.value="");
        option.value = "unemployed";
    }

    const refreshEmployeeTable = (data) => {
        root.querySelector("#employeeTable").remove();
        root.appendChild(createEmployeeTable(data));
    }

    const root = document.getElementById("app");
    root.classList.add("container");
    root.classList.add("vertical");

    const errorDiv = createComponent({
        type: "div",
        props: {
            class: "hidden p-1"
        }
    })
    const errorMessage = createComponent({
        type: "span"
    })
    errorDiv.appendChild(errorMessage);

    const headerDiv = createComponent({
        type: "div",
        props: {
            class: "container header",
            style: {
                padding: 0
            }
        }
    });

    const form = createComponent({
        type: "form",
        props: {
            class: "container w-fit space-x-2 m-1",
            onSubmit: async (e) => {
                e.preventDefault();

                const form = e.currentTarget;
                const formData = new FormData(form);

                clearErrors();
                try {

                    const res = await fetch('http://localhost:8080/api/employee/post', {
                        method: 'POST',
                        body: formData
                    });

                    const data = await res.json();

                    errorDiv.classList.remove("hidden");
                    if(data.status === 0) {
                        clearErrors();
                        resetForm();

                        errorDiv.classList.remove('hidden');
                        errorDiv.style.background = "green";
                        errorMessage.textContent = "User saved successfully";

                        refreshEmployeeTable(data.data);
                    } else {
                        if(data.validation) {
                            errorDiv.classList.add("hidden");
                            Object.keys(data.validation).forEach((id) => {
                                const element = form.querySelector(`#error-${id}`);
                                if(element)
                                    element.textContent = data.validation[id];
                            })
                        } else if(data.message) {
                            errorDiv.classList.remove("hidden");
                            errorDiv.style.background = "red";
                            errorMessage.textContent = data.message ?? "Server error";
                        }
                    }
                } catch(e) {
                    console.log(e);
                    errorDiv.classList.remove("hidden");
                    errorDiv.style.background = "red";
                    errorMessage.textContent = "Encountered a problem in the server";
                }
            }
        }
    })

    const nameInput = createLabeledInput({
        id: "name",
        label: "Name",
        placeholder: "Employee Name",
        name: 'employeeName'
    })

    const idInput = createLabeledInput({
        id: "id",
        label: "ID",
        placeholder: "Identification Number",
        name: 'idNumber'
    })

    const createOption = ({
        value,
        label,
        ...restProps
    }) => {
        const option = createComponent({
            type: 'option',
            props: {
                value,
                ...restProps
            }
        })

        option.textContent = label;

        return option
    }

    const options = ["Unemployed", "Programmer", "Designer", 'Architect', 'Artist'].map((e) => {
        return createOption({
            value: e.toLowerCase(),
            label: e
        })
    });

    const occupationInput = createLabeledDropdown({
        id: "occupation",
        label: "Occupation",
        placeholder: "Occupation",
        name: 'occupation',
        options
    })

    const addressInput = createLabeledInput({
        id: "address",
        label: "Address",
        type: "area",
        placeholder: "Address",
        name: "address",
    })

    const pobInput = createLabeledInput({
        id: "pob",
        label: "POB",
        placeholder: "Place of Birth",
        name: 'pob',
    })

    const dobInput = createLabeledInput({
        id: "dob",
        type: "date",
        label: "DOB",
        placeholder: "Date of Birth",
        name: "dob"
    })

    const submitButton = createComponent({
        type: "button",
        props: {
            type: "submit",
            style: {
                height: "24px"
            }
        }
    })
    submitButton.textContent = "Submit"

    const searchButton = createComponent({
        type: "button",
        props: {
            type: "button",
            onMouseUp: async () => {
                clearErrors();

                try {
                    const res = await fetch("http://localhost:8080/api/employee/get");

                    const data = await res.json();

                    // tabe refresh can be optimized
                    if(data.status === 0) {
                        refreshEmployeeTable(data.data);
                    }
                } catch(e) {
                    console.log(e);
                }
            },
            style: {
                "min-width": "fit-content",
                height: "24px"
            }
        }
    })
    searchButton.textContent = "Search All";

    form.appendChild(errorDiv);
    form.appendChild(nameInput);
    form.appendChild(idInput);
    form.appendChild(occupationInput);
    form.appendChild(addressInput);
    form.appendChild(pobInput);
    form.appendChild(dobInput);
    form.appendChild(submitButton);
    form.appendChild(searchButton);
    headerDiv.appendChild(form);

    bodyDiv = createComponent({
        type: "div",
        props: {
            class: "container body"
        }
    })

    const table = createEmployeeTable([]);

    bodyDiv.appendChild(table);

    root.appendChild(headerDiv);
    root.appendChild(bodyDiv);
})
