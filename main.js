// 소리 데이터 설정
const soundsData = [
    { id: 'rain', name: '빗소리', icon: 'cloud-rain', file: 'rain.mp3' },
    { id: 'fire', name: '장작불', icon: 'flame', file: 'fire.mp3' },
    { id: 'keyboard', name: '타자 소리', icon: 'keyboard', file: 'keyboard.mp3' }
];

const soundGrid = document.getElementById('sound-grid');
const audioPlayers = {};

// 카드 생성 및 오디오 초기화
soundsData.forEach(sound => {
    const card = document.createElement('div');
    card.className = 'w-full sm:w-72 bg-slate-800 border-2 border-transparent rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:bg-slate-700';
    card.id = `card-${sound.id}`;
    card.innerHTML = `
        <div class="text-blue-400 mb-2"><i data-lucide="${sound.icon}" width="48" height="48"></i></div>
        <h3 class="text-xl font-bold">${sound.name}</h3>
        <div class="w-full flex flex-col gap-3 mt-2">
            <button id="btn-${sound.id}" class="w-full py-2 rounded-lg bg-slate-600 hover:bg-blue-500 text-white font-medium transition-colors flex justify-center items-center gap-2">
                <i data-lucide="play" width="16"></i> 재생
            </button>
            <div class="flex items-center gap-2">
                <i data-lucide="volume-2" width="16" class="text-slate-400"></i>
                <input type="range" id="vol-${sound.id}" min="0" max="1" step="0.01" value="0.5">
            </div>
        </div>`;
    soundGrid.appendChild(card);

    const audio = new Audio(sound.file);
    audio.loop = true;
    audio.volume = 0.5;
    audioPlayers[sound.id] = { audio, isPlaying: false };

    const playBtn = card.querySelector(`#btn-${sound.id}`);
    const volSlider = card.querySelector(`#vol-${sound.id}`);

    playBtn.addEventListener('click', () => toggleSound(sound.id));
    volSlider.addEventListener('input', (e) => audio.volume = e.target.value);
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
    
    if (isPlaying) {
        btn.className = 'w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors flex justify-center items-center gap-2';
        btn.innerHTML = `<i data-lucide="pause" width="16"></i> 정지`;
        card.classList.add('card-active');
    } else {
        btn.className = 'w-full py-2 rounded-lg bg-slate-600 hover:bg-blue-500 text-white font-medium transition-colors flex justify-center items-center gap-2';
        btn.innerHTML = `<i data-lucide="play" width="16"></i> 재생`;
        card.classList.remove('card-active');
    }
}

lucide.createIcons();