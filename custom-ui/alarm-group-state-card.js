console.info("%c  Alarm-group-panel  \n%c Version 0.0.1 ", "color: orange; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray");

class CustomGroupStateCard extends Polymer.Element {

    static get template() {
        return Polymer.html`
            <style>
                .flex-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                @keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}
                @keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}
                @keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:4px}.mdc-button::before,.mdc-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button::before,.mdc-button::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button.mdc-button--dense{border-radius:4px}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button::before,.mdc-button::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button::before,.mdc-button::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button:hover::before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus::before,.mdc-button.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.16}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover::before,.mdc-button--unelevated:hover::before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.32}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.32}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{border-style:solid;padding:0 14px 0 14px;border-width:2px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--dense{height:32px;font-size:.8125rem}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host{display:inline-flex;outline:none}.mdc-button{flex:1}

                :host {
                    display: inherit;
                }
                .groupstate button:host {
                    display: inline-flex;
                    outline: none;
                }
                .groupstate button {
                    min-width: 34px !important;
                    width: 34px;
                    font-size: 11px !important;
                }
            </style>
            
            <hui-generic-entity-row hass="[[hass]]" config="[[_config]]">
                <div class='flex-container' on-click="stopPropagation">
                    <div class='groupstate'>

                        <template is='dom-if' if='{{_allowUnset}}'>
                            <template is='dom-if' if='{{_canUnset}}'>
                                <button
                                    title='Unset'
                                    class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                    toggles state="0"
                                    on-click='setState'
                                    disabled='[[!_canUnset]]'>
                                    <ha-icon icon="mdi:home-alert"></ha-icon>
                                </button>
                            </template>
                        </template>
                        <template is='dom-if' if='{{_allowSet}}'>
                            <template is='dom-if' if='{{_canSet}}'>
                                <button
                                    title='Full set'
                                    class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                    toggles state="1"
                                    on-click='setState'
                                    disabled='[[!_canSet]]'>
                                    <ha-icon icon="mdi:shield-lock"></ha-icon>
                                </button>
                            </template>
                        </template>
                        <template is='dom-if' if='{{_allowPart}}'>
                            <template is='dom-if' if='{{_canPart}}'>
                                <button
                                    title='Part set'
                                    class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                    toggles state="2"
                                    on-click='setState'
                                    disabled='[[!_canPart]]'>
                                    <ha-icon icon="mdi:shield-home"></ha-icon>
                                </button>
                            </template>
                        </template>
                        <template is='dom-if' if='{{_allowReset}}'>
                            <template is='dom-if' if='{{_canReset}}'>
                                <button
                                    title='System reset'
                                    class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                    toggles state="3"
                                    on-click='setState'
                                    disabled='[[!_canReset]]'>
                                    <ha-icon icon="mdi:lock-reset"></ha-icon>
                                </button>
                            </template>
                        </template>
                        <template is='dom-if' if='{{_allowAbort}}'>
                            <template is='dom-if' if='{{_canAbort}}'>
                                <button
                                    title='Abort set'
                                    class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                    toggles state="4"
                                    on-click='setState'
                                    disabled='[[!_canAbort]]'>A
                                    <ha-icon icon="mdi:shield-alert"></ha-icon>
                                </button>
                            </template>
                        </template>
                        <template is='dom-if' if='{{_allowForce}}'>
                            <template is='dom-if' if='{{_canForce}}'>
                                <button
                                    title='Force set'
                                    class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                    toggles state="5"
                                    on-click='setState'
                                    disabled='[[!_canForce]]'>
                                    <ha-icon icon="mdi:debug-step-over"></ha-icon>
                                </button>
                            </template>
                        </template>

                        <template is='dom-if' if='{{_isUnset}}'>
                            <button
                                title='Fail to set'
                                class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                style='[[_isUnsetColor]]pointer-events: auto;'
                                disabled='true'>
                                <ha-icon icon="mdi:home-alert"></ha-icon>
                            </button>
                        </template>
                        <template is='dom-if' if='{{_isSet}}'>
                            <button
                                title='Full set'
                                class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                style='[[_isSetColor]]pointer-events: auto;'
                                disabled='true'>
                                <ha-icon icon="mdi:shield-lock"></ha-icon>
                            </button>
                        </template>
                        <template is='dom-if' if='{{_isPart}}'>
                            <button
                                title='Part set'
                                class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                style='[[_isPartColor]]pointer-events: auto;'
                                disabled='true'>
                                <ha-icon icon="mdi:shield-home"></ha-icon>
                            </button>
                        </template>
                        <template is='dom-if' if='{{_isReady}}'>
                            <button
                                title='Ready to set'
                                class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                style='[[_isReadyColor]]pointer-events: auto;'
                                disabled='true'>
                                <ha-icon icon="mdi:shield-check"></ha-icon>
                            </button>
                        </template>
                        <template is='dom-if' if='{{_isLocked}}'>
                            <button
                                title='Time locked'
                                class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                style='[[_isLockedColor]]pointer-events: auto;'
                                disabled='true'>
                                <ha-icon icon="mdi:clock-alert-outline"></ha-icon>
                            </button>
                        </template>

                        <template is='dom-if' if='{{_isNormal}}'>
                            <button
                                title='Normal'
                                class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                style='[[_isNormalColor]]pointer-events: auto;'
                                disabled='true'>
                                <ha-icon icon="mdi:alarm-light-outline"></ha-icon>
                            </button>
                        </template>
                        <template is='dom-if' if='{{_isAlarm}}'>
                            <button
                                title='Alarm'
                                class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                style='[[_isAlarmColor]]pointer-events: auto;'
                                disabled='true'>
                                <ha-icon icon="mdi:alarm-light"></ha-icon>
                            </button>
                        </template>
                        <template is='dom-if' if='{{_isReset}}'>
                            <button
                                title='Reset required'
                                class='mdc-button mdc-button--raised mdc-ripple-upgraded'
                                style='[[_isResetColor]]pointer-events: auto;'
                                disabled='true'>
                                <ha-icon icon="mdi:shield-alert"></ha-icon>
                            </button>
                        </template>

                    </div>
                </div>
            </hui-generic-entity-row>
        `;
    }

