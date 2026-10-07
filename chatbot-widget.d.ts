import { LitElement } from 'lit';
export interface WidgetTheme {
    title?: string;
    /**
     * 사용자 업로드 이미지 URL: launcher에 표시. 미지정 시 기본 chat icon 사용.
     * launcherBg의 명도에 따라 fallback icon 색은 자동 대비 처리.
     * **설정 시 패널이 열려도 이 아이콘이 유지된다** (닫기 X로 바뀌지 않음). 등록한
     * 브랜드 아이콘이 사라지지 않게. 닫기는 런처 재클릭 또는 패널 헤더의 × 로.
     */
    iconUrl?: string;
    /**
     * launcher의 원형 배경/그림자를 없애고 iconUrl 이미지만 그대로 노출.
     * iconUrl 미설정 시 무시 (기본 SVG는 배경 원 필요).
     * 열린 상태는 opacity/축소로만 표시.
     */
    launcherIconOnly?: boolean;
    /**
     * launcher에 곁들일 짧은 문구 (예: "문의하기"). 미지정/빈 문자열이면 미표시.
     * 표시 방식은 launcherLabelMode 로 선택.
     */
    launcherLabel?: string;
    /**
     * launcherLabel 표시 방식.
     *   - "always"(기본): 아이콘 **아래에 항상** 표시. host가 bottom 고정이라 라벨이
     *     아래에 붙고 아이콘이 그만큼 위로 올라간다.
     *   - "hover": 마우스를 올릴 때만 **툴팁**으로 표시. 레이아웃을 밀지 않는다.
     *     위/아래는 열린 panel·viewport 경계와 겹칠 수 있어 런처 **옆**에 띄운다
     *     (우측 하단이면 왼쪽, 좌측 하단이면 오른쪽).
     */
    launcherLabelMode?: "always" | "hover";
    /**
     * always 모드 라벨 색. 호스트 페이지 배경 위에 놓이는 텍스트라 대비가 중요 —
     * 어두운 페이지에 올릴 땐 반드시 밝은 색으로 지정. 기본 launcherBg.
     * (hover 툴팁은 자체 배경을 가지므로 이 값과 무관하게 항상 고정 색상.)
     */
    launcherLabelColor?: string;
    /** 라벨/툴팁 글자 크기(px). 기본 12. */
    launcherLabelSize?: number;
    /**
     * 대화 목록 최상단에 항상 표시되는 인사 말풍선. 마크다운 지원.
     * 서버 히스토리엔 포함되지 않는 표시 전용: sessionStorage에도 저장 안 됨.
     */
    welcomeMessage?: string;
    /** 헤더 좌측에 표시할 작은 아이콘 이미지 URL. 미지정 시 텍스트만. */
    headerIconUrl?: string;
    /** launcher (toggle) 버튼 배경색. 기본: #1f2937 */
    launcherBg?: string;
    /** panel 전체 바탕색. 기본: #ffffff */
    panelBg?: string;
    /** panel header 영역 배경색. 기본: #f9fafb */
    headerBg?: string;
    /** 사용자 메시지 bubble 배경색. 기본: launcherBg와 동일. */
    userBg?: string;
    /** 사용자 메시지 텍스트 색상. 기본: #ffffff */
    userText?: string;
    /** 어시스턴트 메시지 bubble 배경색. 기본: #f3f4f6 */
    assistantBg?: string;
    /** 어시스턴트 메시지 텍스트 색상. 기본: #111111 */
    assistantText?: string;
    /** 전송 버튼 배경색. 기본: launcherBg와 동일. */
    sendBg?: string;
    /** 전송 버튼 텍스트 색상. 기본: #ffffff */
    sendText?: string;
    /** 헤더 제목 텍스트 크기(px). 기본 14 */
    headerTitleSize?: number;
    /** 채팅 메시지 본문 텍스트 크기(px). 기본 14 */
    messageSize?: number;
    /** 입력 폰트 크기(px). 기본 14 */
    inputSize?: number;
    /** 데스크톱 런처(toggle) 버튼 크기(px). 기본 100 */
    launcherSize?: number;
    /** 모바일(≤640px) 런처(toggle) 버튼 크기(px). 기본 52 */
    launcherSizeMobile?: number;
    /** 커스텀 업로드 아이콘(iconUrl) 크기(px). 기본 36 */
    launcherIconSize?: number;
    /** 기본 아이콘(SVG, iconUrl 미지정 시) 크기(px). 기본 24 */
    launcherSvgSize?: number;
    /**
     * 기능 토글: undefined면 default ON. host script에서 `theme: { captureEnabled: false }`로
     * 특정 페이지에서만 끌 수 있음.
     */
    captureEnabled?: boolean;
    regionCaptureEnabled?: boolean;
    selectionMirrorEnabled?: boolean;
    /** 문서 조회 내역 숨기기 (기본 꺼짐). 서버가 이 값을 보고 문서 이름 대신 횟수만 보낸다. */
    hideLookupDetails?: boolean;
    /**
     * 답을 못 찾으면 문의 권하기 (기본 켜짐). 서버가 이 값을 보고 못 찾은 답 아래에 담당자 칩(hint.handoff)을
     * 붙일지 정한다. 꺼도 방문자가 담당자를 찾는 말에는 붙는다.
     */
    notFoundHandoffEnabled?: boolean;
    /**
     * 위젯 디자인. 미지정이면 "classic"(지금까지의 모양)이라, 이미 붙어 있는 사이트는 위젯
     * 코드가 바뀌어도 그대로 보인다. "modern" 은 브랜드 색 머리글, 흰 답 카드, 둥근 입력칸,
     * 아래에서 올라오는 시트를 쓰는 새 디자인. 새 프로젝트는 서버가 "modern" 으로 만들고,
     * 기존 프로젝트는 대시보드 위젯 테마에서 바꾼다. 호스트가 init theme 으로 덮어써도 된다.
     */
    design?: "classic" | "modern";
    /**
     * modern 머리글 제목 아래 안내 문구. 미지정이면 "보통 몇 초 안에 답해요", 빈 문자열이면 숨김.
     * 상담 시간이나 AI 가 답한다는 안내에 쓴다. classic 에는 안내 문구 자리가 없다.
     */
    headerSubtitle?: string;
    /** modern 첫 화면의 추천 질문 (최대 4개). 누르면 바로 물어보고, 첫 질문을 보내면 사라진다. */
    suggestedQuestions?: string[];
}
export declare class TimelyChatbot extends LitElement {
    apiKey: string;
    browserId: string;
    apiBaseUrl: string;
    /**
     * 호스트가 end-user JWT를 반환하는 콜백 (인증 모드).
     * widget이 chat 호출 직전 캐시에 토큰 없으면 호출. 401 받으면 캐시 무효화 후 다음 호출에서 자동 재호출.
     * 미설정 시 게스트 모드: apiKey로 우리 서버 /widget/guest-jwt를 자동 호출.
     */
    getAccessToken?: () => Promise<string>;
    /**
     * 미리보기 모드. true면 네트워크 호출(`/widget/init`, `/widget/chat`) 모두 skip하고
     * panel 자동 open + 더미 메시지로 외형/테마만 보여줌. dashboard 라이브 프리뷰용.
     *
     * 외부에서 theme prop은 별도로 set, `el.setPreviewTheme({ launcherBg: ... })`로 갱신 가능.
     * 또는 element style.setProperty('--launcher-bg', ...) 직접도 OK (CSS variable).
     */
    previewMode: boolean;
    /**
     * inline 모드: host element 자체가 panel 컨테이너. launcher 숨김 + panel이 host의
     * width/height 100%로 채움. dashboard 라이브 프리뷰처럼 임의 위치에 박을 때.
     *
     * 사용 예: `<timely-chatbot inline preview-mode style="width:320px;height:480px"></timely-chatbot>`
     * 또는 부모 div에 sizing 두고 widget이 inherit.
     *
     * `previewMode`와는 독립: inline만 단독으로 켜면 실제 채팅 panel이 inline에 고정됨
     * (운영 시 launcher 없이 항상 열려있는 패널 형태도 가능).
     */
    inline: boolean;
    /**
     * host script가 init()으로 넘긴 theme override.
     *
     * /widget/init에서 받은 서버 theme(대시보드 저장값) 위에 shallow merge —
     * host script에서 `init({ theme: { captureEnabled: false, messageSize: 16 } })`
     * 처럼 페이지별로 끄거나 키울 수 있음. 서버 default는 손대지 않음.
     */
    themeOverride?: Partial<WidgetTheme>;
    private open;
    private fullscreen;
    private messages;
    private input;
    private streaming;
    /**
     * 대화 목록이 맨 아래에 있는지. 맨 아래일 때만 새 글을 따라 내려간다.
     * 방문자가 위로 올려 읽는 중이면 끌어내리지 않고 "맨 아래로" 버튼을 띄운다.
     */
    private atBottom;
    /** 대화 전에 받을 정보. 꺼져 있거나 아직 모르면 null */
    private intake;
    /** /widget/intake 를 이 대화에서 이미 불렀는지 (중복 호출 방지) */
    private intakeRequest;
    private sessionId?;
    private theme;
    /**
     * /widget/init 응답에서 받은 projectId. sessionStorage 키 prefix로 사용 (다중 widget 임베드
     * 시 충돌 방지). state로 둘 필요 없음. 한 번 set 후 변하지 않고 render에 안 쓰임.
     */
    private projectId?;
    /**
     * 1 user message 최대 글자수. /widget/init 응답으로 수신. textarea maxLength + counter UI에 사용.
     * 미수신 시 fallback 2000 (서버 default와 동일).
     */
    private maxUserMessageChars;
    /** panel rect (viewport 기준). 첫 open 시 default 위치/사이즈로 init. */
    private rect;
    /** 신고 폼이 열린 메시지 id. null이면 닫힘. */
    private reportingMessageId;
    /** 헤더의 "대화 초기화" 버튼이 띄우는 인-위젯 확인 모달 토글. */
    private resetConfirmOpen;
    private reportReason;
    private reportDetail;
    private reportSubmitting;
    private reportError;
    /** 문의 폼 상태 */
    private inquiryOpen;
    private inquiryCategory;
    private inquirySubject;
    private inquiryBody;
    private inquiryContact;
    private inquirySubmitting;
    private inquiryError;
    private inquirySuccess;
    /** modern 머리글의 ⋯ 메뉴 (문의 남기기 / 새 대화 / 크게 보기). */
    private menuOpen;
    /** modern 입력칸 왼쪽 캡처 버튼의 고르기 메뉴 (지금 화면 / 영역 골라). 캡처를 둘 다 켰을 때만 연다. */
    private capMenuOpen;
    /**
     * modern 의 "다시 시도"용: 연결·서버 오류로 답을 못 받은 마지막 질문과 첨부.
     * 메모리에만 두고 저장하지 않는다 (첨부 이미지 base64 가 클 수 있고, 새로고침 뒤엔 의미 없음).
     */
    private lastFailed;
    /** 지금 답을 받는 중인 질문. 스트림 도중 error 이벤트가 오면 lastFailed 로 옮긴다. */
    private inflight;
    /** 다음 메시지 전송 시 함께 보낼 첨부. */
    private pendingAttachments;
    private capturing;
    /** 영역 캡처 모드: 활성 시 위젯 패널을 잠시 가리고 dim overlay에서 드래그 받음. */
    private regionCapturing;
    /** selectionchange debounce 타이머. */
    private selectionTimer;
    /**
     * 위젯 host 내부 pointerdown 시각 (ms). 입력창 클릭·드래그 등 위젯과 상호작용 시 호스트 페이지의
     * selection이 collapse되는 부수 효과가 있는데, 이 collapse는 "인용 해제 의도"가 아니므로 무시해야 함.
     * 0 = 한 번도 위젯 안에서 누른 적 없음.
     */
    private widgetInteractionAt;
    /** 드래그 중인 사각형 (viewport 좌표). null=드래그 시작 전. */
    private regionRect;
    private regionStart;
    private jwt?;
    static styles: import('lit').CSSResult;
    render(): import('lit').TemplateResult<1>;
    /** theme.design === "modern" (새 디자인). 미지정·"classic" 이면 종전 모양. */
    private get isModern();
    /**
     * modern 머리글: 아바타, 제목, 안내 문구, 더보기 메뉴(문의 남기기·새 대화·크게 보기), 닫기.
     * 안내 문구는 theme.headerSubtitle (미지정이면 기본 문구, 빈 문자열이면 숨김).
     */
    private renderModernHeader;
    private toggleMenu;
    private closeMenu;
    private renderMenu;
    /** modern 오류 안내 카드. "다시 시도"는 마지막으로 실패한 답에만, 답을 받는 중이 아닐 때만. */
    private renderNotice;
    /** 보내기 전 첨부 칩. classic 은 입력창 위 줄에, modern 은 입력 영역 안에 놓는다. */
    private renderPendingChips;
    /** modern 추천 질문. 첫 질문을 보내기 전까지만 보인다 (대시보드 미리보기에선 늘 보여 준다). */
    /** 처음 묻는 말, 받는 동안의 항목 칩, 다 받은 뒤의 "알려 준 정보" 카드 */
    private renderIntake;
    /**
     * 대화 전에 받을 정보를 불러온다 (열 때, 새 대화를 시작할 때). 이어 쓰는 대화면 받은 값도 함께 온다.
     * 실패해도 대화는 된다: 서버가 대화 중에 같은 규칙으로 정보를 먼저 묻는다.
     */
    private loadIntake;
    private renderSuggestions;
    /**
     * modern 답 뒤 칩 (서버의 답 확인이 고른 것). 마지막 답에만 그린다.
     * FAQ 질문은 처음 추천 질문처럼 누르면 그대로 보내고, 담당자 칩은 방금 질문을 제목에 채워 문의 시트를 연다.
     */
    private renderHint;
    /** 이 답 바로 앞의 방문자 질문. */
    private questionBefore;
    /** 추천 질문을 누르면 입력칸에 넣고 바로 보낸다. 보내는 흐름은 send 그대로 쓴다. */
    private askSuggested;
    /**
     * modern 입력: 왼쪽에 캡처 버튼 하나, 가운데 둥근 입력칸, 오른쪽에 동그란 보내기.
     * 문의 남기기는 더보기 메뉴 맨 위에 있다 (renderMenu). 글자 수는 80%부터 보이고 95%부터 빨갛다.
     */
    private renderModernComposer;
    /**
     * modern 캡처 버튼. 캡처를 둘 다 켜 두면 고르기 메뉴(지금 화면 / 영역 골라)를 열고,
     * 하나만 켜 두면 고를 것 없이 바로 그 캡처를 한다. 둘 다 끄면 버튼이 없다.
     */
    private renderCaptureButton;
    private toggleCapMenu;
    private closeCapMenu;
    private pickViewportCapture;
    private pickRegionCapture;
    /** 열린 메뉴(더보기, 캡처 고르기)는 Esc 로 닫는다. */
    private onPanelKeydown;
    private renderReportModal;
    private renderRegionCaptureOverlay;
    /**
     * 대화 초기화 확인 모달: 인-위젯 스타일, 테마 컬러(--launcher-bg) 사용해 호스트 페이지에
     * 자연스럽게 녹아듦. 기존 report-modal 스타일 재사용 + reset 전용 actions만.
     */
    private renderResetConfirmModal;
    private renderInquiryModal;
    connectedCallback(): void;
    /**
     * 미리보기 모드 셋업: panel 자동 open + 더미 메시지. 네트워크 호출 0.
     * dashboard의 라이브 프리뷰에서 외형/테마 검증용.
     */
    private setupPreviewMode;
    /**
     * 프리뷰 더미 메시지: welcomeMessage가 설정되면 상단에 웰컴 말풍선이 별도 렌더되므로
     * 더미 인사말은 빼서 인사가 두 번 보이는 것 방지.
     */
    private syncPreviewMessages;
    /**
     * 미리보기 모드에서 외부(dashboard)가 theme prop을 즉시 갱신할 때 사용.
     * 일반 모드에선 fetchInit이 theme를 채움, 이 메서드는 호출 안 함.
     */
    setPreviewTheme(theme: WidgetTheme): void;
    disconnectedCallback(): void;
    /**
     * 호스트 페이지의 세로 scrollbar 폭을 측정해 CSS 변수에 반영.
     *
     * 문제: fullscreen 시 `.panel`이 `inset: 0; width: 100vw`, 100vw는 scrollbar 영역까지
     * 포함하는 viewport 폭이라, panel의 우측 끝이 호스트 scrollbar 뒤에 깔린다. 결과적으로
     * 우측 내부 padding 영역이 scrollbar에 가려져 보임.
     *
     * 해결: `window.innerWidth`(scrollbar 포함) − `documentElement.clientWidth`(scrollbar 제외)로
     * scrollbar 폭을 얻어 CSS 변수에 박고, fullscreen 시 panel `right` inset에 더한다.
     */
    private updatePageScrollbarOffset;
    /**
     * 모바일(≤640px) classic 패널이 런처를 덮지 않게, 런처 스택(버튼 + always 라벨) 높이를 재서
     * 패널 아래 여백(--launcher-clear)으로 쓴다. 16 = 모바일 host 아래 여백, 12 = 패널과의 틈.
     * 종전엔 80px 고정이라 큰 런처나 라벨이 패널 밑에 깔렸다. 런처가 없으면(inline) 그대로 둔다.
     */
    private updateLauncherClearance;
    private storageKey;
    private loadPersistedSession;
    private persistSession;
    private clearPersistedSession;
    private handleDocPointerDown;
    /**
     * 페이지 selection 미러링: 한 turn에 한 슬롯만 동기화.
     * - 새 selection 도착 → 기존 selection 슬롯 replace
     * - selection 해제(빈 문자열) → 슬롯 제거
     * - 위젯 내부 selection은 무시 (shadow DOM 안 selection은 host의 getSelection()에 안 잡혀
     *   자연스럽게 빠지지만, 안전하게 anchorNode가 위젯 host 내부면 한 번 더 거름)
     * - 영역 캡처 / 전송 중엔 동기화 멈춤
     */
    private handleSelectionChange;
    private syncSelectionAttachment;
    private fetchInit;
    private themeCacheKey;
    /** host script 의 themeOverride 를 현재 theme 위에 즉시 병합 (서버 응답 불필요). */
    private applyThemeOverride;
    private loadCachedTheme;
    private saveCachedTheme;
    /**
     * theme를 host element에 적용 (CSS variables).
     *
     * launcherBg가 밝은 색일 경우 SVG 아이콘(닫기/chat fallback)이 white 위에 white로
     * 사라지는 문제 방지: launcherBg의 상대 휘도를 계산해 --launcher-fg 자동 설정.
     * 사용자 업로드 이미지 아이콘은 영향 없음(img는 색상 무관).
     */
    private applyTheme;
    private renderToggleIcon;
    /**
     * open 시 첫 호출: default panel rect 계산.
     *
     * 위치는 host element의 data-position 속성 기준 (host script가 설정).
     * 미설정 시 우측 하단 default.
     */
    private ensureRect;
    /**
     * panel 하단이 런처 위로 얼마나 떠야 하는지, 런처 스택(버튼 + always 라벨)의
     * 실측 높이 + 여백. PANEL_GAP(56+16 하드코딩) 은 기본 크기 전제라 큰 launcherSize
     * 나 always 라벨에서 panel 이 런처를 덮었다. 실측 실패 시 기존 상수로 폴백.
     */
    private launcherGap;
    private panelStyle;
    private startResize;
    private startDrag;
    private toggleFullscreen;
    private close;
    private toggle;
    updated(): void;
    private scrollToBottom;
    /** 맨 아래에서 48px 안이면 맨 아래로 본다 (마지막 줄이 조금 덜 보여도 따라가게). */
    private onMessagesScroll;
    private jumpToBottom;
    private openReport;
    private closeReport;
    private submitReport;
    /**
     * 헤더의 "대화 초기화" 버튼. 사용자에게 인-위젯 확인 모달 띄움. 스트리밍 중이거나
     * 메시지가 없으면 무시 (UI에서 이미 disabled, 안전망).
     */
    private resetConversation;
    /**
     * 실제 reset 실행: sessionStorage 비움 + 메시지/세션 초기화. 다음 메시지부터 서버
     * 입장에서 새 세션. 모달도 함께 닫음.
     */
    private confirmReset;
    private cancelReset;
    private openInquiry;
    /** 답 뒤 담당자 칩: 방금 질문을 제목에 채워 문의 시트를 연다 (대화도 sessionId 로 함께 간다). */
    private openInquiryFor;
    private closeInquiry;
    private submitInquiry;
    /**
     * 첨부 파일의 단기 서명 URL 캐시.
     *
     * 응답에는 id 만 들어오고 URL 은 필요할 때 받아온다. 이미지는 `<img src>` 에
     * Authorization 헤더를 실을 수 없어 이렇게 한 번 교환하는 단계가 필요하다.
     * 만료되면 다음 세션에서 다시 받으므로 캐시는 메모리에만 둔다.
     */
    private fileUrls;
    private fileUrlPending;
    private resolveFileUrl;
    /** 이미지 렌더용: URL 을 받아오고 도착하면 다시 그린다. */
    private ensureFileUrl;
    private openAttachment;
    /** 답변에 딸린 파일. 이미지는 바로 보여주고 그 외는 내려받기 카드로. */
    private renderAttachments;
    private toggleReaction;
    private ensureJwt;
    /** 401 시 무효화. 게스트 모드는 다음 호출에서 자동 재발급. 인증 모드는 호스트가 setAccessToken 호출 필요. */
    private invalidateJwt;
    private captureViewport;
    private startRegionCapture;
    private cancelRegionCapture;
    private regionKeyHandler;
    private regionPointerDown;
    private regionPointerMove;
    private regionPointerUp;
    private removeAttachment;
    /**
     * composer textarea 참조: input 후 자동 height 조정 + send 후 reset에 사용.
     * 위젯 안 form 은 입력창 하나뿐이라 두 디자인(classic .composer / modern .m-input) 모두 잡힌다.
     */
    private composerTextarea?;
    private onComposerInput;
    /**
     * Enter로 전송, Shift+Enter는 줄바꿈. IME 조합 중(`isComposing`)이면 무시, 한글 입력
     * 조합 종료 Enter가 send를 발화시키는 흔한 버그 방지.
     */
    private onComposerKeydown;
    private send;
    /**
     * 질문 하나를 보내고 답 스트림을 assistant 말풍선에 채운다. send 와 modern 의 "다시 시도"가 함께 쓴다.
     * 호출 전에 streaming = true 와 assistant placeholder 가 준비돼 있어야 한다.
     */
    private streamReply;
    /** modern "다시 시도": 실패한 답 자리를 새 말풍선으로 바꾸고 같은 질문과 첨부를 다시 보낸다. */
    private retryLast;
    private handleSse;
}
declare global {
    interface HTMLElementTagNameMap {
        "timely-chatbot": TimelyChatbot;
    }
}
//# sourceMappingURL=chatbot-widget.d.ts.map