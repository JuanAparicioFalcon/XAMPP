"use strict";const fetch=require("./fetch-2dba325c.js"),store=require("./store-1aade79c.js"),watchers=require("./watchers-51b054bd.js"),mutations=require("./mutations-8d7c4499.js"),addQueryArgs=require("./add-query-args-17c551b6.js"),trackOffer=()=>{var e;return fetch.apiFetch({path:`surecart/v1/checkouts/${store.state.checkout_id}/offer_upsell/${null===(e=store.state.upsell)||void 0===e?void 0:e.id}`,method:"POST",keepalive:!0})},preview=async()=>{try{if(!store.state.checkout_id||"busy"===store.state.loading)return;store.state.loading="busy",mutations.removeNotice();const{checkout:e,...t}=await upsellRequest({preview:!0});store.state.checkout=e,store.state.line_item=t}catch(e){if(console.error(e),((null==e?void 0:e.additional_errors)||[]).find((e=>{var t,o,r;return null===(r=null===(o=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.options)||void 0===o?void 0:o.purchasable_statuses)||void 0===r?void 0:r.includes("out_of_stock")})))return mutations.createErrorNotice({code:"out_of_stock",message:wp.i18n.__("Apologies, this is currently out of stock.","surecart")});if(((null==e?void 0:e.additional_errors)||[]).find((e=>"line_item.upsell.expired"===(null==e?void 0:e.code))))return store.state.loading="idle",mutations.createErrorNotice({code:"expired",message:wp.i18n.__("This offer has expired.","surecart")}),decline();mutations.createErrorNotice(e)}finally{store.state.loading="idle"}},accept=async()=>{try{if(!store.state.checkout_id||"busy"===store.state.loading)return;store.state.loading="busy",mutations.removeNotice();const{checkout:e}=await upsellRequest({preview:!1});handleCompletion(e)}catch(e){store.state.loading="idle",mutations.createErrorNotice(e)}},decline=async()=>{var e,t,o,r,i,s;try{if(!store.state.checkout_id||"busy"===store.state.loading)return;store.state.loading="busy",mutations.removeNotice();const a=await fetch.apiFetch({path:addQueryArgs.addQueryArgs(`surecart/v1/checkouts/${store.state.checkout_id}/decline_upsell/${null===(e=store.state.upsell)||void 0===e?void 0:e.id}`,{expand:["checkout","checkout.current_upsell","fees"]}),method:"POST",data:{...null===(o=watchers.state[null===(t=store.state.product)||void 0===t?void 0:t.id])||void 0===o?void 0:o.line_item,price_id:null===(i=null===(r=store.state.upsell)||void 0===r?void 0:r.price)||void 0===i?void 0:i.id,upsell:null===(s=store.state.upsell)||void 0===s?void 0:s.id,checkout:store.state.checkout_id}});handleCompletion(a)}catch(e){store.state.loading="idle",mutations.createErrorNotice(e)}},upsellRequest=e=>{var t,o,r,i,s;return fetch.apiFetch({path:addQueryArgs.addQueryArgs("surecart/v1/line_items/upsell",{...e,expand:["checkout","checkout.current_upsell","checkout.manual_payment_method","fees","line_item","line_item.price"]}),method:"POST",data:{...null===(o=watchers.state[null===(t=store.state.product)||void 0===t?void 0:t.id])||void 0===o?void 0:o.line_item,price_id:null===(i=null===(r=store.state.upsell)||void 0===r?void 0:r.price)||void 0===i?void 0:i.id,upsell:null===(s=store.state.upsell)||void 0===s?void 0:s.id,checkout:store.state.checkout_id}})},handleCompletion=e=>{var t,o,r,i,s;if(!(null===(t=e.current_upsell)||void 0===t?void 0:t.permalink)||(null===(o=null==e?void 0:e.current_upsell)||void 0===o?void 0:o.permalink)===(null===(r=store.state.upsell)||void 0===r?void 0:r.permalink))return store.state.loading="complete";store.state.loading="redirecting",window.location.assign(addQueryArgs.addQueryArgs(null===(i=e.current_upsell)||void 0===i?void 0:i.permalink,{sc_checkout_id:null===(s=store.state.checkout)||void 0===s?void 0:s.id,sc_form_id:store.state.form_id}))};exports.accept=accept,exports.decline=decline,exports.preview=preview,exports.trackOffer=trackOffer;