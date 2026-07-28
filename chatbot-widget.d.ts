import { LitElement } from 'lit';
export interface WidgetTheme {
    title?: string;
    /**
     * 사용자 업로드 이미지 URL — launcher에 표시. 미지정 시 기본 chat icon 사용.
     * launcherBg의 명도에 따라 fallback icon 색은 자동 대비 처리.
     * **설정 시 패널이 열려도 이 아이콘이 유지된다** (닫기 X로 바뀌지 않음) — 등록한
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
     * 서버 히스토리엔 포함되지 않는 표시 전용 — sessionStorage에도 저장 안 됨.
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
     * 기능 토글 — undefined면 default ON. host script에서 `theme: { captureEnabled: false }`로
     * 특정 페이지에서만 끌 수 있음.
     */
    captureEnabled?: boolean;
    regionCaptureEnabled?: boolean;
    selectionMirrorEnabled?: boolean;
}
export declare class TimelyChatbot extends LitElement {
    apiKey: string;
    browserId: string;
    apiBaseUrl: string;
    /**
     * 호스트가 end-user JWT를 반환하는 콜백 (인증 모드).
     * widget이 chat 호출 직전 캐시에 토큰 없으면 호출. 401 받으면 캐시 무효화 후 다음 호출에서 자동 재호출.
     * 미설정 시 게스트 모드 — apiKey로 우리 서버 /widget/guest-jwt를 자동 호출.
     */
    getAccessToken?: () => Promise<string>;
    /**
     * 미리보기 모드. true면 네트워크 호출(`/widget/init`, `/widget/chat`) 모두 skip하고
     * panel 자동 open + 더미 메시지로 외형/테마만 보여줌. dashboard 라이브 프리뷰용.
     *
     * 외부에서 theme prop은 별도로 set — `el.setPreviewTheme({ launcherBg: ... })`로 갱신 가능.
     * 또는 element style.setProperty('--launcher-bg', ...) 직접도 OK (CSS variable).
     */
    previewMode: boolean;
    /**
     * inline 모드 — host element 자체가 panel 컨테이너. launcher 숨김 + panel이 host의
     * width/height 100%로 채움. dashboard 라이브 프리뷰처럼 임의 위치에 박을 때.
     *
     * 사용 예: `<timely-chatbot inline preview-mode style="width:320px;height:480px"></timely-chatbot>`
     * 또는 부모 div에 sizing 두고 widget이 inherit.
     *
     * `previewMode`와는 독립 — inline만 단독으로 켜면 실제 채팅 panel이 inline에 고정됨
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
    private sessionId?;
    private theme;
    /**
     * /widget/init 응답에서 받은 projectId. sessionStorage 키 prefix로 사용 (다중 widget 임베드
     * 시 충돌 방지). state로 둘 필요 없음 — 한 번 set 후 변하지 않고 render에 안 쓰임.
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
    /** 다음 메시지 전송 시 함께 보낼 첨부. */
    private pendingAttachments;
    private capturing;
    /** 영역 캡처 모드 — 활성 시 위젯 패널을 잠시 가리고 dim overlay에서 드래그 받음. */
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
    private renderReportModal;
    private renderRegionCaptureOverlay;
    /**
     * 대화 초기화 확인 모달 — 인-위젯 스타일, 테마 컬러(--launcher-bg) 사용해 호스트 페이지에
     * 자연스럽게 녹아듦. 기존 report-modal 스타일 재사용 + reset 전용 actions만.
     */
    private renderResetConfirmModal;
    private renderInquiryModal;
    connectedCallback(): void;
    /**
     * 미리보기 모드 셋업 — panel 자동 open + 더미 메시지. 네트워크 호출 0.
     * dashboard의 라이브 프리뷰에서 외형/테마 검증용.
     */
    private setupPreviewMode;
    /**
     * 프리뷰 더미 메시지 — welcomeMessage가 설정되면 상단에 웰컴 말풍선이 별도 렌더되므로
     * 더미 인사말은 빼서 인사가 두 번 보이는 것 방지.
     */
    private syncPreviewMessages;
    /**
     * 미리보기 모드에서 외부(dashboard)가 theme prop을 즉시 갱신할 때 사용.
     * 일반 모드에선 fetchInit이 theme를 채움 — 이 메서드는 호출 안 함.
     */
    setPreviewTheme(theme: WidgetTheme): void;
    disconnectedCallback(): void;
    /**
     * 호스트 페이지의 세로 scrollbar 폭을 측정해 CSS 변수에 반영.
     *
     * 문제: fullscreen 시 `.panel`이 `inset: 0; width: 100vw` — 100vw는 scrollbar 영역까지
     * 포함하는 viewport 폭이라, panel의 우측 끝이 호스트 scrollbar 뒤에 깔린다. 결과적으로
     * 우측 내부 padding 영역이 scrollbar에 가려져 보임.
     *
     * 해결: `window.innerWidth`(scrollbar 포함) − `documentElement.clientWidth`(scrollbar 제외)로
     * scrollbar 폭을 얻어 CSS 변수에 박고, fullscreen 시 panel `right` inset에 더한다.
     */
    private updatePageScrollbarOffset;
    private storageKey;
    private loadPersistedSession;
    private persistSession;
    private clearPersistedSession;
    private handleDocPointerDown;
    /**
     * 페이지 selection 미러링 — 한 turn에 한 슬롯만 동기화.
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
     * 사라지는 문제 방지 — launcherBg의 상대 휘도를 계산해 --launcher-fg 자동 설정.
     * 사용자 업로드 이미지 아이콘은 영향 없음(img는 색상 무관).
     */
    private applyTheme;
    private renderToggleIcon;
    /**
     * open 시 첫 호출 — default panel rect 계산.
     *
     * 위치는 host element의 data-position 속성 기준 (host script가 설정).
     * 미설정 시 우측 하단 default.
     */
    private ensureRect;
    /**
     * panel 하단이 런처 위로 얼마나 떠야 하는지 — 런처 스택(버튼 + always 라벨)의
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
    private openReport;
    private closeReport;
    private submitReport;
    /**
     * 헤더의 "대화 초기화" 버튼. 사용자에게 인-위젯 확인 모달 띄움. 스트리밍 중이거나
     * 메시지가 없으면 무시 (UI에서 이미 disabled, 안전망).
     */
    private resetConversation;
    /**
     * 실제 reset 실행 — sessionStorage 비움 + 메시지/세션 초기화. 다음 메시지부터 서버
     * 입장에서 새 세션. 모달도 함께 닫음.
     */
    private confirmReset;
    private cancelReset;
    private openInquiry;
    private closeInquiry;
    private submitInquiry;
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
    /** composer textarea 참조 — input 후 자동 height 조정 + send 후 reset에 사용. */
    private composerTextarea?;
    private onComposerInput;
    /**
     * Enter로 전송, Shift+Enter는 줄바꿈. IME 조합 중(`isComposing`)이면 무시 — 한글 입력
     * 조합 종료 Enter가 send를 발화시키는 흔한 버그 방지.
     */
    private onComposerKeydown;
    private send;
    private handleSse;
}
declare global {
    interface HTMLElementTagNameMap {
        "timely-chatbot": TimelyChatbot;
    }
}
//# sourceMappingURL=chatbot-widget.d.ts.map