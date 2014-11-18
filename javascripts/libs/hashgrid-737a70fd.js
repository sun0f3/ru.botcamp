/**
 * @license Copyright 2011 Analog Coop Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"undefined"==typeof jQuery&&alert("Hashgrid: jQuery not loaded. Make sure it's linked to your pages.");var hashgrid=function(e){function i(e){if(null==G.modifierKey)return!0;var i=!0;switch(G.modifierKey){case"ctrl":i=e.ctrlKey?e.ctrlKey:!1;break;case"alt":i=e.altKey?e.altKey:!1;break;case"shift":i=e.shiftKey?e.shiftKey:!1}return i}function r(e){var i=!1,r=e.keyCode?e.keyCode:e.which;return i=13==r?"enter":String.fromCharCode(r).toLowerCase()}function t(){o(G.cookiePrefix+G.id,(O?"1":"0")+","+P+","+C,1)}function s(){g.show(),x.css({width:g.width()}),x.children(".vert").each(function(){$(this).css("display","inline-block"),$(this).offset().top>0&&$(this).hide()})}function n(e){var n,d,o=e.target.tagName.toLowerCase();if("input"==o||"textarea"==o||"select"==o)return!0;if(d=i(e),!d)return!0;if(n=r(e),!n)return!0;switch(n){case G.showGridKey:z?O&&(g.hide(),z=!1,O=!1,t()):(s(),z=!0);break;case G.holdGridKey:z&&!O&&(O=!0,t());break;case G.foregroundKey:z&&(g.css("z-index")==F?(g.css("z-index",j),P="B"):(g.css("z-index",F),P="F"),t());break;case G.jumpGridsKey:z&&G.numberOfGrids>1&&(g.removeClass(G.classPrefix+C),C++,C>G.numberOfGrids&&(C=1),g.addClass(G.classPrefix+C),s(),/webkit/.test(navigator.userAgent.toLowerCase())&&c(),t())}return!0}function d(e){var t,s=i(e);return s?(t=r(e),t&&t==G.showGridKey&&!O&&(g.hide(),z=!1),!0):!0}function o(e,i,r){var t,s="";r&&(t=new Date,t.setTime(t.getTime()+24*r*60*60*1e3),s="; expires="+t.toGMTString()),document.cookie=e+"="+i+s+"; path=/"}function a(e){for(var i,r=document.cookie.split(";"),t=0,s=r.length,n=e+"=";s>t;t++){for(i=r[t];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return null}function c(){var e=document.styleSheets[0];try{e.addRule(".xxxxxx","position: relative"),e.removeRule(e.rules.length-1)}catch(i){}}var l,u,f,h,p,y,g,v,m,x,b,k,w,K,G={id:"grid",modifierKey:null,showGridKey:"g",holdGridKey:"h",foregroundKey:"f",jumpGridsKey:"j",numberOfGrids:1,classPrefix:"grid-",cookiePrefix:"hashgrid"},C=1,z=!1,P="B",j=-1,F=9999,O=!1;if("object"==typeof e)for(k in e)G[k]=e[k];else"string"==typeof e&&(G.id=e);if($("#"+G.id).length>0&&$("#"+G.id).remove(),m=$("<div></div>"),m.attr("id",G.id).css({display:"none","pointer-events":"none"}),$("body").prepend(m),g=$("#"+G.id),"auto"==g.css("z-index")&&g.css("z-index",j),b=parseFloat($(document).height()),g.height(b),g.append('<div id="'+G.id+'-horiz" class="horiz first-line">'),K=g.css("top"),g.css({top:"-999px",display:"block"}),h=$("#"+G.id+"-horiz"),p=h.outerHeight(),g.css({display:"none",top:K}),0>=p)return!1;for(y=Math.floor(b/p),l="",f=y-1;f>=1;f--)l+='<div class="horiz"></div>';for(g.append(l),g.append($('<div class="vert-container"></div>')),x=g.children(".vert-container"),u=g.width(),x.css({width:u,position:"absolute",top:0}),x.append('<div class="vert first-line">&nbsp;</div>'),l="",f=0;30>f;f++)l+='<div class="vert">&nbsp;</div>';return x.append(l),x.children().height(b).css({display:"inline-block"}),v=a(G.cookiePrefix+G.id),"string"==typeof v?(w=v.split(","),w[2]=Number(w[2]),"number"!=typeof w[2]||isNaN(w[2])||(C=w[2].toFixed(0),g.addClass(G.classPrefix+C)),"F"==w[1]&&(P="F",g.css("z-index",F)),"1"==w[0]&&(z=!0,O=!0,s())):g.addClass(G.classPrefix+C),$(document).bind("keydown",n),$(document).bind("keyup",d),{}};$(document).ready(function(){new hashgrid({numberOfGrids:2})});