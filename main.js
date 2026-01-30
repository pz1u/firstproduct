// 소리 데이터 설정
const soundsData = [
    { id: 'rain', icon: 'cloud-rain', file: 'rain.mp3' },
    { id: 'fire', icon: 'flame', file: 'fire.mp3' },
    { id: 'keyboard', icon: 'keyboard', file: 'keyboard.mp3' }
];

// 다국어 데이터
const translations = {
    ko: {
        title: "My ASMR Space",
        subtitle: "나만의 소리를 믹스하여 휴식하세요.",
        asmr_title: "ASMR과 백색소음이란?",
        asmr_desc: "ASMR(Autonomous Sensory Meridian Response)은 뇌를 자극해 심리적인 안정을 유도하는 소리입니다. 빗소리, 장작 타는 소리, 타자 소리와 같은 백색소음(White Noise)은 주변의 거슬리는 소음을 덮어주고 집중력을 향상시키거나 수면을 돕는 데 효과적입니다.",
        tips_title: "My ASMR Space 활용 팁",
        tip_focus: "<strong>집중이 필요할 때:</strong> 타자 소리와 같은 규칙적인 소음을 활용해보세요.",
        tip_relax: "<strong>휴식이 필요할 때:</strong> 빗소리와 장작불 소리로 아늑한 분위기를 만들어보세요.",
        tip_sleep: "<strong>수면 유도:</strong> 볼륨을 낮추고 자연의 소리에 귀를 기울여보세요.",
        site_desc: "이 사이트는 사용자에게 무료로 휴식과 집중을 위한 소리를 제공합니다. 별도의 설치 없이 웹 브라우저에서 바로 이용할 수 있습니다.",
        contact_title: "문의하기",
        email_label: "이메일",
        email_placeholder: "답변 받으실 이메일 주소",
        msg_label: "메시지",
        msg_placeholder: "문의하실 내용을 적어주세요.",
        send_btn: "보내기",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        privacy: "개인정보처리방침",
        sound_rain: "빗소리",
        sound_fire: "장작불",
        sound_keyboard: "타자 소리",
        play: "재생",
        stop: "정지"
    },
    en: {
        title: "My ASMR Space",
        subtitle: "Mix your own sounds and relax.",
        asmr_title: "What is ASMR & White Noise?",
        asmr_desc: "ASMR triggers psychological stability. White noise like rain or typing helps cover distracting noises, improving concentration and sleep.",
        tips_title: "Tips for My ASMR Space",
        tip_focus: "<strong>For Focus:</strong> Try regular sounds like typing.",
        tip_relax: "<strong>For Relax:</strong> Use rain and fire sounds.",
        tip_sleep: "<strong>For Sleep:</strong> Lower volume and listen to nature.",
        site_desc: "Free sounds for relaxation and focus. No installation required.",
        contact_title: "Contact Us",
        email_label: "Email",
        email_placeholder: "Your email address",
        msg_label: "Message",
        msg_placeholder: "Your message here",
        send_btn: "Send",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        privacy: "Privacy Policy",
        sound_rain: "Rain",
        sound_fire: "Fire",
        sound_keyboard: "Typing",
        play: "Play",
        stop: "Stop"
    },
    ja: {
        title: "My ASMR Space",
        subtitle: "自分だけの音をミックスしてリラックス。",
        asmr_title: "ASMRとホワイトノイズとは？",
        asmr_desc: "ASMRは心理的な安定を誘導する音です。雨音や焚き火などのホワイトノイズは、騒音を遮断し、集中力や睡眠を助けます。",
        tips_title: "活用法",
        tip_focus: "<strong>集中時：</strong> タイピング音などを活用。",
        tip_relax: "<strong>リラックス：</strong> 雨音と焚き火で落ち着く。",
        tip_sleep: "<strong>睡眠：</strong> 音量を下げて自然音を。",
        site_desc: "リラックスと集中のための無料サウンドサイトです。",
        contact_title: "お問い合わせ",
        email_label: "メール",
        email_placeholder: "返信先メールアドレス",
        msg_label: "メッセージ",
        msg_placeholder: "お問い合わせ内容",
        send_btn: "送信",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        privacy: "プライバシーポリシー",
        sound_rain: "雨音",
        sound_fire: "焚き火",
        sound_keyboard: "タイピング",
        play: "再生",
        stop: "停止"
    },
    zh: {
        title: "My ASMR Space",
        subtitle: "混合属于你的声音，享受放松。",
        asmr_title: "什么是 ASMR？",
        asmr_desc: "ASMR 是一种诱导心理稳定的声音。雨声、打字声等白噪音有助于掩盖噪音，提高注意力或助眠。",
        tips_title: "使用技巧",
        tip_focus: "<strong>集中注意力：</strong> 尝试打字声。",
        tip_relax: "<strong>放松：</strong> 雨声和柴火声。",
        tip_sleep: "<strong>助眠：</strong> 调低音量听自然声。",
        site_desc: "免费提供放松和集中的声音。无需安装。",
        contact_title: "联系我们",
        email_label: "邮箱",
        email_placeholder: "您的邮箱地址",
        msg_label: "留言",
        msg_placeholder: "请输入内容",
        send_btn: "发送",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        privacy: "隐私政策",
        sound_rain: "雨声",
        sound_fire: "柴火",
        sound_keyboard: "打字声",
        play: "播放",
        stop: "停止"
    },
    es: {
        title: "My ASMR Space",
        subtitle: "Mezcla tus propios sonidos y relájate.",
        asmr_title: "¿Qué es ASMR y Ruido Blanco?",
        asmr_desc: "ASMR induce estabilidad psicológica. El ruido blanco como la lluvia ayuda a cubrir ruidos molestos, mejorando la concentración y el sueño.",
        tips_title: "Consejos de uso",
        tip_focus: "<strong>Para Concentración:</strong> Prueba sonidos como escribir.",
        tip_relax: "<strong>Para Relajarse:</strong> Usa sonidos de lluvia y fuego.",
        tip_sleep: "<strong>Para Dormir:</strong> Baja el volumen y escucha la naturaleza.",
        site_desc: "Sonidos gratuitos para relajación y concentración.",
        contact_title: "Contáctanos",
        email_label: "Correo",
        email_placeholder: "Tu correo electrónico",
        msg_label: "Mensaje",
        msg_placeholder: "Escribe tu mensaje",
        send_btn: "Enviar",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        privacy: "Política de Privacidad",
        sound_rain: "Lluvia",
        sound_fire: "Fuego",
        sound_keyboard: "Teclado",
        play: "Reprod.",
        stop: "Parar"
    }
};

