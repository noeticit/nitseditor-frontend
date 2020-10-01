export const components_config = [
    {
        id: 1,
        name:'Input Text',
        component_name: 'nits-input-text',
        options: {
            general: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Field Name',
                            placeholder: 'Enter field name',
                            model: 'model',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Label',
                            placeholder: 'Enter Label',
                            model: 'label',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Placeholder',
                            placeholder: 'Enter Placeholder',
                            model: 'placeholder',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Hint',
                            placeholder: 'Enter Hint',
                            model: 'hint',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-select',
                        attrs: {
                            label:'Input Type',
                            placeholder: 'Select one',
                            options: [
                                {label: 'String', value: 'string'},
                                {label: 'Number', value: 'number'},
                            ],
                            model: 'type',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            hidden: true,
                            model: 'value',
                            value: ''
                        }
                    },
                ]
            },
            style: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Extra Class Name',
                            placeholder: 'Enter Text',
                            model: 'class',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Element ID',
                            placeholder: 'Enter Element ID',
                            model: 'id',
                            value: ''
                        },
                    },
                    {
                        component: 'nits-input-select',
                        attrs: {
                            label: 'CSS Animation',
                            placeholder: 'Select ',
                            options: [],
                            model: 'animation',
                            value: ''
                        },
                    },
                ]
            },
            advanced: {}
        }
    },
    {
        id: 2,
        name:'Check Box',
        component_name: 'nits-checkbox',
        options: {
            general: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Field Name',
                            placeholder: 'Enter field name',
                            model: 'model',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Label',
                            placeholder: 'Enter Label',
                            model: 'label',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Hint',
                            placeholder: 'Enter Hint',
                            model: 'hint',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Placeholder',
                            placeholder: 'Enter Placeholder',
                            model: 'placeholder',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-select',
                        attrs: {
                            label: 'Checked',
                            placeholder: 'Select one',
                            options: [
                                {label: 'True', value: 'true'},
                                {label: 'False', value: 'false'},
                            ],
                            model: 'checked',
                            value: ''
                        },
                    },
                ]
            },
            style: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Extra Class Name',
                            placeholder: 'Enter Text',
                            model: 'text',
                            value: ''
                        }
                    },
                ]
            },
            advanced: {}
        }
    },
    {
        id: 3,
        name:'DropZone',
        component_name: 'nits-single-dropzone',
        options: {
            general: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Field Name',
                            placeholder: 'Enter field name',
                            model: 'model',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Label',
                            placeholder: 'Enter Label',
                            model: 'label',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Hint',
                            placeholder: 'Enter Hint',
                            model: 'hint',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Placeholder',
                            placeholder: 'Enter Placeholder',
                            model: 'placeholder',
                            value: ''
                        }
                    },
                ]
            },
            style: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Extra Class Name',
                            placeholder: 'Enter Text',
                            model: 'text',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Element ID',
                            placeholder: 'Enter Element ID',
                            model: 'test_text',
                            value: ''
                        },
                    },
                    {
                        component: 'nits-input-select',
                        attrs: {
                            label: 'CSS Animation',
                            placeholder: 'Select ',
                            options: [],
                            model: 'animation',
                            value: ''
                        },
                    },

                ]
            },
            advanced: {}
        }
    },
    {
        id: 4,
        name:'Editor',
        component_name: 'nits-editor',
        options: {
            general: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,

                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Field Name',
                            placeholder: 'Enter field name',
                            model: 'model',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Label',
                            placeholder: 'Enter Label',
                            model: 'label',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Placeholder',
                            placeholder: 'Enter Placeholder',
                            model: 'placeholder',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Hint',
                            placeholder: 'Enter Hint',
                            model: 'hint',
                            value: ''
                        }
                    },

                ]
            },
            style: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Extra Class Name',
                            placeholder: 'Enter Text',
                            model: 'text',
                            value: ''
                        }
                    },
                ]
            },
            advanced: {}
        }
    },
    {
        id: 5,
        name:'Date Picker',
        component_name: 'nits-date-picker',
        options: {
            general: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Field Name',
                            placeholder: 'Enter field name',
                            model: 'model',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Label',
                            placeholder: 'Enter Label',
                            model: 'label',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Placeholder',
                            placeholder: 'Enter Placeholder',
                            model: 'placeholder',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Hint',
                            placeholder: 'Enter Hint',
                            model: 'hint',
                            value: ''
                        }
                    },
                ]
            },
            style: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Extra Class Name',
                            placeholder: 'Enter Text',
                            model: 'text',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Element ID',
                            placeholder: 'Enter Element ID',
                            model: 'test_text',
                            value: ''
                        },
                    }

                ]
            },
            advanced: {}
        }
    },
    {
        id: 6,
        name:'Text',
        component_name: 'nits-input-text',
        options: {
            general: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Field Name',
                            placeholder: 'Enter field name',
                            model: 'model',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Label',
                            placeholder: 'Enter Label',
                            model: 'label',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Placeholder',
                            placeholder: 'Enter Placeholder',
                            model: 'placeholder',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Hint',
                            placeholder: 'Enter Hint',
                            model: 'hint',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-select',
                        attrs: {
                            label:'Input Type',
                            placeholder: 'Select one',
                            options: [
                                {label: 'String', value: 'string'},
                                {label: 'Number', value: 'number'},
                            ],
                            model: 'type',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            hidden: true,
                            model: 'value',
                            value: ''
                        }
                    },
                ]
            },
            style: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Extra Class Name',
                            placeholder: 'Enter Text',
                            model: 'class',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Element ID',
                            placeholder: 'Enter Element ID',
                            model: 'id',
                            value: ''
                        },
                    },
                    {
                        component: 'nits-input-select',
                        attrs: {
                            label: 'CSS Animation',
                            placeholder: 'Select ',
                            options: [],
                            model: 'animation',
                            value: ''
                        },
                    },
                ]
            },
            advanced: {}
        }
    },
    {
        id: 7,
        name:'Multi Select',
        component_name: 'nits-input-multi-select',
        options: {
            general: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Field Name',
                            placeholder: 'Enter field name',
                            model: 'model',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'API URL',
                            placeholder: 'Enter api',
                            model: 'api_url',
                            value: [],
                            api_url:'',
                            options:[],
                            optionLabel:'name',
                            trackBy:'id'
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Label',
                            placeholder: 'Enter Label',
                            model: 'label',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Placeholder',
                            placeholder: 'Enter Placeholder',
                            model: 'placeholder',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Hint',
                            placeholder: 'Enter Hint',
                            model: 'hint',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-select',
                        attrs: {
                            label:'Multiple Selection',
                            placeholder: 'Select one',
                            options: [
                                {label: 'Yes', value: 'yes'},
                                {label: 'No', value: 'no'},
                            ],
                            model: 'multiple',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-select',
                        attrs: {
                            label:'Select Model',
                            placeholder: 'Select one',
                            options: [],
                            model: 'model_select',
                            api_url:'/nits-system-api/model',
                            value: ''
                        }
                    },
                ]
            },
            style: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Extra Class Name',
                            placeholder: 'Enter Text',
                            model: 'text',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Element ID',
                            placeholder: 'Enter Element ID',
                            model: 'test_text',
                            value: ''
                        },
                    },

                ]
            },
            advanced: {}
        }
    },
    {
        id: 8,
        name:'Single Select',
        component_name: 'nits-single-select',
        options: {
            general: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Field Name',
                            placeholder: 'Enter field name',
                            model: 'model',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'API URL',
                            placeholder: 'Enter api',
                            model: 'api_url',
                            value: '',
                            api_url:'',
                            options: [],
                        }
                    },
                    {
                        component: 'nits-input-select',
                        attrs: {
                            label:'Select Model',
                            placeholder: 'Select one',
                            options: [],
                            model: 'model_select',
                            api_url:'/nits-system-api/model',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Label',
                            placeholder: 'Enter Label',
                            model: 'label',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Placeholder',
                            placeholder: 'Enter Placeholder',
                            model: 'placeholder',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Hint',
                            placeholder: 'Enter Hint',
                            model: 'hint',
                            value: ''
                        }
                    },
                ]
            },
            style: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Extra Class Name',
                            placeholder: 'Enter Text',
                            model: 'text',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Element ID',
                            placeholder: 'Enter Element ID',
                            model: 'test_text',
                            value: ''
                        },
                    },

                ]
            },
            advanced: {}
        }
    },
    {
        id: 9,
        name:'Input Date',
        component_name: 'nits-input-date',
        options: {
            general: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Field Name',
                            placeholder: 'Enter field name',
                            model: 'model',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Label',
                            placeholder: 'Enter Label',
                            model: 'label',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Placeholder',
                            placeholder: 'Enter Placeholder',
                            model: 'placeholder',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Hint',
                            placeholder: 'Enter Hint',
                            model: 'hint',
                            value: ''
                        }
                    },
                ]
            },
            style: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Extra Class Name',
                            placeholder: 'Enter Text',
                            model: 'text',
                            value: ''
                        }
                    },
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Element ID',
                            placeholder: 'Enter Element ID',
                            model: 'test_text',
                            value: ''
                        },
                    }

                ]
            },
            advanced: {}
        }
    },
    {
        id: 10,
        name:'Form Repeater',
        component_name: 'nits-form-repeater',
        options: {
            general: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                    {
                        component: 'nits-input-text',
                        attrs: {
                            label:'Field Name',
                            placeholder: 'Enter field name',
                            model: 'model',
                            value: ''
                        }
                    },
                ]
            },
            style: {
                component: 'nits-form-page-builder',
                attrs: {
                    grid: {
                        cols: 1,
                        gap: 4,
                    }
                },
                child_components: [
                ]
            },
            advanced: {}
        }
    },
];