// 소리 데이터 설정
const soundsData = [
    { id: 'rain', icon: 'cloud-rain', file: 'rain.mp3', tags: ['nature', 'sleep', 'relax'] },
    { id: 'fire', icon: 'flame', file: 'fire.mp3', tags: ['nature', 'relax', 'warm'] },
    { id: 'bird', icon: 'bird', file: 'bird.mp3', tags: ['nature', 'morning', 'focus'] },
    { id: 'book', icon: 'book', file: 'book.mp3', tags: ['study', 'focus', 'calm'] },
    { id: 'wave', icon: 'waves', file: 'wave.mp3', tags: ['nature', 'sleep', 'relax'] },
    { id: 'keyboard', icon: 'keyboard', file: 'keyboard.mp3', tags: ['work', 'focus', 'study'] },
    { id: 'bug', icon: 'bug', file: 'bug.mp3', tags: ['nature', 'night', 'sleep'] }
];

// 다국어 데이터
const translations = {
    ko: {
        title: "My ASMR Space",
        subtitle: "나만의 소리로 휴식하세요.",
        asmr_title: "ASMR과 백색소음이란?",
        asmr_desc: "ASMR(Autonomous Sensory Meridian Response)은 뇌를 자극해 심리적인 안정을 유도하는 소리입니다. 빗소리, 장작 타는 소리, 타자 소리와 같은 백색소음(White Noise)은 주변의 거슬리는 소음을 덮어주고 집중력을 향상시키거나 수면을 돕는 데 효과적입니다.",
        tips_title: "My ASMR Space 활용 팁",
        tip_focus: "<strong>집중이 필요할 때:</strong> 타자 소리와 같은 규칙적인 소음을 활용해보세요.",
        tip_relax: "<strong>휴식이 필요할 때:</strong> 빗소리와 장작불 소리로 아늑한 분위기를 만들어보세요.",
        tip_sleep: "<strong>수면 유도:</strong> 볼륨을 낮추고 자연의 소리에 귀를 기울여보세요.",
        site_desc: "이 사이트는 사용자에게 무료로 휴식과 집중을 위한 소리를 제공합니다. 별도의 설치 없이 웹 브라우저에서 바로 이용할 수 있습니다.",
        contact_title: "ASMR 추가 문의",
        email_label: "이메일",
        email_placeholder: "답변 받으실 이메일 주소",
        msg_label: "메시지",
        msg_placeholder: "문의하실 내용을 적어주세요.",
        send_btn: "보내기",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        privacy: "개인정보처리방침",
        my_saved: "내가 저장한 소리",
        sound_rain: "빗소리",
        sound_fire: "장작불",
        sound_bird: "새소리",
        sound_book: "책 넘기는 소리",
        sound_wave: "파도 소리",
        sound_keyboard: "타자 소리",
        sound_bug: "풀벌레 소리",
        play: "재생",
        stop: "정지",
        theme_dark: "다크 모드",
        theme_light: "라이트 모드",
        tag_nature: "자연",
        tag_sleep: "수면",
        tag_relax: "휴식",
        tag_warm: "따뜻함",
        tag_morning: "아침",
        tag_focus: "집중",
        tag_study: "공부",
        tag_calm: "차분함",
        tag_work: "작업",
        tag_night: "밤",
        sitemap: "사이트맵",
        contact_link: "문의하기"
    },
    en: {
        title: "My ASMR Space",
        subtitle: "Relax with your own sounds.",
        asmr_title: "What is ASMR & White Noise?",
        asmr_desc: "ASMR triggers psychological stability. White noise like rain or typing helps cover distracting noises, improving concentration and sleep.",
        tips_title: "Tips for My ASMR Space",
        tip_focus: "<strong>For Focus:</strong> Try regular sounds like typing.",
        tip_relax: "<strong>For Relax:</strong> Use rain and fire sounds.",
        tip_sleep: "<strong>For Sleep:</strong> Lower volume and listen to nature.",
        site_desc: "Free sounds for relaxation and focus. No installation required.",
        contact_title: "Request New Sounds",
        email_label: "Email",
        email_placeholder: "Your email address",
        msg_label: "Message",
        msg_placeholder: "Your message here",
        send_btn: "Send",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        privacy: "Privacy Policy",
        my_saved: "My Saved Sounds",
        sound_rain: "Rain",
        sound_fire: "Fire",
        sound_bird: "Birds",
        sound_book: "Page Turning",
        sound_wave: "Waves",
        sound_keyboard: "Typing",
        sound_bug: "Crickets",
        play: "Play",
        stop: "Stop",
        theme_dark: "Dark Mode",
        theme_light: "Light Mode",
        tag_nature: "Nature",
        tag_sleep: "Sleep",
        tag_relax: "Relax",
        tag_warm: "Warm",
        tag_morning: "Morning",
        tag_focus: "Focus",
        tag_study: "Study",
        tag_calm: "Calm",
        tag_work: "Work",
        tag_night: "Night",
        sitemap: "Sitemap",
        contact_link: "Contact Us"
    },
    ja: {
        title: "My ASMR Space",
        subtitle: "自分だけの音でリラックス。",
        asmr_title: "ASMRとホワイトノイズとは？",
        asmr_desc: "ASMRは心理的な安定を誘導する音です。雨音や焚き火などのホワイトノイズは、騒音を遮断し、集中力や睡眠を助けます。",
        tips_title: "活用法",
        tip_focus: "<strong>集中時：</strong> タイピング音などを活用。",
        tip_relax: "<strong>リラックス：</strong> 雨音と焚き火で落ち着く。",
        tip_sleep: "<strong>睡眠：</strong> 音量を下げて自然音を。",
        site_desc: "リラックスと集中のための無料サウンドサイトです。",
        contact_title: "ASMR追加リクエスト",
        email_label: "メール",
        email_placeholder: "返信先メールアドレス",
        msg_label: "メッセージ",
        msg_placeholder: "お問い合わせ内容",
        send_btn: "送信",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        privacy: "プライバシーポリシー",
        my_saved: "保存したサウンド",
        sound_rain: "雨音",
        sound_fire: "焚き火",
        sound_bird: "鳥のさえずり",
        sound_book: "本をめくる音",
        sound_wave: "波の音",
        sound_keyboard: "タイピング",
        sound_bug: "虫の音",
        play: "再生",
        stop: "停止",
        theme_dark: "ダークモード",
        theme_light: "ライトモード",
        tag_nature: "自然",
        tag_sleep: "睡眠",
        tag_relax: "リラックス",
        tag_warm: "暖かい",
        tag_morning: "朝",
        tag_focus: "集中",
        tag_study: "勉強",
        tag_calm: "落ち着く",
        tag_work: "作業",
        tag_night: "夜",
        sitemap: "サイトマップ",
        contact_link: "お問い合わせ"
    },
    zh: {
        title: "My ASMR Space",
        subtitle: "用属于你的声音放松。",
        asmr_title: "什么是 ASMR？",
        asmr_desc: "ASMR 是一种诱导心理稳定的声音。雨声、打字声等白噪音有助于掩盖噪音，提高注意力或助眠。",
        tips_title: "使用技巧",
        tip_focus: "<strong>集中注意力：</strong> 尝试打字声。",
        tip_relax: "<strong>放松：</strong> 雨声和柴火声。",
        tip_sleep: "<strong>助眠：</strong> 调低音量听自然声。",
        site_desc: "免费提供放松和集中的声音。无需安装。",
        contact_title: "ASMR 添加请求",
        email_label: "邮箱",
        email_placeholder: "您的邮箱地址",
        msg_label: "留言",
        msg_placeholder: "请输入内容",
        send_btn: "发送",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        privacy: "隐私政策",
        my_saved: "我保存的声音",
        sound_rain: "雨声",
        sound_fire: "柴火",
        sound_bird: "鸟鸣声",
        sound_book: "翻书声",
        sound_wave: "海浪声",
        sound_keyboard: "打字声",
        sound_bug: "虫鸣声",
        play: "播放",
        stop: "停止",
        theme_dark: "深色模式",
        theme_light: "浅色模式",
        tag_nature: "自然",
        tag_sleep: "睡眠",
        tag_relax: "放松",
        tag_warm: "温暖",
        tag_morning: "早晨",
        tag_focus: "专注",
        tag_study: "学习",
        tag_calm: "平静",
        tag_work: "工作",
        tag_night: "夜晚",
        sitemap: "网站地图",
        contact_link: "联系我们"
    },
    es: {
        title: "My ASMR Space",
        subtitle: "Relájate con tus propios sonidos.",
        asmr_title: "¿Qué es ASMR y Ruido Blanco?",
        asmr_desc: "ASMR induce estabilidad psicológica. El ruido blanco como la lluvia ayuda a cubrir ruidos molestos, mejorando la concentración y el sueño.",
        tips_title: "Consejos de uso",
        tip_focus: "<strong>Para Concentración:</strong> Prueba sonidos como escribir.",
        tip_relax: "<strong>Para Relajarse:</strong> Usa sonidos de lluvia y fuego.",
        tip_sleep: "<strong>Para Dormir:</strong> Baja el volumen y escucha la naturaleza.",
        site_desc: "Sonidos gratuitos para relajación y concentración.",
        contact_title: "Solicitar nuevos sonidos",
        email_label: "Correo",
        email_placeholder: "Tu correo electrónico",
        msg_label: "Mensaje",
        msg_placeholder: "Escribe tu mensaje",
        send_btn: "Enviar",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        privacy: "Política de Privacidad",
        my_saved: "Mis sonidos guardados",
        sound_rain: "Lluvia",
        sound_fire: "Fuego",
        sound_bird: "Pájaros",
        sound_book: "Pasar páginas",
        sound_wave: "Olas",
        sound_keyboard: "Teclado",
        sound_bug: "Grillos",
        play: "Reprod.",
        stop: "Parar",
        theme_dark: "Modo Oscuro",
        theme_light: "Modo Claro",
        tag_nature: "Naturaleza",
        tag_sleep: "Dormir",
        tag_relax: "Relajarse",
        tag_warm: "Cálido",
        tag_morning: "Mañana",
        tag_focus: "Enfoque",
        tag_study: "Estudio",
        tag_calm: "Calma",
        tag_work: "Trabajo",
        tag_night: "Noche",
        sitemap: "Mapa del sitio",
        contact_link: "Contáctenos"
    }
};

