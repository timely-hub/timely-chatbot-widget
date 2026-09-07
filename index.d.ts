import { WidgetTheme } from './chatbot-widget.js';
export type { WidgetTheme } from './chatbot-widget.js';
/**
 * widget init.
 *
 * 두 모드를 같은 함수로 처리:
 *   - 인증 모드: getAccessToken 콜백 제공 → widget이 필요할 때마다 호출. 401 받으면 자동 재호출.
 *   - 게스트 모드: getAccessToken 생략 → /widget/guest-jwt 자동 호출 (프로젝트 토글 ON 필요)
 *
 * @example 인증 모드
 *   TimelyChatbot.init({
 *     apiKey: "tgc_...",
 *     getAccessToken: async () => {
 *       const r = await fetch("/api/widget-jwt").then(r => r.json());
 *       return r.jwt;
 *     },
 *   });
 *
 * @example 게스트 모드
 *   TimelyChatbot.init({ apiKey: "tgc_..." });
 */
export interface InitOptions {
    /** 프로젝트 API key. 클라 노출 OK (Origin 화이트리스트로 보호). */
    apiKey: string;
    /**
     * 호스트가 end-user JWT를 반환하는 콜백.
     * 처음 chat 호출 직전 + 401 받은 후 widget이 자동 호출. 호스트는 매번 fresh 토큰 반환.
     * 생략 시 게스트 모드.
     */
    getAccessToken?: () => Promise<string>;
    /** API base URL. 미지정 시 빌드 default(VITE_API_BASE_URL) → fallback localhost:3410. */
    apiBaseUrl?: string;
    /** 마운트 위치. default: <body>. */
    mountTo?: HTMLElement;
    /**
     * launcher 위치: 미지정 시 우측 하단. 좌측 하단으로 옮기려면 `'bottom-left'`.
     * inline 모드(태그만 삽입)는 host element에 직접 `data-position="bottom-left"`도 가능.
     */
    position?: 'bottom-right' | 'bottom-left';
    /**
     * 페이지별 theme override: 대시보드 설정값이 기본이고, 여기에 넘기면 그 위에 shallow merge.
     * 예: 일부 페이지에서 캡처 기능 끄기 → `{ captureEnabled: false, regionCaptureEnabled: false }`.
     * 색상/폰트 사이즈/아이콘 URL 등 모든 WidgetTheme 필드 override 가능.
     */
    theme?: Partial<WidgetTheme>;
}
export interface WidgetHandle {
    /** widget element 제거. */
    destroy: () => void;
}
declare global {
    interface Window {
        TimelyChatbot?: {
            init: (opts: InitOptions) => WidgetHandle;
        };
    }
}
declare function init(opts: InitOptions): WidgetHandle;
export { init };
//# sourceMappingURL=index.d.ts.map