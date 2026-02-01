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

// 추천 믹스 데이터
const soundMixes = [
    { id: 'rainy_cabin', icon: 'home', sounds: { rain: 0.7, fire: 0.4 } },
    { id: 'beach_reading', icon: 'book-open', sounds: { wave: 0.6, book: 0.3, bird: 0.2 } },
    { id: 'night_studio', icon: 'moon', sounds: { rain: 0.5, keyboard: 0.8 } }
];

// 다국어 데이터 (모든 페이지 키 복구 완료)
const translations = {
    ko: {
        // 공통 (Common)
        title: "My ASMR Space",
        subtitle: "나만의 소리로 휴식하세요.",
        site_desc: "이 사이트는 사용자에게 무료로 휴식과 집중을 위한 소리를 제공합니다. 웹사이트와 애플리케이션 어디서든 자유롭게 이용할 수 있습니다.",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        
        // 버튼 & 레이블 (Buttons & Labels)
        play: "재생",
        stop: "정지",
        stop_all: "일괄 정지",
        now_playing: "재생 중",
        theme_dark: "다크 모드",
        theme_light: "라이트 모드",
        btn_home: "홈으로 가기",
        btn_msg: "메시지 보내기",
        send_btn: "보내기",
        email_label: "이메일",
        email_placeholder: "답변 받으실 이메일 주소",
        msg_label: "메시지",
        msg_placeholder: "문의하실 내용을 적어주세요.",
        my_saved: "즐겨찾기",
        mix_title: "추천 사운드 믹스",
        mix_rainy_cabin: "비 오는 오두막",
        mix_beach_reading: "해변의 독서",
        mix_night_studio: "심야의 작업실",
        btn_save_mix: "현재 믹스 저장",
        my_mix_title: "나만의 믹스",
        prompt_mix_name: "믹스 이름을 입력하세요:",
        alert_no_sound: "재생 중인 소리가 없습니다.",
        no_custom_mixes: "저장된 믹스가 없습니다.",
        btn_confirm: "확인",
        btn_cancel: "취소",
        msg_delete_confirm: "정말 삭제하시겠습니까?",
        search_placeholder: "믹스 검색...",
        msg_saved: "저장되었습니다.",
        
        // 메뉴 & 링크 (Menu & Links)
        sitemap: "사이트맵",
        contact_link: "문의하기",
        privacy: "개인정보처리방침",
        
        // 푸터 (Footer)
        footer_about: "제작자 소개",
        footer_science: "ASMR과 과학",
        footer_guide: "이용 가이드",
        footer_glossary: "용어 사전",
        footer_faq: "FAQ",
        footer_notice: "공지사항",
        
        // 페이지 제목 (Page Titles) - 복구됨
        about_title: "👨‍💻 제작자 소개 (About Us)",
        science_title: "🧠 ASMR과 소리의 과학",
        guide_title: "🎧 올바른 청취 방법 및 사용 가이드",
        glossary_title: "📖 ASMR 용어 사전",
        faq_title: "❓ 자주 묻는 질문 (FAQ)",
        notice_title: "📢 공지사항 및 업데이트",
        sitemap_title: "🗺️ 사이트맵 (Sitemap)",
        privacy_title: "개인정보처리방침",
        contact_title: "버그 제보 및 문의",

        // 태그 (Tags)
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

        // 소리 이름 (Sound Names)
        sound_rain: "빗소리",
        sound_fire: "장작불",
        sound_bird: "새소리",
        sound_book: "책 넘기는 소리",
        sound_wave: "파도 소리",
        sound_keyboard: "타자 소리",
        sound_bug: "풀벌레 소리",

        // 메인 페이지 (Home)
        asmr_title: "ASMR과 백색소음이란?",
        asmr_desc: "ASMR(Autonomous Sensory Meridian Response)은 뇌를 자극해 심리적인 안정을 유도하는 소리입니다. 빗소리, 장작 타는 소리, 타자 소리와 같은 백색소음(White Noise)은 주변의 거슬리는 소음을 덮어주고 집중력을 향상시키거나 수면을 돕는 데 효과적입니다.",
        tips_title: "My ASMR Space 활용 팁",
        tip_focus: "<strong>집중이 필요할 때:</strong> 타자 소리와 같은 규칙적인 소음을 활용해보세요.",
        tip_relax: "<strong>휴식이 필요할 때:</strong> 빗소리와 장작불 소리로 아늑한 분위기를 만들어보세요.",
        tip_sleep: "<strong>수면 유도:</strong> 볼륨을 낮추고 자연의 소리에 귀를 기울여보세요.",

        // 소개 페이지 (About)
        about_quote: "\"복잡한 세상 속, 작은 쉼표를 만들고 싶었습니다.\"",
        about_intro: "안녕하세요, <strong>My ASMR Space</strong>를 개발한 박지우입니다.<br>저는 웹 개발을 공부하고 있는 학생이자, 늦은 밤까지 모니터 앞을 지키는 예비 개발자입니다.",
        about_story: "코딩 공부를 하다 보면 머리가 복잡해지고 집중력이 흐트러질 때가 많았습니다. 그럴 때마다 저는 유튜브에서 빗소리나 장작 타는 소리를 찾아 듣곤 했습니다. 하지만 매번 영상을 검색해야 하고, 중간에 나오는 광고 소리에 깜짝 놀라 집중이 깨지는 경험을 자주 했습니다. \"광고 없이, 내가 원하는 소리만 골라서 섞어 들을 수 있는 심플한 웹사이트는 없을까?\"라는 단순한 호기심이 이 프로젝트의 시작이었습니다.",
        about_phil_title: "개발 철학: Simple & Relax",
        about_phil_desc: "이 사이트를 만들면서 가장 중요하게 생각한 것은 <strong>'단순함'</strong>입니다. 복잡한 설정이나 설치 과정 없이, 접속하자마자 바로 휴식을 취할 수 있어야 한다고 생각했습니다.<br>또한, 사용자가 직접 소리의 볼륨을 조절하여 자신만의 공간을 만들 수 있도록 '믹싱 기능'에 집중했습니다. 누군가에게는 집중을 위한 독서실이 되고, 누군가에게는 잠들기 전의 아늑한 침실이 되기를 바랍니다.",
        about_goal_title: "앞으로의 목표",
        about_goal_desc: "My ASMR Space는 아직 성장 중입니다. 사용자분들이 요청해주시는 다양한 소리(카페 소음, 숲속 소리 등)를 지속적으로 업데이트하고, 오프라인 지원이나 명상 가이드 같은 기능들도 추가해 나갈 예정입니다.<br><br>여러분의 하루에 이 작은 웹사이트가 조금이나마 위로와 휴식이 되었으면 좋겠습니다. 이용해 주셔서 진심으로 감사합니다.",
        about_cheer: "개발자에게 응원의 메시지를 보내주세요!",

        // 과학 페이지 (Science)
        science_sec1_title: "01. ASMR은 뇌를 어떻게 자극하는가?",
        science_sec1_desc: "ASMR은 단순한 기분 탓이 아닌, 실제 뇌파의 변화를 동반하는 생리적 현상입니다.",
        science_sec1_list1: "<strong>부교감 신경 활성화:</strong> ASMR은 심박수를 낮추고 피부 전도도를 변화시켜 스트레스 호르몬인 코르티솔 수치를 감소시킵니다.",
        science_sec1_list2: "<strong>공감각(Synesthesia)과의 연관성:</strong> 소리를 들을 때 촉각(팅글)을 느끼는 현상은 공감각적 지각 능력과 관련이 있습니다.",
        science_sec1_list3: "<strong>사회적 유대감 호르몬:</strong> 누군가 곁에서 속삭여주는 듯한 소리는 뇌에서 '옥시토신'과 '도파민' 분비를 촉진합니다.",
        science_sec2_title: "02. 백색소음 vs 핑크 노이즈",
        science_sec2_desc: "소음에도 색깔이 있습니다. 주파수에 따라 효과가 다릅니다.",
        science_white_title: "⚪ 백색소음 (White Noise)",
        science_white_desc: "모든 주파수에서 동일한 강도. 주변 소음 차단 및 집중력 향상.",
        science_pink_title: "🌸 핑크 노이즈 (Pink Noise)",
        science_pink_desc: "저음역대가 강조된 부드러운 소리. 수면 유도 및 휴식.",
        science_sec3_title: "03. 마스킹 효과",
        science_sec3_desc: "백색소음은 주변의 거슬리는 소음을 덮어주어 몰입을 돕습니다.",
        btn_science_listen: "과학적인 힐링 사운드 듣기",

        // 가이드 페이지 (Guide)
        guide_sec1_title: "⚠️ 청력 보호를 위한 주의사항",
        guide_sec1_list1: "적정 볼륨 유지 (최대 60% 이하)",
        guide_sec1_list2: "60-60 법칙 (60분 청취 후 휴식)",
        guide_sec1_list3: "수면 시 타이머 사용 권장",
        guide_sec2_title: "💡 My ASMR Space 200% 활용하기",
        guide_mix_title: "1. 나만의 소리 조합 찾기",
        guide_mix_desc: "여러 소리를 섞어 풍성한 공간감을 느껴보세요.",
        guide_mix_list1: "<strong>비 오는 오두막:</strong> 빗소리(70%) + 장작불(40%)",
        guide_mix_list2: "<strong>해변의 독서:</strong> 파도 소리(60%) + 책 넘기는 소리(30%) + 새소리(20%)",
        guide_mix_list3: "<strong>심야의 작업실:</strong> 빗소리(50%) + 타자 소리(80%)",
        guide_pomo_title: "2. 뽀모도로 기법",
        guide_pomo_desc: "공부나 업무를 할 때 타이머 기능을 활용해보세요. 25분 또는 30분 타이머를 설정하고 타자 소리나 빗소리를 배경음으로 켜두세요. 소리가 멈추면 5분간 휴식을 취합니다. 백색소음은 주변 소음을 차단하고 몰입도를 높여줍니다.",
        guide_meditation_title: "3. 명상과 호흡",
        guide_meditation_desc: "파도 소리나 빗소리는 명상 호흡의 훌륭한 가이드가 됩니다. 파도가 밀려올 때 숨을 들이마시고, 나갈 때 내뱉어보세요. 자연의 리듬에 맞춰 호흡하면 심박수가 안정되고 스트레스가 감소합니다.",
        guide_mobile_title: "📱 모바일 및 오프라인 사용",
        guide_mobile_desc: "모바일 애플리케이션과 웹 브라우저(Chrome, Safari 등) 어디서든 완벽하게 작동합니다. 오디오 파일은 데이터 절약을 위해 최적화되어 있으며, 한 번 로드되면 캐시에 저장되어 데이터 소모를 최소화합니다.<br><br><strong>Tip:</strong> 아이폰(iOS) 사용자는 제어 센터에서 백그라운드 재생을 지원합니다. 화면을 끄고 소리만 들으며 배터리를 절약하세요.",
        btn_guide_listen: "나만의 소리 들으러 가기",

        // 용어 사전 (Glossary) - 상세 복구됨
        glossary_asmr_title: "ASMR (Autonomous Sensory Meridian Response)",
        glossary_asmr_desc: "'자율 감각 쾌락 반응'이라고 번역됩니다. 시각적, 청각적, 촉각적 자극에 반응하여 나타나는 심리적 안정감이나 쾌감, 따끔거리는 느낌(Tingle)을 의미합니다. 주로 수면 유도, 스트레스 해소, 집중력 향상 등을 위해 활용됩니다.",
        glossary_white_title: "백색소음 (White Noise)",
        glossary_white_desc: "넓은 주파수 대역에서 거의 일정한 주파수 스펙트럼을 가지는 신호로, 특정한 청각 패턴을 갖지 않아 귀에 쉽게 익숙해지는 소음입니다.",
        glossary_trigger_title: "트리거 (Trigger)",
        glossary_trigger_desc: "ASMR 반응을 유도하는 자극제를 말합니다. 사람마다 선호하는 트리거가 다르며, 대표적인 청각적 트리거로는 속삭이는 소리, 두드리는 소리 등이 있습니다.",
        glossary_tingle_title: "팅글 (Tingle)",
        glossary_tingle_desc: "ASMR을 느낄 때 머리 뒤쪽이나 등, 어깨 등을 타고 내려오는 기분 좋은 소름이나 간질거리는 느낌을 말합니다.",
        glossary_binaural_title: "바이노럴 비트 (Binaural Beats)",
        glossary_binaural_desc: "양쪽 귀에 서로 다른 주파수의 소리를 들려주었을 때, 뇌가 그 주파수의 차이를 인식하여 특정 뇌파를 유도하는 현상입니다.",
        glossary_pink_title: "핑크 노이즈 (Pink Noise)",
        glossary_pink_desc: "백색소음과 유사하지만, 저음역대의 소리가 더 강조된 소음입니다. 빗소리나 낙엽 밟는 소리 등이 이에 해당합니다.",
        glossary_notalking_title: "노 토킹 (No Talking)",
        glossary_notalking_desc: "말소리 없이 오직 사물이나 자연의 소리만으로 구성된 ASMR 콘텐츠를 의미합니다.",

        // 공지사항 (Notice)
        notice_v2_title: "v1.2.0 플레이어 바 업데이트",
        notice_v2_date: "2026.02.01",
        notice_v2_desc: "플레이어 바 디자인 및 편의성 개선",
        notice_v2_list1: "플로팅 글래스 디자인 및 개별 볼륨 조절",
        notice_v2_list2: "플레이어 바 내 즐겨찾기 및 UI 최적화",
        notice_v1_title: "v1.1.0 통합 업데이트",
        notice_v1_date: "2026.01.31",
        notice_v1_desc: "주요 기능 통합 및 개선",
        notice_v1_list1: "다국어 지원 및 슬립 타이머 추가",
        notice_v1_list2: "풀벌레 소리 추가 및 UI 개선",
        notice_open_title: "My ASMR Space 오픈!",
        notice_open_date: "2026.01.30",
        notice_open_desc: "힐링을 위한 무료 ASMR 사이트 오픈",
        notice_open_list_title: "기본 소리 제공 (빗소리, 장작불 등)",

        // FAQ & Privacy & Sitemap
        faq_q1: "Q. 이 사이트는 무료인가요?",
        faq_a1: "네, 100% 무료입니다. 별도의 회원가입 없이 이용 가능합니다.",
        faq_q2: "Q. 애플리케이션(App)으로도 출시되어 있나요?",
        faq_a2: "네, 안드로이드 애플리케이션과 웹 브라우저 모두 지원합니다. 애플리케이션을 설치하여 이용하거나, 별도의 설치 없이 웹에서 바로 이용하실 수도 있습니다.",
        faq_q3: "Q. 오프라인에서도 재생이 가능한가요?",
        faq_a3: "기본적으로 인터넷 연결이 필요합니다. 하지만 웹 브라우저의 캐시 기능을 통해 한 번 재생했던 소리는 일시적으로 데이터 소모 없이 재생될 수 있습니다. 완벽한 오프라인 재생 기능은 추후 업데이트를 통해 지원할 예정입니다.",
        faq_q4: "Q. 소리가 중간에 끊겨요.",
        faq_a4: "모바일 기기의 경우 배터리 절약 모드가 활성화되어 있거나, 화면이 꺼졌을 때 브라우저의 백그라운드 재생이 제한될 수 있습니다. 또한 인터넷 연결 상태가 불안정할 경우 로딩이 지연될 수 있습니다. 문제가 지속된다면 페이지를 새로고침하거나 브라우저를 최신 버전으로 업데이트해 보시기 바랍니다.",
        faq_q5: "Q. 원하는 소리를 추가해 줄 수 있나요?",
        faq_a5: "물론입니다! 사용자분들의 의견은 언제나 환영합니다. 메인 페이지 하단의 'ASMR 추가 문의' 폼을 통해 원하시는 소리(예: 카페 소음, 기차 소리 등)를 남겨주시면, 저작권 문제가 없는 고품질 음원을 찾아 업데이트에 적극 반영하겠습니다.",
        faq_q6: "Q. 이 소리들을 유튜브 영상 등에 사용해도 되나요?",
        faq_a6: "본 사이트에서 제공하는 소리들은 오픈 라이선스 음원이거나 자체 편집된 음원입니다. 개인적인 감상 목적으로는 자유롭게 사용 가능하나, 음원 파일을 직접 추출하여 재배포하거나 상업적으로 판매하는 행위는 금지됩니다. 방송이나 영상 배경음으로 사용을 원하실 경우 별도 문의 부탁드립니다.",
        faq_more_questions: "더 궁금한 점이 있으신가요?",
        privacy_intro: "My ASMR Space(이하 \"사이트\")는 이용자의 개인정보를 중요시하며, \"정보통신망 이용촉진 및 정보보호\"에 관한 법률을 준수하고 있습니다.",
        privacy_sec1_title: "1. 개인정보 수집",
        privacy_sec1_desc: "별도 회원가입 없이 이용 가능하며 개인정보를 요구하지 않습니다.",
        privacy_sec2_title: "2. 쿠키 사용",
        privacy_sec2_desc: "구글 애드센스 광고 게재를 위해 쿠키가 사용될 수 있습니다.",
        privacy_list1: "사용자는 구글의 광고 설정 페이지에서 맞춤형 광고를 위한 쿠키 사용을 거부할 수 있습니다.",
        privacy_list2: "또는 www.aboutads.info를 방문하여 제3자 공급업체의 맞춤형 광고 쿠키 사용을 거부할 수 있습니다.",
        sitemap_menu_title: "메인 메뉴",
        sitemap_info_title: "정보 및 가이드",

        // 명언 (Quotes)
        quotes: [
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
        ]
    },
    en: {
        // Common
        title: "My ASMR Space",
        subtitle: "Relax with your own sounds.",
        site_desc: "Free sounds for relaxation and focus. Available on both Web and App.",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        play: "Play",
        stop: "Stop",
        stop_all: "Stop All",
        now_playing: "Now Playing",
        theme_dark: "Dark Mode",
        theme_light: "Light Mode",
        btn_home: "Go Home",
        btn_msg: "Send Message",
        send_btn: "Send",
        email_label: "Email",
        email_placeholder: "Your email address",
        msg_label: "Message",
        msg_placeholder: "Your message here",
        my_saved: "Favorites",
        mix_title: "Recommended Mixes",
        mix_rainy_cabin: "Rainy Cabin",
        mix_beach_reading: "Beach Reading",
        mix_night_studio: "Late Night Studio",
        btn_save_mix: "Save Current Mix",
        my_mix_title: "My Custom Mixes",
        prompt_mix_name: "Enter mix name:",
        alert_no_sound: "No sounds are playing.",
        no_custom_mixes: "No saved mixes.",
        btn_confirm: "Confirm",
        btn_cancel: "Cancel",
        msg_delete_confirm: "Are you sure you want to delete?",
        search_placeholder: "Search mixes...",
        msg_saved: "Saved successfully.",
        sitemap: "Sitemap",
        contact_link: "Contact Us",
        privacy: "Privacy Policy",
        footer_about: "About Us",
        footer_science: "Science of ASMR",
        footer_guide: "User Guide",
        footer_glossary: "Glossary",
        footer_faq: "FAQ",
        footer_notice: "Notice",
        
        // Page Titles
        about_title: "👨‍💻 About Us",
        science_title: "🧠 Science of ASMR",
        guide_title: "🎧 User Guide",
        glossary_title: "📖 ASMR Glossary",
        faq_title: "❓ FAQ",
        notice_title: "📢 Notice & Updates",
        sitemap_title: "🗺️ Sitemap",
        privacy_title: "Privacy Policy",
        contact_title: "Bug Report & Inquiry",

        // Tags & Sounds
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
        sound_rain: "Rain",
        sound_fire: "Fire",
        sound_bird: "Birds",
        sound_book: "Page Turning",
        sound_wave: "Waves",
        sound_keyboard: "Typing",
        sound_bug: "Crickets",

        // Home
        asmr_title: "What is ASMR & White Noise?",
        asmr_desc: "ASMR triggers psychological stability. White noise like rain or typing helps cover distracting noises, improving concentration and sleep.",
        tips_title: "Tips for My ASMR Space",
        tip_focus: "<strong>For Focus:</strong> Try regular sounds like typing.",
        tip_relax: "<strong>For Relax:</strong> Use rain and fire sounds.",
        tip_sleep: "<strong>For Sleep:</strong> Lower volume and listen to nature.",

        // About
        about_quote: "\"I wanted to create a small comma in a complex world.\"",
        about_intro: "Hello, I'm Park Jiwoo, the developer of <strong>My ASMR Space</strong>.<br>I am a student studying web development and an aspiring developer who stays up late in front of the monitor.",
        about_story: "While studying coding, my head often became cluttered and I lost focus. Whenever that happened, I would listen to rain or fire sounds on YouTube. However, I often had to search for videos each time, and my concentration was broken by surprise ad sounds. The simple curiosity, \"Isn't there a simple website where I can mix only the sounds I want without ads?\" was the beginning of this project.",
        about_phil_title: "Philosophy: Simple & Relax",
        about_phil_desc: "The most important thing I considered while creating this site was <strong>'simplicity'</strong>. I believed that one should be able to relax immediately upon access, without complex settings or installation processes.<br>Also, I focused on the 'mixing feature' so that users can create their own space by adjusting the volume of the sounds themselves. I hope it becomes a study room for some, and a cozy bedroom before sleep for others.",
        about_goal_title: "Future Goals",
        about_goal_desc: "My ASMR Space is still growing. I plan to continuously update various sounds (like cafe noise, forest sounds, etc.) requested by users, and add features like offline support or meditation guides.<br><br>I hope this small website can bring a little comfort and rest to your day. Thank you sincerely for using it.",
        about_cheer: "Send a message of support to the developer!",

        // Science
        science_sec1_title: "01. How ASMR stimulates the brain?",
        science_sec1_desc: "ASMR is a physiological phenomenon accompanied by actual brain wave changes, not just a mood.",
        science_sec1_list1: "<strong>Parasympathetic activation:</strong> ASMR lowers heart rate and reduces cortisol levels.",
        science_sec1_list2: "<strong>Synesthesia connection:</strong> Feeling tingle when hearing sound is related to synesthetic perception.",
        science_sec1_list3: "<strong>Social bonding hormones:</strong> Whispering sounds promote oxytocin and dopamine secretion.",
        science_sec2_title: "02. White Noise vs Pink Noise",
        science_sec2_desc: "Noise has colors. Effects vary by frequency.",
        science_white_title: "⚪ White Noise",
        science_white_desc: "Equal intensity at all frequencies. Blocks noise and improves focus.",
        science_pink_title: "🌸 Pink Noise",
        science_pink_desc: "Softer sound emphasizing lower frequencies. Induces sleep and relaxation.",
        science_sec3_title: "03. Masking Effect",
        science_sec3_desc: "White noise covers distracting noises to help you immerse.",
        btn_science_listen: "Listen to scientific healing sounds",

        // Guide
        guide_sec1_title: "⚠️ Precautions for hearing protection",
        guide_sec1_list1: "Maintain moderate volume (below 60%)",
        guide_sec1_list2: "60-60 Rule (Rest after 60 mins)",
        guide_sec1_list3: "Use timer when sleeping",
        guide_sec2_title: "💡 Utilizing My ASMR Space 200%",
        guide_mix_title: "1. Sound Mixing",
        guide_mix_desc: "Mix sounds to feel a richer sense of space.",
        guide_mix_list1: "<strong>Rainy Cabin:</strong> Rain(70%) + Fire(40%)",
        guide_mix_list2: "<strong>Beach Reading:</strong> Waves(60%) + Page Turning(30%) + Birds(20%)",
        guide_mix_list3: "<strong>Late Night Studio:</strong> Rain(50%) + Typing(80%)",
        guide_pomo_title: "2. Pomodoro Technique",
        guide_pomo_desc: "Try using the timer function when studying or working. Set a timer for 25 or 30 minutes and turn on typing or rain sounds as background noise. When the sound stops, take a 5-minute break. White noise blocks ambient noise and improves immersion.",
        guide_meditation_title: "3. Meditation and Breathing",
        guide_meditation_desc: "Wave or rain sounds are great guides for meditation breathing. Inhale when the wave comes in, exhale when it goes out. Breathing to the rhythm of nature stabilizes heart rate and reduces stress.",
        guide_mobile_title: "📱 Mobile & Offline Use",
        guide_mobile_desc: "Works perfectly on both the mobile app and web browsers (Chrome, Safari, etc.). Audio files are optimized to save data, and once loaded, sounds are stored in the cache to minimize data consumption.<br><br><strong>Tip:</strong> For iPhone (iOS) users, background playback is supported in the Control Center. Turn off the screen and listen to the sound to save battery.",
        btn_guide_listen: "Go listen to my sounds",

        // Glossary
        glossary_asmr_title: "ASMR (Autonomous Sensory Meridian Response)",
        glossary_asmr_desc: "Translated as Autonomous Sensory Meridian Response. It refers to the psychological stability, pleasure, or tingling sensation felt in response to visual, auditory, or tactile stimuli. It is mainly used for sleep induction, stress relief, and concentration improvement.",
        glossary_white_title: "White Noise",
        glossary_white_desc: "A signal with almost constant frequency spectrum over a wide frequency band. It masks annoying ambient noises (masking effect), making it effective for improving concentration and inducing sleep. Examples include rain and wave sounds.",
        glossary_trigger_title: "Trigger",
        glossary_trigger_desc: "Stimuli that induce ASMR reactions. Triggers vary by person, and common auditory triggers include whispering, tapping, scratching, and nature sounds. Finding the right trigger for you is important.",
        glossary_tingle_title: "Tingle",
        glossary_tingle_desc: "A pleasant goosebump or tickling sensation that runs down the back of the head, back, or shoulders when feeling ASMR. This sensation provides psychological stability and activates the parasympathetic nervous system to induce relaxation.",
        glossary_binaural_title: "Binaural Beats",
        glossary_binaural_desc: "A phenomenon where the brain perceives the difference in frequency when different frequencies are played in each ear, inducing specific brain waves. For example, it can induce alpha waves for relaxation.",
        glossary_pink_title: "Pink Noise",
        glossary_pink_desc: "Similar to white noise, but with emphasized low-frequency sounds. Rain sounds or leaves crunching are examples. It feels softer and more natural than white noise, making it effective for sleep induction.",
        glossary_notalking_title: "No Talking",
        glossary_notalking_desc: "ASMR content consisting only of object or nature sounds without speech. Suitable for users who are sensitive to human voices or want to focus purely on sound without processing linguistic information.",

        // Notice, FAQ, etc.
        notice_v2_title: "v1.2.0 Player Bar Major Update",
        notice_v2_date: "2026.02.01",
        notice_v2_desc: "Player bar design and usability improvements",
        notice_v2_list1: "Floating glass design & Individual volume control",
        notice_v2_list2: "Favorites in player bar & UI optimization",
        notice_v1_title: "v1.1.0 Integrated Update",
        notice_v1_date: "2026.01.31",
        notice_v1_desc: "Major features integration & improvement",
        notice_v1_list1: "Multi-language support & Sleep Timer",
        notice_v1_list2: "Crickets sound added & UI improvements",
        notice_open_title: "My ASMR Space Open!",
        notice_open_date: "2026.01.30",
        notice_open_desc: "Free ASMR site launch",
        notice_open_list_title: "Basic sounds provided (Rain, Fire, etc.)",
        faq_q1: "Q. Is this site free to use?",
        faq_a1: "Yes, it is 100% free. You can use it without signing up.",
        faq_q2: "Q. Is there an app version available?",
        faq_a2: "Yes, it is available on both the Android App and Web browsers. You can install the app or use it directly on the web.",
        faq_q3: "Q. Can I play sounds offline?",
        faq_a3: "An internet connection is generally required. However, thanks to browser caching, sounds you have previously played may temporarily work without additional data usage. Full offline playback support is planned in a future update.",
        faq_q4: "Q. The sound keeps stopping or cutting out.",
        faq_a4: "On mobile devices, battery saver mode or background playback restrictions may interrupt audio when the screen is off. Unstable internet connections can also cause delays. If the issue persists, try refreshing the page or updating your browser to the latest version.",
        faq_q5: "Q. Can you add new sounds on request?",
        faq_a5: "Of course! We always welcome user suggestions. Please submit your requested sounds (e.g., café noise, train sounds, etc.) through the 'ASMR Request' form at the bottom of the main page. We will update high-quality audio that is free of copyright issues whenever possible.",
        faq_q6: "Q. Can I use these sounds in YouTube videos or other content?",
        faq_a6: "The sounds provided on this site are either open-license or custom-edited audio. You are free to use them for personal listening, but extracting and redistributing the audio files or selling them commercially is not allowed. If you wish to use them for broadcasts or video background music, please contact us separately.",
        faq_more_questions: "Do you have more questions?",

        privacy_intro: "My ASMR Space (hereinafter referred to as the \"Site\") values users' personal information and complies with the Act on Promotion of Information and Communications Network Utilization and Information Protection.",
        privacy_sec1_title: "1. Personal Data Collection",
        privacy_sec1_desc: "No personal data required.",
        privacy_sec2_title: "2. Cookies",
        privacy_sec2_desc: "Cookies may be used for Google AdSense.",
        privacy_list1: "Users can opt out of personalized advertising in Google's Ad Settings.",
        privacy_list2: "Or visit www.aboutads.info to opt out of third-party vendor's use of cookies.",
        sitemap_menu_title: "Main Menu",
        sitemap_info_title: "Information & Guide",

        quotes: [
            "It's okay to rest for a while. You are doing well enough.",
            "Live today at your own pace, comfortably.",
            "A small rest becomes great energy.",
            "The world is beautiful enough just with your existence.",
            "Put your worries aside for a moment and focus on the sound.",
            "Tomorrow will shine brighter than today.",
            "Comfort your tired heart. You did well today.",
            "Happiness is frequency, not intensity. Feel the small happiness.",
            "Take a deep breath and exhale slowly.",
            "It's okay to be a little slow. You're already doing great.",
            "Just by enduring today, you are a truly amazing person.",
            "Resting is also part of growth. It's not stopping, it's preparing.",
            "It's okay not to be perfect. You are precious enough as you are.",
            "You don't have to rush. You have your own speed.",
            "Even a small step, you who don't stop are already cool.",
            "Today's best will be tomorrow's pride.",
            "It's okay to be a little kinder to yourself.",
            "The times you endured are already the answer.",
            "Even here, you are continuing to grow."
        ]
    },
    ja: {
        title: "My ASMR Space",
        subtitle: "自分だけの音でリラックス。",
        site_desc: "リラックスと集中のための無料サウンドサービスです。ウェブとアプリの両方でご利用いただけます。",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        play: "再生",
        stop: "停止",
        stop_all: "全停止",
        now_playing: "再生中",
        theme_dark: "ダークモード",
        theme_light: "ライトモード",
        btn_home: "ホームへ",
        btn_msg: "メッセージを送る",
        send_btn: "送信",
        email_label: "メール",
        email_placeholder: "返信先メールアドレス",
        msg_label: "メッセージ",
        msg_placeholder: "お問い合わせ内容",
        my_saved: "お気に入り",
        mix_title: "おすすめミックス",
        mix_rainy_cabin: "雨の小屋",
        mix_beach_reading: "海辺の読書",
        mix_night_studio: "深夜の作業室",
        btn_save_mix: "現在のミックスを保存",
        my_mix_title: "マイミックス",
        prompt_mix_name: "ミックス名を入力してください：",
        alert_no_sound: "再生中の音がありません。",
        no_custom_mixes: "保存されたミックスはありません。",
        btn_confirm: "確認",
        btn_cancel: "キャンセル",
        msg_delete_confirm: "本当に削除しますか？",
        search_placeholder: "ミックスを検索...",
        msg_saved: "保存しました。",
        sitemap: "サイトマップ",
        contact_link: "お問い合わせ",
        privacy: "プライバシーポリシー",
        footer_about: "制作者紹介",
        footer_science: "ASMRの科学",
        footer_guide: "利用ガイド",
        footer_glossary: "用語辞典",
        footer_faq: "FAQ",
        footer_notice: "お知らせ",
        
        about_title: "👨‍💻 制作者紹介",
        science_title: "🧠 ASMRの科学",
        guide_title: "🎧 利用ガイド",
        glossary_title: "📖 ASMR用語辞典",
        faq_title: "❓ よくある質問 (FAQ)",
        notice_title: "📢 お知らせ",
        sitemap_title: "🗺️ サイトマップ",
        privacy_title: "プライバシーポリシー",
        contact_title: "バグ報告・お問い合わせ",

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
        sound_rain: "雨音",
        sound_fire: "焚き火",
        sound_bird: "鳥のさえずり",
        sound_book: "本をめくる音",
        sound_wave: "波の音",
        sound_keyboard: "タイピング",
        sound_bug: "虫の音",

        asmr_title: "ASMRとホワイトノイズとは？",
        asmr_desc: "ASMRは心理的な安定を誘導する音です。雨音や焚き火などのホワイトノイズは、騒音を遮断し、集中力や睡眠を助けます。",
        tips_title: "活用法",
        tip_focus: "<strong>集中時：</strong> タイピング音などを活用。",
        tip_relax: "<strong>リラックス：</strong> 雨音と焚き火で落ち着く。",
        tip_sleep: "<strong>睡眠：</strong> 音量を下げて自然音を。",

        about_quote: "「複雑な世の中で、小さな休息を作りたかったです。」",
        about_intro: "こんにちは、<strong>My ASMR Space</strong>を開発したパク・ジウです。ウェブ開発を勉強している学生です。",
        about_story: "広告なしで、好きな音だけを選んでミックスできるシンプルなウェブサイトを作りたかったです。",
        about_phil_title: "開発哲学：Simple & Relax",
        about_phil_desc: "最も重要なのは「シンプルさ」です。複雑な設定なしですぐにリラックスできるべきです。",
        about_goal_title: "今後の目標",
        about_goal_desc: "ユーザーの皆様のリクエストを反映し、様々な音と機能を継続的にアップデートする予定です。",
        about_cheer: "開発者に応援メッセージを送ってください！",

        science_sec1_title: "01. ASMRは脳をどう刺激するか？",
        science_sec1_desc: "ASMRは単なる気分ではなく、実際の脳波の変化を伴う生理的現象です。",
        science_sec1_list1: "<strong>副交感神経活性化：</strong> ASMRは心拍数を下げ、コルチゾール値を減少させます。",
        science_sec1_list2: "<strong>共感覚との関連性：</strong> 音を聞いて触覚を感じる現象は共感覚的知覚能力と関連があります。",
        science_sec1_list3: "<strong>社会的絆ホルモン：</strong> ささやき声はオキシトシンとドーパミンの分泌を促進します。",
        science_sec2_title: "02. ホワイトノイズ vs ピンクノイズ",
        science_sec2_desc: "ノイズにも色があります。周波数によって効果が異なります。",
        science_white_title: "⚪ ホワイトノイズ",
        science_white_desc: "全周波数で均一な強度。騒音遮断および集中力向上。",
        science_pink_title: "🌸 ピンクノイズ",
        science_pink_desc: "低音域が強調された柔らかい音。睡眠誘導およびリラックス。",
        science_sec3_title: "03. マスキング効果",
        science_sec3_desc: "ホワイトノイズは周囲の気になる騒音を覆い隠し、没入を助けます。",
        btn_science_listen: "科学的なヒーリングサウンドを聴く",

        guide_sec1_title: "⚠️ 聴覚保護のための注意事項",
        guide_sec1_list1: "適正音量を維持（最大60%以下）",
        guide_sec1_list2: "60-60の法則（60分聴取後に休憩）",
        guide_sec1_list3: "睡眠時はタイマー使用を推奨",
        guide_sec2_title: "💡 My ASMR Space 200%活用術",
        guide_mix_title: "1. 自分だけの音の組み合わせ",
        guide_mix_desc: "複数の音を混ぜて豊かな空間を感じてください。",
        guide_mix_list1: "<strong>雨の小屋：</strong> 雨音(70%) + 焚き火(40%)",
        guide_mix_list2: "<strong>海辺の読書：</strong> 波の音(60%) + 本をめくる音(30%) + 鳥のさえずり(20%)",
        guide_mix_list3: "<strong>深夜の作業室：</strong> 雨音(50%) + タイピング(80%)",
        guide_pomo_title: "2. ポモドーロ・テクニック",
        guide_pomo_desc: "勉強や仕事の際にタイマー機能を活用してみてください。25分または30分のタイマーを設定し、タイピング音や雨音をBGMとして流します。音が止まったら5分間休憩します。ホワイトノイズは周囲の騒音を遮断し、没入感を高めます。",
        guide_meditation_title: "3. 瞑想と呼吸",
        guide_meditation_desc: "波の音や雨音は瞑想呼吸の良いガイドになります。波が押し寄せるときに息を吸い、引くときに吐いてみてください。自然の音に合わせて呼吸すると、心拍数が安定しストレスが減少します。",
        guide_mobile_title: "📱 モバイルおよびオフライン使用",
        guide_mobile_desc: "モバイルアプリとウェブブラウザ（Chrome、Safariなど）の両方で完璧に動作します。オーディオファイルはデータ節約のために最適化されており、一度読み込まれるとキャッシュに保存され、データ消費を最小限に抑えます。<br><br><strong>ヒント：</strong> iPhone（iOS）ユーザーは、コントロールセンターでバックグラウンド再生が可能です。画面をオフにして音だけを聞き、バッテリーを節約してください。",
        btn_guide_listen: "自分だけの音を聴きに行く",

        glossary_asmr_title: "ASMR (Autonomous Sensory Meridian Response)",
        glossary_asmr_desc: "自律感覚絶頂反応と訳されます。視覚、聴覚、触覚への刺激によって感じる、心理的な安定感や快感、ぞくぞくする感じ（ティングル）を意味します。主に睡眠導入、ストレス解消、集中力向上などのために活用されます。",
        glossary_white_title: "ホワイトノイズ (White Noise)",
        glossary_white_desc: "広い周波数帯域でほぼ一定の周波数スペクトルを持つ信号で、特定の聴覚パターンを持たず耳に馴染みやすい騒音です。雨音、波の音などがこれに該当し、周囲の騒音を覆う「マスキング効果」があり、集中力向上や睡眠誘導に効果的です。",
        glossary_trigger_title: "トリガー (Trigger)",
        glossary_trigger_desc: "ASMR反応を引き起こす刺激のことです。人によって好みのトリガーが異なり、代表的な聴覚的トリガーにはささやき声、タッピング音、引っかく音、自然の音などがあります。自分に合ったトリガーを見つけることが重要です。",
        glossary_tingle_title: "ティングル (Tingle)",
        glossary_tingle_desc: "ASMRを感じる時に頭の後ろや背中、肩などを伝って降りてくる心地よい鳥肌やむずがゆい感覚のことです。この感覚が心理的な安定感を与え、副交感神経を活性化させてリラックス状態を誘導します。",
        glossary_binaural_title: "バイノーラルビート (Binaural Beats)",
        glossary_binaural_desc: "左右の耳に異なる周波数の音を聞かせた時に、脳がその周波数の差を認識して特定の脳波を誘導する現象です。例えば、休息状態の脳波であるアルファ波を誘導して安定を取り戻すことができます。",
        glossary_pink_title: "ピンクノイズ (Pink Noise)",
        glossary_pink_desc: "ホワイトノイズと似ていますが、低音域の音がより強調された騒音です。雨音や落ち葉を踏む音などがこれに該当します。ホワイトノイズより少し柔らかく自然な感じを与え、睡眠誘導に効果的です。",
        glossary_notalking_title: "ノートーキング (No Talking)",
        glossary_notalking_desc: "話し声がなく、物音や自然音のみで構成されたASMRコンテンツを意味します。人の声に敏感だったり、言語的な情報処理なしに純粋に音だけに集中したいユーザーに適しています。",

        notice_v2_title: "v1.2.0 プレーヤーバー大型アップデート",
        notice_v2_date: "2026.02.01",
        notice_v2_desc: "プレーヤーバーのデザインと利便性の向上",
        notice_v2_list1: "フローティンググラスデザイン＆個別音量調節",
        notice_v2_list2: "プレーヤーバー内のお気に入り＆UI最適化",
        notice_v1_title: "v1.1.0 統合アップデート",
        notice_v1_date: "2026.01.31",
        notice_v1_desc: "主要機能の統合と改善",
        notice_v1_list1: "多言語対応およびスリープタイマー追加",
        notice_v1_list2: "虫の音追加およびUI改善",
        notice_open_title: "My ASMR Space オープン！",
        notice_open_date: "2026.01.30",
        notice_open_desc: "癒しのための無料ASMRサイトオープン",
        notice_open_list_title: "基本サウンド提供（雨音、焚き火など）",
        faq_q1: "Q. 無料ですか？",
        faq_a1: "はい、My ASMR Spaceのすべての機能とサウンドは100％無料で提供されます。会員登録や決済なしでいつでも自由にご利用いただけます。サイト運営のために最小限の広告が含まれる場合がありますが、ユーザー体験を損なわない範囲で運営されます。",
        faq_q2: "Q. アプリはありますか？",
        faq_a2: "はい、Androidアプリとウェブブラウザの両方に対応しています。アプリをインストールするか、ウェブで直接利用できます。",
        faq_q3: "Q. オフライン再生は？",
        faq_a3: "基本的にインターネット接続が必要です。ただし、ウェブブラウザのキャッシュ機能により、一度再生した音は一時的にデータ消費なしで再生される場合があります。完全なオフライン再生機能は、今後のアップデートでサポートする予定です。",
        faq_q4: "Q. 音が途切れます。",
        faq_a4: "モバイル端末の場合、バッテリー節約モードが有効になっているか、画面がオフになったときにブラウザのバックグラウンド再生が制限されることがあります。また、インターネット接続が不安定な場合、読み込みが遅れることがあります。問題が続く場合は、ページを更新するか、ブラウザを最新バージョンにアップデートしてみてください。",
        faq_q5: "Q. 音の追加リクエストは？",
        faq_a5: "もちろんです！ユーザーの皆様のご意見はいつでも歓迎します。メインページ下部の「ASMR追加リクエスト」フォームからご希望の音（例：カフェの騒音、電車の音など）をお寄せいただければ、著作権の問題がない高品質な音源を探してアップデートに積極的に反映させていただきます。",
        faq_q6: "Q. YouTubeで使えますか？",
        faq_a6: "当サイトで提供している音は、オープンライセンス音源または独自に編集された音源です。個人的な鑑賞目的では自由に使用できますが、音源ファイルを直接抽出して再配布したり、商業的に販売する行為は禁止されています。放送や動画のBGMとして使用をご希望の場合は、別途お問い合わせください。",
        faq_more_questions: "他にご質問はありますか？",
        privacy_intro: "My ASMR Space（以下「当サイト」）は、利用者の個人情報を重視し、「情報通信網利用促進および情報保護」に関する法律を遵守しています。",
        privacy_sec1_title: "1. 個人情報の収集",
        privacy_sec1_desc: "登録不要で、個人情報を要求しません。",
        privacy_sec2_title: "2. クッキー",
        privacy_sec2_desc: "Google AdSenseのためにクッキーを使用する場合があります。",
        privacy_list1: "ユーザーはGoogleの広告設定でパーソナライズ広告を無効にできます。",
        privacy_list2: "またはwww.aboutads.infoで第三者配信事業者のクッキーを無効にできます。",
        sitemap_menu_title: "メインメニュー",
        sitemap_info_title: "情報・ガイド",

        quotes: [
            "少し休んでも大丈夫です。あなたは十分よくやっています。",
            "今日一日もあなたのペースで、気楽に。",
            "小さな休息が大きなエネルギーになります。",
            "あなたの存在だけで世界は十分美しいです。",
            "心配は少し置いておいて、今この瞬間の音に集中してみてください。",
            "明日は今日よりもっと輝くでしょう。",
            "疲れた心を癒してください。お疲れ様でした、今日も。",
            "幸せは強度ではなく頻度です。些細な幸せを感じてみてください。",
            "深く息を吸って、ゆっくり吐き出してみてください。",
            "少し遅くても大丈夫です。あなたはすでに十分よくやっています。",
            "今日を耐え抜いただけでも、あなたは本当にすごい人です。",
            "休む時間も成長の一部です。止まっているのではなく準備中なのです。",
            "完璧でなくても大丈夫です。今のあなたも十分大切です。",
            "焦らなくてもいいです。あなただけの速度があります。",
            "小さな一歩でも、止まらないあなたはすでにかっこいいです。",
            "今日の最善が明日の自慢になるでしょう。",
            "自分自身にもう少し優しくしても大丈夫です。",
            "あなたが耐えてきた時間がすでに答えです。",
            "今この場所でも、あなたは成長し続けています。"
        ]
    },
    zh: {
        title: "My ASMR Space",
        subtitle: "用属于你的声音放松。",
        site_desc: "免费提供放松和集中的声音。支持 App 和 Web。",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        play: "播放",
        stop: "停止",
        stop_all: "全部停止",
        now_playing: "正在播放",
        theme_dark: "深色模式",
        theme_light: "浅色模式",
        btn_home: "返回首页",
        btn_msg: "发送信息",
        send_btn: "发送",
        email_label: "邮箱",
        email_placeholder: "您的邮箱地址",
        msg_label: "留言",
        msg_placeholder: "请输入内容",
        my_saved: "收藏夹",
        mix_title: "推荐混合音效",
        mix_rainy_cabin: "雨中小屋",
        mix_beach_reading: "海边读书",
        mix_night_studio: "深夜工作室",
        btn_save_mix: "保存当前混音",
        my_mix_title: "我的混音",
        prompt_mix_name: "请输入混音名称：",
        alert_no_sound: "没有正在播放的声音。",
        no_custom_mixes: "没有保存的混音。",
        btn_confirm: "确认",
        btn_cancel: "取消",
        msg_delete_confirm: "确定要删除吗？",
        search_placeholder: "搜索混音...",
        msg_saved: "保存成功。",
        sitemap: "网站地图",
        contact_link: "联系我们",
        privacy: "隐私政策",
        footer_about: "关于我们",
        footer_science: "ASMR 科学",
        footer_guide: "使用指南",
        footer_glossary: "词典",
        footer_faq: "FAQ",
        footer_notice: "公告",
        
        about_title: "👨‍💻 关于我们",
        science_title: "🧠 ASMR 科学",
        guide_title: "🎧 使用指南",
        glossary_title: "📖 ASMR 词典",
        faq_title: "❓ 常见问题 (FAQ)",
        notice_title: "📢 公告与更新",
        sitemap_title: "🗺️ 网站地图",
        privacy_title: "隐私政策",
        contact_title: "错误报告与咨询",

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
        sound_rain: "雨声",
        sound_fire: "柴火",
        sound_bird: "鸟鸣声",
        sound_book: "翻书声",
        sound_wave: "海浪声",
        sound_keyboard: "打字声",
        sound_bug: "虫鸣声",

        asmr_title: "什么是 ASMR？",
        asmr_desc: "ASMR 是一种诱导心理稳定的声音。雨声、打字声等白噪音有助于掩盖噪音，提高注意力或助眠。",
        tips_title: "使用技巧",
        tip_focus: "<strong>集中注意力：</strong> 尝试打字声。",
        tip_relax: "<strong>放松：</strong> 雨声和柴火声。",
        tip_sleep: "<strong>助眠：</strong> 调低音量听自然声。",

        about_quote: "“我想在复杂的世界中创造一个小小的逗号。”",
        about_intro: "你好，我是 <strong>My ASMR Space</strong> 的开发者朴智宇。我是一名学习 Web 开发的学生。",
        about_story: "我想制作一个没有广告、可以混合自己喜欢的声音的简单网站。",
        about_phil_title: "开发理念：Simple & Relax",
        about_phil_desc: "最重要的是“简单”。无需复杂设置即可立即休息。",
        about_goal_title: "未来目标",
        about_goal_desc: "我计划根据用户的反馈持续更新各种声音和功能。",
        about_cheer: "请给开发者发送支持信息！",

        science_sec1_title: "01. ASMR 如何刺激大脑？",
        science_sec1_desc: "ASMR 不仅仅是心情，而是伴随实际脑波变化的生理现象。",
        science_sec1_list1: "<strong>副交感神经激活：</strong> ASMR 降低心率并减少皮质醇水平。",
        science_sec1_list2: "<strong>联觉关联：</strong> 听到声音时感到刺痛与联觉感知能力有关。",
        science_sec1_list3: "<strong>社会结合激素：</strong> 耳语声促进催产素和多巴胺的分泌。",
        science_sec2_title: "02. 白噪音 vs 粉红噪音",
        science_sec2_desc: "噪音也有颜色。效果因频率而异。",
        science_white_title: "⚪ 白噪音 (White Noise)",
        science_white_desc: "所有频率强度相同。阻隔噪音并提高注意力。",
        science_pink_title: "🌸 粉红噪音 (Pink Noise)",
        science_pink_desc: "强调低频的柔和声音。诱导睡眠和放松。",
        science_sec3_title: "03. 掩蔽效应",
        science_sec3_desc: "白噪音可以掩盖周围刺耳的噪音，帮助您沉浸其中。",
        btn_science_listen: "聆听科学的治愈声音",

        guide_sec1_title: "⚠️ 听力保护注意事项",
        guide_sec1_list1: "保持适当音量（最大 60% 以下）",
        guide_sec1_list2: "60-60 法则（收听 60 分钟后休息）",
        guide_sec1_list3: "睡眠时建议使用定时器",
        guide_sec2_title: "💡 200% 利用 My ASMR Space",
        guide_mix_title: "1. 寻找属于你的声音组合",
        guide_mix_desc: "混合多种声音，感受丰富的空间感。",
        guide_mix_list1: "<strong>雨中小屋：</strong> 雨声(70%) + 柴火(40%)",
        guide_mix_list2: "<strong>海边读书：</strong> 海浪声(60%) + 翻书声(30%) + 鸟鸣声(20%)",
        guide_mix_list3: "<strong>深夜工作室：</strong> 雨声(50%) + 打字声(80%)",
        guide_pomo_title: "2. 番茄工作法",
        guide_pomo_desc: "尝试在学习或工作时使用定时器功能。设置25或30分钟的定时器，并播放打字声或雨声作为背景音。当声音停止时，休息5分钟。白噪音可以阻隔环境噪音并提高沉浸感。",
        guide_meditation_title: "3. 冥想与呼吸",
        guide_meditation_desc: "海浪声或雨声是冥想呼吸的好向导。海浪涌来时吸气，退去时呼气。跟随自然的声音呼吸可以稳定心率并减轻压力。",
        guide_mobile_title: "📱 移动和离线使用",
        guide_mobile_desc: "在移动应用程序和 Web 浏览器（Chrome、Safari等）上均可完美运行。音频文件经过优化以节省数据，加载一次后，声音将存储在缓存中，以最大限度地减少数据消耗。<br><br><strong>提示：</strong> iPhone (iOS) 用户可以在控制中心使用后台播放。关闭屏幕只听声音以节省电池。",
        btn_guide_listen: "去听属于我的声音",

        glossary_asmr_title: "ASMR (自发性知觉经络反应)",
        glossary_asmr_desc: "翻译为自发性知觉经络反应。指对视觉、听觉、触觉刺激产生反应而出现的心理稳定感或愉悦感、刺痛感（Tingle）。主要用于辅助睡眠、缓解压力、提高注意力等。",
        glossary_white_title: "白噪音 (White Noise)",
        glossary_white_desc: "在宽频带内具有几乎恒定频率谱的信号，没有特定的听觉模式，耳朵容易适应。雨声、海浪声等属于此类，具有掩盖周围噪音的“掩蔽效应”，对提高注意力和诱导睡眠有效。",
        glossary_trigger_title: "触发器 (Trigger)",
        glossary_trigger_desc: "诱导 ASMR 反应的刺激物。每个人喜欢的触发器不同，常见的听觉触发器包括耳语声、敲击声、抓挠声、自然声等。找到适合自己的触发器很重要。",
        glossary_tingle_title: "酥麻感 (Tingle)",
        glossary_tingle_desc: "感受 ASMR 时，从头部后方或背部、肩膀等处传来的愉悦的鸡皮疙瘩或发痒的感觉。这种感觉能给予心理安定感，激活副交感神经，诱导放松状态。",
        glossary_binaural_title: "双耳节拍 (Binaural Beats)",
        glossary_binaural_desc: "当两只耳朵听到不同频率的声音时，大脑识别出频率差并诱导特定脑波的现象。例如，可以诱导休息状态的脑波——阿尔法波，从而寻找安定。",
        glossary_pink_title: "粉红噪音 (Pink Noise)",
        glossary_pink_desc: "与白噪音类似，但更强调低频段的声音。雨声或踩落叶的声音属于此类。比白噪音感觉更柔和、自然，对诱导睡眠有效。",
        glossary_notalking_title: "无人声 (No Talking)",
        glossary_notalking_desc: "没有说话声，仅由物体或自然声音组成的 ASMR 内容。适合对人声敏感或想在没有语言信息处理的情况下纯粹专注于声音的用户。",

        notice_v2_title: "v1.2.0 播放栏重大更新",
        notice_v2_date: "2026.02.01",
        notice_v2_desc: "播放栏设计与易用性改进",
        notice_v2_list1: "悬浮玻璃设计与单独音量控制",
        notice_v2_list2: "播放栏内收藏夹与UI优化",
        notice_v1_title: "v1.1.0 综合更新",
        notice_v1_date: "2026.01.31",
        notice_v1_desc: "主要功能整合与改进",
        notice_v1_list1: "添加多语言支持和睡眠定时器",
        notice_v1_list2: "添加虫鸣声及UI改进",
        notice_open_title: "My ASMR Space 开启！",
        notice_open_date: "2026.01.30",
        notice_open_desc: "免费 ASMR 网站正式开启",
        notice_open_list_title: "提供基本声音（雨声、柴火等）",
        faq_q1: "Q. 免费吗？",
        faq_a1: "是的，My ASMR Space 的所有功能和声音都是 100% 免费提供的。无需注册或付款即可随时自由使用。为了运营网站，可能会包含最少的广告，但不会影响用户体验。",
        faq_q2: "Q. 有应用程序吗？",
        faq_a2: "是的，支持 Android 应用程序和 Web 浏览器。您可以安装应用程序或直接在 Web 上使用。",
        faq_q3: "Q. 离线播放？",
        faq_a3: "基本上需要互联网连接。但是，通过 Web 浏览器的缓存功能，播放过的声音可以暂时在不消耗数据的情况下播放。完整的离线播放功能将在未来的更新中支持。",
        faq_q4: "Q. 声音中断。",
        faq_a4: "对于移动设备，如果启用了省电模式或屏幕关闭，浏览器的后台播放可能会受到限制。此外，如果互联网连接不稳定，加载可能会延迟。如果问题持续存在，请尝试刷新页面或将浏览器更新到最新版本。",
        faq_q5: "Q. 请求添加声音？",
        faq_a5: "当然！我们随时欢迎用户的反馈。如果您通过主页底部的“ASMR 添加请求”表单留下您想要的声音（例如：咖啡馆噪音、火车声等），我们将积极寻找没有版权问题的高质量音源并在更新中反映。",
        faq_q6: "Q. 可用于 YouTube 吗？",
        faq_a6: "本网站提供的声音是开放许可音源或自行编辑的音源。个人欣赏目的可自由使用，但禁止直接提取音源文件进行再分发或商业销售。如果您希望将其用作广播或视频的背景音乐，请另行联系。",
        faq_more_questions: "还有其他问题吗？",
        privacy_intro: "My ASMR Space（以下简称“本网站”）重视用户的个人信息，并遵守《关于促进信息通信网络利用及信息保护》的法律。",
        privacy_sec1_title: "1. 个人信息收集",
        privacy_sec1_desc: "不收集个人数据。",
        privacy_sec2_title: "2. Cookie",
        privacy_sec2_desc: "Cookie 可能用于 Google AdSense。",
        privacy_list1: "用户可以在 Google 的广告设置页面中选择退出个性化广告。",
        privacy_list2: "或者访问 www.aboutads.info 选择退出第三方供应商的 Cookie 使用。",
        sitemap_menu_title: "主菜单",
        sitemap_info_title: "信息与指南",

        quotes: [
            "稍微休息一下也没关系。你已经做得够好了。",
            "今天也按照你的节奏，舒适地度过。",
            "小小的休息会变成巨大的能量。",
            "仅凭你的存在，世界就已经足够美丽。",
            "暂时放下担忧，专注于此刻的声音。",
            "明天会比今天更耀眼。",
            "抚慰疲惫的心灵。辛苦了，今天。",
            "幸福是频率，而不是强度。感受微小的幸福吧。",
            "深呼吸，然后慢慢呼气。",
            "稍微慢一点也没关系。你已经做得够好了。",
            "仅仅是坚持过今天，你就是一个非常了不起的人。",
            "休息也是成长的一部分。不是停止，而是准备。",
            "不完美也没关系。现在的你也足够珍贵。",
            "不必着急。你有属于你的速度。",
            "即使是一小步，不停歇的你已经很帅了。",
            "今天的尽力将成为明天的骄傲。",
            "对自己稍微宽容一点也没关系。",
            "你坚持下来的时间就是答案。",
            "即使在这里，你也在继续成长。"
        ]
    },
    es: {
        title: "My ASMR Space",
        subtitle: "Relájate con tus propios sonidos.",
        site_desc: "Sonidos gratuitos para relajación y concentración. Disponible en Web y App.",
        copyright: "&copy; 2026 My ASMR Space. All rights reserved.",
        play: "Reprod.",
        stop: "Parar",
        stop_all: "Detener todo",
        now_playing: "Reproduciendo",
        theme_dark: "Modo Oscuro",
        theme_light: "Modo Claro",
        btn_home: "Ir a Inicio",
        btn_msg: "Enviar mensaje",
        send_btn: "Enviar",
        email_label: "Correo",
        email_placeholder: "Tu correo electrónico",
        msg_label: "Mensaje",
        msg_placeholder: "Escribe tu mensaje",
        my_saved: "Favoritos",
        mix_title: "Mezclas Recomendadas",
        mix_rainy_cabin: "Cabaña Lluviosa",
        mix_beach_reading: "Lectura en la Playa",
        mix_night_studio: "Estudio Nocturno",
        btn_save_mix: "Guardar mezcla actual",
        my_mix_title: "Mis mezclas",
        prompt_mix_name: "Ingrese el nombre de la mezcla:",
        alert_no_sound: "No hay sonidos reproduciéndose.",
        no_custom_mixes: "No hay mezclas guardadas.",
        btn_confirm: "Confirmar",
        btn_cancel: "Cancelar",
        msg_delete_confirm: "¿Estás seguro de que quieres eliminar?",
        search_placeholder: "Buscar mezclas...",
        msg_saved: "Guardado exitosamente.",
        sitemap: "Mapa del sitio",
        contact_link: "Contáctenos",
        privacy: "Política de Privacidad",
        footer_about: "Sobre Nosotros",
        footer_science: "Ciencia de ASMR",
        footer_guide: "Guía de Usuario",
        footer_glossary: "Glosario",
        footer_faq: "FAQ",
        footer_notice: "Avisos",
        
        about_title: "👨‍💻 Sobre Nosotros",
        science_title: "🧠 Ciencia de ASMR",
        guide_title: "🎧 Guía de Usuario",
        glossary_title: "📖 Glosario ASMR",
        faq_title: "❓ Preguntas Frecuentes",
        notice_title: "📢 Avisos y Actualizaciones",
        sitemap_title: "🗺️ Mapa del sitio",
        privacy_title: "Política de Privacidad",
        contact_title: "Informe de errores y contacto",

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
        sound_rain: "Lluvia",
        sound_fire: "Fuego",
        sound_bird: "Pájaros",
        sound_book: "Pasar páginas",
        sound_wave: "Olas",
        sound_keyboard: "Teclado",
        sound_bug: "Grillos",

        asmr_title: "¿Qué es ASMR y Ruido Blanco?",
        asmr_desc: "ASMR induce estabilidad psicológica. El ruido blanco como la lluvia ayuda a cubrir ruidos molestos, mejorando la concentración y el sueño.",
        tips_title: "Consejos de uso",
        tip_focus: "<strong>Para Concentración:</strong> Prueba sonidos como escribir.",
        tip_relax: "<strong>Para Relajarse:</strong> Usa sonidos de lluvia y fuego.",
        tip_sleep: "<strong>Para Dormir:</strong> Baja el volumen y escucha la naturaleza.",

        about_quote: "\"Quería crear una pequeña pausa en un mundo complejo.\"",
        about_intro: "Hola, soy Park Jiwoo, el desarrollador de <strong>My ASMR Space</strong>. Soy un estudiante que estudia desarrollo web.",
        about_story: "Quería crear un sitio web simple donde pudiera mezclar sonidos sin anuncios para ayudar a concentrarme y relajarme.",
        about_phil_title: "Filosofía: Simple & Relax",
        about_phil_desc: "Lo más importante es la 'simplicidad'. Deberías poder relajarte inmediatamente sin configuraciones complejas.",
        about_goal_title: "Objetivos Futuros",
        about_goal_desc: "Planeo actualizar continuamente sonidos y funciones basándome en los comentarios de los usuarios.",
        about_cheer: "¡Envía un mensaje de apoyo al desarrollador!",

        science_sec1_title: "01. ¿Cómo estimula el ASMR al cerebro?",
        science_sec1_desc: "El ASMR no es solo un estado de ánimo, es un fenómeno fisiológico acompañado de cambios reales en las ondas cerebrales.",
        science_sec1_list1: "<strong>Activación parasimpática:</strong> El ASMR reduce la frecuencia cardíaca y los niveles de cortisol.",
        science_sec1_list2: "<strong>Conexión con la sinestesia:</strong> Sentir cosquilleo al escuchar sonido está relacionado con la percepción sinestésica.",
        science_sec1_list3: "<strong>Hormonas de vínculo social:</strong> Los susurros promueven la secreción de oxitocina y dopamina.",
        science_sec2_title: "02. Ruido Blanco vs Ruido Rosa",
        science_sec2_desc: "El ruido tiene colores. Los efectos varían según la frecuencia.",
        science_white_title: "⚪ Ruido Blanco",
        science_white_desc: "Intensidad igual en todas las frecuencias. Bloquea el ruido y mejora la concentración.",
        science_pink_title: "🌸 Ruido Rosa",
        science_pink_desc: "Sonido más suave que enfatiza las frecuencias bajas. Induce el sueño y la relajación.",
        science_sec3_title: "03. Efecto de Enmascaramiento",
        science_sec3_desc: "El ruido blanco cubre los ruidos molestos para ayudarte a sumergirte.",
        btn_science_listen: "Escuchar sonidos curativos científicos",

        guide_sec1_title: "⚠️ Precauciones para la protección auditiva",
        guide_sec1_list1: "Mantener un volumen moderado (menos del 60%)",
        guide_sec1_list2: "Regla 60-60 (Descansar después de 60 min)",
        guide_sec1_list3: "Usar temporizador al dormir",
        guide_sec2_title: "💡 Utilizando My ASMR Space al 200%",
        guide_mix_title: "1. Encuentra tu combinación de sonidos",
        guide_mix_desc: "Mezcla sonidos para sentir una sensación de espacio más rica.",
        guide_mix_list1: "<strong>Cabaña Lluviosa:</strong> Lluvia(70%) + Fuego(40%)",
        guide_mix_list2: "<strong>Lectura en la Playa:</strong> Olas(60%) + Pasar páginas(30%) + Pájaros(20%)",
        guide_mix_list3: "<strong>Estudio Nocturno:</strong> Lluvia(50%) + Teclado(80%)",
        guide_pomo_title: "2. Técnica Pomodoro",
        guide_pomo_desc: "Intenta usar la función de temporizador cuando estudies o trabajes. Configura un temporizador de 25 o 30 minutos y pon sonidos de escritura o lluvia como ruido de fondo. Cuando el sonido se detenga, tómate un descanso de 5 minutos. El ruido blanco bloquea el ruido ambiental y mejora la inmersión.",
        guide_meditation_title: "3. Meditación y Respiración",
        guide_meditation_desc: "Los sonidos de olas o lluvia son excelentes guías para la respiración en meditación. Inhala cuando viene la ola, exhala cuando se va. Respirar al ritmo de la naturaleza estabiliza el ritmo cardíaco y reduce el estrés.",
        guide_mobile_title: "📱 Uso móvil y sin conexión",
        guide_mobile_desc: "Funciona perfectamente tanto en la aplicación móvil como en navegadores web (Chrome, Safari, etc.). Los archivos de audio están optimizados para ahorrar datos y, una vez cargados, los sonidos se almacenan en la caché para minimizar el consumo de datos.<br><br><strong>Consejo:</strong> Para los usuarios de iPhone (iOS), la reproducción en segundo plano es compatible en el Centro de control. Apaga la pantalla y escucha el sonido para ahorrar batería.",
        btn_guide_listen: "Ir a escuchar mis sonidos",

        glossary_asmr_title: "ASMR (Respuesta Sensorial Meridiana Autónoma)",
        glossary_asmr_desc: "Se traduce como Respuesta Sensorial Meridiana Autónoma. Se refiere a la estabilidad psicológica, placer o sensación de hormigueo que se siente en respuesta a estímulos visuales, auditivos o táctiles. Se utiliza principalmente para la inducción del sueño, alivio del estrés y mejora de la concentración.",
        glossary_white_title: "Ruido Blanco",
        glossary_white_desc: "Una señal con un espectro de frecuencia casi constante en una banda ancha. Enmascara los ruidos ambientales molestos (efecto de enmascaramiento), lo que lo hace efectivo para mejorar la concentración e inducir el sueño. Ejemplos incluyen sonidos de lluvia y olas.",
        glossary_trigger_title: "Desencadenante (Trigger)",
        glossary_trigger_desc: "Estímulos que inducen reacciones ASMR. Los desencadenantes varían según la persona, y los desencadenantes auditivos comunes incluyen susurros, golpecitos, rasguños y sonidos de la naturaleza. Encontrar el desencadenante adecuado para ti es importante.",
        glossary_tingle_title: "Hormigueo (Tingle)",
        glossary_tingle_desc: "Una agradable sensación de piel de gallina o cosquilleo que recorre la parte posterior de la cabeza, la espalda o los hombros al sentir ASMR. Esta sensación proporciona estabilidad psicológica y activa el sistema nervioso parasimpático para inducir la relajación.",
        glossary_binaural_title: "Pulsos Binaurales",
        glossary_binaural_desc: "Un fenómeno donde el cerebro percibe la diferencia de frecuencia cuando se reproducen diferentes frecuencias en cada oído, induciendo ondas cerebrales específicas. Por ejemplo, puede inducir ondas alfa para la relajación.",
        glossary_pink_title: "Ruido Rosa",
        glossary_pink_desc: "Similar al ruido blanco, pero con sonidos de baja frecuencia enfatizados. Los sonidos de lluvia o el crujir de hojas son ejemplos. Se siente más suave y natural que el ruido blanco, lo que lo hace efectivo para la inducción del sueño.",
        glossary_notalking_title: "Sin Hablar (No Talking)",
        glossary_notalking_desc: "Contenido de ASMR que consiste solo en sonidos de objetos o naturaleza sin habla. Adecuado para usuarios que son sensibles a las voces humanas o quieren concentrarse puramente en el sonido sin procesar información lingüística.",

        notice_v2_title: "v1.2.0 Gran actualización de la barra de reproducción",
        notice_v2_date: "2026.02.01",
        notice_v2_desc: "Mejoras en el diseño y usabilidad de la barra de reproducción",
        notice_v2_list1: "Diseño de cristal flotante y control de volumen individual",
        notice_v2_list2: "Favoritos en la barra de reproducción y optimización de UI",
        notice_v1_title: "Actualización Integrada v1.1.0",
        notice_v1_date: "2026.01.31",
        notice_v1_desc: "Integración y mejora de funciones principales",
        notice_v1_list1: "Soporte multilingüe y temporizador de sueño",
        notice_v1_list2: "Sonido de grillos y mejora de UI",
        notice_open_title: "¡Apertura de My ASMR Space!",
        notice_open_date: "2026.01.30",
        notice_open_desc: "Apertura del sitio gratuito de ASMR",
        notice_open_list_title: "Sonidos básicos proporcionados (Lluvia, Fuego, etc.)",
        faq_q1: "Q. ¿Es gratis?",
        faq_a1: "Sí, todas las funciones y sonidos de My ASMR Space se proporcionan 100% gratis. Puede utilizarlos libremente en cualquier momento sin registrarse ni realizar pagos. Se pueden incluir anuncios mínimos para operar el sitio, pero no interferirán con su experiencia de usuario.",
        faq_q2: "Q. ¿Hay una app?",
        faq_a2: "Sí, está disponible tanto en la aplicación de Android como en navegadores web. Puede instalar la aplicación o usarla directamente en la web.",
        faq_q3: "Q. ¿Reproducción offline?",
        faq_a3: "Básicamente, se requiere una conexión a Internet. Sin embargo, a través de la función de caché del navegador web, los sonidos que se han reproducido una vez se pueden reproducir temporalmente sin consumo de datos. La funcionalidad completa de reproducción sin conexión se admitirá en una actualización futura.",
        faq_q4: "Q. El sonido se corta.",
        faq_a4: "En el caso de dispositivos móviles, la reproducción en segundo plano del navegador puede estar restringida si el modo de ahorro de batería está activado o la pantalla está apagada. Además, la carga puede retrasarse si la conexión a Internet es inestable. Si el problema persiste, intente actualizar la página o actualizar su navegador a la última versión.",
        faq_q5: "Q. ¿Solicitar sonidos?",
        faq_a5: "¡Por supuesto! Siempre agradecemos los comentarios de los usuarios. Si deja una solicitud para el sonido que desea (por ejemplo, ruido de cafetería, sonido de tren, etc.) a través del formulario 'Solicitar nuevos sonidos' en la parte inferior de la página principal, lo reflejaremos activamente en las actualizaciones buscando fuentes de sonido de alta calidad sin problemas de derechos de autor.",
        faq_q6: "Q. ¿Uso en YouTube?",
        faq_a6: "Los sonidos proporcionados en este sitio son fuentes de sonido de licencia abierta o fuentes de sonido autoeditadas. Se pueden utilizar libremente para fines de escucha personal, pero se prohíbe extraer archivos de sonido directamente para su redistribución o venta comercial. Si desea utilizarlos como música de fondo para transmisiones o videos, contáctenos por separado.",
        faq_more_questions: "¿Tiene más preguntas?",
        privacy_intro: "My ASMR Space (en adelante, el \"Sitio\") valora la información personal de los usuarios y cumple con la Ley de Promoción de la Utilización de la Red de Información y Comunicaciones y Protección de la Información.",
        privacy_sec1_title: "1. Recopilación de datos personales",
        privacy_sec1_desc: "No se requiere registro, no se solicitan datos personales.",
        privacy_sec2_title: "2. Cookies",
        privacy_sec2_desc: "Se pueden usar cookies para Google AdSense.",
        privacy_list1: "Los usuarios pueden optar por no recibir publicidad personalizada en la configuración de anuncios de Google.",
        privacy_list2: "O visite www.aboutads.info para optar por no participar en el uso de cookies de proveedores externos.",
        sitemap_menu_title: "Menú Principal",
        sitemap_info_title: "Información y Guía",

        quotes: [
            "Está bien descansar un rato. Lo estás haciendo suficientemente bien.",
            "Vive hoy a tu propio ritmo, cómodamente.",
            "Un pequeño descanso se convierte en gran energía.",
            "El mundo es suficientemente hermoso solo con tu existencia.",
            "Deja de lado tus preocupaciones por un momento y concéntrate en el sonido de este instante.",
            "Mañana brillará más que hoy.",
            "Consuela tu corazón cansado. Lo hiciste bien hoy.",
            "La felicidad es frecuencia, no intensidad. Siente la pequeña felicidad.",
            "Respira hondo y exhala lentamente.",
            "Está bien ser un poco lento. Ya lo estás haciendo genial.",
            "Solo por aguantar hoy, eres una persona realmente increíble.",
            "Descansar también es parte del crecimiento. No es detenerse, es prepararse.",
            "Está bien no ser perfecto. Eres suficientemente precioso tal como eres.",
            "No tienes que apresurarte. Tienes tu propia velocidad.",
            "Incluso un pequeño paso, tú que no te detienes ya eres genial.",
            "Lo mejor de hoy será el orgullo de mañana.",
            "Está bien ser un poco más amable contigo mismo.",
            "Los tiempos que soportaste ya son la respuesta.",
            "Incluso aquí, sigues creciendo."
        ]
    }
};

