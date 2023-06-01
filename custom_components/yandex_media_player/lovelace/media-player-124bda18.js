const YANDEX_ICONS_MAP = {
    alisa: 'M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-5.495-8.128c.861.857 3.156 1.371 5.495 1.38 2.338-.009 4.633-.523 5.495-1.38 2.14-2.13-3.062-10.29-5.492-10.302-2.436.013-7.638 8.171-5.498 10.302z',
    station: 'M11.877 0l.21.007c.42.026.836.13 1.237.307l.199.095 5.31 2.802h.01l.138.08.01.005c.101.056.194.123.278.2l.01.01a1.491 1.491 0 0 1 .46 1.24l-.21 14.49c0 .577-.29 1.11-.75 1.405l-.11.064-4.948 2.835a3.965 3.965 0 0 1-3.55.08l-.178-.09-5.014-2.872a1.667 1.667 0 0 1-.774-1.282l-.005-.132-.192-14.496a1.476 1.476 0 0 1 .665-1.401l.11-.065L10.207.418l.017-.01.177-.083c.185-.083.373-.15.562-.202l.052-.014a3.263 3.263 0 0 1 .45-.084c.137-.017.274-.025.411-.025zm-6.64 6.141l.174 13.095c0 .151.068.288.187.377l.064.04 4.915 2.817c.755.4 1.65.425 2.41.083l.149-.074 4.95-2.835a.45.45 0 0 0 .227-.34l.006-.076.188-13.085-5.417 2.86h-.012a2.871 2.871 0 0 1-1.206.269 2.91 2.91 0 0 1-1.189-.262l-.157-.078-5.288-2.79zm10.876-2.317c0 1.593-1.942 2.726-4.24 2.726-2.297 0-4.239-1.133-4.239-2.726 0-.268.055-.522.157-.76L5.362 4.345a.693.693 0 0 0-.026.016l-.012.007-.01.007.012-.007-.01.007-.01.007-.014.011-.001.002-.017.018a.232.232 0 0 0-.045.117l-.006.058-.003.074a.26.26 0 0 0 .083.138l.045.03 5.745 3.032c.242.129.512.197.783.199.219 0 .437-.046.657-.142l.133-.063L18.4 4.83a.255.255 0 0 0 .128-.169.514.514 0 0 0-.034-.217l-.02-.03-.032-.031-.041-.029-2.444-1.29c.102.238.156.492.156.76zm-4.24-1.514c-1.716 0-3.028.765-3.028 1.514 0 .75 1.312 1.514 3.029 1.514 1.717 0 3.028-.765 3.028-1.514 0-.75-1.312-1.514-3.028-1.514z',
    'station-max': 'M6.271 11.243l3.786 2.305v2.238L6.27 13.48v-2.238zM11.877 0l.21.007c.42.026.836.13 1.237.307l.199.095 5.31 2.802h.01l.138.08.01.005c.101.056.194.123.278.2l.01.01a1.491 1.491 0 0 1 .46 1.24l-.21 14.49c0 .577-.29 1.11-.75 1.405l-.11.064-4.948 2.835a3.965 3.965 0 0 1-3.55.08l-.178-.09-5.014-2.872a1.667 1.667 0 0 1-.774-1.282l-.005-.132-.192-14.496a1.476 1.476 0 0 1 .665-1.401l.11-.065L10.207.418l.017-.01.177-.083c.185-.083.373-.15.562-.202l.052-.014a3.263 3.263 0 0 1 .45-.084c.137-.017.274-.025.411-.025zm-6.64 6.141l.174 13.095c0 .151.068.288.187.377l.064.04 4.915 2.817c.755.4 1.65.425 2.41.083l.149-.074 4.95-2.835a.45.45 0 0 0 .227-.34l.006-.076.188-13.085-5.417 2.86h-.012a2.871 2.871 0 0 1-1.206.269 2.91 2.91 0 0 1-1.189-.262l-.157-.078-5.288-2.79zm10.876-2.317c0 1.593-1.942 2.726-4.24 2.726-2.297 0-4.239-1.133-4.239-2.726 0-.268.055-.522.157-.76L5.362 4.345a.693.693 0 0 0-.026.016l-.012.007-.01.007.012-.007-.01.007-.01.007-.014.011-.001.002-.017.018a.232.232 0 0 0-.045.117l-.006.058-.003.074a.26.26 0 0 0 .083.138l.045.03 5.745 3.032c.242.129.512.197.783.199.219 0 .437-.046.657-.142l.133-.063L18.4 4.83a.255.255 0 0 0 .128-.169.514.514 0 0 0-.034-.217l-.02-.03-.032-.031-.041-.029-2.444-1.29c.102.238.156.492.156.76zm-4.24-1.514c-1.716 0-3.028.765-3.028 1.514 0 .75 1.312 1.514 3.029 1.514 1.717 0 3.028-.765 3.028-1.514 0-.75-1.312-1.514-3.028-1.514z',
    'station-2': 'm13.258.376.199.105 5.487 3.075c.766.428 1.114.962 1.048 1.488L20 18.783c0 1.238-.318 2.042-1.524 2.72l-3.551 2.01c-1.155.65-2.247.65-3.391 0L7.02 20.946l-.501-.29c-.706-.42-1.14-1.039-1.353-1.793C5.03 18.376 5 17.986 5 17.329V4.275l.003-.11c-.038-.511.315-1.029 1.057-1.446L10.08.48C10.6.19 11.112.03 11.62.004l.05-.002h.2c.46.015.921.14 1.388.374ZM6.499 5.7 6.5 17.329l.005.356c.01.32.04.541.107.78.116.412.327.713.679.922l1.596.919 3.394 1.924c.63.359 1.125.386 1.74.083l.291-.16 3.422-1.935c.6-.337.747-.63.764-1.288l-.005-12.395-3.572 1.988c-1.153.636-2.243.636-3.384 0L6.499 5.7Zm4.324-3.932L6.681 4.113l.123.075 5.484 3.07c.677.379 1.199.379 1.887-.001l4.01-2.232.094-.055.023-.015-.008-.006-5.59-3.18c-.677-.387-1.196-.387-1.88 0Zm1.244 1.442 2.58 1.552c.473.28.47.738-.004 1.023-.473.285-1.245.285-1.714 0l-2.576-1.549c-.474-.284-.469-.742.004-1.026.474-.281 1.242-.281 1.71 0Z',
    'station-mini': 'M12.667.5v.012l.253.01C19.077.8 24 3.853 24 7.773v8.823c0 4.114-5.421 7.274-12 7.274-6.578 0-12-3.16-12-7.274V7.775C-.004 3.66 5.418.5 12 .5h.667zm10 16.097V11.14c-2.002 2.35-6.05 3.907-10.667 3.907-4.618 0-8.665-1.556-10.667-3.906v5.455c0 3.185 4.728 5.94 10.667 5.94 5.94 0 10.667-2.755 10.667-5.94V11.14v5.456zM11.84 1.834c-5.867.049-10.51 2.784-10.507 5.94 0 3.186 4.727 5.94 10.667 5.94 5.844 0 10.514-2.666 10.663-5.786l.004-.153v-.001c0-3.138-4.592-5.86-10.41-5.938l-.417-.002zm.264 3.685c1.608 0 3 .795 3 2 0 1.204-1.392 2-3 2s-3-.796-3-2c0-1.205 1.392-2 3-2zm0 1.333c-.97 0-1.667.398-1.667.667 0 .268.698.666 1.667.666.97 0 1.667-.398 1.667-.666 0-.269-.698-.667-1.667-.667z',
    'station-mini-2': 'M12 16.733v3.954c-3.483.018-6.968-.909-9-2.829V14.25c2.504 1.717 5.78 2.49 9 2.483zM12.667.5v.012l.253.01C19.077.8 24 3.853 24 7.773v8.823c0 4.114-5.421 7.274-12 7.274-6.578 0-12-3.16-12-7.274V7.775C-.004 3.66 5.418.5 12 .5h.667zm10 16.097V11.14c-2.002 2.35-6.05 3.907-10.667 3.907-4.618 0-8.665-1.556-10.667-3.906v5.455c0 3.185 4.728 5.94 10.667 5.94 5.94 0 10.667-2.755 10.667-5.94V11.14v5.456zM11.84 1.834c-5.867.049-10.51 2.784-10.507 5.94 0 3.186 4.727 5.94 10.667 5.94 5.844 0 10.514-2.666 10.663-5.786l.004-.153c0-3.14-4.592-5.861-10.41-5.94l-.417-.001zm.264 3.685c1.608 0 3 .795 3 2 0 1.204-1.392 2-3 2s-3-.796-3-2c0-1.205 1.392-2 3-2zm0 1.333c-.97 0-1.667.398-1.667.667 0 .268.698.666 1.667.666.97 0 1.667-.398 1.667-.666 0-.269-.698-.667-1.667-.667z',
    'station-mini-2-stereo': 'M14.426 0C9.295 0 5.074 2.458 5.074 5.669v1.022c.026-.013.052-.027.079-.039a1.531 1.531 0 0 1 .642-.114c.102 0 .203.001.304.004.06.002.118.004.177.009a2.594 2.594 0 0 1-.166-.886c-.002-2.454 3.609-4.593 8.194-4.634h.324c4.51.062 8.11 2.177 8.11 4.635l-.002.119c-.08 1.68-1.85 3.182-4.428 3.951-.01.094-.019.187-.026.28-.014.16-.01.32 0 .48.008.106.026.209.04.313 1.896-.517 3.464-1.403 4.428-2.524v4.262c0 1.705-1.742 3.244-4.345 4.047l-.003.038c-.036.342-.066.687-.098 1.026l-.004.043c3.215-.877 5.462-2.813 5.462-5.172v-6.87c0-3.049-3.832-5.42-8.607-5.627l-.197-.008V.015L14.426 0Zm.082 3.906c-1.25 0-2.334.62-2.334 1.556 0 .935 1.084 1.556 2.334 1.556s2.333-.62 2.333-1.556c0-.94-1.084-1.556-2.333-1.556Zm0 1.039c.753 0 1.295.31 1.295.517 0 .209-.542.517-1.295.517-.754 0-1.296-.31-1.296-.517 0-.21.542-.517 1.296-.517Zm-1.842 9.641-.01.008c-.001.002-.063.08-.018.027.024-.03.005-.01.016-.004.007.003.01-.011.012-.03ZM9.352 5.648C4.22 5.648 0 8.106 0 11.318v6.868c0 3.203 4.22 5.67 9.352 5.67 5.13 0 9.351-2.459 9.351-5.67v-6.869c0-3.05-3.831-5.42-8.606-5.627l-.198-.008v-.01l-.547-.024Zm-.125 1.039h.324c4.51.062 8.11 2.177 8.11 4.635l-.003.119c-.116 2.429-3.749 4.51-8.276 4.51-4.634 0-8.317-2.143-8.317-4.634-.002-2.454 3.608-4.593 8.193-4.635l-.03.005Zm.205 2.867c-1.25 0-2.333.621-2.333 1.556 0 .936 1.084 1.556 2.333 1.556 1.25 0 2.334-.62 2.334-1.556 0-.939-1.084-1.556-2.334-1.556Zm0 1.04c.754 0 1.296.309 1.296.516 0 .209-.542.518-1.296.518-.753 0-1.295-.31-1.295-.518 0-.209.542-.517 1.295-.517Zm8.235 3.334v4.262c0 2.479-3.679 4.635-8.317 4.635-4.635 0-8.318-2.144-8.318-4.635v-4.262c1.556 1.83 4.718 3.042 8.318 3.042 3.591 0 6.744-1.213 8.317-3.042ZM2.357 16.35v2.81c1.58 1.493 4.303 2.213 6.993 2.201v-3.074c-2.504.005-5.049-.596-6.993-1.933v-.004Z',
    'station-lite': 'M12.611 0v.012l.233.01C18.487.308 23 3.445 23 7.47v9.06C22 20.755 17.97 24 12 24S2 20.755 1 16.53V7.47C.997 3.247 5.967 0 12 0h.611zm3.761 21.764l-.109.038c-1.308.446-2.816.696-4.402.696-1.625 0-3.167-.262-4.496-.728 1.168.624 2.601 1.014 4.208 1.056l.285.003.217-.002c1.643-.03 3.109-.425 4.297-1.063zM11.515 8c-.767 0-1.29-1.593-.86-1.9.45-.281 2.845.067 2.845.57 0 .413-1.293 1.33-1.985 1.33zm9.985 2.5C19.716 12.769 16.112 14 12 14s-7.716-1.232-9.5-3.5v4.767C2.5 18.34 6.71 21 12 21s9.5-2.66 9.5-5.734V10.5zm-9.642-9C6.633 1.545 2.498 4.077 2.5 7c0 2.95 4.21 5.5 9.5 5.5 5.205 0 9.364-2.47 9.497-5.357L21.5 7c0-2.906-4.09-5.426-9.27-5.498l-.372-.002z',
    module: 'M12.494 3c.759 0 1.38.589 1.43 1.334l.003.099V7.4l1.272-.65.352.688-.351-.688c.13-.066.27-.106.414-.118l.11-.003.108.008c.107.012.213.04.312.084l.098.048 2.87 1.61.654-.332a.6.6 0 0 1 .498-.02l.066.032 1.996 1.116a.572.572 0 0 1 .242.199l.03.05a.59.59 0 0 1 .081.28v.44a.6.6 0 0 1-.04.214l.847.475.039.024a.999.999 0 0 1 .471.756l.004.094v.784a1.446 1.446 0 0 1-.7 1.233l-.094.053-9.279 4.693v.41a1.433 1.433 0 0 1-2.56.885l-2.51 1.268-.025.016c-.445.224-.875.181-1.19-.043L.578 16.9l-.008-.006-.08-.05C.168 16.62 0 16.233 0 15.79c0-.759.486-1.587 1.138-1.917h.002l9.922-5.022V4.433c0-.792.641-1.433 1.432-1.433zm-1.432 14.974l-2.23 1.128c-.22.112-.442.47-.475.773l-.004.068 2.709-1.368v-.601zm-2.872.114l.101-.056 2.77-1.403v-6.434l-9.379 4.747-.057.034c-.221.15-.425.522-.425.812v.058c-.002.018-.007.021-.02.016l6.057 3.52c.154-.53.508-1.027.952-1.294zM12.494 4.2a.232.232 0 0 0-.232.233V18.88a.233.233 0 0 0 .465 0V4.432l-.005-.046a.233.233 0 0 0-.228-.185V4.2zM22.8 12.034l-8.872 4.49v.602l8.738-4.42a.246.246 0 0 0 .13-.172l.004-.044v-.456zm-7.1-4.193l-1.302.667h-.002l-.469.238v6.433l7.81-3.952L15.7 7.841zm-1.773-.258v.005l.198.386-.198-.39zm1.728.234l.045.024.046-.023a.096.096 0 0 1-.09-.001zm.585-1.047l-.538.959-.001.001-.047.085.001.002.047-.084v-.001l.538-.962zm.002 0l-.294.523.294-.523zm-2.54-1.858l-.104.063.068-.037.036-.026z',
    'module-2': 'M8.825.25a2.1 2.1 0 0 1 1.96.177l3.508 2.287a4 4 0 0 1 1.816 3.35V20.66a2 2 0 0 1-1.081 1.777l-2.072 1.073a.996.996 0 0 1-.024.012l-.065.033a1.11 1.11 0 0 1-.367.064 1 1 0 0 1-.522-.147l-4.545-2.785A3 3 0 0 1 6 18.13V2.166a1.1 1.1 0 0 1 .702-1.026zm1.414 1.014a1.1 1.1 0 0 0-1.027-.092l-.963.403 3.804 2.302A3 3 0 0 1 13.5 6.444V22.1l1.068-.551a1 1 0 0 0 .533-.765l.008-.124V6.065a3 3 0 0 0-1.362-2.513z',
    music: 'M10.92 0v3.621a8.4 8.4 0 1 0 9.32 6.695l3.04-2.445-.002-.02A12 12 0 1 1 10.92 0Zm3.36.167c2.649.51 4.988 1.89 6.707 3.832l.013.032-2.032 3.227a8.442 8.442 0 0 0-2.888-2.651v7.344a4.08 4.08 0 1 1-1.8-3.384v-8.4Z',
    ya: 'M12 0c6.626 0 12 5.372 12 12s-5.374 12-12 12C5.371 24 0 18.628 0 12S5.371 0 12 0Zm4 5h-3.422C9.131 5 7.313 6.84 7.313 9.537c0 2.151.992 3.423 2.758 4.732L7 19h2.557l3.422-5.288-1.19-.83c-1.442-1.012-2.144-1.802-2.144-3.487 0-1.491 1.015-2.502 2.946-2.502h1.052v12.094H16V5Z',
    play: 'M8,5.14V19.14L19,12.14L8,5.14Z',
    pause: 'M14,19H18V5H14M6,19H10V5H6V19Z',
    'skip-prev': 'M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z',
    'skip-next': 'M16,18H18V6H16M6,18L14.5,12L6,6V18Z',
    'volume-on': 'M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z',
    'volume-off': 'M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z',
    'heart-outline': 'M 8.2773438,4.0214844 C 6.9216157,4.0176052 5.5650974,4.5511054 4.546875,5.6230469 2.4451257,7.8338836 2.5061478,11.367228 4.7050781,13.693359 v 0.002 c 0.6528718,0.689311 1.4368041,1.491434 2.3535156,2.410156 v 0.002 L 7.375,16.423828 c 0.7550874,0.755088 2.808641,2.773736 3.921875,3.875 L 12,20.994141 12.703125,20.298828 c 1.115456,-1.103483 3.173889,-3.128027 3.921875,-3.875 l 0.316406,-0.318359 h 0.002 c 0.914489,-0.918504 1.698224,-1.721234 2.351563,-2.41211 2.19893,-2.326131 2.259952,-5.8594754 0.158203,-8.0703121 C 17.415911,3.4796385 14.024957,3.4901922 12,5.6445312 10.987453,4.5672887 9.6330718,4.0253636 8.2773438,4.0214844 Z m -0.00586,1.9570312 c 0.8125198,0.00237 1.625033,0.3474006 2.2714846,1.0351563 L 12,8.5644531 13.457031,7.0136719 C 14.750071,5.6380145 16.703124,5.6314119 18.003906,7 v 0.00195 c 1.366247,1.4371597 1.372957,3.6944949 -0.162109,5.3183599 -0.63466,0.671123 -1.408897,1.463505 -2.316406,2.375 l -0.314453,0.3125 C 14.61373,15.604211 13.137466,17.059053 12,18.181641 10.864545,17.061278 9.3921759,15.610926 8.7910156,15.009766 L 8.4746094,14.693359 C 7.5673227,13.784083 6.7933769,12.993 6.15625,12.320313 h 0.00195 C 4.6231372,10.696448 4.6298466,8.4391128 5.9960937,7.0019531 V 7 C 6.6458697,6.3159433 7.4589646,5.9761448 8.2714844,5.9785156 Z',
    heart: 'M12 21c.71-.75 4.762-4.628 7.296-7.306 2.27-2.401 2.222-5.9.157-8.071-2.063-2.172-5.4-2.163-7.453.021-2.053-2.184-5.39-2.193-7.454-.021-2.064 2.17-2.11 5.67.158 8.071C7.237 16.372 11.29 20.25 12 21z',
    'dj-mode-on': 'M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z',
};
async function getIcon(name) {
    return {
        path: YANDEX_ICONS_MAP[name.replace(/_/g, '-')],
    };
}
async function getIconList() {
    return Object.keys(YANDEX_ICONS_MAP).map(icon => ({
        name: icon,
    }));
}
if (!window.frontendVersion || +window.frontendVersion <= 20211027.0) {
    window.customIconsets = window.customIconsets || {};
    window.customIconsets['yandex'] = getIcon;
}
else {
    window.customIcons = window.customIcons || {};
    window.customIcons['yandex'] = {
        getIcon,
        getIconList,
    };
}

