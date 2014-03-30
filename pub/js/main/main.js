// Compiled by ClojureScript 0.0-2173
goog.provide('main');
goog.require('cljs.core');
main.init = (function init(){main.itemList = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,main.prototype = goog.dom.getElement("prototype")),main.conceptProofs = goog.dom.getElement("conceptProofs")),main.home = goog.dom.getElement("home")),main.description = goog.dom.getElement("description"));
goog.events.listen(goog.dom.getElement("descriptionTouch"),"click",(function (){return main.showItem.call(null,"description");
}));
goog.events.listen(goog.dom.getElement("homeTouch"),"click",(function (){return main.showItem.call(null,"home");
}));
goog.events.listen(goog.dom.getElement("conceptProofsTouch"),"click",(function (){return main.showItem.call(null,"conceptProofs");
}));
return goog.events.listen(goog.dom.getElement("prototypeTouch"),"click",(function (){return main.showItem.call(null,"prototype");
}));
});
main.showItem = (function showItem(name){var seq__4825 = cljs.core.seq.call(null,main.itemList);var chunk__4826 = null;var count__4827 = 0;var i__4828 = 0;while(true){
if((i__4828 < count__4827))
{var v = cljs.core._nth.call(null,chunk__4826,i__4828);if(cljs.core._EQ_.call(null,v.id,name))
{v.style.display = "inline";
v.className = "enabled";
} else
{if(cljs.core._EQ_.call(null,v.className,"enabled"))
{goog.events.listenOnce(v,"transitionend",((function (seq__4825,chunk__4826,count__4827,i__4828,v){
return (function (){return v.style.display = "none";
});})(seq__4825,chunk__4826,count__4827,i__4828,v))
);
v.className = "disabled";
} else
{}
}
{
var G__4829 = seq__4825;
var G__4830 = chunk__4826;
var G__4831 = count__4827;
var G__4832 = (i__4828 + 1);
seq__4825 = G__4829;
chunk__4826 = G__4830;
count__4827 = G__4831;
i__4828 = G__4832;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4825);if(temp__4092__auto__)
{var seq__4825__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__4825__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__4825__$1);{
var G__4833 = cljs.core.chunk_rest.call(null,seq__4825__$1);
var G__4834 = c__4191__auto__;
var G__4835 = cljs.core.count.call(null,c__4191__auto__);
var G__4836 = 0;
seq__4825 = G__4833;
chunk__4826 = G__4834;
count__4827 = G__4835;
i__4828 = G__4836;
continue;
}
} else
{var v = cljs.core.first.call(null,seq__4825__$1);if(cljs.core._EQ_.call(null,v.id,name))
{v.style.display = "inline";
v.className = "enabled";
} else
{if(cljs.core._EQ_.call(null,v.className,"enabled"))
{goog.events.listenOnce(v,"transitionend",((function (seq__4825,chunk__4826,count__4827,i__4828,v,seq__4825__$1,temp__4092__auto__){
return (function (){return v.style.display = "none";
});})(seq__4825,chunk__4826,count__4827,i__4828,v,seq__4825__$1,temp__4092__auto__))
);
v.className = "disabled";
} else
{}
}
{
var G__4837 = cljs.core.next.call(null,seq__4825__$1);
var G__4838 = null;
var G__4839 = 0;
var G__4840 = 0;
seq__4825 = G__4837;
chunk__4826 = G__4838;
count__4827 = G__4839;
i__4828 = G__4840;
continue;
}
}
} else
{return null;
}
}
break;
}
});