const soundGrid = document.getElementById('sound-grid');
const favFilterBtn = document.getElementById('fav-filter-btn');
const mixGrid = document.getElementById('mix-grid');
const customMixGrid = document.getElementById('custom-mix-grid');
const saveMixBtn = document.getElementById('save-mix-btn');
const showMixesBtn = document.getElementById('show-mixes-btn');

const mixListModal = document.getElementById('mix-list-modal');
const mixListClose = document.getElementById('mix-list-close');
const mixSearchInput = document.getElementById('mix-search-input');

const mobilePlayerBar = document.getElementById('mobile-player-bar');
const pcPlayerBar = document.getElementById('pc-player-bar');

const modal = document.getElementById('custom-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalInput = document.getElementById('modal-input');
const modalIcons = document.getElementById('modal-icons');
const modalColors = document.getElementById('modal-colors');
const modalCancel = document.getElementById('modal-cancel');
const modalConfirm = document.getElementById('modal-confirm');

// Web Audio API 설정
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const audioPlayers = {};

// 4. 전역 변수 관리 (State Management)
const appState = {
    currentLang: 'en',
    favorites: [],
    customMixes: [],
    showFavoritesOnly: false,
    activeTag: null,
    activeSounds: []
};

// Helper: Safe LocalStorage
const safeStorage = {
    get: (key, fallback) => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : fallback;
        } catch (e) { return fallback; }
    },
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) { }
    },
    getStr: (key, fallback) => {
        try {
            return localStorage.getItem(key) || fallback;
        } catch (e) { return fallback; }
    },
    setStr: (key, value) => {
        try {
            localStorage.setItem(key, value);
        } catch (e) { }
    }
};