const soundGrid = document.getElementById('sound-grid');
const langSelect = document.getElementById('lang-select');

// Web Audio API 설정 (모바일 볼륨 제어 문제 해결)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const audioPlayers = {};
let currentLang = 'ko';

// 카드 생성 및 오디오 초기화
soundsData.forEach(sound => {
    const card = document.createElement('div');
    card.className = 'w-full sm:w-72 bg-slate-800 border-2 border-transparent rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:bg-slate-700';
    card.id = `card-${sound.id}`;
    card.innerHTML = `
        <div class="text-blue-400 mb-2"><i data-lucide="${sound.icon}" width="48" height="48"></i></div>
        <h3 class="text-xl font-bold" data-i18n="sound_${sound.id}">${translations[currentLang]['sound_' + sound.id]}</h3>
        <div class="w-full flex flex-col gap-3 mt-2">
            <button id="btn-${sound.id}" class="w-full py-2 rounded-lg bg-slate-600 hover:bg-blue-500 text-white font-medium transition-colors flex justify-center items-center gap-2">
                <i data-lucide="play" width="16"></i> <span data-i18n="play">${translations[currentLang].play}</span>
            </button>
            <div class="flex items-center gap-2">
                <i data-lucide="volume-2" width="16" class="text-slate-400"></i>
                <input type="range" id="vol-${sound.id}" min="0" max="1" step="0.01" value="0.5">
            </div>
        </div>`;
    soundGrid.appendChild(card);

    const audio = new Audio(sound.file);
    audio.crossOrigin = "anonymous"; // CORS 허용
    audio.loop = true;
    
    // Web Audio API 연결 (GainNode를 통해 볼륨 제어)
    const track = audioCtx.createMediaElementSource(audio);
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.5; // 초기 볼륨 50%
    track.connect(gainNode).connect(audioCtx.destination);

    audioPlayers[sound.id] = { audio, gainNode, isPlaying: false };

    const playBtn = card.querySelector(`#btn-${sound.id}`);
    const volSlider = card.querySelector(`#vol-${sound.id}`);

    playBtn.addEventListener('click', () => {
        if (audioCtx.state === 'suspended') audioCtx.resume(); // 브라우저 자동재생 정책 대응
        toggleSound(sound.id);
    });
    volSlider.addEventListener('input', (e) => gainNode.gain.value = e.target.value);
});

function toggleSound(id) {
    const player = audioPlayers[id];
    
    // 이미 재생 중이면 멈춤
    if (player.isPlaying) {
        player.audio.pause();
        player.isPlaying = false;
        updateUI(id, false);
    } else {
        // 다른 모든 소리 끄기 (중복 재생 방지)
        Object.keys(audioPlayers).forEach(key => {
            if (audioPlayers[key].isPlaying) {
                audioPlayers[key].audio.pause();
                audioPlayers[key].isPlaying = false;
                updateUI(key, false);
            }
        });
        
        // 선택한 소리 재생
        player.audio.play();
        player.isPlaying = true;
        updateUI(id, true);
    }
    lucide.createIcons();
}

function updateUI(id, isPlaying) {
    const btn = document.getElementById(`btn-${id}`);
    const card = document.getElementById(`card-${id}`);
    const textKey = isPlaying ? 'stop' : 'play';
    const icon = isPlaying ? 'pause' : 'play';
    
    if (isPlaying) {
        btn.className = 'w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors flex justify-center items-center gap-2';
        btn.innerHTML = `<i data-lucide="${icon}" width="16"></i> <span data-i18n="${textKey}">${translations[currentLang][textKey]}</span>`;
        card.classList.add('card-active');
    } else {
        btn.className = 'w-full py-2 rounded-lg bg-slate-600 hover:bg-blue-500 text-white font-medium transition-colors flex justify-center items-center gap-2';
        btn.innerHTML = `<i data-lucide="${icon}" width="16"></i> <span data-i18n="${textKey}">${translations[currentLang][textKey]}</span>`;
        card.classList.remove('card-active');
    }
    lucide.createIcons();
}

// 언어 변경 기능
langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateLanguage();
});

function updateLanguage() {
    // 텍스트 콘텐츠 업데이트
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    // placeholder 업데이트
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
}

lucide.createIcons();