const LitElement = Object.getPrototypeOf(customElements.get('home-assistant-main'));
const { html, css } = LitElement.prototype;

var styles$8 = css`:host {
  transition: filter 0.8s ease 0s;
  display: block;
}
:host .fill {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--ymp-background-color);
  transition: background-color 0.8s ease 0s;
  position: absolute;
}
:host .image {
  top: 0;
  bottom: 0;
  right: 0;
  width: var(--ymp-media-image-width);
  background-color: var(--ymp-background-color);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: var(--ymp-media-image);
  opacity: 1;
  transition: width 0.8s ease 0s, background-image 0.8s ease 0s, background-color 0.8s ease 0s, background-size 0.8s ease 0s, opacity 0.8s linear 0.8s;
  position: absolute;
}
:host .gradient {
  top: 0;
  bottom: 0;
  right: 0;
  width: var(--ymp-media-image-width);
  background-image: var(--ymp-media-horizontal-gradient);
  opacity: 1;
  transition: width 0.8s ease 0s, background-image 0.8s ease 0s, opacity 0.8s linear 0.8s;
  position: absolute;
}`;

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var vibrant = {exports: {}};

vibrant.exports;

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory();
	})(window, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId]) {
	/******/ 			return installedModules[moduleId].exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// define __esModule on exports
	/******/ 	__webpack_require__.r = function(exports) {
	/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 		}
	/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 	};
	/******/
	/******/ 	// create a fake namespace object
	/******/ 	// mode & 1: value is a module id, require it
	/******/ 	// mode & 2: merge all properties of value into the ns
	/******/ 	// mode & 4: return value when already ns object
	/******/ 	// mode & 8|1: behave like require
	/******/ 	__webpack_require__.t = function(value, mode) {
	/******/ 		if(mode & 1) value = __webpack_require__(value);
	/******/ 		if(mode & 8) return value;
	/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
	/******/ 		var ns = Object.create(null);
	/******/ 		__webpack_require__.r(ns);
	/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
	/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
	/******/ 		return ns;
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 10);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.assignDeep = exports.mapValues = void 0;
	function mapValues(o, mapper) {
	    var result = {};
	    for (var key in o) {
	        if (o.hasOwnProperty(key)) {
	            var v = o[key];
	            result[key] = mapper(v);
	        }
	    }
	    return result;
	}
	exports.mapValues = mapValues;
	/**
	 * Overwrite values or properties on objects and lists recursively.
	 * A shallow copy will be created for each array value.
	 */
	function assignDeep(target) {
	    var sources = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        sources[_i - 1] = arguments[_i];
	    }
	    sources.forEach(function (s) {
	        if (!s)
	            return;
	        for (var key in s) {
	            if (s.hasOwnProperty(key)) {
	                var v = s[key];
	                if (Array.isArray(v)) {
	                    // Shallow copy
	                    target[key] = v.slice(0);
	                }
	                else if (typeof v === 'object') {
	                    if (!target[key])
	                        target[key] = {};
	                    assignDeep(target[key], v);
	                }
	                else {
	                    target[key] = v;
	                }
	            }
	        }
	    });
	    return target;
	}
	exports.assignDeep = assignDeep;


	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {

	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var options_1 = __webpack_require__(7);
	var builder_1 = __importDefault(__webpack_require__(8));
	var utils_1 = __webpack_require__(0);
	var Vibrant = /** @class */ (function () {
	    function Vibrant(_src, opts) {
	        this._src = _src;
	        this.opts = utils_1.assignDeep({}, Vibrant.DefaultOpts, opts);
	    }
	    Vibrant.use = function (pipeline) {
	        this._pipeline = pipeline;
	    };
	    Vibrant.from = function (src) {
	        return new builder_1.default(src);
	    };
	    Object.defineProperty(Vibrant.prototype, "result", {
	        get: function () {
	            return this._result;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Vibrant.prototype._process = function (image, opts) {
	        this.opts.quantizer;
	        image.scaleDown(this.opts);
	        var processOpts = options_1.buildProcessOptions(this.opts, opts);
	        return Vibrant._pipeline.process(image.getImageData(), processOpts);
	    };
	    Vibrant.prototype.palette = function () {
	        return this.swatches();
	    };
	    Vibrant.prototype.swatches = function () {
	        throw new Error('Method deprecated. Use `Vibrant.result.palettes[name]` instead');
	    };
	    Vibrant.prototype.getPalette = function () {
	        var _this = this;
	        var arg0 = arguments[0];
	        var arg1 = arguments[1];
	        var name = typeof arg0 === 'string' ? arg0 : 'default';
	        var cb = typeof arg0 === 'string' ? arg1 : arg0;
	        var image = new this.opts.ImageClass();
	        return image
	            .load(this._src)
	            .then(function (image) { return _this._process(image, { generators: [name] }); })
	            .then(function (result) {
	            _this._result = result;
	            return result.palettes[name];
	        })
	            .then(function (res) {
	            image.remove();
	            if (cb) {
	                cb(undefined, res);
	            }
	            return res;
	        })
	            .catch(function (err) {
	            image.remove();
	            if (cb) {
	                cb(err);
	            }
	            return Promise.reject(err);
	        });
	    };
	    Vibrant.prototype.getPalettes = function () {
	        var _this = this;
	        var arg0 = arguments[0];
	        var arg1 = arguments[1];
	        var names = Array.isArray(arg0) ? arg0 : ['*'];
	        var cb = Array.isArray(arg0) ? arg1 : arg0;
	        var image = new this.opts.ImageClass();
	        return image
	            .load(this._src)
	            .then(function (image) {
	            return _this._process(image, {
	                generators: names
	            });
	        })
	            .then(function (result) {
	            _this._result = result;
	            return result.palettes;
	        })
	            .then(function (res) {
	            image.remove();
	            if (cb) {
	                cb(undefined, res);
	            }
	            return res;
	        })
	            .catch(function (err) {
	            image.remove();
	            if (cb) {
	                cb(err);
	            }
	            return Promise.reject(err);
	        });
	    };
	    Vibrant.DefaultOpts = {
	        colorCount: 64,
	        quality: 5,
	        filters: []
	    };
	    return Vibrant;
	}());
	exports.default = Vibrant;


	/***/ }),
	/* 2 */
	/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.applyFilters = exports.ImageBase = void 0;
	var ImageBase = /** @class */ (function () {
	    function ImageBase() {
	    }
	    ImageBase.prototype.scaleDown = function (opts) {
	        var width = this.getWidth();
	        var height = this.getHeight();
	        var ratio = 1;
	        if (opts.maxDimension > 0) {
	            var maxSide = Math.max(width, height);
	            if (maxSide > opts.maxDimension)
	                ratio = opts.maxDimension / maxSide;
	        }
	        else {
	            ratio = 1 / opts.quality;
	        }
	        if (ratio < 1)
	            this.resize(width * ratio, height * ratio, ratio);
	    };
	    return ImageBase;
	}());
	exports.ImageBase = ImageBase;
	function applyFilters(imageData, filters) {
	    if (filters.length > 0) {
	        var pixels = imageData.data;
	        var n = pixels.length / 4;
	        var offset = void 0;
	        var r = void 0;
	        var g = void 0;
	        var b = void 0;
	        var a = void 0;
	        for (var i = 0; i < n; i++) {
	            offset = i * 4;
	            r = pixels[offset + 0];
	            g = pixels[offset + 1];
	            b = pixels[offset + 2];
	            a = pixels[offset + 3];
	            // Mark ignored color
	            for (var j = 0; j < filters.length; j++) {
	                if (!filters[j](r, g, b, a)) {
	                    pixels[offset + 3] = 0;
	                    break;
	                }
	            }
	        }
	    }
	    return imageData;
	}
	exports.applyFilters = applyFilters;


	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Swatch = void 0;
	var converter_1 = __webpack_require__(4);
	var Swatch = /** @class */ (function () {
	    function Swatch(rgb, population) {
	        this._rgb = rgb;
	        this._population = population;
	    }
	    Swatch.applyFilters = function (colors, filters) {
	        return filters.length > 0
	            ? colors.filter(function (_a) {
	                var r = _a.r, g = _a.g, b = _a.b;
	                for (var j = 0; j < filters.length; j++) {
	                    if (!filters[j](r, g, b, 255))
	                        return false;
	                }
	                return true;
	            })
	            : colors;
	    };
	    /**
	     * Make a value copy of a swatch based on a previous one. Returns a new Swatch instance
	     * @param {Swatch} swatch
	     */
	    Swatch.clone = function (swatch) {
	        return new Swatch(swatch._rgb, swatch._population);
	    };
	    Object.defineProperty(Swatch.prototype, "r", {
	        /**
	         * The red value in the RGB value
	         */
	        get: function () {
	            return this._rgb[0];
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Swatch.prototype, "g", {
	        /**
	         * The green value in the RGB value
	         */
	        get: function () {
	            return this._rgb[1];
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Swatch.prototype, "b", {
	        /**
	         * The blue value in the RGB value
	         */
	        get: function () {
	            return this._rgb[2];
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Swatch.prototype, "rgb", {
	        /**
	         * The color value as a rgb value
	         */
	        get: function () {
	            return this._rgb;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Swatch.prototype, "hsl", {
	        /**
	         * The color value as a hsl value
	         */
	        get: function () {
	            if (!this._hsl) {
	                var _a = this._rgb, r = _a[0], g = _a[1], b = _a[2];
	                this._hsl = converter_1.rgbToHsl(r, g, b);
	            }
	            return this._hsl;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Swatch.prototype, "hex", {
	        /**
	         * The color value as a hex string
	         */
	        get: function () {
	            if (!this._hex) {
	                var _a = this._rgb, r = _a[0], g = _a[1], b = _a[2];
	                this._hex = converter_1.rgbToHex(r, g, b);
	            }
	            return this._hex;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Swatch.prototype, "population", {
	        get: function () {
	            return this._population;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    /**
	     * Get the JSON object for the swatch
	     */
	    Swatch.prototype.toJSON = function () {
	        return {
	            rgb: this.rgb,
	            population: this.population
	        };
	    };
	    /**
	     * Get the color value as a rgb value
	     * @deprecated Use property instead
	     */
	    // TODO: deprecate internally, use property instead
	    Swatch.prototype.getRgb = function () {
	        return this._rgb;
	    };
	    /**
	     * Get the color value as a hsl value
	     * @deprecated Use property instead
	     */
	    // TODO: deprecate internally, use property instead
	    Swatch.prototype.getHsl = function () {
	        return this.hsl;
	    };
	    /**
	     * @deprecated Use property instead
	     */
	    // TODO: deprecate internally, use property instead
	    Swatch.prototype.getPopulation = function () {
	        return this._population;
	    };
	    /**
	     * Get the color value as a hex string
	     * @deprecated Use property instead
	     */
	    // TODO: deprecate internally, use property instead
	    Swatch.prototype.getHex = function () {
	        return this.hex;
	    };
	    Swatch.prototype.getYiq = function () {
	        if (!this._yiq) {
	            var rgb = this._rgb;
	            this._yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	        }
	        return this._yiq;
	    };
	    Object.defineProperty(Swatch.prototype, "titleTextColor", {
	        get: function () {
	            if (this._titleTextColor) {
	                this._titleTextColor = this.getYiq() < 200 ? '#fff' : '#000';
	            }
	            return this._titleTextColor;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Object.defineProperty(Swatch.prototype, "bodyTextColor", {
	        get: function () {
	            if (this._bodyTextColor) {
	                this._bodyTextColor = this.getYiq() < 150 ? '#fff' : '#000';
	            }
	            return this._bodyTextColor;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    Swatch.prototype.getTitleTextColor = function () {
	        return this.titleTextColor;
	    };
	    Swatch.prototype.getBodyTextColor = function () {
	        return this.bodyTextColor;
	    };
	    return Swatch;
	}());
	exports.Swatch = Swatch;


	/***/ }),
	/* 4 */
	/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getColorDiffStatus = exports.hexDiff = exports.rgbDiff = exports.deltaE94 = exports.rgbToCIELab = exports.xyzToCIELab = exports.rgbToXyz = exports.hslToRgb = exports.rgbToHsl = exports.rgbToHex = exports.hexToRgb = exports.DELTAE94_DIFF_STATUS = void 0;
	exports.DELTAE94_DIFF_STATUS = {
	    NA: 0,
	    PERFECT: 1,
	    CLOSE: 2,
	    GOOD: 10,
	    SIMILAR: 50
	};
	/**
	 * Converts hex string to RGB
	 * @param hex - The hex value you with to get the RGB value of
	 * @returns an array in the order of `red, green, blue` numerical values
	 */
	function hexToRgb(hex) {
	    var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    if (!m)
	        throw new RangeError("'" + hex + "' is not a valid hex color");
	    return [m[1], m[2], m[3]].map(function (s) { return parseInt(s, 16); });
	}
	exports.hexToRgb = hexToRgb;
	/**
	 * Given values for an RGB color convert to and return a valid HEX string
	 * @param r - Red value in RGB
	 * @param g - Green value in RGB
	 * @param b - Blue value in RGB
	 * @returns a valid hex string with pre-pending pound sign
	 */
	function rgbToHex(r, g, b) {
	    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1, 7);
	}
	exports.rgbToHex = rgbToHex;
	/**
	 * Given values for an RGB color convert to and return a valid HSL value
	 * @param r - Red value in RGB
	 * @param g - Green value in RGB
	 * @param b - Blue value in RGB
	 * @returns an array in the order of `hue, saturation, light` numerical values
	 */
	function rgbToHsl(r, g, b) {
	    r /= 255;
	    g /= 255;
	    b /= 255;
	    var max = Math.max(r, g, b);
	    var min = Math.min(r, g, b);
	    var h = 0;
	    var s = 0;
	    var l = (max + min) / 2;
	    if (max !== min) {
	        var d = max - min;
	        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	        switch (max) {
	            case r:
	                h = (g - b) / d + (g < b ? 6 : 0);
	                break;
	            case g:
	                h = (b - r) / d + 2;
	                break;
	            case b:
	                h = (r - g) / d + 4;
	                break;
	        }
	        h /= 6;
	    }
	    return [h, s, l];
	}
	exports.rgbToHsl = rgbToHsl;
	function hslToRgb(h, s, l) {
	    var r;
	    var g;
	    var b;
	    function hue2rgb(p, q, t) {
	        if (t < 0)
	            t += 1;
	        if (t > 1)
	            t -= 1;
	        if (t < 1 / 6)
	            return p + (q - p) * 6 * t;
	        if (t < 1 / 2)
	            return q;
	        if (t < 2 / 3)
	            return p + (q - p) * (2 / 3 - t) * 6;
	        return p;
	    }
	    if (s === 0) {
	        r = g = b = l;
	    }
	    else {
	        var q = l < 0.5 ? l * (1 + s) : l + s - (l * s);
	        var p = 2 * l - q;
	        r = hue2rgb(p, q, h + 1 / 3);
	        g = hue2rgb(p, q, h);
	        b = hue2rgb(p, q, h - (1 / 3));
	    }
	    return [
	        r * 255,
	        g * 255,
	        b * 255
	    ];
	}
	exports.hslToRgb = hslToRgb;
	function rgbToXyz(r, g, b) {
	    r /= 255;
	    g /= 255;
	    b /= 255;
	    r = r > 0.04045 ? Math.pow((r + 0.005) / 1.055, 2.4) : r / 12.92;
	    g = g > 0.04045 ? Math.pow((g + 0.005) / 1.055, 2.4) : g / 12.92;
	    b = b > 0.04045 ? Math.pow((b + 0.005) / 1.055, 2.4) : b / 12.92;
	    r *= 100;
	    g *= 100;
	    b *= 100;
	    var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
	    var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
	    var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
	    return [x, y, z];
	}
	exports.rgbToXyz = rgbToXyz;
	function xyzToCIELab(x, y, z) {
	    var REF_X = 95.047;
	    var REF_Y = 100;
	    var REF_Z = 108.883;
	    x /= REF_X;
	    y /= REF_Y;
	    z /= REF_Z;
	    x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
	    y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
	    z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
	    var L = 116 * y - 16;
	    var a = 500 * (x - y);
	    var b = 200 * (y - z);
	    return [L, a, b];
	}
	exports.xyzToCIELab = xyzToCIELab;
	function rgbToCIELab(r, g, b) {
	    var _a = rgbToXyz(r, g, b), x = _a[0], y = _a[1], z = _a[2];
	    return xyzToCIELab(x, y, z);
	}
	exports.rgbToCIELab = rgbToCIELab;
	function deltaE94(lab1, lab2) {
	    var WEIGHT_L = 1;
	    var WEIGHT_C = 1;
	    var WEIGHT_H = 1;
	    var L1 = lab1[0], a1 = lab1[1], b1 = lab1[2];
	    var L2 = lab2[0], a2 = lab2[1], b2 = lab2[2];
	    var dL = L1 - L2;
	    var da = a1 - a2;
	    var db = b1 - b2;
	    var xC1 = Math.sqrt(a1 * a1 + b1 * b1);
	    var xC2 = Math.sqrt(a2 * a2 + b2 * b2);
	    var xDL = L2 - L1;
	    var xDC = xC2 - xC1;
	    var xDE = Math.sqrt(dL * dL + da * da + db * db);
	    var xDH = (Math.sqrt(xDE) > Math.sqrt(Math.abs(xDL)) + Math.sqrt(Math.abs(xDC)))
	        ? Math.sqrt(xDE * xDE - xDL * xDL - xDC * xDC)
	        : 0;
	    var xSC = 1 + 0.045 * xC1;
	    var xSH = 1 + 0.015 * xC1;
	    xDL /= WEIGHT_L;
	    xDC /= WEIGHT_C * xSC;
	    xDH /= WEIGHT_H * xSH;
	    return Math.sqrt(xDL * xDL + xDC * xDC + xDH * xDH);
	}
	exports.deltaE94 = deltaE94;
	function rgbDiff(rgb1, rgb2) {
	    var lab1 = rgbToCIELab.apply(undefined, rgb1);
	    var lab2 = rgbToCIELab.apply(undefined, rgb2);
	    return deltaE94(lab1, lab2);
	}
	exports.rgbDiff = rgbDiff;
	function hexDiff(hex1, hex2) {
	    var rgb1 = hexToRgb(hex1);
	    var rgb2 = hexToRgb(hex2);
	    return rgbDiff(rgb1, rgb2);
	}
	exports.hexDiff = hexDiff;
	function getColorDiffStatus(d) {
	    if (d < exports.DELTAE94_DIFF_STATUS.NA) {
	        return 'N/A';
	    }
	    // Not perceptible by human eyes
	    if (d <= exports.DELTAE94_DIFF_STATUS.PERFECT) {
	        return 'Perfect';
	    }
	    // Perceptible through close observation
	    if (d <= exports.DELTAE94_DIFF_STATUS.CLOSE) {
	        return 'Close';
	    }
	    // Perceptible at a glance
	    if (d <= exports.DELTAE94_DIFF_STATUS.GOOD) {
	        return 'Good';
	    }
	    // Colors are more similar than opposite
	    if (d < exports.DELTAE94_DIFF_STATUS.SIMILAR) {
	        return 'Similar';
	    }
	    return 'Wrong';
	}
	exports.getColorDiffStatus = getColorDiffStatus;


	/***/ }),
	/* 5 */
	/***/ (function(module, exports, __webpack_require__) {

	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	var config_1 = __importDefault(__webpack_require__(6));
	var image_browser_1 = __importDefault(__webpack_require__(9));
	config_1.default.DefaultOpts.ImageClass = image_browser_1.default;
	module.exports = config_1.default;


	/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {

	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __importDefault(__webpack_require__(1));
	core_1.default.DefaultOpts.quantizer = 'mmcq';
	core_1.default.DefaultOpts.generators = ['default'];
	core_1.default.DefaultOpts.filters = ['default'];
	exports.default = core_1.default;


	/***/ }),
	/* 7 */
	/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", { value: true });
	exports.buildProcessOptions = void 0;
	var utils_1 = __webpack_require__(0);
	function buildProcessOptions(opts, override) {
	    var colorCount = opts.colorCount, quantizer = opts.quantizer, generators = opts.generators, filters = opts.filters;
	    // Merge with common quantizer options
	    var commonQuantizerOpts = { colorCount: colorCount };
	    var q = typeof quantizer === 'string'
	        ? { name: quantizer, options: {} }
	        : quantizer;
	    q.options = utils_1.assignDeep({}, commonQuantizerOpts, q.options);
	    return utils_1.assignDeep({}, {
	        quantizer: q,
	        generators: generators,
	        filters: filters
	    }, override);
	}
	exports.buildProcessOptions = buildProcessOptions;


	/***/ }),
	/* 8 */
	/***/ (function(module, exports, __webpack_require__) {

	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var _1 = __importDefault(__webpack_require__(1));
	var utils_1 = __webpack_require__(0);
	var Builder = /** @class */ (function () {
	    function Builder(src, opts) {
	        if (opts === void 0) { opts = {}; }
	        this._src = src;
	        this._opts = utils_1.assignDeep({}, _1.default.DefaultOpts, opts);
	    }
	    Builder.prototype.maxColorCount = function (n) {
	        this._opts.colorCount = n;
	        return this;
	    };
	    Builder.prototype.maxDimension = function (d) {
	        this._opts.maxDimension = d;
	        return this;
	    };
	    Builder.prototype.addFilter = function (name) {
	        if (!this._opts.filters) {
	            this._opts.filters = [name];
	        }
	        else {
	            this._opts.filters.push(name);
	        }
	        return this;
	    };
	    Builder.prototype.removeFilter = function (name) {
	        if (this._opts.filters) {
	            var i = this._opts.filters.indexOf(name);
	            if (i > 0)
	                this._opts.filters.splice(i);
	        }
	        return this;
	    };
	    Builder.prototype.clearFilters = function () {
	        this._opts.filters = [];
	        return this;
	    };
	    Builder.prototype.quality = function (q) {
	        this._opts.quality = q;
	        return this;
	    };
	    Builder.prototype.useImageClass = function (imageClass) {
	        this._opts.ImageClass = imageClass;
	        return this;
	    };
	    Builder.prototype.useGenerator = function (generator, options) {
	        if (!this._opts.generators)
	            this._opts.generators = [];
	        this._opts.generators.push(options ? { name: generator, options: options } : generator);
	        return this;
	    };
	    Builder.prototype.useQuantizer = function (quantizer, options) {
	        this._opts.quantizer = options ? { name: quantizer, options: options } : quantizer;
	        return this;
	    };
	    Builder.prototype.build = function () {
	        return new _1.default(this._src, this._opts);
	    };
	    Builder.prototype.getPalette = function (cb) {
	        return this.build().getPalette(cb);
	    };
	    Builder.prototype.getSwatches = function (cb) {
	        return this.build().getPalette(cb);
	    };
	    return Builder;
	}());
	exports.default = Builder;


	/***/ }),
	/* 9 */
	/***/ (function(module, exports, __webpack_require__) {

	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var image_1 = __webpack_require__(2);
	function isRelativeUrl(url) {
	    var u = new URL(url, location.href);
	    return u.protocol === location.protocol &&
	        u.host === location.host &&
	        u.port === location.port;
	}
	function isSameOrigin(a, b) {
	    var ua = new URL(a);
	    var ub = new URL(b);
	    // https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy
	    return (ua.protocol === ub.protocol &&
	        ua.hostname === ub.hostname &&
	        ua.port === ub.port);
	}
	var BrowserImage = /** @class */ (function (_super) {
	    __extends(BrowserImage, _super);
	    function BrowserImage() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    BrowserImage.prototype._initCanvas = function () {
	        var img = this.image;
	        var canvas = (this._canvas = document.createElement('canvas'));
	        var context = (canvas.getContext('2d'));
	        if (!context)
	            throw new ReferenceError('Failed to create canvas context');
	        this._context = context;
	        canvas.className = '@vibrant/canvas';
	        canvas.style.display = 'none';
	        this._width = canvas.width = img.width;
	        this._height = canvas.height = img.height;
	        context.drawImage(img, 0, 0);
	        document.body.appendChild(canvas);
	    };
	    BrowserImage.prototype.load = function (image) {
	        var _this = this;
	        var img;
	        var src;
	        if (typeof image === 'string') {
	            img = document.createElement('img');
	            src = image;
	            if (!isRelativeUrl(src) && !isSameOrigin(window.location.href, src)) {
	                img.crossOrigin = 'anonymous';
	            }
	            img.src = src;
	        }
	        else if (image instanceof HTMLImageElement) {
	            img = image;
	            src = image.src;
	        }
	        else {
	            return Promise.reject(new Error("Cannot load buffer as an image in browser"));
	        }
	        this.image = img;
	        return new Promise(function (resolve, reject) {
	            var onImageLoad = function () {
	                _this._initCanvas();
	                resolve(_this);
	            };
	            if (img.complete) {
	                // Already loaded
	                onImageLoad();
	            }
	            else {
	                img.onload = onImageLoad;
	                img.onerror = function (e) { return reject(new Error("Fail to load image: " + src)); };
	            }
	        });
	    };
	    BrowserImage.prototype.clear = function () {
	        this._context.clearRect(0, 0, this._width, this._height);
	    };
	    BrowserImage.prototype.update = function (imageData) {
	        this._context.putImageData(imageData, 0, 0);
	    };
	    BrowserImage.prototype.getWidth = function () {
	        return this._width;
	    };
	    BrowserImage.prototype.getHeight = function () {
	        return this._height;
	    };
	    BrowserImage.prototype.resize = function (targetWidth, targetHeight, ratio) {
	        var _a = this, canvas = _a._canvas, context = _a._context, img = _a.image;
	        this._width = canvas.width = targetWidth;
	        this._height = canvas.height = targetHeight;
	        context.scale(ratio, ratio);
	        context.drawImage(img, 0, 0);
	    };
	    BrowserImage.prototype.getPixelCount = function () {
	        return this._width * this._height;
	    };
	    BrowserImage.prototype.getImageData = function () {
	        return this._context.getImageData(0, 0, this._width, this._height);
	    };
	    BrowserImage.prototype.remove = function () {
	        if (this._canvas && this._canvas.parentNode) {
	            this._canvas.parentNode.removeChild(this._canvas);
	        }
	    };
	    return BrowserImage;
	}(image_1.ImageBase));
	exports.default = BrowserImage;


	/***/ }),
	/* 10 */
	/***/ (function(module, exports, __webpack_require__) {

	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	var Vibrant = __webpack_require__(5);
	var pipeline_1 = __importDefault(__webpack_require__(11));
	Vibrant.use(pipeline_1.default);
	module.exports = Vibrant;


	/***/ }),
	/* 11 */
	/***/ (function(module, exports, __webpack_require__) {

	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var quantizer_mmcq_1 = __importDefault(__webpack_require__(12));
	var generator_default_1 = __importDefault(__webpack_require__(16));
	var pipeline_1 = __webpack_require__(17);
	var pipeline = new pipeline_1.BasicPipeline()
	    .filter.register('default', function (r, g, b, a) {
	    return a >= 125
	        && !(r > 250 && g > 250 && b > 250);
	})
	    .quantizer.register('mmcq', quantizer_mmcq_1.default)
	    .generator.register('default', generator_default_1.default);
	exports.default = pipeline;


	/***/ }),
	/* 12 */
	/***/ (function(module, exports, __webpack_require__) {

	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var color_1 = __webpack_require__(3);
	var vbox_1 = __importDefault(__webpack_require__(13));
	var pqueue_1 = __importDefault(__webpack_require__(15));
	var fractByPopulations = 0.75;
	function _splitBoxes(pq, target) {
	    var lastSize = pq.size();
	    while (pq.size() < target) {
	        var vbox = pq.pop();
	        if (vbox && vbox.count() > 0) {
	            var _a = vbox.split(), vbox1 = _a[0], vbox2 = _a[1];
	            pq.push(vbox1);
	            if (vbox2 && vbox2.count() > 0)
	                pq.push(vbox2);
	            // No more new boxes, converged
	            if (pq.size() === lastSize) {
	                break;
	            }
	            else {
	                lastSize = pq.size();
	            }
	        }
	        else {
	            break;
	        }
	    }
	}
	var MMCQ = function (pixels, opts) {
	    if (pixels.length === 0 || opts.colorCount < 2 || opts.colorCount > 256) {
	        throw new Error('Wrong MMCQ parameters');
	    }
	    var vbox = vbox_1.default.build(pixels);
	    vbox.histogram.colorCount;
	    var pq = new pqueue_1.default(function (a, b) { return a.count() - b.count(); });
	    pq.push(vbox);
	    // first set of colors, sorted by population
	    _splitBoxes(pq, fractByPopulations * opts.colorCount);
	    // Re-order
	    var pq2 = new pqueue_1.default(function (a, b) { return a.count() * a.volume() - b.count() * b.volume(); });
	    pq2.contents = pq.contents;
	    // next set - generate the median cuts using the (npix * vol) sorting.
	    _splitBoxes(pq2, opts.colorCount - pq2.size());
	    // calculate the actual colors
	    return generateSwatches(pq2);
	};
	function generateSwatches(pq) {
	    var swatches = [];
	    while (pq.size()) {
	        var v = pq.pop();
	        var color = v.avg();
	        color[0]; color[1]; color[2];
	        swatches.push(new color_1.Swatch(color, v.count()));
	    }
	    return swatches;
	}
	exports.default = MMCQ;


	/***/ }),
	/* 13 */
	/***/ (function(module, exports, __webpack_require__) {

	var __importDefault = (this && this.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var histogram_1 = __importDefault(__webpack_require__(14));
	var SIGBITS = 5;
	var RSHIFT = 8 - SIGBITS;
	var VBox = /** @class */ (function () {
	    function VBox(r1, r2, g1, g2, b1, b2, histogram) {
	        this.histogram = histogram;
	        this._volume = -1;
	        this._count = -1;
	        // NOTE: dimension will be mutated by split operation.
	        //       It must be specified explicitly, not from histogram
	        this.dimension = { r1: r1, r2: r2, g1: g1, g2: g2, b1: b1, b2: b2 };
	    }
	    VBox.build = function (pixels) {
	        var h = new histogram_1.default(pixels, { sigBits: SIGBITS });
	        var rmin = h.rmin, rmax = h.rmax, gmin = h.gmin, gmax = h.gmax, bmin = h.bmin, bmax = h.bmax;
	        return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, h);
	    };
	    VBox.prototype.invalidate = function () {
	        this._volume = this._count = -1;
	        this._avg = null;
	    };
	    VBox.prototype.volume = function () {
	        if (this._volume < 0) {
	            var _a = this.dimension, r1 = _a.r1, r2 = _a.r2, g1 = _a.g1, g2 = _a.g2, b1 = _a.b1, b2 = _a.b2;
	            this._volume = (r2 - r1 + 1) * (g2 - g1 + 1) * (b2 - b1 + 1);
	        }
	        return this._volume;
	    };
	    VBox.prototype.count = function () {
	        if (this._count < 0) {
	            var _a = this.histogram, hist = _a.hist, getColorIndex = _a.getColorIndex;
	            var _b = this.dimension, r1 = _b.r1, r2 = _b.r2, g1 = _b.g1, g2 = _b.g2, b1 = _b.b1, b2 = _b.b2;
	            var c = 0;
	            for (var r = r1; r <= r2; r++) {
	                for (var g = g1; g <= g2; g++) {
	                    for (var b = b1; b <= b2; b++) {
	                        var index = getColorIndex(r, g, b);
	                        c += hist[index];
	                    }
	                }
	            }
	            this._count = c;
	        }
	        return this._count;
	    };
	    VBox.prototype.clone = function () {
	        var histogram = this.histogram;
	        var _a = this.dimension, r1 = _a.r1, r2 = _a.r2, g1 = _a.g1, g2 = _a.g2, b1 = _a.b1, b2 = _a.b2;
	        return new VBox(r1, r2, g1, g2, b1, b2, histogram);
	    };
	    VBox.prototype.avg = function () {
	        if (!this._avg) {
	            var _a = this.histogram, hist = _a.hist, getColorIndex = _a.getColorIndex;
	            var _b = this.dimension, r1 = _b.r1, r2 = _b.r2, g1 = _b.g1, g2 = _b.g2, b1 = _b.b1, b2 = _b.b2;
	            var ntot = 0;
	            var mult = 1 << (8 - SIGBITS);
	            var rsum = void 0;
	            var gsum = void 0;
	            var bsum = void 0;
	            rsum = gsum = bsum = 0;
	            for (var r = r1; r <= r2; r++) {
	                for (var g = g1; g <= g2; g++) {
	                    for (var b = b1; b <= b2; b++) {
	                        var index = getColorIndex(r, g, b);
	                        var h = hist[index];
	                        ntot += h;
	                        rsum += (h * (r + 0.5) * mult);
	                        gsum += (h * (g + 0.5) * mult);
	                        bsum += (h * (b + 0.5) * mult);
	                    }
	                }
	            }
	            if (ntot) {
	                this._avg = [
	                    ~~(rsum / ntot),
	                    ~~(gsum / ntot),
	                    ~~(bsum / ntot)
	                ];
	            }
	            else {
	                this._avg = [
	                    ~~(mult * (r1 + r2 + 1) / 2),
	                    ~~(mult * (g1 + g2 + 1) / 2),
	                    ~~(mult * (b1 + b2 + 1) / 2)
	                ];
	            }
	        }
	        return this._avg;
	    };
	    VBox.prototype.contains = function (rgb) {
	        var r = rgb[0], g = rgb[1], b = rgb[2];
	        var _a = this.dimension, r1 = _a.r1, r2 = _a.r2, g1 = _a.g1, g2 = _a.g2, b1 = _a.b1, b2 = _a.b2;
	        r >>= RSHIFT;
	        g >>= RSHIFT;
	        b >>= RSHIFT;
	        return r >= r1 && r <= r2
	            && g >= g1 && g <= g2
	            && b >= b1 && b <= b2;
	    };
	    VBox.prototype.split = function () {
	        var _a = this.histogram, hist = _a.hist, getColorIndex = _a.getColorIndex;
	        var _b = this.dimension, r1 = _b.r1, r2 = _b.r2, g1 = _b.g1, g2 = _b.g2, b1 = _b.b1, b2 = _b.b2;
	        var count = this.count();
	        if (!count)
	            return [];
	        if (count === 1)
	            return [this.clone()];
	        var rw = r2 - r1 + 1;
	        var gw = g2 - g1 + 1;
	        var bw = b2 - b1 + 1;
	        var maxw = Math.max(rw, gw, bw);
	        var accSum = null;
	        var sum;
	        var total;
	        sum = total = 0;
	        var maxd = null;
	        if (maxw === rw) {
	            maxd = 'r';
	            accSum = new Uint32Array(r2 + 1);
	            for (var r = r1; r <= r2; r++) {
	                sum = 0;
	                for (var g = g1; g <= g2; g++) {
	                    for (var b = b1; b <= b2; b++) {
	                        var index = getColorIndex(r, g, b);
	                        sum += hist[index];
	                    }
	                }
	                total += sum;
	                accSum[r] = total;
	            }
	        }
	        else if (maxw === gw) {
	            maxd = 'g';
	            accSum = new Uint32Array(g2 + 1);
	            for (var g = g1; g <= g2; g++) {
	                sum = 0;
	                for (var r = r1; r <= r2; r++) {
	                    for (var b = b1; b <= b2; b++) {
	                        var index = getColorIndex(r, g, b);
	                        sum += hist[index];
	                    }
	                }
	                total += sum;
	                accSum[g] = total;
	            }
	        }
	        else {
	            maxd = 'b';
	            accSum = new Uint32Array(b2 + 1);
	            for (var b = b1; b <= b2; b++) {
	                sum = 0;
	                for (var r = r1; r <= r2; r++) {
	                    for (var g = g1; g <= g2; g++) {
	                        var index = getColorIndex(r, g, b);
	                        sum += hist[index];
	                    }
	                }
	                total += sum;
	                accSum[b] = total;
	            }
	        }
	        var splitPoint = -1;
	        var reverseSum = new Uint32Array(accSum.length);
	        for (var i = 0; i < accSum.length; i++) {
	            var d = accSum[i];
	            if (splitPoint < 0 && d > total / 2)
	                splitPoint = i;
	            reverseSum[i] = total - d;
	        }
	        var vbox = this;
	        function doCut(d) {
	            var dim1 = d + '1';
	            var dim2 = d + '2';
	            var d1 = vbox.dimension[dim1];
	            var d2 = vbox.dimension[dim2];
	            var vbox1 = vbox.clone();
	            var vbox2 = vbox.clone();
	            var left = splitPoint - d1;
	            var right = d2 - splitPoint;
	            if (left <= right) {
	                d2 = Math.min(d2 - 1, ~~(splitPoint + right / 2));
	                d2 = Math.max(0, d2);
	            }
	            else {
	                d2 = Math.max(d1, ~~(splitPoint - 1 - left / 2));
	                d2 = Math.min(vbox.dimension[dim2], d2);
	            }
	            while (!accSum[d2])
	                d2++;
	            var c2 = reverseSum[d2];
	            while (!c2 && accSum[d2 - 1])
	                c2 = reverseSum[--d2];
	            vbox1.dimension[dim2] = d2;
	            vbox2.dimension[dim1] = d2 + 1;
	            return [vbox1, vbox2];
	        }
	        return doCut(maxd);
	    };
	    return VBox;
	}());
	exports.default = VBox;


	/***/ }),
	/* 14 */
	/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", { value: true });
	var Histogram = /** @class */ (function () {
	    function Histogram(pixels, opts) {
	        this.pixels = pixels;
	        this.opts = opts;
	        var sigBits = opts.sigBits;
	        var getColorIndex = function (r, g, b) {
	            return (r << (2 * sigBits)) + (g << sigBits) + b;
	        };
	        this.getColorIndex = getColorIndex;
	        var rshift = 8 - sigBits;
	        var hn = 1 << (3 * sigBits);
	        var hist = new Uint32Array(hn);
	        var rmax;
	        var rmin;
	        var gmax;
	        var gmin;
	        var bmax;
	        var bmin;
	        var r;
	        var g;
	        var b;
	        var a;
	        rmax = gmax = bmax = 0;
	        rmin = gmin = bmin = Number.MAX_VALUE;
	        var n = pixels.length / 4;
	        var i = 0;
	        while (i < n) {
	            var offset = i * 4;
	            i++;
	            r = pixels[offset + 0];
	            g = pixels[offset + 1];
	            b = pixels[offset + 2];
	            a = pixels[offset + 3];
	            // Ignored pixels' alpha is marked as 0 in filtering stage
	            if (a === 0)
	                continue;
	            r = r >> rshift;
	            g = g >> rshift;
	            b = b >> rshift;
	            var index = getColorIndex(r, g, b);
	            hist[index] += 1;
	            if (r > rmax)
	                rmax = r;
	            if (r < rmin)
	                rmin = r;
	            if (g > gmax)
	                gmax = g;
	            if (g < gmin)
	                gmin = g;
	            if (b > bmax)
	                bmax = b;
	            if (b < bmin)
	                bmin = b;
	        }
	        this._colorCount = hist.reduce(function (total, c) { return c > 0 ? total + 1 : total; }, 0);
	        this.hist = hist;
	        this.rmax = rmax;
	        this.rmin = rmin;
	        this.gmax = gmax;
	        this.gmin = gmin;
	        this.bmax = bmax;
	        this.bmin = bmin;
	    }
	    Object.defineProperty(Histogram.prototype, "colorCount", {
	        get: function () { return this._colorCount; },
	        enumerable: false,
	        configurable: true
	    });
	    return Histogram;
	}());
	exports.default = Histogram;


	/***/ }),
	/* 15 */
	/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", { value: true });
	var PQueue = /** @class */ (function () {
	    function PQueue(comparator) {
	        this._comparator = comparator;
	        this.contents = [];
	        this._sorted = false;
	    }
	    PQueue.prototype._sort = function () {
	        if (!this._sorted) {
	            this.contents.sort(this._comparator);
	            this._sorted = true;
	        }
	    };
	    PQueue.prototype.push = function (item) {
	        this.contents.push(item);
	        this._sorted = false;
	    };
	    PQueue.prototype.peek = function (index) {
	        this._sort();
	        index = typeof index === 'number' ? index : this.contents.length - 1;
	        return this.contents[index];
	    };
	    PQueue.prototype.pop = function () {
	        this._sort();
	        return this.contents.pop();
	    };
	    PQueue.prototype.size = function () {
	        return this.contents.length;
	    };
	    PQueue.prototype.map = function (mapper) {
	        this._sort();
	        return this.contents.map(mapper);
	    };
	    return PQueue;
	}());
	exports.default = PQueue;


	/***/ }),
	/* 16 */
	/***/ (function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", { value: true });
	var color_1 = __webpack_require__(3);
	var converter_1 = __webpack_require__(4);
	var DefaultOpts = {
	    targetDarkLuma: 0.26,
	    maxDarkLuma: 0.45,
	    minLightLuma: 0.55,
	    targetLightLuma: 0.74,
	    minNormalLuma: 0.3,
	    targetNormalLuma: 0.5,
	    maxNormalLuma: 0.7,
	    targetMutesSaturation: 0.3,
	    maxMutesSaturation: 0.4,
	    targetVibrantSaturation: 1.0,
	    minVibrantSaturation: 0.35,
	    weightSaturation: 3,
	    weightLuma: 6.5,
	    weightPopulation: 0.5
	};
	function _findMaxPopulation(swatches) {
	    var p = 0;
	    swatches.forEach(function (s) {
	        p = Math.max(p, s.population);
	    });
	    return p;
	}
	function _isAlreadySelected(palette, s) {
	    return palette.Vibrant === s
	        || palette.DarkVibrant === s
	        || palette.LightVibrant === s
	        || palette.Muted === s
	        || palette.DarkMuted === s
	        || palette.LightMuted === s;
	}
	function _createComparisonValue(saturation, targetSaturation, luma, targetLuma, population, maxPopulation, opts) {
	    function weightedMean() {
	        var values = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            values[_i] = arguments[_i];
	        }
	        var sum = 0;
	        var weightSum = 0;
	        for (var i = 0; i < values.length; i += 2) {
	            var value = values[i];
	            var weight = values[i + 1];
	            sum += value * weight;
	            weightSum += weight;
	        }
	        return sum / weightSum;
	    }
	    function invertDiff(value, targetValue) {
	        return 1 - Math.abs(value - targetValue);
	    }
	    return weightedMean(invertDiff(saturation, targetSaturation), opts.weightSaturation, invertDiff(luma, targetLuma), opts.weightLuma, population / maxPopulation, opts.weightPopulation);
	}
	function _findColorVariation(palette, swatches, maxPopulation, targetLuma, minLuma, maxLuma, targetSaturation, minSaturation, maxSaturation, opts) {
	    var max = null;
	    var maxValue = 0;
	    swatches.forEach(function (swatch) {
	        var _a = swatch.hsl, s = _a[1], l = _a[2];
	        if (s >= minSaturation && s <= maxSaturation
	            && l >= minLuma && l <= maxLuma
	            && !_isAlreadySelected(palette, swatch)) {
	            var value = _createComparisonValue(s, targetSaturation, l, targetLuma, swatch.population, maxPopulation, opts);
	            if (max === null || value > maxValue) {
	                max = swatch;
	                maxValue = value;
	            }
	        }
	    });
	    return max;
	}
	function _generateVariationColors(swatches, maxPopulation, opts) {
	    var palette = {
	        Vibrant: null,
	        DarkVibrant: null,
	        LightVibrant: null,
	        Muted: null,
	        DarkMuted: null,
	        LightMuted: null
	    };
	    // mVibrantSwatch = findColor(TARGET_NORMAL_LUMA, MIN_NORMAL_LUMA, MAX_NORMAL_LUMA,
	    //     TARGET_VIBRANT_SATURATION, MIN_VIBRANT_SATURATION, 1f)
	    palette.Vibrant = _findColorVariation(palette, swatches, maxPopulation, opts.targetNormalLuma, opts.minNormalLuma, opts.maxNormalLuma, opts.targetVibrantSaturation, opts.minVibrantSaturation, 1, opts);
	    // mLightVibrantSwatch = findColor(TARGET_LIGHT_LUMA, MIN_LIGHT_LUMA, 1f,
	    //     TARGET_VIBRANT_SATURATION, MIN_VIBRANT_SATURATION, 1f)
	    palette.LightVibrant = _findColorVariation(palette, swatches, maxPopulation, opts.targetLightLuma, opts.minLightLuma, 1, opts.targetVibrantSaturation, opts.minVibrantSaturation, 1, opts);
	    // mDarkVibrantSwatch = findColor(TARGET_DARK_LUMA, 0f, MAX_DARK_LUMA,
	    //     TARGET_VIBRANT_SATURATION, MIN_VIBRANT_SATURATION, 1f)
	    palette.DarkVibrant = _findColorVariation(palette, swatches, maxPopulation, opts.targetDarkLuma, 0, opts.maxDarkLuma, opts.targetVibrantSaturation, opts.minVibrantSaturation, 1, opts);
	    // mMutedSwatch = findColor(TARGET_NORMAL_LUMA, MIN_NORMAL_LUMA, MAX_NORMAL_LUMA,
	    //     TARGET_MUTED_SATURATION, 0f, MAX_MUTED_SATURATION)
	    palette.Muted = _findColorVariation(palette, swatches, maxPopulation, opts.targetNormalLuma, opts.minNormalLuma, opts.maxNormalLuma, opts.targetMutesSaturation, 0, opts.maxMutesSaturation, opts);
	    // mLightMutedColor = findColor(TARGET_LIGHT_LUMA, MIN_LIGHT_LUMA, 1f,
	    //     TARGET_MUTED_SATURATION, 0f, MAX_MUTED_SATURATION)
	    palette.LightMuted = _findColorVariation(palette, swatches, maxPopulation, opts.targetLightLuma, opts.minLightLuma, 1, opts.targetMutesSaturation, 0, opts.maxMutesSaturation, opts);
	    // mDarkMutedSwatch = findColor(TARGET_DARK_LUMA, 0f, MAX_DARK_LUMA,
	    //     TARGET_MUTED_SATURATION, 0f, MAX_MUTED_SATURATION)
	    palette.DarkMuted = _findColorVariation(palette, swatches, maxPopulation, opts.targetDarkLuma, 0, opts.maxDarkLuma, opts.targetMutesSaturation, 0, opts.maxMutesSaturation, opts);
	    return palette;
	}
	function _generateEmptySwatches(palette, maxPopulation, opts) {
	    if (!palette.Vibrant && !palette.DarkVibrant && !palette.LightVibrant) {
	        if (!palette.DarkVibrant && palette.DarkMuted) {
	            var _a = palette.DarkMuted.hsl, h = _a[0], s = _a[1], l = _a[2];
	            l = opts.targetDarkLuma;
	            palette.DarkVibrant = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
	        }
	        if (!palette.LightVibrant && palette.LightMuted) {
	            var _b = palette.LightMuted.hsl, h = _b[0], s = _b[1], l = _b[2];
	            l = opts.targetDarkLuma;
	            palette.DarkVibrant = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
	        }
	    }
	    if (!palette.Vibrant && palette.DarkVibrant) {
	        var _c = palette.DarkVibrant.hsl, h = _c[0], s = _c[1], l = _c[2];
	        l = opts.targetNormalLuma;
	        palette.Vibrant = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
	    }
	    else if (!palette.Vibrant && palette.LightVibrant) {
	        var _d = palette.LightVibrant.hsl, h = _d[0], s = _d[1], l = _d[2];
	        l = opts.targetNormalLuma;
	        palette.Vibrant = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
	    }
	    if (!palette.DarkVibrant && palette.Vibrant) {
	        var _e = palette.Vibrant.hsl, h = _e[0], s = _e[1], l = _e[2];
	        l = opts.targetDarkLuma;
	        palette.DarkVibrant = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
	    }
	    if (!palette.LightVibrant && palette.Vibrant) {
	        var _f = palette.Vibrant.hsl, h = _f[0], s = _f[1], l = _f[2];
	        l = opts.targetLightLuma;
	        palette.LightVibrant = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
	    }
	    if (!palette.Muted && palette.Vibrant) {
	        var _g = palette.Vibrant.hsl, h = _g[0], s = _g[1], l = _g[2];
	        l = opts.targetMutesSaturation;
	        palette.Muted = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
	    }
	    if (!palette.DarkMuted && palette.DarkVibrant) {
	        var _h = palette.DarkVibrant.hsl, h = _h[0], s = _h[1], l = _h[2];
	        l = opts.targetMutesSaturation;
	        palette.DarkMuted = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
	    }
	    if (!palette.LightMuted && palette.LightVibrant) {
	        var _j = palette.LightVibrant.hsl, h = _j[0], s = _j[1], l = _j[2];
	        l = opts.targetMutesSaturation;
	        palette.LightMuted = new color_1.Swatch(converter_1.hslToRgb(h, s, l), 0);
	    }
	}
	var DefaultGenerator = function (swatches, opts) {
	    opts = Object.assign({}, DefaultOpts, opts);
	    var maxPopulation = _findMaxPopulation(swatches);
	    var palette = _generateVariationColors(swatches, maxPopulation, opts);
	    _generateEmptySwatches(palette, maxPopulation, opts);
	    return palette;
	};
	exports.default = DefaultGenerator;


	/***/ }),
	/* 17 */
	/***/ (function(module, exports, __webpack_require__) {

	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BasicPipeline = exports.Stage = void 0;
	var image_1 = __webpack_require__(2);
	var Stage = /** @class */ (function () {
	    function Stage(pipeline) {
	        this.pipeline = pipeline;
	        this._map = {};
	    }
	    Stage.prototype.names = function () {
	        return Object.keys(this._map);
	    };
	    Stage.prototype.has = function (name) {
	        return !!this._map[name];
	    };
	    Stage.prototype.get = function (name) {
	        return this._map[name];
	    };
	    Stage.prototype.register = function (name, stageFn) {
	        this._map[name] = stageFn;
	        return this.pipeline;
	    };
	    return Stage;
	}());
	exports.Stage = Stage;
	var BasicPipeline = /** @class */ (function () {
	    function BasicPipeline() {
	        this.filter = new Stage(this);
	        this.quantizer = new Stage(this);
	        this.generator = new Stage(this);
	    }
	    BasicPipeline.prototype._buildProcessTasks = function (_a) {
	        var _this = this;
	        var filters = _a.filters, quantizer = _a.quantizer, generators = _a.generators;
	        // Support wildcard for generators
	        if (generators.length === 1 && generators[0] === '*') {
	            generators = this.generator.names();
	        }
	        return {
	            filters: filters.map(function (f) { return createTask(_this.filter, f); }),
	            quantizer: createTask(this.quantizer, quantizer),
	            generators: generators.map(function (g) { return createTask(_this.generator, g); })
	        };
	        function createTask(stage, o) {
	            var name;
	            var options;
	            if (typeof o === 'string') {
	                name = o;
	            }
	            else {
	                name = o.name;
	                options = o.options;
	            }
	            return {
	                name: name,
	                fn: stage.get(name),
	                options: options
	            };
	        }
	    };
	    BasicPipeline.prototype.process = function (imageData, opts) {
	        return __awaiter(this, void 0, void 0, function () {
	            var _a, filters, quantizer, generators, imageFilterData, colors, palettes;
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        _a = this._buildProcessTasks(opts), filters = _a.filters, quantizer = _a.quantizer, generators = _a.generators;
	                        return [4 /*yield*/, this._filterColors(filters, imageData)];
	                    case 1:
	                        imageFilterData = _b.sent();
	                        return [4 /*yield*/, this._generateColors(quantizer, imageFilterData)];
	                    case 2:
	                        colors = _b.sent();
	                        return [4 /*yield*/, this._generatePalettes(generators, colors)];
	                    case 3:
	                        palettes = _b.sent();
	                        return [2 /*return*/, {
	                                colors: colors,
	                                palettes: palettes
	                            }];
	                }
	            });
	        });
	    };
	    BasicPipeline.prototype._filterColors = function (filters, imageData) {
	        return Promise.resolve(image_1.applyFilters(imageData, filters.map(function (_a) {
	            var fn = _a.fn;
	            return fn;
	        })));
	    };
	    BasicPipeline.prototype._generateColors = function (quantizer, imageData) {
	        return Promise.resolve(quantizer.fn(imageData.data, quantizer.options));
	    };
	    BasicPipeline.prototype._generatePalettes = function (generators, colors) {
	        return __awaiter(this, void 0, void 0, function () {
	            var promiseArr;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, Promise.all(generators.map(function (_a) {
	                            var fn = _a.fn, options = _a.options;
	                            return Promise.resolve(fn(colors, options));
	                        }))
	                        // Map the values to the expected name
	                    ];
	                    case 1:
	                        promiseArr = _a.sent();
	                        // Map the values to the expected name
	                        return [2 /*return*/, Promise.resolve(promiseArr.reduce(function (promises, promiseVal, i) {
	                                promises[generators[i].name] = promiseVal;
	                                return promises;
	                            }, {}))];
	                }
	            });
	        });
	    };
	    return BasicPipeline;
	}());
	exports.BasicPipeline = BasicPipeline;


	/***/ })
	/******/ ]);
	});
	
} (vibrant, vibrant.exports));