const soundGrid = document.getElementById('sound-grid');
const langBtn = document.getElementById('lang-btn');
const langMenu = document.getElementById('lang-menu');
const themeBtn = document.getElementById('theme-btn');
const favFilterBtn = document.getElementById('fav-filter-btn');

// Web Audio API 설정 (모바일 볼륨 제어 문제 해결)
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser(); // 비주얼라이저용 분석기
analyser.fftSize = 256;

const audioPlayers = {};

// 브라우저 언어 감지 및 설정
const userLang = navigator.language || navigator.userLanguage;
let currentLang = 'en'; // 기본값은 영어(글로벌)

if (userLang.includes('ko')) currentLang = 'ko';
else if (userLang.includes('ja')) currentLang = 'ja';
else if (userLang.includes('zh')) currentLang = 'zh';
else if (userLang.includes('es')) currentLang = 'es';

// 긍정 에너지 명언 데이터
const quotes = [
    "잠시 쉬어가도 괜찮아요. 당신은 충분히 잘하고 있습니다.",
    "오늘 하루도 당신의 속도대로, 편안하게.",
    "작은 휴식이 큰 에너지가 됩니다.",
    "당신의 존재만으로도 세상은 충분히 아름답습니다.",
    "걱정은 잠시 내려놓고, 지금 이 순간의 소리에 집중해보세요.",
    "내일은 오늘보다 더 빛날 거예요.",
    "지친 마음을 토닥여주세요. 수고했어요, 오늘도.",
    "행복은 강도가 아니라 빈도입니다. 소소한 행복을 느껴보세요.",
    "깊은 숨을 들이마시고, 천천히 내쉬어보세요.",
    "조금 느려도 괜찮아요. 당신은 이미 충분히 잘하고 있어요.",
    "오늘 버텨낸 것만으로도, 당신은 정말 대단한 사람이에요.",
    "쉬어가는 시간도 성장의 일부예요. 멈춘 게 아니라 준비 중인 거예요.",
    "완벽하지 않아도 괜찮아요. 지금의 당신도 충분히 소중해요.",
    "조급해하지 않아도 돼요. 당신만의 속도가 있어요.",
    "작은 한 걸음이라도, 멈추지 않는 당신은 이미 멋져요.",
    "오늘의 최선이 내일의 자랑이 될 거예요.",
    "스스로에게 조금 더 친절해도 괜찮아요.",
    "당신이 버텨온 시간들이 이미 답이에요.",
    "지금 이 자리에서도, 당신은 계속 성장하고 있어요."
];

