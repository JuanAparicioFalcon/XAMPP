import{Host,h}from"@stencil/core";import{__}from"@wordpress/i18n";import{state as formState}from"@store/form";import{state as checkoutState}from"@store/checkout";export class ScLineItemShipping{constructor(){this.label=void 0}render(){const{checkout:e}=checkoutState;return(null==e?void 0:e.selected_shipping_choice)?"loading"===formState.formState.value?h("sc-line-item",null,h("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),h("sc-skeleton",{slot:"price",style:{width:"70px",display:"inline-block","--border-radius":"6px"}})):h("sc-line-item",null,h("span",{slot:"description"},this.label||__("Shipping","surecart")),h("span",{slot:"price"},(null==e?void 0:e.shipping_amount)?h("sc-format-number",{type:"currency",currency:null==e?void 0:e.currency,value:null==e?void 0:e.shipping_amount}):__("Free","surecart"))):h(Host,{style:{display:"none"}})}static get is(){return"sc-line-item-shipping"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-line-item-shipping.scss"]}}static get styleUrls(){return{$:["sc-line-item-shipping.css"]}}static get properties(){return{label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Label"},attribute:"label",reflect:!1}}}}