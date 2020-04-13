<template>
    <dashboard-layout-one active="plugins">
        <base-bread-crumb-one name="Plugins" :breadcrumbs="breadcrumbs"></base-bread-crumb-one>
<!--<div>-->
    <div class="bg-grey-lightest border-b overflow-hidden py-5 mb-6">
        <div class="px-2 md:px-6  mx-auto">
            <div class="flex flex-wrap justify-between items-center">
                <div>
                    <h1 class="text-3xl mb-1 font-heading">Workshop</h1>
                    <div class="text-grey mb-2 text-md"> By
                        <a href="https://statamic.com/marketplace/sellers/aryeh-raber" class="text-pink">Aryeh Raber</a>in
                        <a href="https://statamic.com/marketplace/addons/tags/api" class="text-pink">API</a>,
                        <a href="https://statamic.com/marketplace/addons/tags/integration" class="text-pink">Integration</a>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="text-xl">Free!</div>
                    <a href="https://statamic.com/download/129" class="button hot ml-3">Download</a>
                </div>
            </div>
        </div>
        <div class="w-full mx-auto max-w-lg mt-6 px-2">
            <img src="/nits-assets/images/workshop.jpeg" alt="Fetch" class="rounded shadow-md">
        </div>
    </div>
<!--</div>-->
        <div class="px-2 md:px-4 max-w-3xl mx-auto"><div class="flex flex-wrap mb-4 lg:mb-6"><div class="w-full md:w-2/3 user-content px-2 md:px-5"><h5 class="uppercase text-sm tracking-wide opacity-75">Description</h5> <p><strong>Access content directly as JSON using URL endpoints or via a simple tag.</strong></p> <p>This addon will automatically make any of your collections, entries, pages &amp; globals accessible via a URL endpoint, <code class=" language-statamic"><span class="token other">GET</span></code> / <code class=" language-statamic"><span class="token other">POST</span></code> request, or via a simple tag.</p> <p>Accessing your content via URL endpoints can be very useful when you need to fetch your site's data dynamically using Ajax or when you need access from another domain.</p> <h2>Getting started</h2> <p>To get started and for a list of available parameters, check out the <a href="https://statamic.com/marketplace/addons/fetch/docs">docs</a>.</p> <h2>Example</h2> <p>Say we have a simple collection of blog entries and a single entry looks like:</p> <div class="prism-show-language"><div class="prism-show-language-label" data-language="YAML">YAML</div></div><pre class="line-numbers  language-yaml" data-language="YAML"><code class=" language-yaml">title<span class="token punctuation">:</span> My Awesome Blog Post
<span class="token key atrule">id</span><span class="token punctuation">:</span> f1f92ae6<span class="token punctuation">-</span>00a8<span class="token punctuation">-</span>4626<span class="token punctuation">-</span>a1fc<span class="token punctuation">-</span>de900a7f9203
<span class="token key atrule">content</span><span class="token punctuation">:</span> Lorem ipsum aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
<span class="token key atrule">categories</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> statamic
  <span class="token punctuation">-</span> addons
<span class="token key atrule">images</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> /assets/img/cool<span class="token punctuation">-</span>stuff.jpg
  <span class="token punctuation">-</span> /assets/img/pretty<span class="token punctuation">-</span>flowers.jpg