// 즐겨찾기 데이터 로드
let favorites = [];
try {
    favorites = JSON.parse(localStorage.getItem('asmr_favorites')) || [];
} catch (e) {
    console.log('Local Storage not available');
}
let showFavoritesOnly = false;
let activeTag = null;

// Initialize Sound Cards
// 카드 생성 및 오디오 초기화
if (soundGrid) {
    soundsData.forEach(sound => {
        const card = document.createElement('div');
        const isFav = favorites.includes(sound.id);
        card.className = 'w-full sm:w-72 bg-white dark:bg-slate-800 border-2 border-transparent rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm';
        card.id = `card-${sound.id}`;
        card.dataset.id = sound.id; // 필터링용
        
        const tagsHtml = sound.tags.map(tag => 
            `<span class="tag-btn text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" data-tag="${tag}">#${translations[currentLang]['tag_' + tag] || tag}</span>`
        ).join(' ');

        card.innerHTML = `
            <div class="w-full flex justify-between items-start">
                <div class="w-8"></div> <!-- Spacer for centering -->
                <div class="text-blue-400 mb-2"><i data-lucide="${sound.icon}" width="48" height="48"></i></div>
                <button class="fav-btn w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors ${isFav ? 'text-red-500' : 'text-slate-300 dark:text-slate-600'}" data-id="${sound.id}">
                    <i data-lucide="heart" class="w-5 h-5 ${isFav ? 'fill-current' : ''}"></i>
                </button>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white" data-i18n="sound_${sound.id}">${translations[currentLang]['sound_' + sound.id]}</h3>
            <div class="flex gap-2 mb-2 flex-wrap justify-center">${tagsHtml}</div>
            <div class="w-full flex flex-col gap-3 mt-2">
                <button id="btn-${sound.id}" class="w-full py-2 rounded-lg bg-slate-100 dark:bg-slate-600 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-700 dark:text-white hover:text-white font-medium transition-colors flex justify-center items-center gap-2"
                    onclick="if(typeof Android !== 'undefined') Android.playAudio('https://asmrspace.shop/sounds/${sound.file}')">
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
        
        // 오디오 그래프 연결: Source -> Gain -> Analyser -> Destination
        track.connect(gainNode);
        gainNode.connect(analyser);
        gainNode.connect(audioCtx.destination);

        audioPlayers[sound.id] = { audio, gainNode, isPlaying: false };

        const playBtn = card.querySelector(`#btn-${sound.id}`);
        const volSlider = card.querySelector(`#vol-${sound.id}`);
        const favBtn = card.querySelector('.fav-btn');

        playBtn.addEventListener('click', () => {
            if (audioCtx.state === 'suspended') audioCtx.resume(); // 브라우저 자동재생 정책 대응
            toggleSound(sound.id);
        });
        volSlider.addEventListener('input', (e) => gainNode.gain.value = e.target.value);
        favBtn.addEventListener('click', () => toggleFavorite(sound.id, favBtn));
    });

    soundGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('tag-btn')) {
            const tag = e.target.dataset.tag;
            filterByTag(tag);
        }
    });
}

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
    const sound = soundsData.find(s => s.id === id);
    
    if (isPlaying) {
        btn.className = 'w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors flex justify-center items-center gap-2';
        btn.innerHTML = `<i data-lucide="${icon}" width="16"></i> <span data-i18n="${textKey}">${translations[currentLang][textKey]}</span>`;
        btn.setAttribute('onclick', "if(typeof Android !== 'undefined') Android.pauseAudio()");
        card.classList.add('card-active');
    } else {
        btn.className = 'w-full py-2 rounded-lg bg-slate-100 dark:bg-slate-600 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-700 dark:text-white hover:text-white font-medium transition-colors flex justify-center items-center gap-2';
        btn.innerHTML = `<i data-lucide="${icon}" width="16"></i> <span data-i18n="${textKey}">${translations[currentLang][textKey]}</span>`;
        if (sound) {
            btn.setAttribute('onclick', `if(typeof Android !== 'undefined') Android.playAudio('https://asmrspace.shop/sounds/${sound.file}')`);
        }
        card.classList.remove('card-active');
    }
    lucide.createIcons();
}

