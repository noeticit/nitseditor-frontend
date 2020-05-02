<template>
    <ckeditor :editor="editor" :config="editorConfig"></ckeditor>
</template>

<script>
    import CKEditor from '@ckeditor/ckeditor5-vue';
    // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

    import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
    import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
    import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
    import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
    import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
    import MathType from '@wiris/mathtype-ckeditor5/src/plugin';


    export default {
        name: "NitsCkeditor",
        components: {
            // Use the <ckeditor> component in this view.
            ckeditor: CKEditor.component
        },
        data() {
            return {
                editor: ClassicEditor,
                editorConfig: {
                    plugins: [
                        EssentialsPlugin,
                        BoldPlugin,
                        ItalicPlugin,
                        LinkPlugin,
                        ParagraphPlugin,
                        MathType
                    ],

                    toolbar: {
                        items: [
                            'bold',
                            'italic',
                            'link',
                            'undo',
                            'redo',
                            'MathType',
                            'ChemType',
                        ]
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>