// 세션 저장 및 복원 (Session Persistence)
function saveSession() {
    const session = {
        activeSounds: appState.activeSounds,
        volumes: {}
    };
    appState.activeSounds.forEach(id => {
        if (audioPlayers[id]) {
            session.volumes[id] = audioPlayers[id].gainNode.gain.value;
        }
    });
    safeStorage.set('asmr_session', session);
}

function restoreSession() {
    const session = safeStorage.get('asmr_session', null);
    if (session && session.activeSounds && Array.isArray(session.activeSounds)) {
        appState.activeSounds = session.activeSounds.filter(id => soundsData.some(s => s.id === id));
        
        appState.activeSounds.forEach(id => {
            const player = audioPlayers[id];
            if (player && session.volumes && typeof session.volumes[id] === 'number') {
                player.gainNode.gain.value = session.volumes[id];
            }
        });
        updatePlayerBar();
    }
}

// 초기 상태 로드
let savedLang = safeStorage.getStr('asmr_lang', null);
if (!savedLang) {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.includes('ko')) savedLang = 'ko';
    else if (userLang.includes('ja')) savedLang = 'ja';
    else if (userLang.includes('zh')) savedLang = 'zh';
    else if (userLang.includes('es')) savedLang = 'es';
    else savedLang = 'en';
}
appState.currentLang = savedLang;
appState.favorites = safeStorage.get('asmr_favorites', []);
appState.customMixes = safeStorage.get('asmr_custom_mixes', []);

