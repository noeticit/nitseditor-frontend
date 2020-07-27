<template>
    <ckeditor ref="editor" :editor="editor" :value="value" :config="editorConfig" @input="emitEvent"></ckeditor>
</template>

<script>
    import CKEditor from '@ckeditor/ckeditor5-vue';
    // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
    import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
    import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
    import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
    import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
    import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
    import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
    import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
    import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
    import Heading from '@ckeditor/ckeditor5-heading/src/heading';
    import Image from '@ckeditor/ckeditor5-image/src/image';
    import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
    import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
    import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
    import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
    import Indent from '@ckeditor/ckeditor5-indent/src/indent';
    import Link from '@ckeditor/ckeditor5-link/src/link';
    import List from '@ckeditor/ckeditor5-list/src/list';
    import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
    import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
    import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
    import Table from '@ckeditor/ckeditor5-table/src/table';
    import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
    import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
    import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
    // import MathType from '@wiris/mathtype-ckeditor5/src/plugin';

    export default {
        name: "NitsCkeditor",
        components: {
            // Use the <ckeditor> component in this view.
            ckeditor: CKEditor.component
        },
        props: ['value'],
        data() {
            return {
                editor: ClassicEditor,
                editorConfig: {
                    plugins: [
                        Essentials,
                        UploadAdapter,
                        Autoformat,
                        Bold,
                        Italic,
                        BlockQuote,
                        CKFinder,
                        EasyImage,
                        Heading,
                        Image,
                        ImageCaption,
                        ImageStyle,
                        ImageToolbar,
                        ImageUpload,
                        Indent,
                        Link,
                        List,
                        MediaEmbed,
                        Paragraph,
                        PasteFromOffice,
                        Table,
                        TableToolbar,
                        TextTransformation,
                        Alignment,
                        // MathType
                    ],

                    toolbar: {
                        items: [
                            'heading',
                            '|',
                            'bold',
                            'italic',
                            'link',
                            'bulletedList',
                            'numberedList',
                            '|',
                            'indent',
                            'outdent',
                            '|',
                            'imageUpload',
                            'blockQuote',
                            'insertTable',
                            'mediaEmbed',
                            'undo',
                            'redo',
                            // 'MathType',
                            // 'ChemType',
                        ]
                    },
                    image: {
                        toolbar: [
                            'imageStyle:full',
                            'imageStyle:side',
                            '|',
                            'imageTextAlternative'
                        ]
                    },
                    table: {
                        contentToolbar: [
                            'tableColumn',
                            'tableRow',
                            'mergeTableCells'
                        ]
                    },
                }
            }
        },
        methods: {
            emitEvent(editor) {
                this.$emit('input', editor)
            }
        },
    }
</script>