var vibrantExports = vibrant.exports;
var Vibrant = /*@__PURE__*/getDefaultExportFromCjs(vibrantExports);

const CONTRAST_RATIO = 4.5;
const COLOR_SIMILARITY_THRESHOLD = 150;
const rgbToHex = (r, g, b) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1, 7);
};
const hslToRgb = (h, s, l) => {
    let r;
    let g;
    let b;
    function hue2rgb(p, q, t) {
        if (t < 0)
            t += 1;
        if (t > 1)
            t -= 1;
        if (t < 1 / 6)
            return p + (q - p) * 6 * t;
        if (t < 1 / 2)
            return q;
        if (t < 2 / 3)
            return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }
    if (s === 0) {
        r = g = b = l;
    }
    else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return [r * 255, g * 255, b * 255];
};
const luminance = (r, g, b) => {
    const a = [r, g, b].map(v => {
        let w = v;
        w /= 255;
        return w <= 0.03928 ? w / 12.92 : ((w + 0.055) / 1.055) ** 2.4;
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};
const contrast = (rgb1, rgb2) => {
    const lum1 = luminance(...rgb1);
    const lum2 = luminance(...rgb2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
};
const getContrastRatio = (rgb1, rgb2) => Math.round((contrast(rgb1, rgb2) + Number.EPSILON) * 100) / 100;
const colorGenerator = (colors) => {
    colors.sort((colorA, colorB) => colorB.getPopulation() - colorA.getPopulation());
    const backgroundColor = colors[0];
    let foregroundColor;
    const contrastRatios = new Map();
    const approvedContrastRatio = (hex, rgb) => {
        if (!contrastRatios.has(hex)) {
            contrastRatios.set(hex, getContrastRatio(backgroundColor.getRgb(), rgb));
        }
        return contrastRatios.get(hex) > CONTRAST_RATIO;
    };
    // We take each next color and find one that has better contrast.
    for (let i = 1; i < colors.length && foregroundColor === undefined; i++) {
        // If this color matches, score, take it.
        if (approvedContrastRatio(colors[i].getHex(), colors[i].getRgb())) {
            foregroundColor = colors[i].getRgb();
            break;
        }
        // This color has the wrong contrast ratio, but it is the right color.
        // Let's find similar colors that might have the right contrast ratio
        const currentColor = colors[i];
        for (let j = i + 1; j < colors.length; j++) {
            const compareColor = colors[j];
            // difference. 0 is same, 765 max difference
            const diffScore = Math.abs(currentColor.getRgb()[0] - compareColor.getRgb()[0]) +
                Math.abs(currentColor.getRgb()[1] - compareColor.getRgb()[1]) +
                Math.abs(currentColor.getRgb()[2] - compareColor.getRgb()[2]);
            if (diffScore > COLOR_SIMILARITY_THRESHOLD) {
                continue;
            }
            if (approvedContrastRatio(compareColor.getHex(), compareColor.getRgb())) {
                foregroundColor = compareColor.getRgb();
                break;
            }
        }
    }
    if (foregroundColor === undefined) {
        foregroundColor = backgroundColor.getYiq() < 200 ? [255, 255, 255] : [0, 0, 0];
    }
    foregroundColor = new backgroundColor.constructor(foregroundColor, 0);
    const [bgHueTurn, bgSaturation, bgLightness] = backgroundColor.getHsl();
    const bgHueDeg = 360 * bgHueTurn;
    const amount = bgHueDeg > 240 ? bgHueDeg - 240 : bgHueDeg > 120 ? bgHueDeg - 120 : bgHueDeg;
    const ratio = Math.abs(60 - amount) / 60;
    const threshold = 0.4 * ratio + 0.4;
    // console.debug('Background color');
    // console.debug('hue (turn):', bgHueTurn);
    // console.debug('hue (deg):', bgHueDeg);
    // console.debug('lightness', bgLightness);
    // console.debug('saturation', bgSaturation);
    // console.debug('threshold', threshold);
    // eslint-disable-next-line prettier/prettier
    return [
        foregroundColor.getHex(),
        backgroundColor.getHex(),
        rgbToHex(...hslToRgb(bgHueTurn, bgSaturation, bgLightness > threshold ? 0 : 1)),
        rgbToHex(...hslToRgb(bgHueTurn, bgSaturation, bgLightness > threshold ? 0.1 : 0.9)),
    ];
};
Vibrant._pipeline.generator.register('default', colorGenerator);
const extractColors = async (picture) => new Vibrant(picture, { colorCount: 16 }).getPalette();

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
const debounce = (func, wait, immediate = false) => {
    let timeout;
    const debouncedFunc = (...args) => {
        const later = () => {
            timeout = undefined;
            if (!immediate) {
                func(...args);
            }
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = window.setTimeout(later, wait);
        if (callNow) {
            func(...args);
        }
    };
    debouncedFunc.cancel = () => {
        clearTimeout(timeout);
    };
    return debouncedFunc;
};

function hexToRgba(hex, alfa = 1) {
    const parsed = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!parsed) {
        return undefined;
    }
    const [, r, g, b] = parsed;
    return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${alfa})`;
}

const NARROW_WIDTH = 400;
class YmpBackground extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Card height ('ha-card'.offsetHeight)
         * @private
         */
        this._cardHeight = 0;
        this._fallbackImage = '/yandex-media-player/no-image.png';
    }
    willUpdate(changedProps) {
        super.willUpdate(changedProps);
        if (!this.hasUpdated) {
            this._computeCardSize();
        }
        if (changedProps.has('image')) {
            this._computeColors();
        }
    }
    firstUpdated(_) {
        this._attachObserver();
    }
    updated(changedProps) {
        if (changedProps.has('image') ||
            changedProps.has('editMode') ||
            changedProps.has('color') ||
            changedProps.has('_cardHeight') ||
            changedProps.has('_backgroundColor') ||
            changedProps.has('_foregroundColor') ||
            changedProps.has('_textPrimaryColor') ||
            changedProps.has('_textSecondaryColor') ||
            changedProps.has('_isNarrow')) {
            this._updateCssVars();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this._updateCssVars();
        this.updateComplete.then(() => this._attachObserver());
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._resizeObserver) {
            this._resizeObserver.disconnect();
        }
    }
    render() {
        return html `
      <div class="fill"></div>
      <div class="image"></div>
      <div class="gradient"></div>
    `;
    }
    _computeCardSize() {
        const card = this.shadowRoot.querySelector('.fill');
        if (!card) {
            return;
        }
        this._cardHeight = card.offsetHeight;
        this._isNarrow = card.offsetWidth < NARROW_WIDTH;
    }
    _updateCssVars() {
        var _a, _b, _c, _d, _e;
        const parent = this.parentNode;
        if (!parent) {
            return;
        }
        const backgroundColor = (_a = this._backgroundColor) !== null && _a !== void 0 ? _a : 'var(--ha-card-background, var(--card-background-color, #fff))';
        const backgroundAlfaColor = this._foregroundColor ? hexToRgba(this._foregroundColor, 0.3) : 'rgba(194, 194, 194, .3)';
        const foregroundColor = (_b = this._foregroundColor) !== null && _b !== void 0 ? _b : 'var(--primary-text-color)';
        const textPrimaryColor = (_c = this._textPrimaryColor) !== null && _c !== void 0 ? _c : 'var(--primary-text-color)';
        const textSecondaryColor = (_d = this._textSecondaryColor) !== null && _d !== void 0 ? _d : 'var(--primary-text-color)';
        const interfaceColor = this.color === 'accent' ? 'var(--accent-color)' : 'var(--primary-color)';
        parent.style.setProperty('--ymp-media-image', `url(${(_e = this.image) !== null && _e !== void 0 ? _e : this._fallbackImage})`);
        parent.style.setProperty('--ymp-media-image-width', `${this._cardHeight || 0}px`);
        parent.style.setProperty('--ymp-media-horizontal-gradient', `linear-gradient(to right, ${backgroundColor}, transparent)`);
        parent.style.setProperty('--ymp-media-vertical-gradient', `linear-gradient(to top, ${backgroundColor} 0%, ${backgroundColor} 15%, transparent 100%)`);
        parent.style.setProperty('--ymp-interface-color', interfaceColor);
        parent.style.setProperty('--ymp-disabled-color', `#6e6e6e`);
        parent.style.setProperty('--ymp-background-color', `${backgroundColor}`);
        parent.style.setProperty('--ymp-background-alfa-color', `${backgroundAlfaColor}`);
        parent.style.setProperty('--ymp-foreground-color', `${foregroundColor}`);
        parent.style.setProperty('--ymp-text-primary', `${textPrimaryColor}`);
        parent.style.setProperty('--ymp-text-secondary', `${textSecondaryColor}`);
    }
    async _computeColors() {
        if (!this.image) {
            return;
        }
        try {
            const [foregroundColor, backgroundColor, textPrimaryColor, textSecondaryColor] = await extractColors(this.image);
            this._backgroundColor = backgroundColor;
            this._foregroundColor = foregroundColor;
            this._textPrimaryColor = textPrimaryColor;
            this._textSecondaryColor = textSecondaryColor;
        }
        catch (err) {
            console.error('Error getting Image Colors', err);
            this._backgroundColor = undefined;
            this._foregroundColor = undefined;
            this._textPrimaryColor = undefined;
            this._textSecondaryColor = undefined;
        }
        this._updateCssVars();
    }
    async _attachObserver() {
        if (!this._resizeObserver) {
            this._resizeObserver = new ResizeObserver(debounce(() => this._computeCardSize(), 250, false));
        }
        const card = this.shadowRoot.querySelector('.fill');
        if (!card) {
            return;
        }
        this._resizeObserver.observe(card);
    }
}
YmpBackground.styles = styles$8;
YmpBackground.properties = {
    image: { attribute: true, type: String },
    editMode: { attribute: true, type: Boolean },
    color: { attribute: true, type: String },
    _backgroundColor: { state: true, type: String },
    _foregroundColor: { state: true, type: String },
    _textPrimaryColor: { state: true, type: String },
    _textSecondaryColor: { state: true, type: String },
    _isNarrow: { state: true, type: Boolean },
    _cardHeight: { state: true, type: Number },
};
window.customElements.define('ymp-background', YmpBackground);

var styles$7 = css`:host {
  height: 40px;
  background-image: var(--ymp-media-vertical-gradient);
  display: block;
  position: relative;
  z-index: 5;
}
:host .durations {
  top: 10px;
  left: 0;
  right: 0;
  height: 20px;
  padding: 0 8px;
  display: flex;
  font-size: 10px;
  color: var(--ymp-text-primary);
  opacity: 1;
  transition: opacity 0.2s ease-out;
  align-items: center;
  justify-content: space-between;
  position: absolute;
}
:host .durations .pale {
  opacity: 0.75;
}
:host .progress-bar {
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  cursor: pointer;
  transition: height 0.2s ease-out 0s;
  position: absolute;
}
:host .progress-bar .bar {
  height: 100%;
  width: 0;
  background-color: var(--ymp-interface-color);
  transition: width 0.2s ease-out, background-color 0.2s ease-out;
  position: relative;
  z-index: 2;
}
:host .progress-bar .bar-background {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--ymp-background-alfa-color);
  position: absolute;
}

:host(:hover) .progress-bar {
  height: 10px;
}

:host([disabled]) {
  pointer-events: none;
}
:host([disabled]) .durations {
  opacity: 0;
}
:host([disabled]) .progress-bar {
  height: 4px;
}
:host([disabled]) .progress-bar .bar {
  background-color: var(--ymp-disabled-color);
}
:host([disabled]) .progress-bar .bar-background {
  background-color: var(--ymp-disabled-color);
}`;

const getProgress = (duration) => {
    if (duration === undefined) {
        return '';
    }
    let seconds = Math.abs(parseInt(`${duration % 60}`, 10));
    let minutes = Math.abs(parseInt(`${(duration / 60) % 60}`, 10));
    let hours = Math.abs(parseInt(`${(duration / (60 * 60)) % 24}`, 10));
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${hours !== '00' ? `${hours}:` : ''}${minutes}:${seconds}`;
};

class YmpProgress extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Media current position in seconds
         */
        this._position = 0;
        /**
         * Inner position state
         */
        this._innerPosition = 0;
        /**
         * Lock position update
         */
        this._lock = false;
    }
    willUpdate(changedProps) {
        super.willUpdate(changedProps);
        if (changedProps.has('_position')) {
            const unlockPositions = [this._innerPosition, this._innerPosition - 1, this._innerPosition + 1];
            if (this._lock && unlockPositions.includes(this._position)) {
                this._lock = false;
            }
            else if (!this._lock && this._position !== this._innerPosition) {
                this._innerPosition = this._position;
            }
        }
    }
    render() {
        return html `
      <div class="durations">
        <div class="duration">${this._positionTime()}</div>
        <div class="duration">${this._remainedTime()} ${this._durationTime()}</div>
      </div>
      <div class="progress-bar" @click="${this._handleSeek}">
        <div class="bar" .style="${`width: ${this._barWidthPercent()}%`}"></div>
        <div class="bar-background"></div>
      </div>
    `;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value ? Math.floor(value) : 0;
    }
    _barWidthPercent() {
        if (this._innerPosition === undefined || this.duration === undefined) {
            return undefined;
        }
        return Math.round((this._innerPosition / this.duration) * 10000) / 100;
    }
    _positionTime() {
        return this._innerPosition === undefined ? html `` : html `<span>${getProgress(this._innerPosition)}</span>`;
    }
    _durationTime() {
        return this.duration === undefined ? html `` : html `<span>${getProgress(this.duration)}</span>`;
    }
    _remainedTime() {
        if (this._innerPosition === undefined || this.duration === undefined) {
            return html ``;
        }
        const remained = this._innerPosition - this.duration;
        return html `
      <span class="pale">-${getProgress(remained)}</span>
      <span class="pale">&nbsp;|&nbsp;</span>
    `;
    }
    _handleSeek(event) {
        event.stopPropagation();
        if (this.duration === undefined || !this.clientWidth) {
            return;
        }
        const progress = event.offsetX / this.clientWidth;
        this._lock = true;
        this._innerPosition = Math.floor(this.duration * progress);
        const options = {
            detail: { seek: this._innerPosition },
            bubbles: true,
            composed: true,
        };
        this.dispatchEvent(new CustomEvent('seek', options));
    }
}
YmpProgress.styles = styles$7;
YmpProgress.properties = {
    duration: { attribute: true, type: Number },
    position: { attribute: 'position', type: Number },
    disabled: { attribute: 'disabled', reflect: true, type: Boolean },
    _position: { state: true, type: Number },
    _innerPosition: { state: true, type: Number },
    _lock: { state: true, type: Boolean },
};
window.customElements.define('ymp-progress', YmpProgress);

var styles$6 = css`:host {
  --paper-slider-max-width: 200px;
  --paper-slider-height: 4px;
  --calculated-paper-slider-height: 2px;
  --paper-slider-knob-color: var(--ymp-interface-color);
  --paper-slider-active-color: var(--ymp-interface-color);
  --paper-slider-pin-color: var(--ymp-interface-color);
  --paper-slider-secondary-color: var(--ymp-text-primary);
  --paper-slider-disabled-knob-color: var(--ymp-text-primary);
  --paper-progress-container-color: var(--ymp-background-alfa-color);
  --paper-slider-container-color: var(--ymp-background-alfa-color);
  width: 100%;
  max-width: calc(var(--mdc-icon-button-size) + var(--paper-slider-max-width));
  display: flex;
  align-items: center;
}
:host .mute {
  width: var(--mdc-icon-button-size);
  min-width: var(--mdc-icon-button-size);
  height: var(--mdc-icon-button-size);
}
:host .volume {
  width: calc(100% - var(--mdc-icon-button-size));
  padding: 0 calc(15px + var(--calculated-paper-slider-height) / 2);
}
:host .volume .slider-wrap {
  left: calc(-15px - var(--calculated-paper-slider-height) / 2);
  position: relative;
}`;

class YmpVolumeControls extends LitElement {
    willUpdate(changedProps) {
        super.willUpdate(changedProps);
        if (changedProps.has('volume')) {
            const oldVolume = this._volumePercent === undefined ? undefined : Math.floor(this._volumePercent / 10) / 10;
            if (this.volume !== oldVolume) {
                this._volumePercent = this.volume === undefined ? undefined : Math.floor(this.volume * 100);
            }
        }
        if (changedProps.has('muted') && this.muted !== this._muted) {
            this._muted = this.muted;
        }
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this._updateSliderStyles();
    }
    render() {
        const disabled = this.disabled || this._muted === undefined || this._volumePercent === undefined;
        const muted = this._muted === undefined || this._volumePercent === undefined || this._muted;
        return html `
      <div class="mute">
        <ymp-button .icon="${muted ? 'yandex:volume-off' : 'yandex:volume-on'}" .disabled="${disabled}" @click="${this._handleMuteChange}"></ymp-button>
      </div>
      <div class="volume">
        <div class="slider-wrap">
          <ha-slider
            .disabled="${disabled || this._muted === true}"
            step="1"
            min="0"
            max="100"
            .value="${this._volumePercent}"
            .expand="${false}"
            @change=${this._handleVolumeChange}
          ></ha-slider>
        </div>
      </div>
    `;
    }
    /**
     * Reformat volume value and dispatch event
     * @param event
     * @private
     */
    _handleVolumeChange(event) {
        var _a;
        this._volumePercent = Math.floor(Number((_a = event.target) === null || _a === void 0 ? void 0 : _a['value']) || 0);
        const volume = Math.floor(this._volumePercent / 10) / 10;
        if (isNaN(volume)) {
            return;
        }
        const options = {
            detail: { volume },
            bubbles: true,
            composed: true,
        };
        this.dispatchEvent(new CustomEvent('volumeChange', options));
    }
    /**
     * Handle muted button click and dispatch mutedChange event
     * @private
     */
    _handleMuteChange() {
        this._muted = !this._muted;
        const options = {
            detail: { muted: this._muted },
            bubbles: true,
            composed: true,
        };
        this.dispatchEvent(new CustomEvent('mutedChange', options));
    }
    /**
     * Access slider and update styles
     * @private
     */
    _updateSliderStyles() {
        var _a, _b, _c;
        const haSlider = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('ha-slider');
        const paperProgress = (_b = haSlider === null || haSlider === void 0 ? void 0 : haSlider.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('paper-progress');
        const container = (_c = paperProgress === null || paperProgress === void 0 ? void 0 : paperProgress.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('#progressContainer');
        if (!container) {
            return;
        }
        container.style.borderRadius = '2px';
        container.style.overflow = 'hidden';
    }
}
YmpVolumeControls.styles = styles$6;
YmpVolumeControls.properties = {
    volume: { attribute: true, type: Number },
    muted: { attribute: 'muted', reflect: true, type: Boolean },
    disabled: { attribute: 'disabled', reflect: true, type: Boolean },
    _volumePercent: { state: true, type: Number },
    _muted: { state: true, type: Boolean },
};
window.customElements.define('ymp-volume-controls', YmpVolumeControls);

var styles$5 = css`:host {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
:host .buttons-action {
  --mdc-icon-button-size: 32px;
  --mdc-icon-size: 18px;
  display: none;
}`;

var CallApiMethod;
(function (CallApiMethod) {
    CallApiMethod["GET"] = "GET";
    CallApiMethod["POST"] = "POST";
    CallApiMethod["PUT"] = "PUT";
    CallApiMethod["DELETE"] = "DELETE";
})(CallApiMethod || (CallApiMethod = {}));

var NumberFormat;
(function (NumberFormat) {
    NumberFormat["language"] = "language";
    NumberFormat["system"] = "system";
    NumberFormat["comma_decimal"] = "comma_decimal";
    NumberFormat["decimal_comma"] = "decimal_comma";
    NumberFormat["space_comma"] = "space_comma";
    NumberFormat["none"] = "none";
})(NumberFormat || (NumberFormat = {}));
var TimeFormat;
(function (TimeFormat) {
    TimeFormat["language"] = "language";
    TimeFormat["system"] = "system";
    TimeFormat["am_pm"] = "12";
    TimeFormat["twenty_four"] = "24";
})(TimeFormat || (TimeFormat = {}));
var FirstWeekday;
(function (FirstWeekday) {
    FirstWeekday["language"] = "language";
    FirstWeekday["monday"] = "monday";
    FirstWeekday["tuesday"] = "tuesday";
    FirstWeekday["wednesday"] = "wednesday";
    FirstWeekday["thursday"] = "thursday";
    FirstWeekday["friday"] = "friday";
    FirstWeekday["saturday"] = "saturday";
    FirstWeekday["sunday"] = "sunday";
})(FirstWeekday || (FirstWeekday = {}));

var HassEntityCategory;
(function (HassEntityCategory) {
    HassEntityCategory["CONFIG"] = "config";
    HassEntityCategory["DIAGNOSTIC"] = "diagnostic";
})(HassEntityCategory || (HassEntityCategory = {}));

var MediaPlayerState;
(function (MediaPlayerState) {
    MediaPlayerState["PLAYING"] = "playing";
    MediaPlayerState["PAUSED"] = "paused";
    MediaPlayerState["IDLE"] = "idle";
    MediaPlayerState["OFF"] = "off";
    MediaPlayerState["ON"] = "on";
    MediaPlayerState["UNAVAILABLE"] = "unavailable";
    MediaPlayerState["UNKNOWN"] = "unknown";
    MediaPlayerState["STANDBY"] = "standby";
    MediaPlayerState["BUFFERING"] = "buffering";
})(MediaPlayerState || (MediaPlayerState = {}));

var application$1 = {
	name: "Media Player",
	description: "Media player for Yandex stations. With additional station management capabilities."
};
var config$1 = {
	color: {
		label: "Color of some interface elements",
		helper: "The color of the volume setting and the progress bar. You can customize these colors in your profile.",
		options: {
			accent: "Accent Color",
			primary: "Primary Color"
		}
	},
	devices: {
		label: "Choose Device",
		helper: "Devices that the media player will control. The equalizers of these devices will be connected automatically."
	}
};
var media$1 = {
	no_source: "Select a Yandex station",
	no_played: "Nothing is being played now",
	no_name: "The media track has no name",
	demo_media_artist: "Your favorite artist",
	demo_media_title: "The name of your most favorite song"
};
var tooltip$1 = {
	like: "I Like",
	dislike: "I Don't Like",
	say_track_name: "Say the name of the track or don't"
};
var en = {
	application: application$1,
	config: config$1,
	media: media$1,
	tooltip: tooltip$1
};

var en$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  application: application$1,
  config: config$1,
  media: media$1,
  tooltip: tooltip$1,
  'default': en
});

var application = {
	name: "Yandex Медиа Плеер",
	description: "Медиа проигрыватель для Yandex станций. С дополнительными возможностями управления Yandex станциями."
};
var config = {
	color: {
		label: "Цвет элементов интерфейса",
		helper: "Цвет настройки громкости и прогресс бара. Эти цвета настраиваются в профиле пользователя.",
		options: {
			accent: "Цвет Акцента",
			primary: "Основной Цвет"
		}
	},
	devices: {
		label: "Выберите Устройство",
		helper: "Устройства, которыми будет управлять плеер. Эквалайзеры этих устройств будут подключены автоматически."
	}
};
var media = {
	no_source: "Выберите Yandex станцию",
	no_played: "Сейчас ничего не проигрывается",
	no_name: "У медиа файла нет названия",
	demo_media_artist: "Ваш любимый исполнитель",
	demo_media_title: "Название вашей самой любимой композиции"
};
var tooltip = {
	like: "Мне Нравится",
	dislike: "Мне Не Нравится",
	say_track_name: "Произносить или нет названия треков"
};
var ru = {
	application: application,
	config: config,
	media: media,
	tooltip: tooltip
};

var ru$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  application: application,
  config: config,
  media: media,
  tooltip: tooltip,
  'default': ru
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations = {
    en: en$1,
    ru: ru$1,
};
function translateString(string, translatedStrings) {
    if (typeof translatedStrings === 'string') {
        return translatedStrings;
    }
    const splitted = string.split('.');
    const [key, ...otherKeys] = splitted;
    const translated = translatedStrings[key];
    if (!translated || typeof translated === 'string') {
        return translated;
    }
    return translateString(otherKeys && otherKeys.length > 0 ? otherKeys.join('.') : '', translated);
}
function language() {
    var _a;
    let lang = (_a = localStorage.getItem('selectedLanguage')) === null || _a === void 0 ? void 0 : _a.replace(/['"]+/g, '').replace('-', '_');
    if (!lang || lang === 'null') {
        lang = localStorage.getItem('i18nextLng');
    }
    if (!lang || lang === 'null') {
        lang = 'en';
    }
    return lang;
}
function t(string, search = '', replace = '') {
    const lang = language();
    let translatedStrings;
    try {
        translatedStrings = Object.assign({}, translations[lang]);
    }
    catch (e) {
        translatedStrings = Object.assign({}, translations['en']);
    }
    let translated = translateString(string, translatedStrings);
    if (translated === undefined) {
        translated = translateString(string, Object.assign({}, translations['en']));
    }
    if (translated && search !== '' && replace !== '') {
        translated = translated.replace(`{${search}}`, replace);
    }
    return translated !== null && translated !== void 0 ? translated : '';
}

class YmpMediaControls extends LitElement {
    constructor() {
        super(...arguments);
        this._sayTrack = false;
    }
    willUpdate(changedProps) {
        super.willUpdate(changedProps);
        if (changedProps.has('state')) {
            if (this._lock && this._innerState === this.state) {
                this._lock = false;
            }
            if (this.state !== this._innerState) {
                this._innerState = this.state;
            }
        }
    }
    render() {
        return html `
      <div class="buttons-remote">
        <ymp-button icon="yandex:skip-prev" @click="${this._handlePrev}"></ymp-button>

        ${this._innerState === MediaPlayerState.PAUSED
            ? html ` <ymp-button icon="yandex:play" style="--mdc-icon-size: 34px;" @click="${this._handlePlay}"></ymp-button> `
            : html ` <ymp-button icon="yandex:pause" style="--mdc-icon-size: 34px;" @click="${this._handlePaused}"></ymp-button> `}

        <ymp-button icon="yandex:skip-next" @click="${this._handleNext}"></ymp-button>
      </div>

      <div class="buttons-action">
        <ymp-button icon="yandex:heart" .label="${t('tooltip.like')}" @click="${this._handleLike}"></ymp-button>
        <ymp-button icon="yandex:heart-outline" .label="${t('tooltip.dislike')}" @click="${this._handleDisLike}"></ymp-button>
        <ymp-button icon="yandex:dj-mode-on" .label="${t('tooltip.say_track_name')}" @click="${this._toggleSayTrack}"></ymp-button>
      </div>
    `;
    }
    _handlePlay() {
        if (this._lock) {
            return;
        }
        this._lock = true;
        this._innerState = MediaPlayerState.PLAYING;
        const options = {
            detail: { paused: false },
            bubbles: true,
            composed: true,
        };
        this.dispatchEvent(new CustomEvent('paused', options));
    }
    _handlePaused() {
        if (this._lock) {
            return;
        }
        this._lock = true;
        this._innerState = MediaPlayerState.PAUSED;
        const options = {
            detail: { paused: true },
            bubbles: true,
            composed: true,
        };
        this.dispatchEvent(new CustomEvent('paused', options));
    }
    _handleNext() {
        const options = {
            detail: {},
            bubbles: true,
            composed: true,
        };
        this.dispatchEvent(new CustomEvent('next', options));
    }
    _handlePrev() {
        const options = {
            detail: {},
            bubbles: true,
            composed: true,
        };
        this.dispatchEvent(new CustomEvent('prev', options));
    }
    _handleLike() {
        const options = {
            detail: {
                media_content_type: 'command',
                media_content_id: 'лайк',
            },
            bubbles: true,
            composed: true,
        };
        this.dispatchEvent(new CustomEvent('command', options));
    }
    _handleDisLike() {
        const options = {
            detail: {
                media_content_type: 'command',
                media_content_id: 'снять лайк',
            },
            bubbles: true,
            composed: true,
        };
        this.dispatchEvent(new CustomEvent('command', options));
    }
    _toggleSayTrack() {
        this._sayTrack = !this._sayTrack;
        const options = {
            detail: {
                media_content_type: 'settings',
                media_content_id: `анонсировать треки: ${this._sayTrack ? 'да' : 'нет'}`,
            },
            bubbles: true,
            composed: true,
        };
        this.dispatchEvent(new CustomEvent('command', options));
    }
}
YmpMediaControls.styles = styles$5;
YmpMediaControls.properties = {
    state: { attribute: true, type: String },
    duration: { attribute: true, type: String },
    _innerState: { state: true, type: String },
    _lock: { state: true, type: Boolean },
    _sayTrack: { state: true, type: Boolean },
};
window.customElements.define('ymp-media-controls', YmpMediaControls);

var styles$4 = css`:host {
  --disabled-text-color: var(--ymp-text-primary);
  color: var(--ymp-text-primary);
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-moz-keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

const MDI_DOMAINS = ['mdi', 'hass', 'hassio', 'hademo'];
const MDI_DB_NAME = 'hass-icon-db';
const MDI_DB_STORE = 'mdi-icon-store';
async function getIconPath(icon) {
    const [domain, name] = icon.split(':', 2);
    if (!domain || !name) {
        throw new Error(`Invalid icon name`);
    }
    if (!MDI_DOMAINS.includes(domain)) {
        return getCustomIconPath(domain, name);
    }
    return getMdiIconPath(domain, name);
}
async function getCustomIconPath(domain, name) {
    var _a;
    const customIcon = (_a = window.customIcons) === null || _a === void 0 ? void 0 : _a[domain];
    if (!customIcon || typeof customIcon.getIcon !== 'function') {
        throw new Error(`Icon ${domain}:${name} not found`);
    }
    const result = await customIcon.getIcon(name);
    if (!(result === null || result === void 0 ? void 0 : result.path)) {
        throw new Error(`Icon ${domain}:${name} not found`);
    }
    return result.path;
}
async function getMdiIconPath(domain, name) {
    const dbInfo = (await indexedDB.databases()).find(db => db.name === MDI_DB_NAME);
    const db = await new Promise((resolve, reject) => {
        if (!dbInfo || !dbInfo.name) {
            return reject(new Error(`Database ${MDI_DB_NAME} not found`));
        }
        const request = indexedDB.open(dbInfo.name, dbInfo.version);
        request.onerror = () => reject(new Error(`Error to open DB. Code: ${request['errorCode']}`));
        request.onsuccess = event => resolve(event.target['result']);
    });
    const store = db.transaction(MDI_DB_STORE, 'readonly').objectStore(MDI_DB_STORE);
    return new Promise((resolve, reject) => {
        const request = store.get(name);
        request.onerror = () => reject(new Error(`Request error. Code: ${request['errorCode']}`));
        request.onsuccess = event => {
            var _a;
            if ((_a = event.target) === null || _a === void 0 ? void 0 : _a['result']) {
                return resolve(event.target['result']);
            }
            return reject(`Icon ${domain}:${name} not found`);
        };
    });
}

const DEFAULT_PATH = 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z';
const LOADING_PATH = 'M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z';
class YmpButton extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Disable button
         */
        this.disabled = false;
        /**
         * Display loading indicator
         */
        this.loading = false;
    }
    willUpdate(changedProps) {
        super.willUpdate(changedProps);
        if (changedProps.has('icon')) {
            this._path = undefined;
            this._loadIcon();
        }
    }
    firstUpdated(_) {
        window.loadCardHelpers().then(helpers => (this._helpers = helpers));
    }
    render() {
        if (!this._path) {
            return html ``;
        }
        if (this.loading) {
            return html ` <ha-icon-button .path=${LOADING_PATH} .style=${`animation: 800ms linear 10ms infinite normal none running rotate;`} .disabled=${true}></ha-icon-button>`;
        }
        return html ` <ha-icon-button .path=${this._path} .label=${this.label} .disabled=${this.disabled}></ha-icon-button>`;
    }
    _loadIcon() {
        if (!this.icon) {
            return;
        }
        getIconPath(this.icon)
            .then(path => {
            this._path = path;
        })
            .catch(error => {
            console.error(error);
            this._path = DEFAULT_PATH;
        });
    }
}
YmpButton.properties = {
    icon: { attribute: true, type: String },
    label: { attribute: true, type: String },
    disabled: { attribute: true, type: Boolean },
    loading: { attribute: true, type: Boolean },
    _helpers: { state: true },
    _path: { state: true, type: String },
};
YmpButton.styles = styles$4;
window.customElements.define('ymp-button', YmpButton);

var styles$3 = css`:host {
  --mdc-icon-button-size: 52px;
  --mdc-icon-size: 36px;
  --divider-color: #00000000;
  margin-right: 14px;
  padding: 0;
  text-align: center;
  color: var(--ymp-text-primary);
  background: transparent;
  border: none;
  position: relative;
  display: block;
}`;

class YmpStationLogo extends LitElement {
    willUpdate(changedProps) {
        var _a, _b;
        super.willUpdate(changedProps);
        if (!this.hass) {
            return;
        }
        if (changedProps.has('hass') || changedProps.has('entityId')) {
            const icon = this.entityId ? (_b = (_a = this.hass.states[this.entityId]) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.icon : undefined;
            if (icon && icon !== this._icon) {
                this._icon = icon;
            }
            else if (!icon) {
                this._icon = 'yandex:alisa';
            }
        }
        if (changedProps.has('_icon') || changedProps.has('entityId')) {
            window.loadCardHelpers().then(helpers => {
                this._iconElement = helpers.createHuiElement({
                    type: 'icon',
                    entity: this.entityId,
                    icon: this._icon,
                    hold_action: undefined,
                    double_tap_action: undefined,
                    tap_action: this.entityId ? { action: 'more-info' } : { action: 'none' },
                    style: {},
                });
                if (this._iconElement) {
                    this._iconElement.hass = this.hass;
                }
            });
        }
    }
    shouldUpdate(changedProps) {
        if (!this.hass || !this.entityId || !this._icon || !this._iconElement) {
            return true;
        }
        return changedProps.has('entityId') || changedProps.has('_iconElement') || changedProps.has('_icon');
    }
    render() {
        if (!this._iconElement) {
            return html ``;
        }
        return html `${this._iconElement}`;
    }
}
YmpStationLogo.properties = {
    hass: { attribute: true },
    entityId: { attribute: true, type: String },
    _icon: { state: true, type: String },
    _iconElement: { state: true },
};
YmpStationLogo.styles = styles$3;
window.customElements.define('ymp-station-logo', YmpStationLogo);

var styles$2 = css`:host {
  max-width: 100%;
  font-weight: 400;
  font-size: 18px;
  color: var(--ymp-text-primary);
  line-height: 22px;
  letter-spacing: -0.012em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`;

const DEFAULT_NAME = 'Yandex Station';
class YmpDeviceName extends LitElement {
    willUpdate(changedProps) {
        var _a;
        super.willUpdate(changedProps);
        if (!this.hass) {
            return;
        }
        if (changedProps.has('entityId')) {
            const entity = (this.entityId && this.hass.entities[this.entityId]) || undefined;
            if (this._deviceId !== (entity === null || entity === void 0 ? void 0 : entity.device_id)) {
                this._deviceId = entity === null || entity === void 0 ? void 0 : entity.device_id;
            }
            if (this._entityName !== (entity === null || entity === void 0 ? void 0 : entity.name)) {
                this._entityName = entity === null || entity === void 0 ? void 0 : entity.name;
            }
        }
        if (changedProps.has('_deviceId')) {
            const deviceName = (this._deviceId && ((_a = this.hass.devices[this._deviceId]) === null || _a === void 0 ? void 0 : _a.name)) || undefined;
            if (this._deviceName !== deviceName) {
                this._deviceName = deviceName;
            }
        }
    }
    shouldUpdate(changedProps) {
        if (!this.hass || !this._deviceId || !this.entityId || !this._deviceName) {
            return true;
        }
        return changedProps.has('_deviceName') || changedProps.has('_entityName');
    }
    render() {
        return html `${this._entityName || this._deviceName || DEFAULT_NAME}`;
    }
}
YmpDeviceName.properties = {
    hass: { attribute: true },
    entityId: { attribute: true, type: String },
    _deviceId: { state: true, type: String },
    _entityName: { state: true, type: String },
    _deviceName: { state: true, type: String },
};
YmpDeviceName.styles = styles$2;
window.customElements.define('ymp-device-name', YmpDeviceName);

var styles$1 = css`:host {
  --ymp-inned-shadow: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
  font-weight: 400;
  opacity: 0.8;
  font-size: 13px;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--ymp-text-primary);
  display: block;
  position: relative;
}
:host .container {
  animation-duration: 0s;
}
:host .hold-line {
  visibility: visible;
}
:host .move-line-wrap {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  -webkit-mask-image: var(--ymp-inned-shadow);
  position: absolute;
  animation-duration: inherit;
  visibility: hidden;
}
:host .move-line-wrap .move-line {
  min-width: fit-content;
  width: fit-content;
  white-space: nowrap;
  animation: 0s linear 0s infinite normal none running slide;
  animation-duration: inherit;
}
:host .move-on .hold-line {
  visibility: hidden;
}
:host .move-on .move-line-wrap {
  visibility: visible;
}

@keyframes slide {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@-moz-keyframes slide {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}`;

class YmpMediaTitle extends LitElement {
    willUpdate(changedProps) {
        super.willUpdate(changedProps);
        if (changedProps.has('entityState') && this.entityState) {
            const mediaTitle = this._computeMediaTitle();
            const mediaDescription = this._computeMediaDescription();
            if (this._mediaTitle !== mediaTitle) {
                this._mediaTitle = mediaTitle;
            }
            if (this._mediaDescription !== mediaDescription) {
                this._mediaDescription = mediaDescription;
            }
        }
        if (changedProps.has('_mediaTitle') || changedProps.has('_mediaDescription')) {
            this._fullTitle = (this._mediaTitle + (this._mediaDescription ? ` - ${this._mediaDescription}` : '')).trim();
        }
    }
    shouldUpdate(changedProps) {
        if (!this.entityState || !this._mediaTitle || !this._mediaDescription) {
            return true;
        }
        if (changedProps.has('_overflow')) {
            return true;
        }
        if (changedProps.has('entityState')) {
            const prevState = changedProps.get('entityState');
            const prevMediaTitle = this._computeMediaTitle(prevState);
            const prevMediaDescription = this._computeMediaDescription(prevState);
            return prevMediaTitle !== this._mediaTitle || prevMediaDescription !== this._mediaDescription;
        }
        return changedProps.has('_overflow') || changedProps.has('_fullTitle') || changedProps.has('_mediaTitle') || changedProps.has('_mediaDescription');
    }
    updated(changedProps) {
        if (changedProps.has('_fullTitle')) {
            setTimeout(() => this._computeOverflow(), 10);
        }
    }
    render() {
        var _a;
        const containerClass = `container ${this._overflow ? 'move-on' : ''}`;
        const containerStyle = `animation-duration: ${(_a = this._overflow) !== null && _a !== void 0 ? _a : 0}s;`;
        let fullTitle;
        if (!this.entityState) {
            fullTitle = t('media.no_source');
        }
        else if (this.entityState.state !== MediaPlayerState.PLAYING && this.entityState.state !== MediaPlayerState.PAUSED) {
            fullTitle = t('media.no_played');
        }
        else {
            fullTitle = this._fullTitle || t('media.no_name');
        }
        return html `
      <div class=${containerClass} style=${containerStyle}>
        <span class="hold-line">${fullTitle}</span>
        <div class="move-line-wrap">
          <div class="move-line">
            <span>${fullTitle}</span>
          </div>
        </div>
      </div>
    `;
    }
    _computeMediaTitle(state) {
        var _a;
        const rawMediaTitle = (_a = (state || this.entityState)) === null || _a === void 0 ? void 0 : _a.attributes.media_title;
        if (!rawMediaTitle) {
            return '';
        }
        const index = rawMediaTitle.indexOf('?authSig=');
        let cleanTitle = index > 0 ? rawMediaTitle.slice(0, index) : rawMediaTitle;
        if (cleanTitle.startsWith('http')) {
            cleanTitle = decodeURIComponent(cleanTitle.split('/').pop());
        }
        return cleanTitle.trim();
    }
    _computeMediaDescription(state) {
        var _a, _b, _c, _d, _e, _f, _g;
        const stateAttributes = (_a = (state || this.entityState)) === null || _a === void 0 ? void 0 : _a.attributes;
        if (!stateAttributes) {
            return '';
        }
        let mediaDescription;
        switch (stateAttributes.media_content_type) {
            case 'music':
            case 'image':
                mediaDescription = (_b = stateAttributes.media_artist) !== null && _b !== void 0 ? _b : '';
                break;
            case 'playlist':
                mediaDescription = (_c = stateAttributes.media_playlist) !== null && _c !== void 0 ? _c : '';
                break;
            case 'tvshow':
                mediaDescription = (_d = stateAttributes.media_series_title) !== null && _d !== void 0 ? _d : '';
                if (stateAttributes.media_season) {
                    mediaDescription += ` S${stateAttributes.media_season}`;
                    if (stateAttributes.media_episode) {
                        mediaDescription += `E${stateAttributes.media_episode}`;
                    }
                }
                break;
            case 'channel':
                mediaDescription = (_e = stateAttributes.media_channel) !== null && _e !== void 0 ? _e : '';
                break;
            default:
                mediaDescription = (_f = stateAttributes.app_name) !== null && _f !== void 0 ? _f : '';
        }
        return (_g = mediaDescription.trim()) !== null && _g !== void 0 ? _g : '';
    }
    _computeOverflow() {
        var _a;
        const element = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.move-line');
        if (element && element.parentNode) {
            const status = element.clientWidth > element.parentNode.clientWidth;
            this._overflow = status ? 7.5 + element.clientWidth / 50 : undefined;
            return;
        }
        this._overflow = undefined;
    }
}
YmpMediaTitle.properties = {
    entityState: { attribute: true },
    _mediaTitle: { state: true, type: String },
    _mediaDescription: { state: true, type: String },
    _fullTitle: { state: true, type: String },
    _overflow: { state: true, type: Number },
};
YmpMediaTitle.styles = styles$1;
window.customElements.define('ymp-media-title', YmpMediaTitle);

var styles = css`:host {
  --mdc-icon-button-size: 40px;
  --mdc-icon-size: 28px;
  --primary-text-color: var(--ymp-text-primary, --primary-text-color);
  font-family: var(--paper-font-body1_-_font-family);
  -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);
  font-size: var(--paper-font-body1_-_font-size);
  font-weight: var(--paper-font-body1_-_font-weight);
  line-height: var(--paper-font-body1_-_line-height);
  color: var(--primary-text-color);
}

.media-player-card {
  position: relative;
  overflow: hidden;
}
.media-player-card ymp-background {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: 1;
}
.media-player-card .content {
  max-width: 280px;
  margin-right: auto;
  padding: 16px 16px 0;
  position: relative;
  z-index: 2;
}
.media-player-card .content .media-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.media-player-card .content .media-info .device-and-track {
  max-width: calc(100% - 50px);
}
.media-player-card .content .media-info .device-and-track :last-child {
  margin-top: 6px;
}
.media-player-card .content ymp-volume-controls {
  width: 100%;
  margin-top: 18px;
}
.media-player-card .content ymp-media-controls {
  margin-top: 12px;
}`;

/**
 * Founds device info in HomeAssistant devices by device ID
 * @param hass
 * @param deviceIds
 */
const findDevices = (hass, deviceIds = []) => {
    return deviceIds
        .map(deviceId => {
        const device = hass.devices[deviceId];
        let playerEntityId = undefined;
        let equalizerEntityId = undefined;
        for (const entityId in hass.entities) {
            const entity = hass.entities[entityId];
            if (entity.device_id === device.id) {
                if (entityId.startsWith('media_player')) {
                    playerEntityId = entityId;
                }
                else if (entityId.includes('equalizer')) {
                    equalizerEntityId = entityId;
                }
            }
            if (playerEntityId && equalizerEntityId) {
                break;
            }
        }
        if (!playerEntityId) {
            return null;
        }
        return {
            id: device.id,
            name: device.name_by_user || device.name || 'No name',
            model: device.model,
            playerEntityId,
            equalizerEntityId,
        };
    })
        .filter(Boolean);
};

const DEMO_STATE = {
    attributes: {
        volume_level: 0.2,
        is_volume_muted: false,
        media_content_type: 'music',
        media_duration: 100,
        media_position: 10,
        media_title: t('media.demo_media_artist'),
        media_artist: t('media.demo_media_title'),
        alice_state: 'IDLE',
        device_class: 'tv',
        friendly_name: 'Yandex Station',
    },
    entity_id: 'media_player.yandex_station',
    last_changed: '1970-01-01T00:00:00',
    last_updated: '1970-01-01T00:00:00',
    state: MediaPlayerState.PAUSED,
    context: {
        id: '0',
        parent_id: null,
        user_id: '0',
    },
};

class MediaPlayerCard extends LitElement {
    static async getConfigElement() {
        await import('./media-player-config-4edb8f45.js');
        return document.createElement('media-player-config');
    }
    static getStubConfig() {
        return {
            color: 'accent',
            devices: [],
        };
    }
    setConfig(config) {
        this._config = config;
    }
    getCardSize() {
        return 3;
    }
    willUpdate(changedProps) {
        var _a, _b, _c;
        super.willUpdate(changedProps);
        if (!this._config || !this.hass) {
            return;
        }
        if (changedProps.has('_config')) {
            this._devices = findDevices(this.hass, this._config.devices);
        }
        if (changedProps.has('_devices')) {
            if (!this._devices || !this._devices.length) {
                this._deviceId = undefined;
            }
            else if (!this._deviceId || !this._devices.some(({ id }) => id === this._deviceId)) {
                this._deviceId = this._devices[0].id;
            }
        }
        if (changedProps.has('_deviceId')) {
            if (!this._deviceId || !this._devices) {
                this._entityId = undefined;
            }
            else {
                this._entityId = (_a = this._devices.find(device => device.id === this._deviceId)) === null || _a === void 0 ? void 0 : _a.playerEntityId;
            }
        }
        if (changedProps.has('hass')) {
            const mediaImage = ((_b = this._entityState) === null || _b === void 0 ? void 0 : _b.attributes.entity_picture_local) || ((_c = this._entityState) === null || _c === void 0 ? void 0 : _c.attributes.entity_picture);
            if (this._mediaImage !== mediaImage) {
                this._mediaImage = mediaImage;
            }
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!this._config || !this.hass) {
            return html ``;
        }
        const disabled = !this._entityState || (this._state !== MediaPlayerState.PLAYING && this._state !== MediaPlayerState.PAUSED);
        const disabledProgress = disabled || ((_a = this._entityState) === null || _a === void 0 ? void 0 : _a.attributes.media_duration) === undefined;
        return html `
      <ha-card class="media-player-card">
        <ymp-background .image="${this._mediaImage ? this.hass.hassUrl(this._mediaImage) : undefined}" .editMode="${this.editMode}" .color="${this._config.color}"></ymp-background>
        <div class="content">
          <div class="media-info">
            <ymp-station-logo .entityId=${this._entityId} .hass=${this.hass}></ymp-station-logo>

            <div class="device-and-track">
              <ymp-device-name .entityId=${this._entityId} .hass=${this.hass}></ymp-device-name>
              <ymp-media-title .entityState=${this._entityState}></ymp-media-title>
            </div>
          </div>

          <ymp-volume-controls
            .volume="${(_b = this._entityState) === null || _b === void 0 ? void 0 : _b.attributes.volume_level}"
            .muted="${(_c = this._entityState) === null || _c === void 0 ? void 0 : _c.attributes.is_volume_muted}"
            @volumeChange="${({ detail }) => this._serviceCall('volume_set', { volume_level: detail.volume })}"
            @mutedChange="${({ detail }) => this._serviceCall('volume_mute', { is_volume_muted: detail.muted })}"
          ></ymp-volume-controls>

          <ymp-media-controls
            .state="${this._state}"
            .duration="${(_d = this._entityState) === null || _d === void 0 ? void 0 : _d.attributes.media_duration}"
            @paused="${({ detail }) => this._serviceCall(detail.paused ? 'media_pause' : 'media_play')}"
            @next="${() => this._serviceCall('media_next_track')}"
            @prev="${() => this._serviceCall('media_previous_track')}"
            @command="${({ detail }) => this._serviceCall('play_media', detail)}"
          ></ymp-media-controls>
        </div>
        <ymp-progress
          .disabled="${disabledProgress}"
          .duration="${(_f = (_e = this._entityState) === null || _e === void 0 ? void 0 : _e.attributes.media_duration) !== null && _f !== void 0 ? _f : 100}"
          .position="${(_h = (_g = this._entityState) === null || _g === void 0 ? void 0 : _g.attributes.media_position) !== null && _h !== void 0 ? _h : 0}"
          @seek="${({ detail }) => this._serviceCall('media_seek', { seek_position: detail.seek })}}"
        ></ymp-progress>
      </ha-card>
    `;
    }
    async _serviceCall(service, data = {}) {
        if (!this._entityId) {
            return console.warn('No selected device');
        }
        return this.hass.callService('media_player', service, data, { entity_id: this._entityId }).catch(error => {
            console.error(error);
            throw error;
        });
    }
    get _entityState() {
        if (this.editMode === undefined && (!this._entityId || !this.hass)) {
            return DEMO_STATE;
        }
        return this.hass && this._entityId ? this.hass.states[this._entityId] : undefined;
    }
    get _state() {
        var _a, _b;
        return (_b = (_a = this._entityState) === null || _a === void 0 ? void 0 : _a.state) !== null && _b !== void 0 ? _b : MediaPlayerState.UNAVAILABLE;
    }
}
MediaPlayerCard.styles = styles;
MediaPlayerCard.properties = {
    hass: { attribute: false },
    editMode: { attribute: false },
    _config: { state: true },
    _devices: { state: true },
    _deviceId: { state: true, type: String },
    _entityId: { state: true, type: String },
    _mediaImage: { state: true, type: String },
};
window.customElements.define('yandex-media-player', MediaPlayerCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: 'yandex-media-player',
    name: t('application.name'),
    preview: true,
    description: t('application.description'),
});

function replace(domain, image) {
    if (!window.brandReplacer) {
        window.brandReplacer = import('./brand-replacer-60334d68.js');
    }
    window.brandReplacer.then(module => {
        module.BrandReplacer.insert(domain, image);
    });
}

replace('yandex_media_player', '/yandex-media-player/logo.png');

export { LitElement as L, MediaPlayerCard as M, YmpBackground as Y, getIconList as a, YmpProgress as b, css as c, YmpVolumeControls as d, YmpMediaControls as e, YmpButton as f, getIcon as g, html as h, YmpStationLogo as i, YmpDeviceName as j, YmpMediaTitle as k, t };