// Initialize Sound Cards
function initSoundCards() {
    if (!soundGrid) return;
    soundGrid.innerHTML = '';

    soundsData.forEach(sound => {
        const card = document.createElement('div');
        const isFav = appState.favorites.includes(sound.id);
        card.className = 'w-[calc(50%-0.5rem)] sm:w-72 bg-white dark:bg-slate-800 border-2 border-transparent rounded-xl p-4 sm:p-6 flex flex-col items-center gap-2 sm:gap-4 transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm';
        card.id = `card-${sound.id}`;
        card.dataset.id = sound.id; 
        
        const tagsHtml = sound.tags.map(tag => 
            `<span class="tag-btn text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" data-tag="${tag}">#<span data-i18n="tag_${tag}">${translations[appState.currentLang]['tag_' + tag] || tag}</span></span>`
        ).join(' ');

        card.innerHTML = `
            <div class="w-full flex justify-between items-start">
                <div class="w-8"></div>
                <div class="text-blue-400 mb-2"><i data-lucide="${sound.icon}" class="w-8 h-8 sm:w-12 sm:h-12"></i></div>
                <button class="fav-btn w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors ${isFav ? 'text-red-500' : 'text-slate-300 dark:text-slate-600'}" data-id="${sound.id}">
                    <i data-lucide="heart" class="w-5 h-5 ${isFav ? 'fill-current' : ''}"></i>
                </button>
            </div>
            <h3 class="text-base sm:text-xl font-bold text-slate-900 dark:text-white" data-i18n="sound_${sound.id}">${translations[appState.currentLang]['sound_' + sound.id]}</h3>
            <div class="flex gap-2 mb-2 flex-wrap justify-center">${tagsHtml}</div>
            <div class="w-full flex flex-col gap-3 mt-2">
                <button id="btn-${sound.id}" class="w-full py-2 rounded-lg bg-slate-100 dark:bg-slate-600 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-700 dark:text-white hover:text-white font-medium transition-colors flex justify-center items-center gap-2">
                    <i data-lucide="play" width="16"></i> <span data-i18n="play">${translations[appState.currentLang].play}</span>
                </button>
            </div>`;
        soundGrid.appendChild(card);

        const audio = new Audio(sound.file);
        audio.crossOrigin = "anonymous";
        audio.loop = true;
        audio.preload = 'none';
        
        const track = audioCtx.createMediaElementSource(audio);
        const gainNode = audioCtx.createGain();
        gainNode.gain.value = 0.5;
        
        track.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        audioPlayers[sound.id] = { audio, gainNode, isPlaying: false };

        const playBtn = card.querySelector(`#btn-${sound.id}`);
        const favBtn = card.querySelector('.fav-btn');

        playBtn.addEventListener('click', () => {
            if (audioCtx.state === 'suspended') audioCtx.resume();
            toggleSound(sound.id);
        });
        favBtn.addEventListener('click', () => toggleFavorite(sound.id));
    });

    soundGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.tag-btn');
        if (btn) {
            const tag = btn.dataset.tag;
            filterByTag(tag);
        }
    });
}

