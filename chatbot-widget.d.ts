import { LitElement } from 'lit';
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
    private open;
    private fullscreen;
    private messages;
    private input;
    private streaming;
    private sessionId?;
    private theme;
    /** panel rect (viewport 기준). 첫 open 시 default 위치/사이즈로 init. */
    private rect;
    /** 신고 폼이 열린 메시지 id. null이면 닫힘. */
    private reportingMessageId;
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
    private renderInquiryModal;
    connectedCallback(): void;
    disconnectedCallback(): void;
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
    /** theme를 host element에 적용 (CSS variables + data-position). */
    private applyTheme;
    private renderToggleIcon;
    /** open 시 첫 호출 — theme position 기준 default rect 계산. */
    private ensureRect;
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
    private send;
    private handleSse;
}
declare global {
    interface HTMLElementTagNameMap {
        'timely-chatbot': TimelyChatbot;
    }
}
//# sourceMappingURL=chatbot-widget.d.ts.map