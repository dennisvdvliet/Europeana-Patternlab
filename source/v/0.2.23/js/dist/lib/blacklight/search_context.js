!function(a){Blacklight.do_search_context_behavior=function(){a("a[data-context-href]").on("click.search-context",Blacklight.handleSearchContextMethod)},Blacklight.handleSearchContextMethod=function(b){var c=a(this),d=c.data("context-href"),e="post",f=c.attr("target"),g=a("meta[name=csrf-token]").attr("content"),h=a("meta[name=csrf-param]").attr("content"),i=a('<form method="post" action="'+d+'"></form>'),j='<input name="_method" value="'+e+'" type="hidden" />',k='<input name="redirect" value="'+c.attr("href")+'" type="hidden" />';return(b.metaKey||b.ctrlKey)&&(f="_blank"),void 0!==h&&void 0!==g&&(j+='<input name="'+h+'" value="'+g+'" type="hidden" />'),f&&i.attr("target",f),i.hide().append(j).append(k).appendTo("body"),i.submit(),!1},Blacklight.onLoad(function(){Blacklight.do_search_context_behavior()})}(jQuery);