// 믹스 버튼 렌더링
function renderMixes() {
    if (!mixGrid) return;
    mixGrid.innerHTML = '';
    soundMixes.forEach(mix => {
        const btn = document.createElement('button');
        btn.className = 'flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all shadow-sm group';
        btn.innerHTML = `
            <i data-lucide="${mix.icon}" class="w-5 h-5 text-blue-400 group-hover:text-blue-500 transition-colors"></i>
            <span class="font-medium" data-i18n="mix_${mix.id}">${translations[appState.currentLang]['mix_' + mix.id]}</span>
        `;
        btn.onclick = () => playMix(mix);
        mixGrid.appendChild(btn);
    });
    lucide.createIcons();
}

function renderCustomMixes() {
    if (!customMixGrid) return;
    customMixGrid.innerHTML = '';

    const searchText = mixSearchInput ? mixSearchInput.value.toLowerCase() : '';
    const filteredMixes = appState.customMixes.filter(mix => mix.name.toLowerCase().includes(searchText));
    
    if (filteredMixes.length === 0) {
        const emptyMsg = translations[appState.currentLang].no_custom_mixes || "No saved mixes.";
        customMixGrid.innerHTML = `<p class="text-slate-400 dark:text-slate-500 text-sm w-full text-center">${emptyMsg}</p>`;
        return;
    }

    filteredMixes.forEach(mix => {
        const btnContainer = document.createElement('div');
        btnContainer.className = 'relative group';
        
        const btn = document.createElement('button');
        btn.className = 'flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-slate-700 hover:border-purple-300 dark:hover:border-purple-500 transition-all shadow-sm pr-16';
        const iconName = mix.icon || 'music';
        const iconColor = mix.color || '#3b82f6'; // Default blue-500
        
        // 믹스에 포함된 소리 정보 생성
        const soundDetails = Object.entries(mix.sounds).map(([id, vol]) => {
            const sound = soundsData.find(s => s.id === id);
            const name = sound ? (translations[appState.currentLang]['sound_' + id] || id) : id;
            return `${name} (${Math.round(vol * 100)}%)`;
        }).join(', ');

        const soundIcons = Object.keys(mix.sounds).map(id => {
            const sound = soundsData.find(s => s.id === id);
            return sound ? `<i data-lucide="${sound.icon}" class="w-3 h-3"></i>` : '';
        }).join('');

        btn.innerHTML = `
            <div class="flex items-center gap-3">
                <i data-lucide="${iconName}" class="w-6 h-6 transition-colors" style="color: ${iconColor}"></i>
                <div class="flex flex-col items-start">
                    <span class="font-medium">${mix.name}</span>
                    <div class="flex gap-1 text-slate-400 dark:text-slate-500 mt-0.5">
                        ${soundIcons}
                    </div>
                </div>
            </div>
        `;
        btn.title = soundDetails; // 툴팁으로 상세 정보 표시
        btn.onclick = () => {
            playMix(mix);
            if (mixListModal) {
                mixListModal.classList.add('opacity-0');
                const modalContent = mixListModal.querySelector('div');
                if (modalContent) {
                    modalContent.classList.remove('scale-100');
                    modalContent.classList.add('scale-95');
                }
                setTimeout(() => {
                    mixListModal.classList.add('hidden');
                }, 300);
            }
        };
        
        const editBtn = document.createElement('button');
        editBtn.className = 'absolute right-8 top-2 p-1 text-slate-300 hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100';
        editBtn.innerHTML = `<i data-lucide="pencil" class="w-4 h-4"></i>`;
        editBtn.onclick = (e) => {
            e.stopPropagation();
            editCustomMix(mix.id);
        };

        const delBtn = document.createElement('button');
        delBtn.className = 'absolute right-2 top-2 p-1 text-slate-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100';
        delBtn.innerHTML = `<i data-lucide="trash-2" class="w-4 h-4"></i>`;
        delBtn.onclick = (e) => {
            e.stopPropagation();
            deleteCustomMix(mix.id, mix.name);
        };

        btnContainer.appendChild(btn);
        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(delBtn);
        customMixGrid.appendChild(btnContainer);
    });
    lucide.createIcons();
}