// 즐겨찾기 토글 기능
function toggleFavorite(id, btn) {
    const index = favorites.indexOf(id);
    const icon = btn.querySelector('svg');
    
    if (index === -1) {
        favorites.push(id);
        btn.classList.remove('text-slate-300', 'dark:text-slate-600');
        btn.classList.add('text-red-500');
        if (icon) icon.classList.add('fill-current');
    } else {
        favorites.splice(index, 1);
        btn.classList.remove('text-red-500');
        btn.classList.add('text-slate-300', 'dark:text-slate-600');
        if (icon) icon.classList.remove('fill-current');
    }
    try {
        localStorage.setItem('asmr_favorites', JSON.stringify(favorites));
    } catch (e) {
        console.log('Local Storage save failed');
    }
    
    // 필터가 켜져있으면 즉시 반영
    applyFilters();
}

// 통합 필터 적용 함수
function applyFilters() {
    const cards = document.querySelectorAll('[id^="card-"]');
    cards.forEach(card => {
        const soundId = card.dataset.id;
        const sound = soundsData.find(s => s.id === soundId);
        let visible = true;

        // 즐겨찾기 필터 확인
        if (showFavoritesOnly && !favorites.includes(soundId)) {
            visible = false;
        }

        // 태그 필터 확인
        if (visible && activeTag && !sound.tags.includes(activeTag)) {
            visible = false;
        }

        if (visible) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    // 태그 버튼 스타일 업데이트
    document.querySelectorAll('.tag-btn').forEach(btn => {
        if (btn.dataset.tag === activeTag) {
            btn.classList.add('bg-blue-500', 'text-white');
            btn.classList.remove('bg-slate-100', 'dark:bg-slate-700', 'text-slate-600', 'dark:text-slate-300');
        } else {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('bg-slate-100', 'dark:bg-slate-700', 'text-slate-600', 'dark:text-slate-300');
        }
    });
}

function filterByTag(tag) {
    activeTag = (activeTag === tag) ? null : tag;
    applyFilters();
}

if (favFilterBtn) {
    favFilterBtn.addEventListener('click', () => {
        showFavoritesOnly = !showFavoritesOnly;
        favFilterBtn.classList.toggle('bg-red-50', showFavoritesOnly);
        favFilterBtn.classList.toggle('dark:bg-red-900/30', showFavoritesOnly);
        favFilterBtn.classList.toggle('border-red-200', showFavoritesOnly);
        favFilterBtn.classList.toggle('text-red-500', showFavoritesOnly);
        applyFilters();
    });
}

// 테마 설정 기능
function initTheme() {
    let savedTheme = null;
    try {
        savedTheme = localStorage.getItem('asmr_theme');
    } catch (e) {
        console.log('Local Storage not available');
    }
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
}

themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    try {
        localStorage.setItem('asmr_theme', isDark ? 'dark' : 'light');
    } catch (e) {
        console.log('Local Storage save failed');
    }
});