    static get properties() {
        return {
            hass: {
                type: Object,
                observer: 'hassChanged'
            },
            _config: Object,

            _stateObjS: Object,
            _isUnset: Boolean,
            _isSet: Boolean,
            _isPart: Boolean,
            _isReady: Boolean,
            _isLocked: Boolean,
            _isUnsetColor: String,
            _isSetColor: String,
            _isPartColor: String,
            _isReadyColor: String,
            _isLockedColor: String,

            _stateObjA: Object,
            _isNormal: Boolean,
            _isAlarm: Boolean,
            _isReset: Boolean,
			_isNormalColor: String,
			_isAlarmColor: String,
            _isResetColor: String,
            
            _canUnset: Boolean,
            _canSet: Boolean,
            _canPart: Boolean,
            _canReset: Boolean,
            _canAbort: Boolean,
            _canForce: Boolean,

            _allowUnset: Boolean,
            _allowSet: Boolean,
            _allowPart: Boolean,
            _allowReset: Boolean,
            _allowAbort: Boolean,
            _allowForce: Boolean

        }
    }

    setConfig(config) {
        if (!config.unique_id) throw new Error('You need to define a unique_id');
        if (!config.group) throw new Error('You need to define a group');
        this._config = config;
    }

    hassChanged(hass) {

        const config = this._config;

        const stateObjS = hass.states[config.entity];

        let isUnsetColor;
		let isSetColor;
		let isPartColor;
		let isReadyColor;
        let isLockedColor;

		isUnsetColor = (stateObjS.state === '0') ? 'color:yellow;' : '';
		isSetColor = (stateObjS.state === '1') ? 'color:red;' : '';
		isPartColor = (stateObjS.state === '2') ? 'color:orange;' : '';
		isReadyColor = (stateObjS.state === '3' || stateObjS.state === 'unknown') ? 'color:green;' : '';
        isLockedColor = (stateObjS.state === '4') ? 'color:red;' : '';

        const stateObjA = hass.states[config.entity_alarm];

        let isNormalColor;
		let isAlarmColor;
		let isResetColor;

		isNormalColor = (stateObjA.state === '0' || stateObjA.state === 'unknown') ? 'color:green;' : '';
        isAlarmColor = (stateObjA.state === '1') ? 'color:red;' : '';
		isResetColor = (stateObjA.state === '2') ? 'color:yellow;' : '';

        let allow_unset;
        let allow_set;
        let allow_part;
        let allow_reset;
        let allow_abort;
        let allow_force;

        allow_unset = (config.allow_unset != null) ? config.allow_unset : true;
        allow_set = (config.allow_set != null) ? config.allow_set : true;
        allow_part = (config.allow_part != null) ? config.allow_part : true;
        allow_reset = (config.allow_reset != null) ? config.allow_reset : true;
        allow_abort = (config.allow_abort != null) ? config.allow_abort : true;
        allow_force = (config.allow_force != null) ? config.allow_force : true;

        this.setProperties({
            _stateObjS: stateObjS,
            _allowUnset: allow_unset,
            _allowSet: allow_set,
            _allowPart: allow_part,
            _allowReset: allow_reset,
            _allowAbort: allow_abort,
            _allowForce: allow_force,
            _isUnset: stateObjS.state === '0',
            _isSet: stateObjS.state === '1',
            _isPart: stateObjS.state === '2',
            _isReady: stateObjS.state === '3' || stateObjS.state === 'unknown',
            _isLocked: stateObjS.state === '4',
            _isUnsetColor: isUnsetColor,
            _isSetColor: isSetColor,
            _isPartColor: isPartColor,
            _isReadyColor: isReadyColor,
            _isLockedColor: isLockedColor,

            _stateObjA: stateObjA,
            _isNormal: stateObjA.state === '0' || stateObjA.state === 'unknown',
            _isAlarm: stateObjA.state === '1',
            _isReset: stateObjA.state === '2',
            _isNormalColor: isNormalColor,
            _isAlarmColor: isAlarmColor,
            _isResetColor: isResetColor,

            _canUnset: stateObjS.state === '1' || stateObjS.state === '2',
            _canSet: (stateObjS.state === '3' || stateObjS.state === 'unknown') && (stateObjA.state === '0' || stateObjA.state === 'unknown' || stateObjA.state === '2'),
            _canPart: (stateObjS.state === '3' || stateObjS.state === 'unknown') && (stateObjA.state === '0' || stateObjA.state === 'unknown' || stateObjA.state === '2'),
            _canReset: stateObjA.state === '2' || stateObjA.state === '1',
            _canAbort: false,
            _canForce: stateObjS.state === '0'

        });
    }

    stopPropagation(e) {
        e.stopPropagation();
    }

    setState(e) {
        const newState = e.currentTarget.getAttribute('state');
        
        this.hass.callService('mqtt', 'publish', {
            topic: "galaxy/" + this._config.unique_id + "/group/" + this._config.group + "/cmd/set",
            payload: newState
        });
    }

    getCardSize() {
        return 1;
    }
    
}

customElements.define('custom-group-state-card', CustomGroupStateCard);