let currentModalConfirmHandler = null;
let currentSelectedIcon = 'music';
let currentSelectedColor = '#3b82f6';

const availableIcons = [
    'music', 'headphones', 'cloud-rain', 'flame', 'wind', 
    'moon', 'sun', 'star', 'coffee', 'book', 
    'heart', 'smile', 'zap', 'anchor', 'feather',
    'droplets', 'trees', 'mountain', 'waves'
];

const availableColors = [
    '#ef4444', '#f97316', '#f59e0b', '#84cc16', '#10b981', '#06b6d4', 
    '#3b82f6', '#6366f1', '#8b5cf6', '#d946ef', '#f43f5e', '#64748b'
];

function showModal({ title, message, type, placeholder, showIcons, showColors, initialValue, initialIcon, initialColor, onConfirm }) {
    if (!modal) return;
    modalTitle.textContent = title;
    
    // Reset UI
    modalMessage.classList.add('hidden');
    modalInput.classList.add('hidden');
    if (modalIcons) modalIcons.classList.add('hidden');
    if (modalColors) modalColors.classList.add('hidden');
    modalCancel.classList.remove('hidden');
    
    // Initialize state
    currentSelectedColor = initialColor || '#3b82f6';

    if (type === 'input') {
        modalInput.classList.remove('hidden');
        modalInput.value = initialValue || '';
        modalInput.placeholder = placeholder || '';
        setTimeout(() => modalInput.focus(), 100);
    } else if (type === 'confirm') {
        modalMessage.textContent = message;
        modalMessage.classList.remove('hidden');
    } else if (type === 'alert') {
        modalMessage.textContent = message;
        modalMessage.classList.remove('hidden');
        modalCancel.classList.add('hidden');
    }

    if (showIcons && modalIcons) {
        modalIcons.classList.remove('hidden');
        modalIcons.innerHTML = '';
        currentSelectedIcon = initialIcon || 'music';
        
        availableIcons.forEach(icon => {
            const btn = document.createElement('button');
            const isActive = icon === currentSelectedIcon;
            btn.className = `p-2 rounded-lg border transition-all ${isActive ? 'bg-blue-100 border-blue-500 text-blue-500' : 'bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-600'}`;
            btn.innerHTML = `<i data-lucide="${icon}" class="w-5 h-5" style="color: ${currentSelectedColor}"></i>`;
            btn.onclick = () => {
                // Remove active class from all
                Array.from(modalIcons.children).forEach(c => {
                    c.className = 'p-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-600 transition-all';
                });
                // Add active class to clicked
                btn.className = 'p-2 rounded-lg border border-blue-500 bg-blue-100 text-blue-500 transition-all';
                currentSelectedIcon = icon;
            };
            modalIcons.appendChild(btn);
        });
        lucide.createIcons();
    }

    if (showColors && modalColors) {
        modalColors.classList.remove('hidden');
        modalColors.innerHTML = '';

        availableColors.forEach(color => {
            const btn = document.createElement('button');
            const isActive = color === currentSelectedColor;
            btn.className = `w-8 h-8 rounded-full border-2 transition-all ${isActive ? 'border-slate-600 dark:border-white scale-110' : 'border-transparent hover:scale-110'}`;
            btn.style.backgroundColor = color;
            btn.onclick = () => {
                Array.from(modalColors.children).forEach(c => {
                    c.className = 'w-8 h-8 rounded-full border-2 border-transparent hover:scale-110 transition-all';
                });
                btn.className = 'w-8 h-8 rounded-full border-2 border-slate-600 dark:border-white scale-110 transition-all';
                currentSelectedColor = color;
                
                // Update icon colors in real-time
                if (modalIcons) {
                    modalIcons.querySelectorAll('svg, i').forEach(el => el.style.color = color);
                }
            };
            modalColors.appendChild(btn);
        });
    }

    modalCancel.textContent = translations[appState.currentLang].btn_cancel || "Cancel";
    modalConfirm.textContent = translations[appState.currentLang].btn_confirm || "Confirm";

    modal.classList.remove('hidden');
    // Trigger reflow
    void modal.offsetWidth;
    modal.classList.remove('opacity-0');
    modal.querySelector('div').classList.remove('scale-95');
    modal.querySelector('div').classList.add('scale-100');

    currentModalConfirmHandler = onConfirm;
}

