define(["jquery"],function(a){return function(){"use strict";function b(a){a&&PDFView.open(a)}function c(b){return"undefined"!=typeof PDFView&&PDFView.initialized?void PDFView.open(b):(a("html").attr("dir","ltr"),a("head").append('<link rel="stylesheet" href="'+d+'viewer.css" type="text/css"/>'),a("head").append('<link rel="stylesheet" href="'+d+'viewer-europeana.css" type="text/css"/>'),PDFJS.workerSrc=d+"pdf.worker.js",void require(["pdf_ui"],function(){PDFView.initialize().then(webViewerInitialized),b&&(PDFView.open(b),a(".media-viewer").trigger("object-media-open",{hide_thumb:!0}))}))}var d="undefined"==typeof js_path?"/js/dist/lib/pdfjs/":js_path+"lib/pdfjs/";return{init:function(a){c(a)},open:function(a){b(a)}}}()});