</code></pre> <p>The returned data would look like:</p> <pre class="line-numbers  language-json"><code class=" language-json">[
    {
        "title": "My Awesome Blog Post",
        "id": "7285536e-c383-46fc-8b09-8ae117446d85",
        "content": "Lorem ipsum aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
        "categories": [
            {
                "title": "Statamic",
                "id": "categories/statamic",
                "slug": "statamic",
                ...
            },
            {
                "title": "Awesome Addons",
                "id": "categories/addons",
                "slug": "addons",
                ...
            }
        ],
        "images": [
            "http://domain.com/assets/img/cool-stuff.jpg",
            "http://domain.com/assets/img/pretty-flowers.jpg"
        ],
        "slug": "my-awesome-blog-post",
        "url": "/blog/2016-11-09-my-awesome-blog-post",
        "permalink": "http://domain.com/blog/2016-11-09-my-awesome-blog-post",
        ...
    },
    ...
]
</code></pre> <p><em>Note: a lot more data is returned, this is simply a summary for the example.</em></p></div> <div class="w-full md:w-1/3 px-2"><hr class="squiggle full md:hidden"> <h5 class="uppercase text-sm tracking-wide opacity-75 mb-2">Important Links</h5> <div class="list border rounded border-grey-lighter flex justify-between mb-6"><a href="https://statamic.com/marketplace/addons/fetch/v4/changelog" class="px-2 py-1 text-pink-hot hover:text-grey-dark">Changelog</a> <a href="https://statamic.com/marketplace/addons/fetch/v4/docs" class="px-2 py-1 text-pink-hot hover:text-grey-dark">Documentation</a> <a href="https://github.com/aryehraber/statamic-fetch/issues" class="px-2 py-1 text-pink-hot hover:text-grey-dark">
            GitHub
        </a></div> <h5 class="uppercase text-sm tracking-wide opacity-75 mb-2">Details</h5> <div class="list border rounded border-grey-lighter mb-6"><div class="p-1 flex justify-between"><strong>Released</strong> <span>September 10, 2018</span></div> <div class="border-t border-grey-lighter p-1 flex justify-between"><strong>Updated</strong> <span>4 months ago</span></div> <div class="border-t border-grey-lighter p-1 flex justify-between"><strong>Version</strong> <span>v4.10.1</span></div> <div class="border-t border-grey-lighter p-1 flex justify-between"><strong>Downloads</strong> <span>
                        1464
                    </span></div> <div class="border-t border-grey-lighter p-1 flex justify-between"><strong>Requires</strong> <span>Statamic 2.10+</span></div></div> <div class="border border-grey-lighter p-2 text-center rounded-lg mt-5"><img src="https://statamic.com/images/storage/avatars/vj5XLdwgKnTgsDDVRdMw8JpAEDlCE4fW3o72vYDO.png?fit=max&amp;w=300&amp;h=300" height="80" width="80" class="rounded-full -mt-6 border border-grey-lighter"> <h4 class="text-md my-2">Aryeh Raber</h4> <p class="text-md mb-2"></p> <a href="https://statamic.com/marketplace/sellers/aryeh-raber" class="button small hollow">More by Aryeh Raber</a></div></div></div> <div class="my-6"><div class="flex justify-between"><h2 class="font-sans text-lg mb-4">Similar Addons</h2> <a href="https://statamic.com/marketplace/addons" class="font-bold text-md text-pink hover:text-purple">See All</a></div> <div class="flex flex-wrap -mx-2"><div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4"><a href="https://statamic.com/marketplace/addons/custom-login-json-response" class="bg-tan group bg-cover bg-center hover-lift rounded block h-48 relative cursor-pointer shadow-sm hover:shadow-md" style="background-image: url(&quot;https://statamic.com/images/img/marketplace/placeholder-addon.png?w=560&amp;h=384&quot;);"><span class="p-1 flex items-center h-full text-center text-white leading-loose opacity-0 group-hover:opacity-100 fade-in text-md bg-rad rounded">Custom Login controller that attempts to log in a user and responds in a JSON format</span></a> <div class="mt-1"><h3 class="text-lg m-0"><a href="https://statamic.com/marketplace/addons/custom-login-json-response" class="text-grey-dark">Custom Login with JSON response</a></h3> <div class="text-sm text-grey">
            by <a href="https://statamic.com/marketplace/sellers/marven-thieme" class="text-grey-dark hover:text-pink font-bold">Marven Thieme</a>

            in                     <a href="https://statamic.com/marketplace/addons/tags/api" class="font-bold hover:text-pink text-grey-dark">API</a>,                                                        <a href="https://statamic.com/marketplace/addons/tags/enhancement" class="font-bold hover:text-pink text-grey-dark">Enhancement</a>,                                                        <a href="https://statamic.com/marketplace/addons/tags/forms" class="font-bold hover:text-pink text-grey-dark">Forms</a>,                                                        <a href="https://statamic.com/marketplace/addons/tags/users" class="font-bold hover:text-pink text-grey-dark">Users</a> <div class="mt-1 text-md sm:hidden">
            Custom Login controller that attempts to log in a user and responds in a JSON format
        </div></div></div></div> <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4"><a href="https://statamic.com/marketplace/addons/cookie-monster" class="bg-tan group bg-cover bg-center hover-lift rounded block h-48 relative cursor-pointer shadow-sm hover:shadow-md" style="background-image: url(&quot;https://statamic.com/images/storage/products/XqtapknzkyShtEYpmwuNo7J56nmOeb4GpNxilqu6.jpeg?w=560&amp;h=384&quot;);"><span class="p-1 flex items-center h-full text-center text-white leading-loose opacity-0 group-hover:opacity-100 fade-in text-md bg-rad rounded">Me love all types of cookies!</span></a> <div class="mt-1"><h3 class="text-lg m-0"><a href="https://statamic.com/marketplace/addons/cookie-monster" class="text-grey-dark">Cookie Monster</a></h3> <div class="text-sm text-grey">
            by <a href="https://statamic.com/marketplace/sellers/serieseight" class="text-grey-dark hover:text-pink font-bold">Series Eight</a>

            in                     <a href="https://statamic.com/marketplace/addons/tags/enhancement" class="font-bold hover:text-pink text-grey-dark">Enhancement</a>,                                                        <a href="https://statamic.com/marketplace/addons/tags/integration" class="font-bold hover:text-pink text-grey-dark">Integration</a>,                                                        <a href="https://statamic.com/marketplace/addons/tags/javascript" class="font-bold hover:text-pink text-grey-dark">JavaScript</a>,                                                        <a href="https://statamic.com/marketplace/addons/tags/tag" class="font-bold hover:text-pink text-grey-dark">Tag</a> <div class="mt-1 text-md sm:hidden">
            Me love all types of cookies!
        </div></div></div></div> <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4"><a href="https://statamic.com/marketplace/addons/static-pages" class="bg-tan group bg-cover bg-center hover-lift rounded block h-48 relative cursor-pointer shadow-sm hover:shadow-md" style="background-image: url(&quot;https://statamic.com/images/storage/products/FGAvFT2l6VE0h5jvFhkirkHBe0VDuN7e3o333Co9.png?w=560&amp;h=384&quot;);"><span class="p-1 flex items-center h-full text-center text-white leading-loose opacity-0 group-hover:opacity-100 fade-in text-md bg-rad rounded">Allow completely custom static pages to be uploaded with ease</span> <span class="absolute pin-t pin-r m-1 text-sm font-bold px-sm pb-px rounded-sm z-index-10 bg-darken text-white uppercase">$5</span></a> <div class="mt-1"><h3 class="text-lg m-0"><a href="https://statamic.com/marketplace/addons/static-pages" class="text-grey-dark">Static Pages</a></h3> <div class="text-sm text-grey">
            by <a href="https://statamic.com/marketplace/sellers/sam-miller" class="text-grey-dark hover:text-pink font-bold">Sam Miller</a>

            in                     <a href="https://statamic.com/marketplace/addons/tags/control-panel" class="font-bold hover:text-pink text-grey-dark">Control Panel</a>,                                                        <a href="https://statamic.com/marketplace/addons/tags/enhancement" class="font-bold hover:text-pink text-grey-dark">Enhancement</a>,                                                        <a href="https://statamic.com/marketplace/addons/tags/integration" class="font-bold hover:text-pink text-grey-dark">Integration</a>,                                                        <a href="https://statamic.com/marketplace/addons/tags/tool" class="font-bold hover:text-pink text-grey-dark">Tool</a>,                                                        <a href="https://statamic.com/marketplace/addons/tags/utility" class="font-bold hover:text-pink text-grey-dark">Utility</a> <div class="mt-1 text-md sm:hidden">
            Allow completely custom static pages to be uploaded with ease
        </div></div></div></div> <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4"><a href="https://statamic.com/marketplace/addons/google-recaptcha" class="bg-tan group bg-cover bg-center hover-lift rounded block h-48 relative cursor-pointer shadow-sm hover:shadow-md" style="background-image: url(&quot;https://statamic.com/images/storage/products/e1dVZ76OCYJShDaUYYtkK0LX9ERqk2Az1GmnnCnG.jpeg?w=560&amp;h=384&quot;);"><span class="p-1 flex items-center h-full text-center text-white leading-loose opacity-0 group-hover:opacity-100 fade-in text-md bg-rad rounded">Protect your Statamic forms using Google's reCAPTCHA service.</span></a> <div class="mt-1"><h3 class="text-lg m-0"><a href="https://statamic.com/marketplace/addons/google-recaptcha" class="text-grey-dark">Google reCAPTCHA</a></h3> <div class="text-sm text-grey">
            by <a href="https://statamic.com/marketplace/sellers/aryeh-raber" class="text-grey-dark hover:text-pink font-bold">Aryeh Raber</a>

            in                     <a href="https://statamic.com/marketplace/addons/tags/forms" class="font-bold hover:text-pink text-grey-dark">Forms</a>,                                                        <a href="https://statamic.com/marketplace/addons/tags/integration" class="font-bold hover:text-pink text-grey-dark">Integration</a>,                                                        <a href="https://statamic.com/marketplace/addons/tags/spam" class="font-bold hover:text-pink text-grey-dark">Spam</a>,                                                        <a href="https://statamic.com/marketplace/addons/tags/tag" class="font-bold hover:text-pink text-grey-dark">Tag</a> <div class="mt-1 text-md sm:hidden">
            Protect your Statamic forms using Google's reCAPTCHA service.
        </div></div></div></div></div></div></div>
    </dashboard-layout-one>

</template>

<script>
    export default {
        name: "marketplace",
        data() {
            return {
                breadcrumbs: ['Plugins', 'Second Link', 'Third Link', 'Fourth Link'],
            }
        },
        components: {
            'DashboardLayoutOne': () => import('../../Layouts/Dashboard/LayoutOne'),
        }
    }
</script>

<style scoped>

</style>