function closeModal() {
    if (!modal) return;
    modal.classList.add('opacity-0');
    modal.querySelector('div').classList.remove('scale-100');
    modal.querySelector('div').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    currentModalConfirmHandler = null;
}

if (modalCancel) modalCancel.addEventListener('click', closeModal);
if (modalConfirm) modalConfirm.addEventListener('click', () => {
    if (currentModalConfirmHandler) {
        const inputValue = !modalInput.classList.contains('hidden') ? modalInput.value : null;
        currentModalConfirmHandler(inputValue, currentSelectedIcon, currentSelectedColor);
    }
    if (!modalInput.classList.contains('hidden') && !modalInput.value) return; // 입력창이 비었을 때 닫지 않으려면 이 줄 유지, 아니면 제거
    closeModal();
});
if (modalInput) modalInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') modalConfirm.click(); });

function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'bg-slate-800/90 dark:bg-white/90 text-white dark:text-slate-900 px-6 py-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 opacity-0 translate-y-4 font-medium text-sm';
    toast.textContent = message;

    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('opacity-0', 'translate-y-4');
    });

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-4');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function saveCurrentMix() {
    const activeSounds = {};
    let hasActive = false;

    appState.activeSounds.forEach(id => {
        const player = audioPlayers[id];
        if (player) {
            activeSounds[id] = player.gainNode.gain.value;
            hasActive = true;
        }
    });

    if (!hasActive) {
        showModal({
            title: "My ASMR Space",
            message: translations[appState.currentLang].alert_no_sound || "No sounds playing",
            type: 'alert'
        });
        return;
    }

    showModal({
        title: translations[appState.currentLang].btn_save_mix,
        type: 'input',
        placeholder: translations[appState.currentLang].prompt_mix_name,
        showIcons: true,
        showColors: true,
        onConfirm: (mixName, icon, color) => {
            if (mixName) {
                const newMix = { id: 'custom_' + Date.now(), name: mixName, icon: icon || 'music', color: color || '#3b82f6', sounds: activeSounds };
                appState.customMixes.push(newMix);
                safeStorage.set('asmr_custom_mixes', appState.customMixes);
                renderCustomMixes();
                showToast(translations[appState.currentLang].msg_saved || "Saved successfully.");
            }
        }
    });
}

function editCustomMix(id) {
    const mix = appState.customMixes.find(m => m.id === id);
    if (!mix) return;

    showModal({
        title: translations[appState.currentLang].my_mix_title,
        type: 'input',
        placeholder: translations[appState.currentLang].prompt_mix_name,
        initialValue: mix.name,
        initialIcon: mix.icon,
        initialColor: mix.color,
        showIcons: true,
        showColors: true,
        onConfirm: (newName, newIcon, newColor) => {
            if (newName) {
                mix.name = newName;
                mix.icon = newIcon || mix.icon;
                mix.color = newColor || mix.color;
                safeStorage.set('asmr_custom_mixes', appState.customMixes);
                renderCustomMixes();
                showToast(translations[appState.currentLang].msg_saved || "Saved successfully.");
            }
        }
    });
}

function deleteCustomMix(id, name) {
    const confirmMsg = translations[appState.currentLang].msg_delete_confirm || "Delete?";
    showModal({
        title: translations[appState.currentLang].my_mix_title,
        message: `'${name}' ${confirmMsg}`,
        type: 'confirm',
        onConfirm: () => {
            appState.customMixes = appState.customMixes.filter(m => m.id !== id);
            safeStorage.set('asmr_custom_mixes', appState.customMixes);
            renderCustomMixes();
        }
    });
}

// Helper to create player row
function createPlayerRow(id, isMobile) {
    const name = translations[appState.currentLang]['sound_' + id] || id;
    const sound = soundsData.find(s => s.id === id);
    const player = audioPlayers[id];
    
    if (!player || !sound) return null;

    const row = document.createElement('div');
    // Mobile: 2 lines (flex-wrap), PC: 1 line (flex-nowrap)
    if (isMobile) {
        row.className = 'flex items-center gap-2 p-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-xl border border-white/20 dark:border-slate-700/30 shadow-sm w-full';
    } else {
        row.className = 'flex items-center justify-between gap-4 p-3 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md rounded-xl border border-white/20 dark:border-slate-700/30 shadow-sm w-full transition-all hover:bg-white/60 dark:hover:bg-slate-800/60';
    }
    
    // Info (Icon + Name)
    const infoDiv = document.createElement('div');
    infoDiv.className = isMobile 
        ? 'flex items-center gap-2 overflow-hidden flex-1 min-w-0'
        : 'flex items-center gap-3 overflow-hidden flex-1 min-w-0';
    
    infoDiv.innerHTML = `
        <i data-lucide="${sound.icon}" class="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0"></i>
        <span class="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">${name}</span>
    `;

    // Controls
    const controlsDiv = document.createElement('div');
    controlsDiv.className = isMobile
        ? 'flex items-center gap-2 shrink-0'
        : 'flex items-center gap-3 shrink-0';

    // Volume Slider
    const volInput = document.createElement('input');
    volInput.type = 'range';
    volInput.min = '0';
    volInput.max = '1';
    volInput.step = '0.01';
    volInput.value = player.gainNode.gain.value;
    volInput.title = `${Math.round(player.gainNode.gain.value * 100)}%`;
    volInput.className = isMobile
        ? 'w-16 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-600 accent-blue-500'
        : 'w-24 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-600 accent-blue-500';
    
    // Unique ID for syncing
    volInput.id = `vol-${isMobile ? 'mobile' : 'pc'}-${id}`;

    const handleToggle = () => {
        if (player.isPlaying) {
            // ▼ 안드로이드 앱에 개별 정지 신호 전송
            if (typeof Android !== 'undefined' && Android.removeAudio) {
                Android.removeAudio(`https://asmrspace.shop/${sound.file}`);
            }
            player.audio.pause();
            player.isPlaying = false;
        } else {
            // ▼ 안드로이드 앱에 개별 재생 신호 전송
            if (typeof Android !== 'undefined' && Android.playAudio) {
                Android.playAudio(`https://asmrspace.shop/${sound.file}`, name);
            }
            player.audio.play();
            player.isPlaying = true;
        }
        updateUI(id, player.isPlaying);
        saveSession();
    };

    volInput.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        player.gainNode.gain.value = val;
        volInput.title = `${Math.round(val * 100)}%`;
        
        // Sync other sliders
        const otherType = isMobile ? 'pc' : 'mobile';
        const otherSlider = document.getElementById(`vol-${otherType}-${id}`);
        if (otherSlider) otherSlider.value = val;

        // ▼ 안드로이드 앱에 개별 볼륨 신호 전송
        if (typeof Android !== 'undefined' && Android.setVolume) {
            const soundFileUrl = `https://asmrspace.shop/${sound.file}`;
            Android.setVolume(soundFileUrl, val);
        }
    });
    volInput.addEventListener('change', saveSession);

    // PC only controls (Mobile has global controls at bottom)
    if (!isMobile) {
        // Play/Pause Button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'p-1 text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors shrink-0';
        toggleBtn.innerHTML = `<i data-lucide="${player.isPlaying ? 'pause' : 'play'}" class="w-4 h-4 fill-current"></i>`;
        toggleBtn.onclick = handleToggle;
        controlsDiv.appendChild(volInput);
        controlsDiv.appendChild(toggleBtn);
    } else {
        controlsDiv.appendChild(volInput);
    }

    // Favorite Button (Both)
    const isFav = appState.favorites.includes(id);
    const favBtn = document.createElement('button');
    favBtn.className = `player-fav-btn p-1 transition-colors shrink-0 ${isFav ? 'text-red-500' : 'text-slate-400 hover:text-red-500 dark:text-slate-500 dark:hover:text-red-400'}`;
    favBtn.dataset.id = id;
    favBtn.innerHTML = `<i data-lucide="heart" class="w-4 h-4 ${isFav ? 'fill-current' : ''}"></i>`;
    favBtn.onclick = () => toggleFavorite(id);
    controlsDiv.appendChild(favBtn);

    // Mobile Play/Pause Button
    if (isMobile) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'p-1 text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 transition-colors shrink-0';
        toggleBtn.innerHTML = `<i data-lucide="${player.isPlaying ? 'pause' : 'play'}" class="w-4 h-4 fill-current"></i>`;
        toggleBtn.onclick = handleToggle;
        controlsDiv.appendChild(toggleBtn);
    }

    // Close Button (Individual)
    const closeBtn = document.createElement('button');
    closeBtn.className = isMobile
        ? 'p-1 text-slate-400 hover:text-red-500 dark:text-slate-500 dark:hover:text-red-400 transition-colors shrink-0'
        : 'p-1 text-slate-400 hover:text-red-500 dark:text-slate-500 dark:hover:text-red-400 transition-colors shrink-0';
    closeBtn.innerHTML = `<i data-lucide="x" class="w-4 h-4"></i>`;
    closeBtn.onclick = () => {
        // ▼ 안드로이드 앱에 정지 신호 전송 (X 버튼 클릭 시)
        if (player.isPlaying && typeof Android !== 'undefined' && Android.removeAudio) {
            Android.removeAudio(`https://asmrspace.shop/${sound.file}`);
        }
        player.audio.pause();
        player.isPlaying = false;
        const idx = appState.activeSounds.indexOf(id);
        if (idx !== -1) appState.activeSounds.splice(idx, 1);
        updateUI(id, false);
        saveSession();
    };

    row.appendChild(infoDiv);
    row.appendChild(controlsDiv);
    if (!isMobile) row.appendChild(closeBtn); // Mobile uses global close or individual close? Let's keep individual close for mobile too in the row
    if (isMobile) row.appendChild(closeBtn);

    return row;
}

function updatePlayerBar() {
    const mobileList = document.getElementById('mobile-player-list');
    const pcList = document.getElementById('pc-player-list');
    
    if (appState.activeSounds.length > 0) {
        if (mobileList) mobileList.innerHTML = '';
        if (pcList) pcList.innerHTML = '';

        appState.activeSounds.forEach(id => {
            if (mobileList) {
                const mRow = createPlayerRow(id, true);
                if (mRow) mobileList.appendChild(mRow);
            }
            if (pcList) {
                const pRow = createPlayerRow(id, false);
                if (pRow) pcList.appendChild(pRow);
            }
        });
        
        if (mobilePlayerBar) mobilePlayerBar.classList.remove('translate-y-[150%]');
        if (pcPlayerBar) pcPlayerBar.classList.remove('translate-y-[150%]');
        
        // Adjust padding (approximate height of mobile bar)
        document.body.style.paddingBottom = '140px';
        
        // 토글 버튼 아이콘 업데이트 (하나라도 재생 중이면 일시정지 버튼 표시)
        const isAnyPlaying = appState.activeSounds.some(id => audioPlayers[id] && audioPlayers[id].isPlaying);
        const icon = isAnyPlaying ? 'pause' : 'play';
        const iconHtml = `<i data-lucide="${icon}" class="w-6 h-6 fill-current"></i>`;

        const mToggle = document.getElementById('mobile-player-toggle');
        const pToggle = document.getElementById('pc-player-toggle');
        if (mToggle) mToggle.innerHTML = iconHtml;
        if (pToggle) pToggle.innerHTML = iconHtml;
        
        lucide.createIcons();
    } else {
        if (mobilePlayerBar) mobilePlayerBar.classList.add('translate-y-[150%]');
        if (pcPlayerBar) pcPlayerBar.classList.add('translate-y-[150%]');
        document.body.style.paddingBottom = '0';
    }
}

