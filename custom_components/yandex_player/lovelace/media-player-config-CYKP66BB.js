import{c as e,L as a,h as i,t}from"./index-CGyTXRUS.js";var n=e`:host{--mdc-menu-min-width:452px;--mdc-list-vertical-padding:0px;--mdc-typography-body2-font-size:13px}.media-player-config{padding-right:20px}@media only screen and (max-width:1200px){:host{--mdc-menu-min-width:797px}.media-player-config{margin-bottom:20px;padding-right:0}}@media only screen and (max-width:850px){:host{--mdc-menu-min-width:469px}}@media only screen and (max-width:560px){:host{--mdc-menu-min-width:calc(100vw - 80px)}}@media only screen and (max-width:450px){:host{--mdc-menu-min-width:calc(100vw - 48px)}}`;const o=[{name:"color",default:"accent",required:!0,selector:{select:{multiple:!1,custom_value:!1,mode:"dropdown",options:[{value:"accent",label:"options.accent"},{value:"primary",label:"options.primary"}],translation_key:"config.color"}}},{name:"devices",default:"daily",required:!0,selector:{device:{entity:{domain:"media_player"},multiple:!0}}}];class l extends a{setConfig(e){this.config=e}shouldUpdate(e){return!this.config||!this.hass||e.has("config")}render(){return this.hass&&this.config?i`
      <slot></slot>
      <div class="media-player-config">
        <ha-form
          .hass="${this.hass}"
          .data="${this.config}"
          .schema="${o}"
          .computeLabel="${this._computeLabel}"
          .computeHelper="${this._computeHelper}"
          .localizeValue="${this._localizeValue}"
          @value-changed="${this._valueChanged}"
        >
        </ha-form>
      </div>
    `:i``}_computeLabel(e){return t(`config.${e.name}.label`)}_computeHelper(e){return t(`config.${e.name}.helper`)}_localizeValue(e){return t(e)}_valueChanged(e){!function(e,a,i,t){t=t||{},i=null==i?{}:i;const n=new Event(a,{bubbles:void 0===t.bubbles||t.bubbles,cancelable:Boolean(t.cancelable),composed:void 0===t.composed||t.composed});n.detail=i,e.dispatchEvent(n)}(this,"config-changed",{config:e.detail.value})}}l.styles=n,l.properties={hass:{},config:{attribute:!1}},customElements.define("media-player-config",l);export{l as MediaPlayerConfig};