// 오늘의 명언 기능
function updateQuote() {
    const quoteEl = document.getElementById('daily-quote');
    if (!quoteEl) return;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = `"${randomQuote}"`;
}

// 오디오 비주얼라이저
function initVisualizer() {
    const canvas = document.getElementById('visualizer');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.3; // 화면 하단 30%
    }
    window.addEventListener('resize', resize);
    resize();

    function draw() {
        requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] / 2; // 높이 조절

            // 그라데이션 색상 (테마에 따라 다르게 할 수도 있음)
            const isDark = document.documentElement.classList.contains('dark');
            const r = barHeight + (25 * (i / bufferLength));
            const g = 250 * (i / bufferLength);
            const b = 50;

            ctx.fillStyle = isDark 
                ? `rgba(${r},${g},${b}, 0.5)` 
                : `rgba(${r},${g},${b}, 0.3)`;
            
            // 부드러운 곡선 형태를 위해 roundRect 사용하거나 단순 rect
            ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

            x += barWidth + 1;
        }
    }
    draw();
}

// 언어 변경 기능
langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.add('hidden');
    }
});

document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentLang = e.target.getAttribute('data-lang');
        updateLanguage();
        langMenu.classList.add('hidden');
    });
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

    // 언어 버튼 텍스트 업데이트
    const langNames = {
        ko: '한국어',
        en: 'English',
        ja: '日本語',
        zh: '中文',
        es: 'Español'
    };
    const langSpan = langBtn.querySelector('span');
    if (langSpan) {
        langSpan.textContent = langNames[currentLang];
    }
}

lucide.createIcons();
updateLanguage();
initTheme();
updateQuote();
initVisualizer();