// Android 앱에서 호출하여 웹 UI를 초기화하는 함수
window.resetAllButtons = function() {
    console.log("Android signal received: Resetting all buttons...");
    
    // 1. 모든 소리 중지
    Object.values(audioPlayers).forEach(player => {
        player.audio.pause();
        player.audio.currentTime = 0;
        player.isPlaying = false;
    });

    // 2. 모든 카드 UI 초기화 (재생 중 표시 제거)
    soundsData.forEach(sound => {
        const btn = document.getElementById(`btn-${sound.id}`);
        const card = document.getElementById(`card-${sound.id}`);
        if (btn) {
            btn.className = 'w-full py-2 rounded-lg bg-slate-100 dark:bg-slate-600 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-700 dark:text-white hover:text-white font-medium transition-colors flex justify-center items-center gap-2';
            btn.innerHTML = `<i data-lucide="play" width="16"></i> <span>${translations[appState.currentLang].play}</span>`;
        }
        if (card) {
            card.classList.remove('card-active');
        }
    });

    // 3. 앱 상태 초기화
    appState.activeSounds = [];
    
    // 4. 하단 플레이어 바 숨기기
    updatePlayerBar();
    
    // 5. 아이콘 다시 그리기 (Lucide)
    if (window.lucide) window.lucide.createIcons();
    
    // 6. 세션 저장
    saveSession();
};

function stopAllSounds() {
    if (typeof Android !== 'undefined') Android.stopAllAudio();
    // 모든 활성 사운드 정지 및 목록 초기화
    [...appState.activeSounds].forEach(id => {
        const player = audioPlayers[id];
        if (player) {
            player.audio.pause();
            player.isPlaying = false;
            updateUI(id, false);
        }
    });
    appState.activeSounds = [];
    updatePlayerBar();
    saveSession();
}

async function playMix(mix) {
    stopAllSounds();
    if (audioCtx.state === 'suspended') await audioCtx.resume();

    const promises = Object.entries(mix.sounds).map(async ([soundId, volume]) => {
        if (!appState.activeSounds.includes(soundId)) appState.activeSounds.push(soundId);
        const player = audioPlayers[soundId];
        if (player) {
            player.gainNode.gain.value = volume;
            const volSlider = document.getElementById(`vol-${soundId}`);
            // Sync both sliders
            const mSlider = document.getElementById(`vol-mobile-${soundId}`);
            const pSlider = document.getElementById(`vol-pc-${soundId}`);
            if (mSlider) mSlider.value = volume;
            if (pSlider) pSlider.value = volume;
            
            if (typeof Android !== 'undefined') {
                const s = soundsData.find(sd => sd.id === soundId);
                const url = `https://asmrspace.shop/${s.file}`;
                const name = translations[appState.currentLang]['sound_' + soundId];
                if (typeof Android.playAudio === 'function') Android.playAudio(url, name);
                if (typeof Android.setVolume === 'function') Android.setVolume(url, volume);
            }
            
            try {
                await player.audio.play();
                player.isPlaying = true;
                updateUI(soundId, true);
            } catch (e) {
                console.error(`Mix play error for ${soundId}:`, e);
            }
        }
    });

    await Promise.all(promises);
    saveSession();
}

async function toggleSound(id) {
    const player = audioPlayers[id];
    const sound = soundsData.find(s => s.id === id);
    const url = `https://asmrspace.shop/${sound.file}`;
    
    if (player.isPlaying) {
        // 재생 중이면 정지 (목록에서는 유지, X 버튼으로만 제거)
        if (typeof Android !== 'undefined' && typeof Android.removeAudio === 'function') {
            Android.removeAudio(url);
        }
        
        player.audio.pause();
        player.isPlaying = false;
        updateUI(id, false);
    } else {
        // 정지 상태면 재생하고 activeSounds에 추가
        if (typeof Android !== 'undefined' && typeof Android.playAudio === 'function') {
            const name = translations[appState.currentLang]['sound_' + id];
            Android.playAudio(url, name);
        }

        if (!appState.activeSounds.includes(id)) appState.activeSounds.push(id);
        try {
            await player.audio.play();
            player.isPlaying = true;
            updateUI(id, true);
        } catch (e) {
            console.error('Play error:', e);
        }
    }
    lucide.createIcons();
    saveSession();
}

async function toggleGlobalPlayback() {
    const isAnyPlaying = appState.activeSounds.some(id => audioPlayers[id] && audioPlayers[id].isPlaying);
    
    if (typeof Android !== 'undefined') {
        if (isAnyPlaying) {
            Android.pauseAudio();
        } else {
            Android.resumeAudio();
        }
    }

    if (isAnyPlaying) {
        // 일시정지: 소리는 멈추지만 activeSounds 목록은 유지
        appState.activeSounds.forEach(id => {
            const player = audioPlayers[id];
            if (player && player.isPlaying) {
                player.audio.pause();
                player.isPlaying = false;
                updateUI(id, false);
            }
        });
    } else {
        // 재생: activeSounds 목록에 있는 소리들 다시 재생
        appState.activeSounds.forEach(async id => {
            const player = audioPlayers[id];
            if (player && !player.isPlaying) {
                try {
                    await player.audio.play();
                    player.isPlaying = true;
                    updateUI(id, true);
                } catch (e) { console.error(e); }
            }
        });
    }
}

function updateUI(id, isPlaying) {
    const btn = document.getElementById(`btn-${id}`);
    const card = document.getElementById(`card-${id}`);
    const textKey = isPlaying ? 'stop' : 'play';
    const icon = isPlaying ? 'pause' : 'play';
    const sound = soundsData.find(s => s.id === id);
    
    if (isPlaying) {
        btn.className = 'w-full py-2 rounded-lg bg-sky-400 hover:bg-sky-500 text-white font-medium transition-colors flex justify-center items-center gap-2';
        btn.innerHTML = `<i data-lucide="${icon}" width="16"></i> <span data-i18n="${textKey}">${translations[appState.currentLang][textKey]}</span>`;
        card.classList.add('card-active');
    } else {
        btn.className = 'w-full py-2 rounded-lg bg-slate-100 dark:bg-slate-600 hover:bg-blue-500 dark:hover:bg-blue-500 text-slate-700 dark:text-white hover:text-white font-medium transition-colors flex justify-center items-center gap-2';
        btn.innerHTML = `<i data-lucide="${icon}" width="16"></i> <span data-i18n="${textKey}">${translations[appState.currentLang][textKey]}</span>`;
        card.classList.remove('card-active');
    }
    updatePlayerBar();
    lucide.createIcons();
}

function toggleFavorite(id) {
    const index = appState.favorites.indexOf(id);
    const isFav = index === -1;
    
    if (isFav) {
        appState.favorites.push(id);
    } else {
        appState.favorites.splice(index, 1);
    }
    safeStorage.set('asmr_favorites', appState.favorites);

    // Update Card Button
    const card = document.getElementById(`card-${id}`);
    if (card) {
        const btn = card.querySelector('.fav-btn');
        if (btn) {
            const icon = btn.querySelector('svg') || btn.querySelector('i');
            if (isFav) {
                btn.classList.remove('text-slate-300', 'dark:text-slate-600');
                btn.classList.add('text-red-500');
                if (icon) icon.classList.add('fill-current');
            } else {
                btn.classList.remove('text-red-500');
                btn.classList.add('text-slate-300', 'dark:text-slate-600');
                if (icon) icon.classList.remove('fill-current');
            }
        }
    }

    // Update Player Bar Button
    // Update all instances (mobile and pc)
    document.querySelectorAll(`.player-fav-btn[data-id="${id}"]`).forEach(pBtn => {
        if (pBtn) {
            const icon = pBtn.querySelector('svg') || pBtn.querySelector('i');
            if (isFav) {
                pBtn.classList.remove('text-slate-400', 'hover:text-red-500', 'dark:text-slate-500', 'dark:hover:text-red-400');
                pBtn.classList.add('text-red-500');
                if (icon) icon.classList.add('fill-current');
            } else {
                pBtn.classList.remove('text-red-500');
                pBtn.classList.add('text-slate-400', 'hover:text-red-500', 'dark:text-slate-500', 'dark:hover:text-red-400');
                if (icon) icon.classList.remove('fill-current');
            }
        }
    });
    
    applyFilters();
}

function applyFilters() {
    // 7. 성능 이슈 개선
    soundsData.forEach(sound => {
        const card = document.getElementById(`card-${sound.id}`);
        if (!card) return;
        
        let visible = true;

        if (appState.showFavoritesOnly && !appState.favorites.includes(sound.id)) {
            visible = false;
        }

        if (visible && appState.activeTag && !sound.tags.includes(appState.activeTag)) {
            visible = false;
        }

        if (visible) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    document.querySelectorAll('.tag-btn').forEach(btn => {
        if (btn.dataset.tag === appState.activeTag) {
            btn.classList.add('bg-blue-500', 'text-white');
            btn.classList.remove('bg-slate-100', 'dark:bg-slate-700', 'text-slate-600', 'dark:text-slate-300');
        } else {
            btn.classList.remove('bg-blue-500', 'text-white');
            btn.classList.add('bg-slate-100', 'dark:bg-slate-700', 'text-slate-600', 'dark:text-slate-300');
        }
    });
}

function filterByTag(tag) {
    appState.activeTag = (appState.activeTag === tag) ? null : tag;
    applyFilters();
}

if (favFilterBtn) {
    favFilterBtn.addEventListener('click', () => {
        appState.showFavoritesOnly = !appState.showFavoritesOnly;
        
        // 활성화 상태 스타일 (빨간색)
        favFilterBtn.classList.toggle('bg-red-50', appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('dark:bg-red-900/30', appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('border-red-200', appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('dark:border-red-900', appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('text-red-500', appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('dark:text-red-400', appState.showFavoritesOnly);
        
        // 기본 상태 스타일 (흰색/회색) - 활성화 시 제거, 비활성화 시 추가
        favFilterBtn.classList.toggle('bg-white', !appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('dark:bg-slate-800', !appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('text-slate-600', !appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('dark:text-slate-300', !appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('border-slate-200', !appState.showFavoritesOnly);
        favFilterBtn.classList.toggle('dark:border-slate-700', !appState.showFavoritesOnly);
        
        applyFilters();
    });
}

['mobile', 'pc'].forEach(type => {
    const toggle = document.getElementById(`${type}-player-toggle`);
    const close = document.getElementById(`${type}-player-close`);
    const save = document.getElementById(`${type}-save-btn`);
    
    if (toggle) toggle.addEventListener('click', toggleGlobalPlayback);
    if (close) close.addEventListener('click', stopAllSounds);
    if (save) save.addEventListener('click', saveCurrentMix);
});

if (showMixesBtn && mixListModal) {
    showMixesBtn.addEventListener('click', () => {
        mixListModal.classList.remove('hidden');
        // Trigger reflow
        void mixListModal.offsetWidth;
        mixListModal.classList.remove('opacity-0');
        mixListModal.querySelector('div').classList.remove('scale-95');
        mixListModal.querySelector('div').classList.add('scale-100');
        renderCustomMixes();
    });

    const closeMixList = () => {
        mixListModal.classList.add('opacity-0');
        mixListModal.querySelector('div').classList.remove('scale-100');
        mixListModal.querySelector('div').classList.add('scale-95');
        setTimeout(() => {
            mixListModal.classList.add('hidden');
        }, 300);
    };

    if (mixListClose) mixListClose.addEventListener('click', closeMixList);
    mixListModal.addEventListener('click', (e) => {
        if (e.target === mixListModal) closeMixList();
    });
}

if (mixSearchInput) {
    mixSearchInput.addEventListener('input', renderCustomMixes);
}

window.addEventListener('resize', () => {
    // Padding logic is handled in updatePlayerBar
});

function initTheme() {
    const savedTheme = safeStorage.getStr('asmr_theme', null);
    if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
}

function updateQuote() {
    const quoteEl = document.getElementById('daily-quote');
    if (!quoteEl) return;
    
    // 현재 언어의 명언 배열 가져오기 (없으면 한국어 기본값)
    const currentQuotes = translations[appState.currentLang].quotes || translations['ko'].quotes;
    
    if (currentQuotes && currentQuotes.length > 0) {
        const randomQuote = currentQuotes[Math.floor(Math.random() * currentQuotes.length)];
        quoteEl.textContent = `"${randomQuote}"`;
    }
}

function updateAndroidPlaylist() {
    if (typeof Android !== 'undefined' && typeof Android.updatePlaylist === 'function') {
        const playlist = soundsData.map(sound => ({
            url: `https://asmrspace.shop/${sound.file}`,
            title: translations[appState.currentLang]['sound_' + sound.id] || sound.id
        }));
        Android.updatePlaylist(JSON.stringify(playlist));
    }
}

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[appState.currentLang][key]) {
            el.innerHTML = translations[appState.currentLang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[appState.currentLang][key]) {
            el.placeholder = translations[appState.currentLang][key];
        }
    });

    const langNames = {
        ko: '한국어',
        en: 'English',
        ja: '日本語',
        zh: '中文',
        es: 'Español'
    };
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        const langSpan = langBtn.querySelector('span');
        if (langSpan) {
            langSpan.textContent = langNames[appState.currentLang];
        }
    }
    
    // 홈 페이지에만 있는 요소들 업데이트
    if (document.getElementById('daily-quote')) {
        updateQuote();
    }
    updatePlayerBar();
    if (mixGrid) {
        renderMixes();
    }
    if (customMixGrid) {
        renderCustomMixes();
    }
    updateAndroidPlaylist();
}

// 1. 초기화 순서 & 3. 이벤트 리스너 중복 방지
function init() {
    lucide.createIcons();
    initTheme();
    
    const langBtn = document.getElementById('lang-btn');
    const langMenu = document.getElementById('lang-menu');
    const themeBtn = document.getElementById('theme-btn');

    if (themeBtn) themeBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        safeStorage.setStr('asmr_theme', isDark ? 'dark' : 'light');
    });

    updateLanguage();
    
    // 홈 페이지 전용 초기화
    if (soundGrid) {
        initSoundCards();
        restoreSession();
    }
    
    // 2. Null 체크 (Event Listeners)
    if (langBtn && langMenu) {
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
                const selectedLang = e.currentTarget.getAttribute('data-lang');
                if (selectedLang && translations[selectedLang]) {
                    appState.currentLang = selectedLang;
                    safeStorage.setStr('asmr_lang', appState.currentLang);
                    updateLanguage();
                    langMenu.classList.add('hidden');
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', init);